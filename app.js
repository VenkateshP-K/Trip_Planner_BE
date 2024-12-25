const express = require("express");

const userRouter = require("./routes/userRoutes");

const cors = require("cors");

const app = express();

const cookieParser = require("cookie-parser");

const morgan = require("morgan");
const tripRouter = require("./routes/tripRoutes");

const flightRouter = require("./routes/flightRoutes");

const trainRouter = require("./routes/trainRoutes");

const accommodationRouter = require("./routes/accommodationRoute");

app.use(cookieParser());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const corsOptions = {
  origin: ['http://localhost:5173', 'https://trip-planner-be.onrender.com'],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions));

app.get("/api", (req, res) => {
  res.json({message: "Welcome to Travel Planner app"});
});

app.use("/api/users", userRouter, tripRouter);

app.use("/api/admins", flightRouter, trainRouter, accommodationRouter);

module.exports = app;