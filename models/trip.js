const mongoose = require("mongoose");

const tripSchema = new mongoose.Schema({
  tripName: {
    type: String,
    unique: true,
    required: [true, "Trip name required"],
  },
  destination: {
    type: String,
    required: [true, "Destination required"],
  },
  startDate: {
    type: Date,
    required: [true, "Trip start date required"],
    validate: {
      validator: (v) => {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        return v >= today;
      },
      message: "Trip start date must be today or later",
    },
  },
  endDate: {
    type: Date,
    required: [true, "Trip end date required"],
    validate: {
      validator: function (v) {
        v >= this.startDate;
      },
      message: "Trip end date must be start date or later",
    },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },

  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  accommodations: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Accommodation",
    },
  ],
  travelBookings: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "TravelBooking",
    },
  ],
  toDos: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ToDos",
    },
  ],
});

module.exports = mongoose.model("Trip", tripSchema, "trips");