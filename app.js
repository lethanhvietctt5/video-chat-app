const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);
const cors = require("cors");
const connectDB = require("./config/db");
const jwt = require("jsonwebtoken");

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

app.get("/auth", function (req, res) {
  const token = req.headers["x-auth-token"];
  if (token) {
    const decoded = jwt.verify(token, "shhhhh");
    return res.status(200).json({ user: decoded.email });
  }

  res.status(403).json({ message: "Failed Auth" });
});

app.post("/login", function (req, res) {
  const { email, password } = req.body;

  if (email === "lethanhviet7c@gmail.com" && password === "22102000") {
    const token = jwt.sign({ email: email, password: password }, "shhhhh");
    res.status(200).json({ token, user: email });
  } else res.status(403).json({ message: "Failed" });
});

const port = process.env.PORT || 5000;

server.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`);
});
