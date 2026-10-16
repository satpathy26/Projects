import { solveMCQ } from "./ai.js";

console.log("Background started");

chrome.runtime.onMessage.addListener(
    (message, sender, sendResponse) => {

        if (message.action === "summarize") {

            console.log("Received MCQ:", message.text);

            solveMCQ(message.text)
                .then((answer) => {

                    console.log("AI Answer:", answer);

                    sendResponse({
                        summary: answer
                    });

                })
                .catch((error) => {

                    console.error("AI Error:", error);

                    sendResponse({
                        summary: "Failed to solve MCQ."
                    });

                });

            return true;
        }
    }
);
