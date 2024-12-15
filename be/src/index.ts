// lets create a ping pong server !!
import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", function (socket) {
  socket.on("message", (e) => {
    if (e.toString() === "ping") {
      socket.send("pong");
    }
  });
});
