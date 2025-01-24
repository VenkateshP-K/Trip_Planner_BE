const User = require("../models/user");
const Flight = require("../models/flights");

airports = [
  "Agartala - Maharaja Bir Bikram Airport (IXA)",
  "Agatti - Agatti Airport (AGX)",
  "Agra - Agra Airport (AGR)",
  "Ahmedabad - Sardar Vallabhbhai Patel International Airport (AMD)",
  "Aizawl - Lengpui Airport (AJL)",
  "Akola - Akola Airport (AKD)",
  "Along - Along Airport (IXV)",
  "Amritsar - Sri Guru Ram Dass Jee International Airport (ATQ)",
  "Aurangabad - Aurangabad Airport (IXU)",
  "Bagdogra - Bagdogra Airport (IXB)",
  "Balurghat - Balurghat Airport (RGH)",
  "Bareilly - Bareilly Airport (BEK)",
  "Belgaum - Belgaum Airport (IXG)",
  "Bellary - Bellary Airport (BEP)",
  "Bengaluru - Kempegowda International Airport (BLR)",
  "Bhavnagar - Bhavnagar Airport (BHU)",
  "Bhopal - Raja Bhoj Airport (BHO)",
  "Bhubaneswar - Biju Patnaik International Airport (BBI)",
  "Bhuj - Bhuj Airport (BHJ)",
  "Bikaner - Nal Airport (BKB)",
  "Bilaspur - Bilaspur Airport (PAB)",
  "Chandigarh - Chandigarh Airport (IXC)",
  "Chennai - Chennai International Airport (MAA)",
  "Coimbatore - Coimbatore International Airport (CJB)",
  "Cuddapah - Cuddapah Airport (CDP)",
  "Daman - Daman Airport (NMB)",
  "Darbhanga - Darbhanga Airport (DBR)",
  "Dehradun - Dehradun Airport (DED)",
  "Delhi - Indira Gandhi International Airport (DEL)",
  "Dibrugarh - Dibrugarh Airport (DIB)",
  "Dimapur - Dimapur Airport (DMU)",
  "Diu - Diu Airport (DIU)",
  "Gaya - Gaya Airport (GAY)",
  "Goa - Goa International Airport (GOI)",
  "Gorakhpur - Gorakhpur Airport (GOP)",
  "Guwahati - Lokpriya Gopinath Bordoloi International Airport (GAU)",
  "Gwalior - Gwalior Airport (GWL)",
  "Hubli - Hubli Airport (HBX)",
  "Hyderabad - Rajiv Gandhi International Airport (HYD)",
  "Imphal - Imphal Airport (IMF)",
  "Indore - Devi Ahilya Bai Holkar Airport (IDR)",
  "Jabalpur - Jabalpur Airport (JLR)",
  "Jaipur - Jaipur International Airport (JAI)",
  "Jaisalmer - Jaisalmer Airport (JSA)",
  "Jammu - Jammu Airport (IXJ)",
  "Jamnagar - Jamnagar Airport (JGA)",
  "Jamshedpur - Sonari Airport (IXW)",
  "Jodhpur - Jodhpur Airport (JDH)",
  "Jorhat - Jorhat Airport (JRH)",
  "Kailashahar - Kailashahar Airport (IXH)",
  "Kandla - Kandla Airport (IXY)",
  "Kanpur - Kanpur Airport (KNU)",
  "Kannur - Kannur International Airport (CNN)",
  "Kochi - Cochin International Airport (COK)",
  "Kolhapur - Kolhapur Airport (KLH)",
  "Kolkata - Netaji Subhas Chandra Bose International Airport (CCU)",
  "Kota - Kota Airport (KTU)",
  "Kozhikode - Calicut International Airport (CCJ)",
  "Kullu - Kullu Manali Airport (KUU)",
  "Leh - Kushok Bakula Rimpochee Airport (IXL)",
  "Lucknow - Chaudhary Charan Singh International Airport (LKO)",
  "Ludhiana - Ludhiana Airport (LUH)",
  "Madurai - Madurai Airport (IXM)",
  "Mangalore - Mangalore International Airport (IXE)",
  "Mumbai - Chhatrapati Shivaji Maharaj International Airport (BOM)",
  "Mysore - Mysore Airport (MYQ)",
  "Nagpur - Dr. Babasaheb Ambedkar International Airport (NAG)",
  "Nanded - Shri Guru Gobind Singh Ji Airport (NDC)",
  "Nasik - Gandhinagar Airport (ISK)",
  "Patna - Jay Prakash Narayan Airport (PAT)",
  "Pondicherry - Pondicherry Airport (PNY)",
  "Porbandar - Porbandar Airport (PBD)",
  "Port Blair - Veer Savarkar International Airport (IXZ)",
  "Pune - Pune International Airport (PNQ)",
  "Raipur - Swami Vivekananda Airport (RPR)",
  "Rajahmundry - Rajahmundry Airport (RJA)",
  "Rajkot - Rajkot Airport (RAJ)",
  "Ranchi - Birsa Munda Airport (IXR)",
  "Shillong - Shillong Airport (SHL)",
  "Shimla - Shimla Airport (SLV)",
  "Srinagar - Sheikh ul-Alam International Airport (SXR)",
  "Surat - Surat Airport (STV)",
  "Tezpur - Tezpur Airport (TEZ)",
  "Thiruvananthapuram - Trivandrum International Airport (TRV)",
  "Tiruchirappalli - Tiruchirappalli International Airport (TRZ)",
  "Tirupati - Tirupati Airport (TIR)",
  "Tuticorin - Tuticorin Airport (TCR)",
  "Udaipur - Maharana Pratap Airport (UDR)",
  "Vadodara - Vadodara Airport (BDQ)",
  "Varanasi - Lal Bahadur Shastri International Airport (VNS)",
  "Vijayawada - Vijayawada Airport (VGA)",
  "Visakhapatnam - Visakhapatnam Airport (VTZ)",
];

const airlines = [
  "Air India",
  "IndiGo",
  "SpiceJet",
  "Vistara",
  "Go First",
  "AirAsia India",
  "Alliance Air",
  "TruJet",
  "Star Air",
  "Air India Express",
  "FlyBig",
  "Akasa Air",
  "Zoom Air",
  "Air Odisha",
  "Air Deccan",
  "Pawan Hans",
];

const flightAbrevations = [
  "AI",
  "IG",
  "SJ",
  "V",
  "GF",
  "AI",
  "AA",
  "TJ",
  "SA",
  "AIE",
  "FB",
  "AA",
  "ZA",
  "AO",
  "AD",
  "PH",
];

const generateFlightData = (numEntries) => {
  const flights = [];

  startDate = Date.now();

  endDate = new Date("2025-02-28");

  for (i = 0; i <= numEntries; i++) {
    source = airports[Math.floor(Math.random() * airports.length)];

    let destination = [];

    for (airport of airports) {
      if (airport !== source) {
        destination.push(airport);
      }
    }

    destination = destination[Math.floor(Math.random() * destination.length)];

    const departureTime = new Date(
      startDate + Math.floor(Math.random() * (endDate.getTime() - startDate))
    );

    const hours = [1, 2, 3, 4];

    const randomHrs = hours[Math.floor(Math.random() * hours.length)];

    const arrivalTime = new Date(
      departureTime.getTime() + randomHrs * 3600 * 1000
    );

    const airline = airlines[Math.floor(Math.random() * airlines.length)];

    let airlineAbrv = airline
      .split(" ")
      .map((letter) => letter[0])
      .join("");

    flightNumber = `${airlineAbrv}${Math.floor(Math.random() * 1000)}`;

    const cost = Math.floor(Math.random() * 10000);

    const flight = {
      flightNumber: flightNumber,
      airline: airline,
      source: source,
      destination: destination,
      departureTime: departureTime,
      arrivalTime: arrivalTime,
    };
    flights.push(flight);
  }

  return flights;
};

const flightController = {
  addFlight: async (req, res) => {
    const userId = req.userId;
    const admin = req.userType;

    if (!req.body || Object.keys(req.body).length === 0) {
      return res.status(400).json({ message: "Flight data empty" });
    }

    const user = await User.findOne({ _id: userId, userType: admin });

    if (!user) {
      return res.status(400).json({ message: "Unauthorized" });
    }

    const flight = new Flight({ ...req.body });

    if (!flight) {
      return res.status(400).json({ message: "Flight data not added" });
    }

    await flight.save();

    res.status(201).json("Flight data added successfully");
  },

  addManyFlights: async (req, res) => {
    try {
      const userId = req.userId; // Retrieved from the `isAuth` middleware
      if (!userId) {
        return res.status(401).json({ message: "Unauthorized: User ID missing" });
      }

      // Fetch user and verify if they are an admin
      const user = await User.findById(userId);
      if (!user || user.userType !== "admin") {
        return res.status(403).json({ message: "Forbidden: Admin access required" });
      }

      // Generate and insert flight data
      const flightsData = generateFlightData(1000);
      const flight = await Flight.insertMany(flightsData);

      if (!flight || flight.length === 0) {
        return res.status(500).json({ message: "Flight data not added" });
      }

      res.status(201).json({ message: "Flights data added successfully" });
    } catch (error) {
      console.error("Error adding flights:", error.message);
      res.status(500).json({ message: "Internal server error", error: error.message });
    }
  }
};

module.exports = flightController;