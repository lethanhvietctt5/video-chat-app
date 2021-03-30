# video-chat-app
This is an app that allows creating room communication. You can create a room with a unique ID and invite your friends to join the room, you also can join an available room with a specific ID. People in the same room can chat in realtime together and see each other via stream. <br />
Link deployed app:  https://room-call-chat-app.herokuapp.com/

## Features
* Sign in, Sign up
* Creating a unique room
* Join an available room
* Video call realtime
* Send messages in realtime

## Technologies
* **Front-end**: React, Redux (redux-thunk), TailwindCSS, PostCSS, PeerJS, Socket.io-Client
* **Back-end**: NodeJS, Express, MongoDB Database, Mongoose, JWT, Socket.io

## How to Install and Run
### Install package
* ```$ npm install``` to install packages for server-side (Express, Mongoose, Bcrypt, ...)
* ```$ cd client/ and npm install``` to install packages for client-side (React, TailwindCSS, Axios,...)
### Run app
* ```$ npm start``` to run server
* ```$ cd client/ and npm start``` to run client

**NOTE: you can change database connection in** ```./app.js``` **and change config PeerServer in** ```./client/components/Room.jsx```
