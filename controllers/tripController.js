const mongoose = require("mongoose");
const { ObjectId } = mongoose.Types;
const Trip = require("../models/trip");
const User = require("../models/user");
const TravelBooking = require("../models/travelBooking");
const Accommodation = require("../models/accommodation");
const AccommodationBooking = require("../models/accommodationBooking");
const ToDos = require("../models/toDos");
const axios = require("axios");
const Flight = require("../models/flights");
const Train = require("../models/trains");
const {
  FlightBooking,
  TrainBooking,
  BusBooking,
  CarRentalBooking,
  OtherBooking,
} = require("../models/travelType");

const tripController = {
  addTrip: async (req, res) => {
    try {
      const userId = req.userId;

      const { tripName, destination, startDate, endDate } = req.body;

      if (!tripName || !destination || !startDate || !endDate) {
        return res.status(400).json({ message: "All fields are required" });
      }

      const user = await User.findById(userId);

      if (!user) {
        return res.status(400).json({ message: "User not found" });
      }

      const newTrip = new Trip({
        tripName,
        destination,
        startDate: new Date(startDate),
        endDate: new Date(endDate),
        userId,
      });

      await newTrip.save();

      await User.findOneAndUpdate(
        { _id: userId },
        { $push: { trips: newTrip._id } }
      );

      res.status(201).json({ message: "Trip added successfully!" });
    } catch (err) {
      return res.status(400).json({ message: err.message });
    }
  },
  getTripById: async (req, res) => {
    try {
      const userId = req.userId;
      const tripId = req.params.tripId;

      if (!ObjectId.isValid(tripId)) {
        return res.status(400).json({ message: "Invalid Trip ID" });
      }

      const trip = await Trip.findOne({ _id: tripId, userId });

      if (!trip) {
        return res.status(400).json({ message: "Trip not found" });
      }

      res.status(200).json(trip);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
  getAllTripsByUserId: async (req, res) => {
    try {
      const userId = req.userId;

      const allTrips = await Trip.find({ userId });

      if (allTrips.length === 0) {
        return res.status(400).json({ message: "No trips found" });
      }

      res.status(200).json(allTrips);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  editTrip: async (req, res) => {
    try {
      const userId = req.userId;
      const tripId = req.params.tripId;

      const trip = await Trip.findOneAndUpdate(
        { userId, _id: tripId },
        { ...req.body },
        { new: true }
      );

      if (!trip) {
        return res.status(400).json({ message: "Trip not found" });
      }

      res.status(200).json({ message: "Trip updated successfully!" });
    } catch (err) {
      console.log(error);
      res.status(500).json({ message: err.message });
    }
  },

  // delete trip
  deleteTrip: async (req, res) => {
    try {
      const userId = req.userId;
      const tripId = req.params.tripId;

      const trip = await Trip.findOneAndDelete({ userId, _id: tripId });

      if (!trip) {
        return res.status(400).json({ message: "Trip not found" });
      }

      await TravelBooking.findOneAndDelete({ userId, tripId });

      await AccommodationBooking.findOneAndDelete({ userId, tripId });

      await ToDos.findOneAndDelete({ userId, tripId });

      await User.updateOne({ _id: userId }, { $pull: { trips: tripId } });

      res.status(204).send();
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  searchTrips: async (req, res) => {
    try {
      const userId = req.userId;
      const trip = String(req.query.trip || "").trim();

      const user = await User.findById(userId);

      if (!user) {
        return res.status(400).json({ message: "User not found" });
      }

      const trips = await Trip.find({
        userId,

        $or: [
          {
            tripName: { $regex: trip, $options: "i" },
          },
          {
            destination: {
              $regex: trip,
              $options: "i",
            },
          },
        ],
      });

      if (trips.length === 0) {
        return res.status(400).json({ mesage: "Trips not found" });
      }

      res.status(200).json(trips);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  suggestFlights: async (req, res) => {
    try {
      const userId = req.userId;
      const source = String(req.query.source || "").trim();
      const destination = String(req.query.destination || "").trim();

      const today = new Date();
      today.setHours(0, 0, 0, 0);

      const user = await User.findById(userId);

      if (!user) {
        return res.status(400).json({ message: "User not found" });
      }

      let flightsAvailable = await Flight.find({
        source: { $regex: source, $options: "i" },

        destination: { $regex: destination, $options: "i" },

        departureTime: { $gte: today },
      });

      if (flightsAvailable.length === 0) {
        flightsAvailable = await Flight.find({
          $or: [
            {
              source: { $regex: source, $options: "i" },
            },
            {
              destination: { $regex: destination, $options: "i" },
            },
          ],
          departureTime: { $gte: today },
        });
      }

      if (flightsAvailable.length === 0) {
        return res.status(400).json({ message: "No flights available" });
      }

      res.status(200).json(flightsAvailable);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  suggestTrains: async (req, res) => {
    try {
      const userId = req.userId;
      const source = String(req.query.source || "").trim();
      const destination = String(req.query.destination || "").trim();

      const today = new Date();
      today.setHours(0, 0, 0, 0);

      const user = await User.findById(userId);

      if (!user) {
        return res.status(400).json({ message: "User not found" });
      }

      let trainsAvailable = await Train.find({
        source: { $regex: source, $options: "i" },

        destination: { $regex: destination, $options: "i" },

        departureTime: { $gte: today },
      });

      if (trainsAvailable.length === 0) {
        trainsAvailable = await Train.find({
          $or: [
            {
              source: { $regex: source, $options: "i" },
            },
            {
              destination: { $regex: destination, $options: "i" },
            },
          ],
          departureTime: { $gte: today },
        });
      }

      if (trainsAvailable.length === 0) {
        return res.status(400).json({ message: "No trains available" });
      }

      res.status(200).json(trainsAvailable);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  bookTravel: async (req, res) => {
    try {
      const userId = req.userId;

      const tripId = req.params.tripId;

      const trip = await Trip.findOne({ userId, _id: tripId });

      if (!trip) {
        return res.status(400).json({ message: "Trip not found" });
      }

      req.body["tripId"] = tripId;
      req.body["userId"] = userId;

      const { travelType, ...bookingData } = req.body;

      let TravelBookingModel;

      switch (travelType) {
        case "flight":
          TravelBookingModel = FlightBooking;
          break;
        case "train":
          TravelBookingModel = TrainBooking;
          break;
        case "bus":
          TravelBookingModel = BusBooking;
          break;
        case "car rental":
          TravelBookingModel = CarRentalBooking;
          break;
        case "other":
          TravelBookingModel = OtherBooking;
          break;

        default:
          return res.status(400).json({ message: "Invalid travel type" });
      }

      const newBooking = new TravelBookingModel(bookingData);
      await newBooking.save();

      await Trip.findOneAndUpdate(
        { userId, _id: tripId },
        { $push: { travelBookings: newBooking._id } },
        { new: true }
      );

      res.status(200).json(newBooking);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  // booking accommodations
  bookAccommodation: async (req, res) => {
    try {
      const userId = req.userId;
      const tripId = req.params.tripId;

      const trip = await Trip.findOne({ userId, _id: tripId });

      if (!trip) {
        return res.status(400).json({ message: "Trip not found" });
      }

      req.body["tripId"] = tripId;
      req.body["userId"] = userId;

      const accommodation = new AccommodationBooking({
        ...req.body,
      });

      await accommodation.save();

      await Trip.findOneAndUpdate(
        { userId, _id: tripId },
        { $push: { accommodations: accommodation._id } },
        { new: true, runValidators: true }
      );

      res.status(200).json({
        message: "Booking accommodaion done successfully",
        accommodation,
      });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  // suggested accommodations array
  suggestAccommodation: async (req, res) => {
    try {
      const userId = req.userId;
      const location = String(req.query.location || "").trim();

      const user = await User.findById(userId);

      if (!user) {
        return res.status(400).json({ message: "User not found" });
      }

      const accommodationsAvailable = await Accommodation.find({
        $or: [
          { "location.city": { $regex: location, $options: "i" } },
          { "location.address": { $regex: location, $options: "i" } },
        ],
      }).select("-__v");

      if (accommodationsAvailable.length === 0) {
        return res.status(400).json({ message: "Accommodation not available" });
      }
      res.status(200).json(accommodationsAvailable);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  getAllBookedAccommodations: async (req, res) => {
    try {
      const userId = req.userId;
      const tripId = req.params.tripId;

      const user = await User.findById(userId);

      if (!user) {
        return res.status(400).json({ message: "User not found" });
      }

      const allAccommodations = await AccommodationBooking.find({
        userId,
        tripId,
      });

      if (allAccommodations.length === 0) {
        return res.status(400).json({ message: "Accommodation not available" });
      }

      res.status(200).json(allAccommodations);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  // get accommodation by Id
  getAccommodationById: async (req, res) => {
    try {
      const userId = req.userId;

      const accId = req.params.accId;

      const accommodation = await Accommodation.findOne({
        userId,

        _id: accId,
      });

      if (!accommodation) {
        return res.status(400).json({ message: "Accommodation not found" });
      }

      res.status(400).json(accommodation);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
  // editAccommodation
  editAccommodationById: async (req, res) => {
    try {
      const userId = req.userId; // Ensure this is set correctly
      const accId = req.params.accId; // Accommodation ID

      // Validate request body
      if (!req.body || Object.keys(req.body).length === 0) {
        return res.status(400).json({ message: "Request body is empty" });
      }

      const { checkInDate, checkOutDate } = req.body;

      // Validate dates
      const today = new Date().toISOString().slice(0, 10);
      if (checkInDate < today) {
        return res.status(400).json({ message: "Check-In date must be today or later." });
      }
      if (checkOutDate < checkInDate) {
        return res.status(400).json({
          message: "Check-Out date must be the same or later than Check-In date.",
        });
      }

      // Find and update the accommodation
      const updatedAccommodation = await Accommodation.findOneAndUpdate(
        { userId, _id: accId },
        { ...req.body },
        { new: true, runValidators: true }
      );

      if (!updatedAccommodation) {
        return res.status(400).json({ message: "Accommodation not found" });
      }

      res.status(200).json({
        message: "Accommodation information updated successfully",
        updatedAccommodation,
      });
    } catch (err) {
      console.error("Error updating accommodation:", err.message);
      res.status(500).json({ message: "Internal Server Error", error: err.message });
    }
  },

  // delete accommodation
  deleteAccommodationById: async (req, res) => {
    try {
      const userId = req.userId;
      const accId = req.params.accId;

      const deletedAccommodation = await AccommodationBooking.findOneAndDelete({
        userId,
        _id: accId,
      });

      if (!deletedAccommodation) {
        return res.status(400).json({ message: "Accommodation not found" });
      }

      const tripId = deletedAccommodation.tripId;

      await Trip.updateOne(
        { _id: tripId, userId },
        { $pull: { accommodations: accId } }
      );

      res.status(200).send();
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  getTravelBookingById: async (req, res) => {
    try {
      const userId = req.userId;

      const travelId = req.params.travelId;

      const travelBooking = await TravelBooking.findOne({
        userId,

        _id: travelId,
      });

      if (!travelBooking) {
        return res
          .status(400)
          .json({ message: "Travel booking information not found" });
      }

      res.status(400).json(travelBooking);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  getAllTravelBooking: async (req, res) => {
    try {
      const userId = req.userId;
      const tripId = req.params.tripId;

      const allTravelBookings = await TravelBooking.find({
        userId,
        tripId,
      });

      if (!allTravelBookings.length === 0) {
        return res
          .status(400)
          .json({ message: "Travel booking information not found" });
      }

      res.status(200).json(allTravelBookings);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  editTravelBookingById: async (req, res) => {
    try {
      const userId = req.userId;

      const travelId = req.params.travelId;

      if (!req.body || Object.keys(req.body).length === 0) {
        return res.status(400).json({ message: "Request body is empty" });
      }

      const updatedTravelBooking = await TravelBooking.findOneAndUpdate(
        {
          userId,
          _id: travelId,
        },
        { ...req.body },
        { new: true, runValidators: true }
      );

      if (!updatedTravelBooking) {
        return res
          .status(400)
          .json({ message: "Travel booking information not found" });
      }

      res.status(200).json({
        message: "Travel booking information updated successfully",
        updatedTravelBooking,
      });
    } catch (err) { }
  },

  deleteTravelBookingById: async (req, res) => {
    try {
      const userId = req.userId;
      const travelId = req.params.travelId;

      const deletedTravelBooking = await TravelBooking.findOneAndDelete({
        userId,
        _id: travelId,
      });

      if (!deletedTravelBooking) {
        return res.status(400).json({ message: "Travel booking not found" });
      }

      const tripId = deletedTravelBooking.tripId;

      await Trip.updateOne(
        { _id: tripId, userId },
        { $pull: { travelBookings: travelId } }
      );

      res.status(200).send();
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  addToDos: async (req, res) => {
    try {
      const userId = req.userId;
      const tripId = req.params.tripId;

      if (!req.body || Object.keys(req.body).length === 0) {
        return res
          .status(400)
          .json({ message: "Request body might empty or not included" });
      }

      req.body["userId"] = userId;
      req.body["tripId"] = tripId;

      const toDos = new ToDos({ ...req.body });

      await toDos.save();

      const trip = await Trip.findOneAndUpdate(
        {
          _id: tripId,
          userId,
        },
        {
          $push: {
            toDos: toDos._id,
          },
        },
        { new: true }
      );

      if (!trip) {
        return res.status(400).json({ message: "Trip not found" });
      }

      res.status(201).json(toDos);
    } catch (err) {
      console.log(err);

      if (err.code === 11000) {
        res.status(400).json({ message: "ToDo name already exists" });
      }
      res.status(500).json({ message: err.message });
    }
  },

  getAllToDos: async (req, res) => {
    try {
      const userId = req.userId;
      const tripId = req.params.tripId;

      const allToDos = await ToDos.find({ userId, tripId }).select("-__v");

      if (allToDos.length === 0) {
        return res.status(400).json({ message: "No ToDos found" });
      }

      res.status(200).json(allToDos);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  updateToDoStatus: async (req, res) => {
    try {
      const userId = req.userId;
      const toDoId = req.params.toDoId;
      const toDoStatus = req.body.toDoStatus;

      if (!req.body || Object.keys(req.body).length === 0) {
        return res
          .status(400)
          .json({ message: "Request body might empty or not included" });
      }

      const updatedToDo = await ToDos.findOneAndUpdate(
        { userId, _id: toDoId },
        { toDoStatus },
        { runValidators: true }
      );

      if (!updatedToDo) {
        return res.status(400).json({ message: "ToDo not found" });
      }

      res.status(200).json({ message: "ToDo status updated successfully" });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  editToDo: async (req, res) => {
    try {
      const userId = req.userId;
      const toDoId = req.params.toDoId;

      if (!req.body || Object.keys(req.body).length === 0) {
        return res
          .status(400)
          .json({ message: "Request body might empty or not included" });
      }

      const { toDoName, toDoStatus, toDoDescription } = req.body;

      const updatedToDo = await ToDos.findOneAndUpdate(
        { userId, _id: toDoId },
        { toDoName, toDoDescription, toDoStatus },
        { runValidators: true }
      );

      if (!updatedToDo) {
        return res.status(400).json({ message: "ToDo not found" });
      }

      res.status(200).json(updatedToDo);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  deleteToDo: async (req, res) => {
    try {
      const userId = req.userId;
      const toDoId = req.params.toDoId;

      const deletedToDo = await ToDos.findOneAndDelete({ userId, _id: toDoId });

      if (!deletedToDo) {
        return res.status(400).json({ message: "ToDo not found" });
      }

      const tripId = deletedToDo.tripId;

      await Trip.updateOne({ _id: tripId }, { $pull: { toDos: toDoId } });

      res.status(200).send();
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  getToDo: async (req, res) => {
    try {
      const userId = req.userId;
      const toDoId = req.params.toDoId;

      console.log(userId, toDoId);

      const toDo = await ToDos.findOne({ userId, _id: toDoId });

      if (!toDo) {
        return res.status(400).json({ message: "ToDo not found" });
      }

      res.status(200).json(toDo);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  getTrainsBtnStations: async (req, res) => {
    try {
      const from = req.params.from;
      const to = req.params.to;

      const response = await axios.get(
        `http://indianrailapi.com/api/v2/TrainBetweenStation/apikey/9abdae9ebdd7b42aaa48c30815a4dbcb/From/${from}/To/${to}`
      );

      res.status(200).json(response.data);
    } catch (err) {
      res.status(500).json(err.message);
    }
  },

  getFlightBtnStations: async (req, res) => {
    try {
      const from = req.params.from;
      const to = req.params.to;

      const response = await axios.get(
        `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsedates/1.0/INR/en-GB/${from}/${to}/2023-06-01`,
      )
      
      res.status(200).json(response.data);
    } catch (err) {
      res.status(500).json(err.message);
    }
  },
};

module.exports = tripController;