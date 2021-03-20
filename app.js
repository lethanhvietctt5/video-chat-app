const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);
const cors = require("cors");
const connectDB = require("./config/db");

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

app.post("/login", function (req, res) {
  const { email, password } = req.body;
  console.log(email === "lethanhviet7c@gmail.com" && password === "22102000");
  if (email === "lethanhviet7c@gmail.com" && password === "22102000")
    res.status(200).json({ email });
  else res.status(403).json({ message: "Failed" });
});

const port = process.env.PORT || 5000;

server.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`);
});
