const express = require("express");

const auth = require("../middleware/auth");

const trainController = require("../controllers/trainController");

const trainRouter = express.Router();

trainRouter.get(
  "/add/trains/many",
  auth.isAuth,
  auth.isAuthAdmin,
  trainController.addManyTrains
);

module.exports = trainRouter;
