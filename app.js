const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);
const cors = require("cors");
const connectDB = require("./config/db");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("./models/user");
const { userJoin, userLeave, getUser, users } = require("./utils/users");
const user = require("./models/user");
const path = require("path");

app.use(express.static("public"));
app.use(express.json({ extended: false }));
app.use(cors({ origin: true, credentials: true }));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "DELETE, PUT, GET, POST");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

connectDB();

let userPeers = [];

app.get("/auth", function (req, res) {
  const token = req.headers["x-auth-token"];
  if (token) {
    const decoded = jwt.verify(token, "shhhhh");

    return res
      .status(200)
      .json({ user: { email: decoded.email, name: decoded.name } });
  }

  res.status(403).json({ message: "Failed Auth" });
});

app.post("/login", async function (req, res) {
  const { email, password } = req.body;
  const user = await User.findOne({ email: email });
  if (user) {
    const checkPassword = await bcrypt.compare(password, user.password);
    if (checkPassword) {
      const token = jwt.sign(
        { email: email, password: password, name: user.name },
        "shhhhh"
      );
      return res
        .status(200)
        .json({ token, user: { email: user.email, name: user.name } });
    }
    return res.status(403).json({ message: "Failed" });
  }
  res.status(403).json({ message: "Failed" });
});

app.post("/register", async function (req, res) {
  const { name, email, password } = req.body;
  if (!name || !email || !password)
    return res.status(500).json({ msg: "Please fill all!" });
  let user = await User.findOne({ email });
  if (user) {
    return res.status(500).json({ msg: "Account exists" });
  }
  const salt = await bcrypt.genSalt(10);
  user = new User({ name, email, password });
  user.password = await bcrypt.hash(password, salt);
  await user.save();
  res.status(200).json({ user: email });
});

if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const port = process.env.PORT || 5000;

io.on("connection", (socket) => {
  socket.on("joinRoom", ({ name, room, peerID }) => {
    const user = userJoin({ id: socket.id, name, room });
    if (peerID) userPeers.push(peerID);
    socket.join(user.room);
    socket.peerID = peerID;

    // Wellcome room
    socket.emit("message", { name: "Admin", msg: "Wellcome to chat app" });

    io.to(room).emit("allMembers", userPeers);

    socket.broadcast.to(user.room).emit("message", {
      name: "Admin",
      msg: `${name} has joined to room`,
    });
  });

  socket.on("sendMessage", ({ name, msg, room }) => {
    io.to(room).emit("message", {
      name,
      msg,
    });
  });

  socket.on("disconnect", () => {
    const user = userLeave(socket.id);
    if (user) {
      socket.broadcast.to(user.room).emit("message", {
        name: "Admin",
        msg: `${user.name} has left to room`,
      });

      io.to(user.room).emit("allMembers", userPeers);
    }

    userPeers = userPeers.filter((id) => id !== socket.peerID);

    if (socket.client.conn.server.clientsCount == 0) {
      userPeers = [];
    }
  });
});

server.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`);
});
