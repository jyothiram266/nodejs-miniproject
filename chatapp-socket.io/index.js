const http = require("http");
const express = require("express");
const path = require("path");
const { Server } = require("socket.io");
const PORT = 9000;
const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    connectionStateRecovery: {}
  });

app.use(express.static(path.resolve("./public")));


app.get("/" , ()=>{
    return res.sendfile("./public/index.html");
})

io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
      io.emit('chat message', msg);
    });
  });

server.listen(PORT , ()=>{
    console.log(`the server is running on ${PORT}`)
});