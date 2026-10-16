const API_KEY = "YOUR_API_KEY";


async function solveMCQ(question) {

    if (!question.trim()) {
        return "Please provide a question.";
    }

    try {

        const response = await fetch(
            "https://api.mistral.ai/v1/chat/completions",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${API_KEY}`
                },

                body: JSON.stringify({

                    model: "mistral-small-latest",

                    messages: [
                        {
                            role: "system",
                            content: `
You are an expert MCQ solver.

The user will provide one multiple-choice question with four options.

Choose the single correct option.

Return ONLY valid JSON in exactly this format:

{
  "answer": "B",
  "explanation": "Brief explanation of why B is correct."
}

The explanation must be 2-3 sentences.
Do not include markdown.
Do not include any text outside the JSON.
`
                        },
                        {
                            role: "user",
                            content: question
                        }
                    ]
                })
            }
        );

        if (!response.ok) {

            const errorText = await response.text();

            console.error("Mistral Error:", errorText);

            throw new Error(`HTTP ${response.status}`);
        }

        const data = await response.json();

        console.log("Mistral response:", data);

        const result =
            data.choices?.[0]?.message?.content;

        if (!result) {
            return "No answer generated.";
        }

        console.log("AI raw result:", result);

        const cleaned = result
            .replace(/```json/g, "")
            .replace(/```/g, "")
            .trim();

        const parsed = JSON.parse(cleaned);

        return `Answer: ${parsed.answer}

Explanation:
${parsed.explanation}`;

    } catch (error) {

        console.error("MCQ Error:", error);

        return "Failed to solve the MCQ.";
    }
}

export { solveMCQ };

