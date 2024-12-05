const mongoose = require("mongoose");

const travelBookingSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Booking name required"],
    },

    travelType: {
      type: String,
      enum: ["flight", "train", "bus", "car rental", "other"],
      required: [true, "Travel type required"],
    },
    source: {
      type: String,
      required: [true, "Place of boarding required"],
    },
    destination: {
      type: String,
      required: [true, "Place of destination required"],
    },
    departureTime: {
      type: Date,
      required: [true, "Departure time required"],
      message: "Departure date must be today or later",
      },
    arrivalTime: {
      type: Date,
      required: [true, "Arrival time required"],
      message: "Departure date must be today or later",
      },
    returnDate: {
      type: Date,
      required: false,
    },
    tripId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Trip",
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { discriminatorKey: "travelType" }
);

const TravelBooking = mongoose.model(
  "TravelBooking",
  travelBookingSchema,
  "TravelBookings"
);

module.exports = TravelBooking;