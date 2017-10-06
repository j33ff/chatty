// server.js

const express = require('express');
const WebSocket = require('ws');
const SocketServer = WebSocket.Server;
const uuidv1 = require('uuid/v1');

const PORT = 3001;

// Create a new express server
const server = express()
   // Make the express server serve static assets (html, javascript, css) from the /public folder
  .use(express.static('public'))
  .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${ PORT }`));

// Create the WebSockets server
const wss = new SocketServer({ server });

wss.broadcast = function broadcast(data) {
  wss.clients.forEach(function each(client) {
    if (client.readyState === WebSocket.OPEN) {
      client.send(data);
    }
  });
};

let onlineUsers = 0

wss.on('connection', (ws) => {
  onlineUsers += 1
  console.log('Client connected');

  wss.clients.forEach((client) => {
    client.send(JSON.stringify({
      type: 'userCount',
      online: onlineUsers
    }))
  });

  ws.on('message', (data) => {
    const message = JSON.parse(data);

    message.id = uuidv1();
    wss.clients.forEach((client) => {
      client.send(JSON.stringify(message));
    });
  });

  // Set up a callback for when a client closes the socket.
  ws.on('close', () => {console.log('Client disconnected')
    onlineUsers -= 1
    wss.clients.forEach((client) => {
    client.send(JSON.stringify({
      type: 'userCount',
      online: onlineUsers
    }))
  });
});

});