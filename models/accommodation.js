const mongoose = require("mongoose");

const accommodationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  type: {
    type: String,
  },

  location: {
    city: String,
    state: String,
    country: String,
  },
  address: String,

  amenities: [String],
  rating: {
    type: Number,
    min: 0,
    max: 5,
  }
});

module.exports = mongoose.model(
  "Accommodation",
  accommodationSchema,
  "accommodations"
);