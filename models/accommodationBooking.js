const mongoose = require("mongoose");

const accommodationBookingSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "User's name required"],
    },
    accommodationName: {
      type: String,
      required: [true, "Accommodation name required"],
    },
    location: {
      city: String,
      state: String,
      country: String,
    },
    address: {
      type: String,
      required: [true, "Address required"],
    },
    amenities: [String],

    rating: Number,

    checkInDate: {
      type: Date,
      message: "Check-in date must be today or later",
    },

    checkOutDate: {
      type: Date,
      message: "Check-out date must be check-in date or after",
    },

    tripId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Trip",
      required: true,
    },

    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timeStamps: true }
);

const AccommodationBooking = mongoose.model(
  "AccommodationBooking",
  accommodationBookingSchema
);

module.exports = AccommodationBooking;