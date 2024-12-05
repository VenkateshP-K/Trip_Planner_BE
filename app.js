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

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(cookieParser());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const corsOptions = {
  origin: ['http://localhost:5173'],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions));

app.get("/api", (req, res) => {
  res.json({message: "Welcome to travel-planner-india app api enpoints!"});
});

app.use("/api/users", userRouter, tripRouter);

app.use("/api/admins", flightRouter, trainRouter, accommodationRouter);

module.exports = app;

module.exports = app;