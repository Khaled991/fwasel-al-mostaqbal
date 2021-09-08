const express = require("express");
const app = express();
// const server = require("http").Server(app);
// const io = require("socket.io")(server);

const { Server, createServer } = require("http");
const http = createServer(app);
const socket = require("socket.io");
const io = socket(http, { pingTimeout: 60000 });

io.on("connection", (socket) => {
  socket.on("join-room", (roomId, userId) => {
    console.log(roomId, userId);
  });
});

const PORT = process.env.PORT || 4000;
http.listen(PORT, () => console.log(`working on port ${PORT}`));
