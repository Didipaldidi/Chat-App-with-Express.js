# Chat Room

Chat Room is a web application that allows users to send messages, images, and videos in real-time. It uses Express.js, Socket.IO, and MongoDB to handle the server-side functionality and store the messages.

## Features

- Real-time messaging: Users can send and receive messages instantly.
- Image and video sharing: Users can upload and share images and videos in the chat room.
- Message deletion: Users can delete their own messages.

## Prerequisites

Before running the application, ensure that you have the following installed:

- Node.js: Download and install Node.js from the official website: https://nodejs.org

## Getting Started

1. Clone the repository to your local machine

2. Navigate to the Chat-App-with-Express.js

3. Install the dependencies:

4. Start the server with nodemon ./server.js

5. Open a web browser and visit `http://localhost:3000` to access the chat room.

## File Structure

The project contains the following files and directories:

- `server.js`: The main server file that handles the Express.js and Socket.IO configuration, database connection, API endpoints, and socket events.
- `index.html`: The HTML file that defines the chat room interface.
- `style.css`: The CSS file for styling the chat room interface.
- `uploads/`: A directory for storing uploaded images and videos.
- `README.md`: The readme file that provides information about the project.

## Technologies Used

- Express.js: A web application framework for Node.js that handles the server-side functionality.
- Socket.IO: A JavaScript library that enables real-time, bidirectional communication between the web clients and the server.
- MongoDB: A NoSQL database used to store the messages.
- Multer: A middleware for handling file uploads in Express.js.
- Bootstrap: A CSS framework for styling the chat room interface.

## License

This project is licensed under the MIT License. You can find the license information in the `LICENSE` file.

## Acknowledgments

- This project is based on a tutorial/example that demonstrates the implementation of a chat room using Express.js, Socket.IO, and MongoDB.

Feel free to modify and enhance the project according to your requirements. Happy coding!