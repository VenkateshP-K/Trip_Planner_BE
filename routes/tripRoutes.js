const express = require("express");

const auth = require("../middleware/auth");

const tripController = require("../controllers/tripController");

const tripRouter = express.Router();

tripRouter.post("/trips/addTrip", auth.isAuth, tripController.addTrip);
// search trips
tripRouter.get("/trips/search", auth.isAuth, tripController.searchTrips);
tripRouter.get("/trips/:tripId", auth.isAuth, tripController.getTripById);
tripRouter.get("/allTrips", auth.isAuth, tripController.getAllTripsByUserId);

// edit trip
tripRouter.put("/trips/edit/:tripId", auth.isAuth, tripController.editTrip);

// delete trip
tripRouter.delete("/trips/:tripId", auth.isAuth, tripController.deleteTrip);

// transportation booking
tripRouter.put(
  "/trips/travels/booking/:tripId",
  auth.isAuth,
  tripController.bookTravel
); 

// accommodation booking
tripRouter.put(
  "/trips/accommodations/booking/:tripId",
  auth.isAuth,
  tripController.bookAccommodation
);

// search accommodations
tripRouter.get(
  "/trips/accommodations/search",
  auth.isAuth,
  tripController.suggestAccommodation
);

// get all accommodations
tripRouter.get(
  "/trips/accommodations/booked/:tripId",
  auth.isAuth,
  tripController.getAllBookedAccommodations
);

//delete accommodation
tripRouter.delete(
  "/trips/accommodations/booking/:accId",
  auth.isAuth,
  tripController.deleteAccommodationById
);

tripRouter.get(
  "/travels/:travelId",
  auth.isAuth,
  tripController.getTravelBookingById
);

tripRouter.get(
  "/travels/booking/all/:tripId",
  auth.isAuth,
  tripController.getAllTravelBooking
);

tripRouter.put(
  "/travels/edit/:travelId",
  auth.isAuth,
  tripController.editTravelBookingById
);

// deleting booked travel ticket
tripRouter.delete(
  "/travels/booking/:travelId",
  auth.isAuth,
  tripController.deleteTravelBookingById
);

// todos' routes
tripRouter.post("/trips/toDos/:tripId", auth.isAuth, tripController.addToDos);

// get all todos
tripRouter.get(
  "/trips/toDos/all/:tripId",
  auth.isAuth,
  tripController.getAllToDos
);

// updte todo status
tripRouter.put(
  "/trips/toDos/update/status/:toDoId",
  auth.isAuth,
  tripController.updateToDoStatus
);

// toDo edit
tripRouter.put(
  "/trips/toDos/edit/:toDoId",
  auth.isAuth,
  tripController.editToDo
);
// delete todo
tripRouter.delete(
  "/trips/toDos/:toDoId",
  auth.isAuth,
  tripController.deleteToDo
);

// get toDo
tripRouter.get("/trips/toDos/:toDoId", auth.isAuth, tripController.getToDo);

tripRouter.get(
  "/trips/trains/from/:from/to/:to",
  auth.isAuth,
  tripController.getTrainsBtnStations
);

tripRouter.get(
  "/trips/flights/search",
  auth.isAuth,
  tripController.suggestFlights
);

tripRouter.get(
  "/trips/trains/search",
  auth.isAuth,
  tripController.suggestTrains
);

module.exports = tripRouter;