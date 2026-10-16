# E-Commerce Website

A full-stack online shopping application built to demonstrate product browsing, user authentication, cart workflows, and backend/database integration.

## Overview

The application combines a web-based shopping interface with a Node.js and Express backend and a MySQL database. It is organized into frontend pages and backend configuration, making it a practical project for learning full-stack development.

## Features

- User registration and login
- Product listing and product detail pages
- Shopping cart interface
- Backend routes for application functionality
- MySQL database connectivity
- Separate frontend and backend files

> Feature availability depends on the current implementation and configuration.

## Tech Stack

- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Node.js, Express.js
- **Database:** MySQL

## Project Structure

```text
ecomm/
├── config/
│   └── db.js
├── frontend/
│   ├── images/
│   ├── cart.html
│   ├── index.html
│   ├── login.html
│   ├── product.html
│   └── register.html
├── server.js
└── package.json
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
   cd Projects/ecomm
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Configure the MySQL connection in `config/db.js` or the environment-based configuration used by your project. Keep credentials and secrets out of Git.

4. Start the server using the script defined in `package.json`. Check available scripts with:

   ```bash
   npm run
   ```

5. Open the frontend using your local development setup and verify that its API requests point to the correct backend address.

## What This Project Demonstrates

- Building a web application with separate frontend and backend components
- Creating server-side functionality with Express.js
- Connecting an application to a MySQL database
- Implementing common e-commerce page flows
- Organizing a Node.js project

## Author

**Nihar Satpathy** · [GitHub](https://github.com/satpathy26)
