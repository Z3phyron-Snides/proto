const socketio = require("socket.io");

function startSocketServer(server) {
  const io = socketio(server);

  io.on("connection", (socket) => {
    console.log("New socket connection");
  });
}



module.exports = startSocketServer;
