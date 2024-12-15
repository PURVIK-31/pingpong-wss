# Ping Pong WebSocket Server with React and TypeScript

This repository contains a simple ping-pong server application built using WebSocket with a React frontend and TypeScript for type safety. It demonstrates real-time communication between a client and the server, where the server sends a "pong" response for every "ping" message.

---

## Features

- **WebSocket Server**: Implements real-time communication using the `ws` library.
- **React Frontend**: Provides an interactive UI for testing and sending WebSocket messages.
- **TypeScript Support**: Ensures type safety and robust code on both the backend and frontend.

---

## Project Structure

- **`/server`**: Contains the WebSocket server written in TypeScript.
- **`/frontend`**: Contains the React frontend application for interacting with the WebSocket server.

---

## Prerequisites

- Node.js `>= 16.x`
- npm or yarn package manager

---

## Getting Started

### 1. Clone the Repository:

git clone https://github.com/PURVIK-31/pingpong-wss
cd pingpong-ws
### 2. Install Dependencies:

Navigate to the respective folders (`/server` and `/frontend`) and install the dependencies:

# Backend - WebSocket server
cd server
npm install

# Frontend - React app
cd ../frontend
npm install

### 3. Run the Application:

#### Start the WebSocket Server:
cd server
npm start

#### Start the React Frontend:
cd frontend
npm start
The React frontend should now be accessible at `http://localhost:3000`, and the WebSocket server is running on `ws://localhost:8080`.

---

## Usage

1. Launch the frontend in your browser.
2. The "ping" button sends a message to the WebSocket server.
3. The server responds with a "pong" message, which is displayed in the frontend UI.

---

## Technology Stack

- **Frontend**: React, TypeScript
- **Backend**: WebSocket server implemented using TypeScript with the `ws` library

---

## Folder Structure

/server
  ├── src
  │   ├── server.ts              # Main WebSocket server code
  ├── tsconfig.json              # TypeScript configuration
/frontend
  ├── src
  │   ├── App.tsx                # React App component
  │      
  ├── tsconfig.json              # TypeScript configuration

---

## Contributions

Contributions are welcome! Feel free to fork the repository, submit issues, or create pull requests.

---

## License

This project is distributed under the MIT License. See [LICENSE](LICENSE) for more information.

---

Let me know if you'd like to customize this further!
