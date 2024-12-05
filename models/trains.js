const mongoose = require("mongoose");

const trainSchema = new mongoose.Schema({
  trainNumber: { type: String, required: [true, "Train number required"] },
  trainName: { type: String, requried: [true, "Train name required"] },

  source: {
    type: String,
    required: [true, "Place of boarding required"],
  },
  destination: {
    type: String,
    required: [true, "Place of detrain required"],
  },
  departureTime: {
    type: Date,
    required: [true, "Train departure time required"],
  },
  arrivalTime: {
    type: Date,
    required: [true, "Train arrival time required"],
  }
});

module.exports = mongoose.model("Train", trainSchema, "trains");