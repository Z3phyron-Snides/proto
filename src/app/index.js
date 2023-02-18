require("dotenv").config();
require("express-async-errors");
const express = require("express");
const createError = require("http-errors");
const cors = require("cors");
const session = require("express-session");
const morgan = require("morgan");
const connectDB = require("../config/dbCon");
const path = require("path");
const fileUpload = require("express-fileupload");
const errorHandler = require("../middlewares/errorHandler");
const { logger, logEvents } = require("../middlewares/logger");
const corsOptions = require("../config/corsOptions");

connectDB();

const app = express();

app.use(logger);
app.use(cors(corsOptions));
app.use(
  session({
    secret: "keyboardijijij87767y",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/uploads", express.static(path.join(__dirname, "../uploads")));
app.use(fileUpload());

// Use the routes
app.use("/api/user", require("../routes/user"));
app.use("/api/post", require("../routes/post"));
app.use("/api/friends", require("../routes/requests"));
app.use("/api/settings", require("../routes/settings"));
app.use("/api/chat", require("../routes/chat"));

// Error handler

app.all("*", (req, res) => {
  res.status(404);
  if (req.accepts("html")) {
    res.sendFile(path.join(__dirname, "views", "404.html"));
  } else if (req.accepts("json")) {
    res.json({ message: "404 Not Found" });
  } else {
    res.type("txt").send("404 Not Found");
  }
});

app.use(errorHandler);

app.use(async (req, res, next) => {
  const error = new Error("Not Found!!!");
  error.status = 404;
  next(error);
});

app.use(async (err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    error: {
      status: err.status || 500,
      message: err.message,
    },
  });
});

module.exports = app;
