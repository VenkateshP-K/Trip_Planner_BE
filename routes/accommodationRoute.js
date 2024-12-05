const express = require("express");

const auth = require("../middleware/auth");

const accommodationController = require("../controllers/accommodationController");

const accommodationRouter = express.Router();

accommodationRouter.get(
  "/add/accommodations/many",
  auth.isAuth,
  auth.isAuthAdmin,
  accommodationController.addManyAccommodation
);

module.exports = accommodationRouter