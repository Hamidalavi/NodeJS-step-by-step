const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.use(express.static("public"));

const server = app.listen(port, () => {
  console.log(`Socket.IO server running at http://localhost:${port}/`);
});

const io = require("socket.io")(server);
io.on("connection", socket => {
  socket.on("chat message", msg => {
    io.emit("chat message", msg);
  });
});
