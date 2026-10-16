# TaskFlow — Project Management App

A full-stack web application for organizing projects, managing tasks, and collaborating with project members from one place.

## Overview

TaskFlow provides a centralized workspace for project-related activities. Its backend exposes REST APIs for core features, while the frontend offers pages for authentication, dashboards, and project work.

## Features

- User registration and login
- Create and manage projects
- Organize and manage tasks
- Manage project members
- Add comments for collaboration
- Notifications for project activity
- Dashboard for project workflows

> Feature availability depends on the current implementation and configuration.

## Tech Stack

- **Frontend:** HTML, CSS, JavaScript, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MySQL
- **API style:** REST

## Project Structure

```text
TaskFlow/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
└── frontend/
    ├── css/
    ├── js/
    ├── dashboard.html
    ├── login.html
    ├── project.html
    └── register.html
```

## Getting Started

### Prerequisites

- Node.js and npm
- MySQL
- Git

### Setup

1. Clone the repository and open the project folder:

   ```bash
   git clone https://github.com/satpathy26/Projects.git
   cd Projects/TaskFlow/backend
   ```

2. Install backend dependencies:

   ```bash
   npm install
   ```

3. Configure your MySQL database and environment variables according to the backend configuration. Do not commit credentials or secrets.

4. Start the backend using the script defined in `package.json` (check available scripts with `npm run`).

5. Open the frontend pages using your preferred local development setup and ensure the API base URL matches your backend.

## What This Project Demonstrates

- Building a full-stack application
- Designing REST API routes and controllers
- Connecting a Node.js backend to MySQL
- Organizing code into routes, controllers, models, and middleware
- Implementing project and task workflows

## Author

**Nihar Satpathy** · [GitHub](https://github.com/satpathy26)
