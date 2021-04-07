const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
var path = require("path");

require("dotenv").config();

// App Config
const app = express();
const port = process.env.PORT || 3000;
const connection_url = "mongodb://db:27017/eu-platform-db";

// Middlewares
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use("/content", express.static("content"));

// DB config
mongoose
  .connect(connection_url, {
    useNewUrlParser: true,
    createIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

// API Endpoints
app.get("/", (req, res) => res.status(200).send("helloo Tiago"));

const adminRouter = require("./routes/admin");
const uploadRouter = require("./routes/upload");
const gamesRouter = require("./routes/games");
const videosRouter = require("./routes/videos");
const usersRouter = require("./routes/users");

app.use("/admin", adminRouter);
app.use("/upload", uploadRouter);
app.use("/games", gamesRouter);
app.use("/videos", videosRouter);
app.use("/users", usersRouter);

// Listener
app.listen(port, () => {
  console.log("Server running on port " + port);
});
