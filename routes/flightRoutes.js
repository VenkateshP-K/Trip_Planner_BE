const express = require("express");

const auth = require("../middleware/auth");

const flightController = require("../controllers/flightController");

const flightRouter = express.Router();

flightRouter.get(
  "/add/flights/many",
  auth.isAuth,
  auth.isAuthAdmin,
  flightController.addManyFlights
);

module.exports = flightRouter;