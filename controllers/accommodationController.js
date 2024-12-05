const { allHotels } = require("./HotelsData");
const User = require("../models/user");
const Accommodation = require("../models/accommodation");

const accommodationController = {
  addManyAccommodation: async (req, res) => {
    try {
      const userId = req.userId;
      const userType = req.userType;

      const user = await User.findOne({ _id: userId, userType: userType });

      if (!user || userType !== "admin") {
        return res.status(403).json({ message: "Forbidden" });
      }

      const hotels = allHotels.map((hotel) => {

        return hotel;
      });

      const accommodations = await Accommodation.insertMany(hotels);

      if (accommodations.length === 0) {
        return res
          .status(400)
          .json({ message: "No accommodations were added" });
      }

      res.status(201).send("Accommodations data added successfully!");
    } catch (err) {
      console.error(err); // Improved error logging
      res.status(500).json({ message: err.message });
    }
  },
};

module.exports = accommodationController;