const mongoose = require("mongoose");
const TravelBooking = require("./travelBooking");

const flightBookingSchema = new mongoose.Schema({
  airline: {
    type: String,
    required: [true, "Airline required for flight"],
  },
  flightNumber: {
    type: String,
    required: [true, "Flight number required for flight"],
  },
});

const FlightBooking = TravelBooking.discriminator(
  "flight",
  flightBookingSchema
);

const trainBookingSchema = new mongoose.Schema({
  trainName: {
    type: String,
    required: [true, "Train name required"],
  },
  trainNumber: {
    type: String,
    required: [true, "Train number required"],
  },
});

const TrainBooking = TravelBooking.discriminator("train", trainBookingSchema);

const busBookingSchema = new mongoose.Schema({
  buscompany: {
    type: String,
    required: [true, "Bus company required for bus"],
  },
  busNumber: {
    type: String,
    required: [true, "Bus number required for bus"],
  },
});

const BusBooking = TravelBooking.discriminator("bus", busBookingSchema);

const carRentalBookingSchema = new mongoose.Schema({
  rentalCompany: {
    type: String,
    required: [true, "Car model required for car rental"],
  },
  carModel: {
    type: String,
    required: [true, "Car model required for car rental"],
  },
  carNumber: {
    type: String,
    required: [true, "Car number required for car rental"],
  },
});

const CarRentalBooking = TravelBooking.discriminator(
  "car rental",
  carRentalBookingSchema
);

const otherBookingSchema = new mongoose.Schema({
  details: {
    type: String,
    required: [true, "Detauks required for other travel type"],
  },
});

const OtherBooking = TravelBooking.discriminator("other", otherBookingSchema);

module.exports = {
  FlightBooking,
  TrainBooking,
  BusBooking,
  CarRentalBooking,
  OtherBooking,
};