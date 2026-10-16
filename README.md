# MERN Learning Project

A collection of learning projects built with MongoDB, Express, React, and Node.js. The repository contains an Express API, a standalone React learning app, and a React frontend for working with the API.

## Repository structure

- `Express/` - Express 5 API with Mongoose models and routes for products, users, reviews, and jobs.
- `React/LearningReact/` - Standalone React and Vite app for React examples.
- `integration/Frontend/` - React and Vite frontend for the API's product and user features.
- `js/` - JavaScript practice examples.

## Requirements

- Node.js and npm
- MongoDB running locally at `mongodb://localhost:27017`

The API connects to the `sunwayL2` database on the local MongoDB server. Start MongoDB before starting the API.

## Run the API

In a terminal:

```bash
cd Express
npm install
npm run dev
```

The API listens on `http://localhost:8000`. Its route groups are mounted at:

- `/` - basic HTTP method examples
- `/product` - product routes
- `/user` - user routes
- `/review` - review routes
- `/job` - job routes

## Run a React app

Choose a frontend and run it in a separate terminal.

For the API integration frontend:

```bash
cd integration/Frontend
npm install
npm run dev
```

For the standalone React learning app:

```bash
cd React/LearningReact
npm install
npm run dev
```

Vite prints the local development URL in the terminal after it starts.
