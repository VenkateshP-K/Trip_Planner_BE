const hotel1 = [
  {
    name: "Taj Connemara",
    type: "Hotel",
    location: {
      city: "Chennai",
      state: "Tamil Nadu",
      country: "India",
    },
    address: "2 Club House Road, Chennai, Tamil Nadu 600002",
    amenities: [
      "Wi-Fi",
      "Breakfast",
      "Swimming Pool",
      "Spa",
      "Restaurant",
      "Gym",
    ],
    roomTypes: [
      {
        type: "Luxury Room",
        pricePerNight: 20000,
        availability: 15,
      },
      {
        type: "Heritage Room",
        pricePerNight: 25000,
        availability: 8,
      },
    ],
    rating: 4.8,
    contactInfo: {
      phone: "+91 44 2835 1234",
      email: "reservations@tajconnemara.com",
    },
  },
  {
    name: "Leela Palace",
    type: "Hotel",
    location: {
      city: "Chennai",
      state: "Tamil Nadu",
      country: "India",
    },
    address: "23 Kodihalli, Old Airport Road, Chennai, Tamil Nadu 600008",
    amenities: ["Wi-Fi", "Breakfast", "Swimming Pool", "Spa", "Restaurant"],
    roomTypes: [
      {
        type: "Royal Club Room",
        pricePerNight: 22000,
        availability: 12,
      },
      {
        type: "Royal Suite",
        pricePerNight: 32000,
        availability: 5,
      },
    ],
    rating: 4.9,
    contactInfo: {
      phone: "+91 44 2231 1234",
      email: "reservations@theleela.com",
    },
  },
  {
    name: "Radisson Blu",
    type: "Hotel",
    location: {
      city: "Coimbatore",
      state: "Tamil Nadu",
      country: "India",
    },
    address: "760 Avinashi Road, Coimbatore, Tamil Nadu 641018",
    amenities: ["Wi-Fi", "Breakfast", "Swimming Pool", "Gym", "Restaurant"],
    roomTypes: [
      {
        type: "Superior Room",
        pricePerNight: 10000,
        availability: 18,
      },
      {
        type: "Business Class Room",
        pricePerNight: 14000,
        availability: 8,
      },
    ],
    rating: 4.6,
    contactInfo: {
      phone: "+91 422 454 5454",
      email: "reservations@radissonblu.com",
    },
  },
  {
    name: "The Residency",
    type: "Hotel",
    location: {
      city: "Madurai",
      state: "Tamil Nadu",
      country: "India",
    },
    address: "15, 18th Avenue, Madurai, Tamil Nadu 625020",
    amenities: ["Wi-Fi", "Breakfast", "Restaurant", "Parking"],
    roomTypes: [
      {
        type: "Deluxe Room",
        pricePerNight: 6000,
        availability: 20,
      },
      {
        type: "Executive Suite",
        pricePerNight: 12000,
        availability: 10,
      },
    ],
    rating: 4.4,
    contactInfo: {
      phone: "+91 452 253 0000",
      email: "reservations@theresidency.com",
    },
  },
  {
    name: "GRT Grand",
    type: "Hotel",
    location: {
      city: "Chennai",
      state: "Tamil Nadu",
      country: "India",
    },
    address: "120, Sir Thyagaraya Road, Chennai, Tamil Nadu 600017",
    amenities: [
      "Wi-Fi",
      "Breakfast",
      "Swimming Pool",
      "Gym",
      "Spa",
      "Restaurant",
    ],
    roomTypes: [
      {
        type: "Club Room",
        pricePerNight: 8000,
        availability: 22,
      },
      {
        type: "Deluxe Suite",
        pricePerNight: 15000,
        availability: 10,
      },
    ],
    rating: 4.5,
    contactInfo: {
      phone: "+91 44 2815 2333",
      email: "reservations@grtgrand.com",
    },
  },
  {
    name: "Taj Fisherman's Cove",
    type: "Resort",
    location: {
      city: "Kanchipuram",
      state: "Tamil Nadu",
      country: "India",
    },
    address: "Covelong Beach, Kanchipuram, Tamil Nadu 603112",
    amenities: [
      "Wi-Fi",
      "Breakfast",
      "Swimming Pool",
      "Spa",
      "Restaurant",
      "Beach Access",
    ],
    roomTypes: [
      {
        type: "Sea View Room",
        pricePerNight: 15000,
        availability: 10,
      },
      {
        type: "Beach Cottage",
        pricePerNight: 20000,
        availability: 6,
      },
    ],
    rating: 4.7,
    contactInfo: {
      phone: "+91 44 6741 3333",
      email: "reservations@tajhotels.com",
    },
  },
  {
    name: "Hotel Sangam",
    type: "Hotel",
    location: {
      city: "Tiruchirappalli",
      state: "Tamil Nadu",
      country: "India",
    },
    address: "No. 15, W. B. Road, Tiruchirappalli, Tamil Nadu 620001",
    amenities: ["Wi-Fi", "Breakfast", "Restaurant", "Parking"],
    roomTypes: [
      {
        type: "Standard Room",
        pricePerNight: 5000,
        availability: 25,
      },
      {
        type: "Deluxe Room",
        pricePerNight: 9000,
        availability: 12,
      },
    ],
    rating: 4.3,
    contactInfo: {
      phone: "+91 431 242 3456",
      email: "reservations@hotelsangam.com",
    },
  },
  {
    name: "Vivanta by Taj",
    type: "Hotel",
    location: {
      city: "Tiruchirappalli",
      state: "Tamil Nadu",
      country: "India",
    },
    address: "1, Jawaharlal Nehru Road, Tiruchirappalli, Tamil Nadu 620020",
    amenities: [
      "Wi-Fi",
      "Breakfast",
      "Swimming Pool",
      "Spa",
      "Gym",
      "Restaurant",
    ],
    roomTypes: [
      {
        type: "Superior Room",
        pricePerNight: 8500,
        availability: 15,
      },
      {
        type: "Premium Room",
        pricePerNight: 13000,
        availability: 8,
      },
    ],
    rating: 4.6,
    contactInfo: {
      phone: "+91 431 234 5678",
      email: "reservations@vivantahotels.com",
    },
  },
  {
    name: "Hotel Chennai Le Royal Meridien",
    type: "Hotel",
    location: {
      city: "Chennai",
      state: "Tamil Nadu",
      country: "India",
    },
    address: "1, GST Road, St Thomas Mount, Chennai, Tamil Nadu 600016",
    amenities: [
      "Wi-Fi",
      "Breakfast",
      "Swimming Pool",
      "Spa",
      "Gym",
      "Restaurant",
    ],
    roomTypes: [
      {
        type: "Executive Room",
        pricePerNight: 10000,
        availability: 20,
      },
      {
        type: "Presidential Suite",
        pricePerNight: 20000,
        availability: 5,
      },
    ],
    rating: 4.7,
    contactInfo: {
      phone: "+91 44 2231 1313",
      email: "reservations@chennai.leroyalmeridien.com",
    },
  },
  {
    name: "The Raintree",
    type: "Hotel",
    location: {
      city: "Chennai",
      state: "Tamil Nadu",
      country: "India",
    },
    address: "120, St. Mary’s Road, Alwarpet, Chennai, Tamil Nadu 600018",
    amenities: [
      "Wi-Fi",
      "Breakfast",
      "Swimming Pool",
      "Spa",
      "Gym",
      "Restaurant",
    ],
    roomTypes: [
      {
        type: "Deluxe Room",
        pricePerNight: 7000,
        availability: 18,
      },
      {
        type: "Suite",
        pricePerNight: 12000,
        availability: 10,
      },
    ],
    rating: 4.5,
    contactInfo: {
      phone: "+91 44 2431 6161",
      email: "reservations@theraintree.com",
    },
  },
  {
    name: "Hotel Annamalai International",
    type: "Hotel",
    location: {
      city: "Madurai",
      state: "Tamil Nadu",
      country: "India",
    },
    address: "60, Nethaji Road, Madurai, Tamil Nadu 625001",
    amenities: ["Wi-Fi", "Breakfast", "Restaurant", "Parking"],
    roomTypes: [
      {
        type: "Standard Room",
        pricePerNight: 5500,
        availability: 20,
      },
      {
        type: "Deluxe Room",
        pricePerNight: 9500,
        availability: 15,
      },
    ],
    rating: 4.4,
    contactInfo: {
      phone: "+91 452 234 5678",
      email: "reservations@annamalaiinternational.com",
    },
  },
  {
    name: "Hotel Chenthur Park",
    type: "Hotel",
    location: {
      city: "Salem",
      state: "Tamil Nadu",
      country: "India",
    },
    address: "5/63, Rajaji Road, Salem, Tamil Nadu 636007",
    amenities: ["Wi-Fi", "Breakfast", "Restaurant", "Parking"],
    roomTypes: [
      {
        type: "Standard Room",
        pricePerNight: 5000,
        availability: 15,
      },
      {
        type: "Executive Room",
        pricePerNight: 8000,
        availability: 10,
      },
    ],
    rating: 4.2,
    contactInfo: {
      phone: "+91 427 234 5678",
      email: "reservations@chenthurpark.com",
    },
  },
  {
    name: "Hotel Madurai Residency",
    type: "Hotel",
    location: {
      city: "Madurai",
      state: "Tamil Nadu",
      country: "India",
    },
    address: "27, Simmakkal, Madurai, Tamil Nadu 625001",
    amenities: ["Wi-Fi", "Breakfast", "Restaurant", "Parking"],
    roomTypes: [
      {
        type: "Deluxe Room",
        pricePerNight: 7000,
        availability: 12,
      },
      {
        type: "Suite",
        pricePerNight: 12000,
        availability: 6,
      },
    ],
    rating: 4.5,
    contactInfo: {
      phone: "+91 452 234 5678",
      email: "reservations@maduraipark.com",
    },
  },
  {
    name: "Hotel Grand Palace",
    type: "Hotel",
    location: {
      city: "Kanyakumari",
      state: "Tamil Nadu",
      country: "India",
    },
    address: "31, Vivekananda Road, Kanyakumari, Tamil Nadu 629702",
    amenities: ["Wi-Fi", "Breakfast", "Restaurant", "Parking"],
    roomTypes: [
      {
        type: "Standard Room",
        pricePerNight: 4500,
        availability: 20,
      },
      {
        type: "Deluxe Room",
        pricePerNight: 7500,
        availability: 8,
      },
    ],
    rating: 4.3,
    contactInfo: {
      phone: "+91 465 123 4567",
      email: "reservations@grandpalace.com",
    },
  },
  {
    name: "Hotel Temple City",
    type: "Hotel",
    location: {
      city: "Tirunelveli",
      state: "Tamil Nadu",
      country: "India",
    },
    address: "12, Pottappalayam Road, Tirunelveli, Tamil Nadu 627001",
    amenities: ["Wi-Fi", "Breakfast", "Restaurant", "Parking"],
    roomTypes: [
      {
        type: "Standard Room",
        pricePerNight: 4000,
        availability: 22,
      },
      {
        type: "Deluxe Room",
        pricePerNight: 7000,
        availability: 10,
      },
    ],
    rating: 4.1,
    contactInfo: {
      phone: "+91 462 234 5678",
      email: "reservations@templecity.com",
    },
  },
  {
    name: "Hotel Vijay Park",
    type: "Hotel",
    location: {
      city: "Chennai",
      state: "Tamil Nadu",
      country: "India",
    },
    address: "13, Kamaraj Avenue, Chennai, Tamil Nadu 600020",
    amenities: ["Wi-Fi", "Breakfast", "Restaurant", "Parking"],
    roomTypes: [
      {
        type: "Standard Room",
        pricePerNight: 5500,
        availability: 18,
      },
      {
        type: "Deluxe Room",
        pricePerNight: 9000,
        availability: 10,
      },
    ],
    rating: 4.4,
    contactInfo: {
      phone: "+91 44 2345 6789",
      email: "reservations@vijaypark.com",
    },
  },
  {
    name: "Hotel Suriya International",
    type: "Hotel",
    location: {
      city: "Tirupur",
      state: "Tamil Nadu",
      country: "India",
    },
    address: "3, 100 Feet Road, Tirupur, Tamil Nadu 641601",
    amenities: ["Wi-Fi", "Breakfast", "Restaurant", "Parking"],
    roomTypes: [
      {
        type: "Standard Room",
        pricePerNight: 5000,
        availability: 20,
      },
      {
        type: "Executive Room",
        pricePerNight: 8000,
        availability: 10,
      },
    ],
    rating: 4.2,
    contactInfo: {
      phone: "+91 421 234 5678",
      email: "reservations@suriya.com",
    },
  },
  {
    name: "Hotel Park Plaza",
    type: "Hotel",
    location: {
      city: "Erode",
      state: "Tamil Nadu",
      country: "India",
    },
    address: "24, Station Road, Erode, Tamil Nadu 638001",
    amenities: ["Wi-Fi", "Breakfast", "Restaurant", "Parking"],
    roomTypes: [
      {
        type: "Standard Room",
        pricePerNight: 4500,
        availability: 25,
      },
      {
        type: "Deluxe Room",
        pricePerNight: 7500,
        availability: 12,
      },
    ],
    rating: 4.1,
    contactInfo: {
      phone: "+91 424 234 5678",
      email: "reservations@parkplaza.com",
    },
  },
  {
    name: "Hotel Golden Sun",
    type: "Hotel",
    location: {
      city: "Nagercoil",
      state: "Tamil Nadu",
      country: "India",
    },
    address: "8, K.P. Road, Nagercoil, Tamil Nadu 629001",
    amenities: ["Wi-Fi", "Breakfast", "Restaurant", "Parking"],
    roomTypes: [
      {
        type: "Standard Room",
        pricePerNight: 4000,
        availability: 22,
      },
      {
        type: "Deluxe Room",
        pricePerNight: 7000,
        availability: 10,
      },
    ],
    rating: 4.0,
    contactInfo: {
      phone: "+91 465 234 5678",
      email: "reservations@goldensun.com",
    },
  },
];

const hotel2 = [
  {
    name: "The Oberoi",
    type: "Hotel",
    location: {
      city: "New Delhi",
      state: "Delhi",
      country: "India",
    },
    address: "The Oberoi, Dr. Zakir Hussain Marg, New Delhi, Delhi 110003",
    amenities: [
      "Wi-Fi",
      "Breakfast",
      "Swimming Pool",
      "Spa",
      "Gym",
      "Restaurant",
    ],
    roomTypes: [
      {
        type: "Deluxe Room",
        pricePerNight: 25000,
        availability: 10,
      },
      {
        type: "Luxury Suite",
        pricePerNight: 45000,
        availability: 5,
      },
    ],
    rating: 4.9,
    contactInfo: {
      phone: "+91 11 2332 1222",
      email: "reservations@oberoihotels.com",
    },
  },
  {
    name: "ITC Grand Bharat",
    type: "Hotel",
    location: {
      city: "Gurugram",
      state: "Haryana",
      country: "India",
    },
    address: "P.O. Pataudi Road, Gurgaon, Haryana 122018",
    amenities: [
      "Wi-Fi",
      "Breakfast",
      "Swimming Pool",
      "Spa",
      "Gym",
      "Restaurant",
    ],
    roomTypes: [
      {
        type: "Palace Room",
        pricePerNight: 30000,
        availability: 8,
      },
      {
        type: "Royal Suite",
        pricePerNight: 60000,
        availability: 3,
      },
    ],
    rating: 4.8,
    contactInfo: {
      phone: "+91 124 451 5555",
      email: "reservations@itchotels.com",
    },
  },
  {
    name: "The Leela Palace",
    type: "Hotel",
    location: {
      city: "Bengaluru",
      state: "Karnataka",
      country: "India",
    },
    address: "23, Old Airport Road, Bengaluru, Karnataka 560008",
    amenities: [
      "Wi-Fi",
      "Breakfast",
      "Swimming Pool",
      "Spa",
      "Gym",
      "Restaurant",
    ],
    roomTypes: [
      {
        type: "Club Room",
        pricePerNight: 18000,
        availability: 15,
      },
      {
        type: "Grand Deluxe Room",
        pricePerNight: 35000,
        availability: 6,
      },
    ],
    rating: 4.9,
    contactInfo: {
      phone: "+91 80 2521 1234",
      email: "reservations@theleela.com",
    },
  },
  {
    name: "The Park",
    type: "Hotel",
    location: {
      city: "Kolkata",
      state: "West Bengal",
      country: "India",
    },
    address: "17 Park Street, Kolkata, West Bengal 700016",
    amenities: ["Wi-Fi", "Breakfast", "Spa", "Restaurant", "Gym"],
    roomTypes: [
      {
        type: "Luxury Room",
        pricePerNight: 12000,
        availability: 20,
      },
      {
        type: "Presidential Suite",
        pricePerNight: 25000,
        availability: 4,
      },
    ],
    rating: 4.5,
    contactInfo: {
      phone: "+91 33 2229 0700",
      email: "reservations@theparkhotels.com",
    },
  },
  {
    name: "JW Marriott",
    type: "Hotel",
    location: {
      city: "Mumbai",
      state: "Maharashtra",
      country: "India",
    },
    address: "Juhu Tara Road, Juhu, Mumbai, Maharashtra 400049",
    amenities: [
      "Wi-Fi",
      "Breakfast",
      "Swimming Pool",
      "Spa",
      "Gym",
      "Restaurant",
    ],
    roomTypes: [
      {
        type: "Deluxe Room",
        pricePerNight: 15000,
        availability: 25,
      },
      {
        type: "Executive Suite",
        pricePerNight: 30000,
        availability: 7,
      },
    ],
    rating: 4.7,
    contactInfo: {
      phone: "+91 22 6693 3000",
      email: "reservations@jwmarriott.com",
    },
  },
  {
    name: "Radisson Blu",
    type: "Hotel",
    location: {
      city: "Pune",
      state: "Maharashtra",
      country: "India",
    },
    address: "2 & 3, Nagar Road, Pune, Maharashtra 411014",
    amenities: ["Wi-Fi", "Breakfast", "Swimming Pool", "Restaurant"],
    roomTypes: [
      {
        type: "Superior Room",
        pricePerNight: 9000,
        availability: 20,
      },
      {
        type: "Business Class Room",
        pricePerNight: 14000,
        availability: 8,
      },
    ],
    rating: 4.6,
    contactInfo: {
      phone: "+91 20 6740 5000",
      email: "reservations@radissonblu.com",
    },
  },
  {
    name: "Hyatt Regency",
    type: "Hotel",
    location: {
      city: "Hyderabad",
      state: "Telangana",
      country: "India",
    },
    address: "Gachibowli, Hyderabad, Telangana 500032",
    amenities: [
      "Wi-Fi",
      "Breakfast",
      "Swimming Pool",
      "Spa",
      "Gym",
      "Restaurant",
    ],
    roomTypes: [
      {
        type: "Standard Room",
        pricePerNight: 10000,
        availability: 18,
      },
      {
        type: "Executive Suite",
        pricePerNight: 20000,
        availability: 5,
      },
    ],
    rating: 4.7,
    contactInfo: {
      phone: "+91 40 2345 6789",
      email: "reservations@hyatt.com",
    },
  },
  {
    name: "The Taj Mahal Palace",
    type: "Hotel",
    location: {
      city: "Agra",
      state: "Uttar Pradesh",
      country: "India",
    },
    address: "Taj Road, Agra, Uttar Pradesh 282001",
    amenities: ["Wi-Fi", "Breakfast", "Swimming Pool", "Spa", "Restaurant"],
    roomTypes: [
      {
        type: "Deluxe Room",
        pricePerNight: 15000,
        availability: 12,
      },
      {
        type: "Mahal Suite",
        pricePerNight: 30000,
        availability: 3,
      },
    ],
    rating: 4.9,
    contactInfo: {
      phone: "+91 562 233 5800",
      email: "reservations@tajhotels.com",
    },
  },
  {
    name: "Hotel Clarks Shiraz",
    type: "Hotel",
    location: {
      city: "Agra",
      state: "Uttar Pradesh",
      country: "India",
    },
    address: "54, Taj Road, Agra, Uttar Pradesh 282001",
    amenities: ["Wi-Fi", "Breakfast", "Swimming Pool", "Restaurant"],
    roomTypes: [
      {
        type: "Standard Room",
        pricePerNight: 8000,
        availability: 20,
      },
      {
        type: "Deluxe Room",
        pricePerNight: 12000,
        availability: 10,
      },
    ],
    rating: 4.4,
    contactInfo: {
      phone: "+91 562 233 2141",
      email: "reservations@clarkshotels.com",
    },
  },
  {
    name: "Radisson Blu",
    type: "Hotel",
    location: {
      city: "Jaipur",
      state: "Rajasthan",
      country: "India",
    },
    address: "5, Airport Plaza, Jaipur, Rajasthan 302029",
    amenities: ["Wi-Fi", "Breakfast", "Swimming Pool", "Spa", "Restaurant"],
    roomTypes: [
      {
        type: "Superior Room",
        pricePerNight: 11000,
        availability: 15,
      },
      {
        type: "Business Class Room",
        pricePerNight: 16000,
        availability: 7,
      },
    ],
    rating: 4.6,
    contactInfo: {
      phone: "+91 141 491 0000",
      email: "reservations@radissonblu.com",
    },
  },
  {
    name: "The Lalit",
    type: "Hotel",
    location: {
      city: "Shimla",
      state: "Himachal Pradesh",
      country: "India",
    },
    address: "Barog, Shimla, Himachal Pradesh 171203",
    amenities: ["Wi-Fi", "Breakfast", "Spa", "Restaurant"],
    roomTypes: [
      {
        type: "Deluxe Room",
        pricePerNight: 14000,
        availability: 10,
      },
      {
        type: "Suite",
        pricePerNight: 25000,
        availability: 4,
      },
    ],
    rating: 4.7,
    contactInfo: {
      phone: "+91 177 280 3888",
      email: "reservations@thelalit.com",
    },
  },
  {
    name: "Hotel Mountview",
    type: "Hotel",
    location: {
      city: "Chandigarh",
      state: "Chandigarh",
      country: "India",
    },
    address: "Sector 10, Chandigarh, Chandigarh 160011",
    amenities: ["Wi-Fi", "Breakfast", "Swimming Pool", "Restaurant"],
    roomTypes: [
      {
        type: "Standard Room",
        pricePerNight: 9000,
        availability: 22,
      },
      {
        type: "Deluxe Room",
        pricePerNight: 15000,
        availability: 8,
      },
    ],
    rating: 4.5,
    contactInfo: {
      phone: "+91 172 274 0300",
      email: "reservations@mountviewhotel.com",
    },
  },
];

const hotel3 = [
  {
    name: "Hotel Grand",
    type: "Hotel",
    location: {
      city: "Ahmedabad",
      state: "Gujarat",
      country: "India",
    },
    address: "S.G. Highway, Ahmedabad, Gujarat 380015",
    amenities: ["Wi-Fi", "Breakfast", "Swimming Pool", "Restaurant"],
    roomTypes: [
      {
        type: "Standard Room",
        pricePerNight: 8000,
        availability: 20,
      },
      {
        type: "Executive Room",
        pricePerNight: 13000,
        availability: 7,
      },
    ],
    rating: 4.4,
    contactInfo: {
      phone: "+91 79 2658 8888",
      email: "reservations@hotelgrand.com",
    },
  },
  {
    name: "Hotel Vishal",
    type: "Hotel",
    location: {
      city: "Surat",
      state: "Gujarat",
      country: "India",
    },
    address: "Ring Road, Surat, Gujarat 395002",
    amenities: ["Wi-Fi", "Breakfast", "Restaurant"],
    roomTypes: [
      {
        type: "Standard Room",
        pricePerNight: 6000,
        availability: 25,
      },
      {
        type: "Deluxe Room",
        pricePerNight: 10000,
        availability: 10,
      },
    ],
    rating: 4.3,
    contactInfo: {
      phone: "+91 261 234 5678",
      email: "reservations@hotelvishal.com",
    },
  },
  {
    name: "Hotel Greenview",
    type: "Hotel",
    location: {
      city: "Jaipur",
      state: "Rajasthan",
      country: "India",
    },
    address: "City Centre, Jaipur, Rajasthan 302001",
    amenities: ["Wi-Fi", "Breakfast", "Spa", "Restaurant"],
    roomTypes: [
      {
        type: "Superior Room",
        pricePerNight: 12000,
        availability: 15,
      },
      {
        type: "Deluxe Suite",
        pricePerNight: 20000,
        availability: 5,
      },
    ],
    rating: 4.6,
    contactInfo: {
      phone: "+91 141 404 0505",
      email: "reservations@hotelgreenview.com",
    },
  },
  {
    name: "Hotel Bluebell",
    type: "Hotel",
    location: {
      city: "Udaipur",
      state: "Rajasthan",
      country: "India",
    },
    address: "Lake Palace Road, Udaipur, Rajasthan 313001",
    amenities: ["Wi-Fi", "Breakfast", "Swimming Pool", "Restaurant"],
    roomTypes: [
      {
        type: "Lake View Room",
        pricePerNight: 15000,
        availability: 12,
      },
      {
        type: "Royal Suite",
        pricePerNight: 30000,
        availability: 4,
      },
    ],
    rating: 4.8,
    contactInfo: {
      phone: "+91 294 242 0000",
      email: "reservations@hotelbluebell.com",
    },
  },
  {
    name: "Hotel Premier",
    type: "Hotel",
    location: {
      city: "Bhopal",
      state: "Madhya Pradesh",
      country: "India",
    },
    address: "MG Road, Bhopal, Madhya Pradesh 462001",
    amenities: ["Wi-Fi", "Breakfast", "Restaurant"],
    roomTypes: [
      {
        type: "Standard Room",
        pricePerNight: 7000,
        availability: 18,
      },
      {
        type: "Executive Room",
        pricePerNight: 12000,
        availability: 8,
      },
    ],
    rating: 4.5,
    contactInfo: {
      phone: "+91 755 252 2222",
      email: "reservations@hotelpremier.com",
    },
  },
  {
    name: "Hotel Metro",
    type: "Hotel",
    location: {
      city: "Indore",
      state: "Madhya Pradesh",
      country: "India",
    },
    address: "Panchsheel Square, Indore, Madhya Pradesh 452001",
    amenities: ["Wi-Fi", "Breakfast", "Swimming Pool", "Restaurant"],
    roomTypes: [
      {
        type: "Deluxe Room",
        pricePerNight: 8000,
        availability: 22,
      },
      {
        type: "Suite",
        pricePerNight: 15000,
        availability: 6,
      },
    ],
    rating: 4.4,
    contactInfo: {
      phone: "+91 731 255 6789",
      email: "reservations@hotelmetro.com",
    },
  },
  {
    name: "Hotel Golden",
    type: "Hotel",
    location: {
      city: "Nagpur",
      state: "Maharashtra",
      country: "India",
    },
    address: "Central Avenue, Nagpur, Maharashtra 440001",
    amenities: ["Wi-Fi", "Breakfast", "Restaurant"],
    roomTypes: [
      {
        type: "Standard Room",
        pricePerNight: 6000,
        availability: 30,
      },
      {
        type: "Deluxe Room",
        pricePerNight: 10000,
        availability: 12,
      },
    ],
    rating: 4.3,
    contactInfo: {
      phone: "+91 712 256 7890",
      email: "reservations@hotelgolden.com",
    },
  },
  {
    name: "Hotel Emerald",
    type: "Hotel",
    location: {
      city: "Kolkata",
      state: "West Bengal",
      country: "India",
    },
    address: "Park Street, Kolkata, West Bengal 700016",
    amenities: ["Wi-Fi", "Breakfast", "Spa", "Restaurant"],
    roomTypes: [
      {
        type: "Standard Room",
        pricePerNight: 9000,
        availability: 15,
      },
      {
        type: "Luxury Suite",
        pricePerNight: 20000,
        availability: 5,
      },
    ],
    rating: 4.5,
    contactInfo: {
      phone: "+91 33 2229 1234",
      email: "reservations@hotelemerald.com",
    },
  },
  {
    name: "Hotel Regency",
    type: "Hotel",
    location: {
      city: "Bhubaneswar",
      state: "Odisha",
      country: "India",
    },
    address: "Janpath, Bhubaneswar, Odisha 751001",
    amenities: ["Wi-Fi", "Breakfast", "Swimming Pool", "Restaurant"],
    roomTypes: [
      {
        type: "Deluxe Room",
        pricePerNight: 8000,
        availability: 20,
      },
      {
        type: "Suite",
        pricePerNight: 15000,
        availability: 8,
      },
    ],
    rating: 4.4,
    contactInfo: {
      phone: "+91 674 254 8000",
      email: "reservations@hotelregency.com",
    },
  },
  {
    name: "Hotel Summit",
    type: "Hotel",
    location: {
      city: "Gangtok",
      state: "Sikkim",
      country: "India",
    },
    address: "MG Road, Gangtok, Sikkim 737101",
    amenities: ["Wi-Fi", "Breakfast", "Restaurant"],
    roomTypes: [
      {
        type: "Standard Room",
        pricePerNight: 7000,
        availability: 18,
      },
      {
        type: "Deluxe Room",
        pricePerNight: 12000,
        availability: 6,
      },
    ],
    rating: 4.5,
    contactInfo: {
      phone: "+91 3592 204 555",
      email: "reservations@hotelsummit.com",
    },
  },
  {
    name: "Trivandrum Grand Hotel",
    type: "Hotel",
    location: {
      city: "Thiruvananthapuram",
      state: "Kerala",
      country: "India",
    },
    address: "5 MG Road, Thiruvananthapuram, Kerala - 695001",
    amenities: ["Wi-Fi", "Breakfast", "Swimming Pool", "Restaurant", "Spa"],
    roomTypes: [
      {
        type: "Deluxe Room",
        pricePerNight: 7000,
        availability: 15,
      },
      {
        type: "Suite",
        pricePerNight: 12000,
        availability: 5,
      },
    ],
    rating: 4.6,
    contactInfo: {
      phone: "+91-471-1234567",
      email: "info@trivandrumgrandhotel.com",
    },
  },
  {
    name: "City Inn Thiruvananthapuram",
    type: "Hotel",
    location: {
      city: "Thiruvananthapuram",
      state: "Kerala",
      country: "India",
    },
    address: "8 East Fort, Thiruvananthapuram, Kerala - 695023",
    amenities: ["Wi-Fi", "Breakfast", "24/7 Reception"],
    roomTypes: [
      {
        type: "Standard Room",
        pricePerNight: 3000,
        availability: 30,
      },
      {
        type: "Superior Room",
        pricePerNight: 5000,
        availability: 10,
      },
    ],
    rating: 3.5,
    contactInfo: {
      phone: "+91-471-2345678",
      email: "contact@cityinnthiruvananthapuram.com",
    },
  },
  {
    name: "Business Park Suites",
    type: "Hotel",
    location: {
      city: "Thiruvananthapuram",
      state: "Kerala",
      country: "India",
    },
    address: "22 Kowdiar, Thiruvananthapuram, Kerala - 695003",
    amenities: ["Wi-Fi", "Business Center", "Meeting Rooms", "Restaurant"],
    roomTypes: [
      {
        type: "Business Suite",
        pricePerNight: 9000,
        availability: 12,
      },
      {
        type: "Executive Suite",
        pricePerNight: 15000,
        availability: 6,
      },
    ],
    rating: 4.2,
    contactInfo: {
      phone: "+91-471-3456789",
      email: "reservations@businessparksuites.com",
    },
  },
  {
    name: "Kochi Marina Hotel",
    type: "Hotel",
    location: {
      city: "Kochi",
      state: "Kerala",
      country: "India",
    },
    address: "12 Marine Drive, Kochi, Kerala - 682031",
    amenities: ["Wi-Fi", "Swimming Pool", "Gym", "Restaurant", "Bar"],
    roomTypes: [
      {
        type: "Deluxe Room",
        pricePerNight: 8000,
        availability: 20,
      },
      {
        type: "Sea View Suite",
        pricePerNight: 14000,
        availability: 8,
      },
    ],
    rating: 4.7,
    contactInfo: {
      phone: "+91-484-1234567",
      email: "info@kochimarina.com",
    },
  },
  {
    name: "Kochi Budget Stay",
    type: "Hotel",
    location: {
      city: "Kochi",
      state: "Kerala",
      country: "India",
    },
    address: "45 Ernakulam, Kochi, Kerala - 682018",
    amenities: ["Wi-Fi", "24/7 Reception"],
    roomTypes: [
      {
        type: "Standard Room",
        pricePerNight: 2000,
        availability: 25,
      },
      {
        type: "Deluxe Room",
        pricePerNight: 4000,
        availability: 15,
      },
    ],
    rating: 3.6,
    contactInfo: {
      phone: "+91-484-2345678",
      email: "contact@kochibudgetstay.com",
    },
  },
  {
    name: "Corporate Retreat Kochi",
    type: "Hotel",
    location: {
      city: "Kochi",
      state: "Kerala",
      country: "India",
    },
    address: "78 Kaloor, Kochi, Kerala - 682017",
    amenities: ["Wi-Fi", "Business Center", "Meeting Rooms", "Restaurant"],
    roomTypes: [
      {
        type: "Executive Room",
        pricePerNight: 6000,
        availability: 18,
      },
      {
        type: "Conference Suite",
        pricePerNight: 11000,
        availability: 7,
      },
    ],
    rating: 4.4,
    contactInfo: {
      phone: "+91-484-3456789",
      email: "info@corporateretreatkoch.com",
    },
  },
  {
    name: "Bengaluru Palace Hotel",
    type: "Hotel",
    location: {
      city: "Bengaluru",
      state: "Karnataka",
      country: "India",
    },
    address: "5 Palace Road, Bengaluru, Karnataka - 560001",
    amenities: ["Wi-Fi", "Swimming Pool", "Gym", "Restaurant", "Spa"],
    roomTypes: [
      {
        type: "Deluxe Room",
        pricePerNight: 9000,
        availability: 25,
      },
      {
        type: "Royal Suite",
        pricePerNight: 16000,
        availability: 6,
      },
    ],
    rating: 4.5,
    contactInfo: {
      phone: "+91-80-22225555",
      email: "info@bengalurupalacehotel.com",
    },
  },
  {
    name: "Garden City Inn",
    type: "Hotel",
    location: {
      city: "Bengaluru",
      state: "Karnataka",
      country: "India",
    },
    address: "10 MG Road, Bengaluru, Karnataka - 560008",
    amenities: ["Wi-Fi", "Breakfast", "24/7 Reception"],
    roomTypes: [
      {
        type: "Standard Room",
        pricePerNight: 4000,
        availability: 20,
      },
      {
        type: "Executive Room",
        pricePerNight: 7000,
        availability: 12,
      },
    ],
    rating: 4.0,
    contactInfo: {
      phone: "+91-80-23456789",
      email: "contact@gardencityinn.com",
    },
  },
  {
    name: "Coorg Hilltop Resort",
    type: "Resort",
    location: {
      city: "Madikeri",
      state: "Karnataka",
      country: "India",
    },
    address: "Coorg Hill, Madikeri, Karnataka - 571201",
    amenities: ["Wi-Fi", "Restaurant", "Spa", "Outdoor Activities"],
    roomTypes: [
      {
        type: "Mountain View Cottage",
        pricePerNight: 12000,
        availability: 10,
      },
      {
        type: "Luxury Villa",
        pricePerNight: 20000,
        availability: 4,
      },
    ],
    rating: 4.8,
    contactInfo: {
      phone: "+91-8272-222333",
      email: "info@coorghilltopresort.com",
    },
  },
  {
    name: "Mysuru Heritage Hotel",
    type: "Hotel",
    location: {
      city: "Mysuru",
      state: "Karnataka",
      country: "India",
    },
    address: "27 JLB Road, Mysuru, Karnataka - 570001",
    amenities: ["Wi-Fi", "Breakfast", "Tour Desk", "Restaurant"],
    roomTypes: [
      {
        type: "Classic Room",
        pricePerNight: 5000,
        availability: 15,
      },
      {
        type: "Heritage Suite",
        pricePerNight: 9000,
        availability: 8,
      },
    ],
    rating: 4.3,
    contactInfo: {
      phone: "+91-821-1234567",
      email: "reservations@mysuruheritagehotel.com",
    },
  },
  {
    name: "Hubli Business Suites",
    type: "Hotel",
    location: {
      city: "Hubli",
      state: "Karnataka",
      country: "India",
    },
    address: "8 Deshpande Layout, Hubli, Karnataka - 580029",
    amenities: ["Wi-Fi", "Business Center", "Meeting Rooms", "Restaurant"],
    roomTypes: [
      {
        type: "Business Room",
        pricePerNight: 3500,
        availability: 22,
      },
      {
        type: "Conference Suite",
        pricePerNight: 6000,
        availability: 10,
      },
    ],
    rating: 4.1,
    contactInfo: {
      phone: "+91-836-2345678",
      email: "info@hublibusinesssuites.com",
    },
  },
  {
    name: "Bengaluru Budget Stay",
    type: "Hotel",
    location: {
      city: "Bengaluru",
      state: "Karnataka",
      country: "India",
    },
    address: "45 Wilson Garden, Bengaluru, Karnataka - 560027",
    amenities: ["Wi-Fi", "24/7 Reception"],
    roomTypes: [
      {
        type: "Economy Room",
        pricePerNight: 2500,
        availability: 30,
      },
      {
        type: "Standard Room",
        pricePerNight: 4000,
        availability: 15,
      },
    ],
    rating: 3.8,
    contactInfo: {
      phone: "+91-80-34567890",
      email: "contact@bengalurubudgetstay.com",
    },
  },
  {
    name: "Hyderabad Grand Hotel",
    type: "Hotel",
    location: {
      city: "Hyderabad",
      state: "Telangana",
      country: "India",
    },
    address: "123 MG Road, Hyderabad, Telangana - 500001",
    amenities: ["Wi-Fi", "Swimming Pool", "Gym", "Restaurant", "Bar"],
    roomTypes: [
      {
        type: "Deluxe Room",
        pricePerNight: 8500,
        availability: 30,
      },
      {
        type: "Executive Suite",
        pricePerNight: 14000,
        availability: 12,
      },
    ],
    rating: 4.6,
    contactInfo: {
      phone: "+91-40-23456789",
      email: "info@hyderabadgrandhotel.com",
    },
  },
  {
    name: "City Center Inn",
    type: "Hotel",
    location: {
      city: "Hyderabad",
      state: "Telangana",
      country: "India",
    },
    address: "10 Park Lane, Hyderabad, Telangana - 500018",
    amenities: ["Wi-Fi", "Breakfast", "24/7 Reception", "Parking"],
    roomTypes: [
      {
        type: "Standard Room",
        pricePerNight: 3000,
        availability: 20,
      },
      {
        type: "Superior Room",
        pricePerNight: 5500,
        availability: 15,
      },
    ],
    rating: 4.2,
    contactInfo: {
      phone: "+91-40-56789012",
      email: "contact@citycenterinn.com",
    },
  },
  {
    name: "Warangal Heritage Resort",
    type: "Resort",
    location: {
      city: "Warangal",
      state: "Telangana",
      country: "India",
    },
    address: "42 Heritage Lane, Warangal, Telangana - 506002",
    amenities: ["Wi-Fi", "Restaurant", "Spa", "Outdoor Pool"],
    roomTypes: [
      {
        type: "Garden View Room",
        pricePerNight: 10000,
        availability: 8,
      },
      {
        type: "Luxury Suite",
        pricePerNight: 18000,
        availability: 5,
      },
    ],
    rating: 4.7,
    contactInfo: {
      phone: "+91-870-2345678",
      email: "info@warangalheritageresort.com",
    },
  },
  {
    name: "Nizamabad Business Hotel",
    type: "Hotel",
    location: {
      city: "Nizamabad",
      state: "Telangana",
      country: "India",
    },
    address: "55 Main Road, Nizamabad, Telangana - 503001",
    amenities: ["Wi-Fi", "Business Center", "Meeting Rooms", "Restaurant"],
    roomTypes: [
      {
        type: "Business Room",
        pricePerNight: 4000,
        availability: 18,
      },
      {
        type: "Conference Suite",
        pricePerNight: 7000,
        availability: 6,
      },
    ],
    rating: 4.1,
    contactInfo: {
      phone: "+91-846-1234567",
      email: "info@nizamabadbusinesshotel.com",
    },
  },
  {
    name: "Kothagudem Guest House",
    type: "Guest House",
    location: {
      city: "Kothagudem",
      state: "Telangana",
      country: "India",
    },
    address: "34 Guest House Lane, Kothagudem, Telangana - 507101",
    amenities: ["Wi-Fi", "Breakfast", "Parking"],
    roomTypes: [
      {
        type: "Standard Room",
        pricePerNight: 2500,
        availability: 25,
      },
      {
        type: "Deluxe Room",
        pricePerNight: 4000,
        availability: 10,
      },
    ],
    rating: 3.9,
    contactInfo: {
      phone: "+91-874-2345678",
      email: "contact@kothagudemguesthouse.com",
    },
  },
  {
    name: "Sangareddy Lodge",
    type: "Lodge",
    location: {
      city: "Sangareddy",
      state: "Telangana",
      country: "India",
    },
    address: "18 Main Street, Sangareddy, Telangana - 502001",
    amenities: ["Wi-Fi", "24/7 Reception", "Parking"],
    roomTypes: [
      {
        type: "Economy Room",
        pricePerNight: 2000,
        availability: 30,
      },
      {
        type: "Standard Room",
        pricePerNight: 3500,
        availability: 12,
      },
    ],
    rating: 3.7,
    contactInfo: {
      phone: "+91-845-2345678",
      email: "info@sangareddylodge.com",
    },
  },
  {
    name: "Vijayawada Grand Hotel",
    type: "Hotel",
    location: {
      city: "Vijayawada",
      state: "Andhra Pradesh",
      country: "India",
    },
    address: "45 MG Road, Vijayawada, Andhra Pradesh - 520001",
    amenities: ["Wi-Fi", "Restaurant", "Gym", "Swimming Pool", "Spa"],
    roomTypes: [
      {
        type: "Deluxe Room",
        pricePerNight: 7500,
        availability: 25,
      },
      {
        type: "Suite",
        pricePerNight: 13000,
        availability: 10,
      },
    ],
    rating: 4.5,
    contactInfo: {
      phone: "+91-866-2345678",
      email: "info@vijayawadagrandhotel.com",
    },
  },
  {
    name: "Visakhapatnam Bay Resort",
    type: "Resort",
    location: {
      city: "Visakhapatnam",
      state: "Andhra Pradesh",
      country: "India",
    },
    address: "78 Beach Road, Visakhapatnam, Andhra Pradesh - 530001",
    amenities: ["Wi-Fi", "Beach Access", "Restaurant", "Pool", "Spa"],
    roomTypes: [
      {
        type: "Sea View Room",
        pricePerNight: 12000,
        availability: 15,
      },
      {
        type: "Luxury Suite",
        pricePerNight: 20000,
        availability: 8,
      },
    ],
    rating: 4.8,
    contactInfo: {
      phone: "+91-891-2345678",
      email: "contact@visakhapatnambayresort.com",
    },
  },
  {
    name: "Tirupati Comfort Inn",
    type: "Hotel",
    location: {
      city: "Tirupati",
      state: "Andhra Pradesh",
      country: "India",
    },
    address: "12 Temple Street, Tirupati, Andhra Pradesh - 517501",
    amenities: ["Wi-Fi", "Breakfast", "Parking", "24/7 Reception"],
    roomTypes: [
      {
        type: "Standard Room",
        pricePerNight: 3500,
        availability: 20,
      },
      {
        type: "Deluxe Room",
        pricePerNight: 6000,
        availability: 10,
      },
    ],
    rating: 4.2,
    contactInfo: {
      phone: "+91-877-2345678",
      email: "info@tirupaticomfortinn.com",
    },
  },
  {
    name: "Kakinada Heritage Lodge",
    type: "Lodge",
    location: {
      city: "Kakinada",
      state: "Andhra Pradesh",
      country: "India",
    },
    address: "23 Main Road, Kakinada, Andhra Pradesh - 533001",
    amenities: ["Wi-Fi", "Parking", "24/7 Reception"],
    roomTypes: [
      {
        type: "Economy Room",
        pricePerNight: 2500,
        availability: 25,
      },
      {
        type: "Standard Room",
        pricePerNight: 4000,
        availability: 12,
      },
    ],
    rating: 3.8,
    contactInfo: {
      phone: "+91-884-2345678",
      email: "contact@kakinadaheritagelodge.com",
    },
  },
  {
    name: "Nellore Business Hotel",
    type: "Hotel",
    location: {
      city: "Nellore",
      state: "Andhra Pradesh",
      country: "India",
    },
    address: "9 Commercial Street, Nellore, Andhra Pradesh - 524001",
    amenities: ["Wi-Fi", "Business Center", "Restaurant", "Parking"],
    roomTypes: [
      {
        type: "Business Room",
        pricePerNight: 4000,
        availability: 18,
      },
      {
        type: "Conference Suite",
        pricePerNight: 7000,
        availability: 6,
      },
    ],
    rating: 4.1,
    contactInfo: {
      phone: "+91-861-2345678",
      email: "info@nellorebusinesshotel.com",
    },
  },
  {
    name: "Itanagar Hilltop Hotel",
    type: "Hotel",
    location: {
      city: "Itanagar",
      state: "Arunachal Pradesh",
      country: "India",
    },
    address: "34 Hill Street, Itanagar, Arunachal Pradesh - 791111",
    amenities: ["Wi-Fi", "Restaurant", "Parking", "Garden"],
    roomTypes: [
      {
        type: "Standard Room",
        pricePerNight: 3500,
        availability: 20,
      },
      {
        type: "Deluxe Room",
        pricePerNight: 6000,
        availability: 10,
      },
    ],
    rating: 4.0,
    contactInfo: {
      phone: "+91-360-2345678",
      email: "info@itanagarhilltophotel.com",
    },
  },
  {
    name: "Tawang Monastery Retreat",
    type: "Resort",
    location: {
      city: "Tawang",
      state: "Arunachal Pradesh",
      country: "India",
    },
    address: "12 Monastery Road, Tawang, Arunachal Pradesh - 790104",
    amenities: ["Wi-Fi", "Restaurant", "Spa", "Mountain View"],
    roomTypes: [
      {
        type: "Mountain View Room",
        pricePerNight: 12000,
        availability: 15,
      },
      {
        type: "Suite",
        pricePerNight: 20000,
        availability: 5,
      },
    ],
    rating: 4.7,
    contactInfo: {
      phone: "+91-380-2345678",
      email: "contact@tawangmonasteryretreat.com",
    },
  },
  {
    name: "Bomdila Heritage Inn",
    type: "Lodge",
    location: {
      city: "Bomdila",
      state: "Arunachal Pradesh",
      country: "India",
    },
    address: "56 Market Road, Bomdila, Arunachal Pradesh - 790001",
    amenities: ["Wi-Fi", "Restaurant", "Parking"],
    roomTypes: [
      {
        type: "Standard Room",
        pricePerNight: 3000,
        availability: 25,
      },
      {
        type: "Deluxe Room",
        pricePerNight: 5000,
        availability: 12,
      },
    ],
    rating: 4.2,
    contactInfo: {
      phone: "+91-379-2345678",
      email: "info@bomdilaheritageinn.com",
    },
  },
  {
    name: "Pasighat Riverside Resort",
    type: "Resort",
    location: {
      city: "Pasighat",
      state: "Arunachal Pradesh",
      country: "India",
    },
    address: "78 Riverbank Road, Pasighat, Arunachal Pradesh - 791102",
    amenities: ["Wi-Fi", "Restaurant", "Fishing", "Boat Rides"],
    roomTypes: [
      {
        type: "Riverside Room",
        pricePerNight: 8000,
        availability: 20,
      },
      {
        type: "Luxury Suite",
        pricePerNight: 15000,
        availability: 8,
      },
    ],
    rating: 4.5,
    contactInfo: {
      phone: "+91-369-2345678",
      email: "contact@pasighatriversideresort.com",
    },
  },
  {
    name: "Ziro Valley Lodge",
    type: "Lodge",
    location: {
      city: "Ziro",
      state: "Arunachal Pradesh",
      country: "India",
    },
    address: "9 Valley View Road, Ziro, Arunachal Pradesh - 791120",
    amenities: ["Wi-Fi", "Parking", "24/7 Reception"],
    roomTypes: [
      {
        type: "Economy Room",
        pricePerNight: 2500,
        availability: 30,
      },
      {
        type: "Standard Room",
        pricePerNight: 4000,
        availability: 15,
      },
    ],
    rating: 3.9,
    contactInfo: {
      phone: "+91-374-2345678",
      email: "contact@zirovalleylodge.com",
    },
  },
  {
    name: "Guwahati Grand Hotel",
    type: "Hotel",
    location: {
      city: "Guwahati",
      state: "Assam",
      country: "India",
    },
    address: "123 Hotel Lane, Guwahati, Assam - 781001",
    amenities: ["Wi-Fi", "Breakfast", "Gym", "Restaurant"],
    roomTypes: [
      {
        type: "Standard Room",
        pricePerNight: 3000,
        availability: 15,
      },
      {
        type: "Executive Suite",
        pricePerNight: 6000,
        availability: 5,
      },
    ],
    rating: 4.2,
    contactInfo: {
      phone: "+91 361 234 5678",
      email: "info@guwahatigrand.com",
    },
  },
  {
    name: "Assam Heritage Inn",
    type: "Hotel",
    location: {
      city: "Dibrugarh",
      state: "Assam",
      country: "India",
    },
    address: "456 Heritage Street, Dibrugarh, Assam - 786001",
    amenities: ["Wi-Fi", "Breakfast", "Parking", "Spa"],
    roomTypes: [
      {
        type: "Heritage Room",
        pricePerNight: 3500,
        availability: 12,
      },
      {
        type: "Family Suite",
        pricePerNight: 7000,
        availability: 4,
      },
    ],
    rating: 4.5,
    contactInfo: {
      phone: "+91 374 123 4567",
      email: "contact@assamheritage.com",
    },
  },
  {
    name: "Silchar Stay Inn",
    type: "Hotel",
    location: {
      city: "Silchar",
      state: "Assam",
      country: "India",
    },
    address: "789 Stay Avenue, Silchar, Assam - 788001",
    amenities: ["Wi-Fi", "Breakfast", "Laundry", "Restaurant"],
    roomTypes: [
      {
        type: "Economy Room",
        pricePerNight: 2500,
        availability: 20,
      },
      {
        type: "Deluxe Room",
        pricePerNight: 5000,
        availability: 6,
      },
    ],
    rating: 4.1,
    contactInfo: {
      phone: "+91 3842 345 678",
      email: "reservations@silcharstay.com",
    },
  },
  {
    name: "Patna Palace Hotel",
    type: "Hotel",
    location: {
      city: "Patna",
      state: "Bihar",
      country: "India",
    },
    address: "101 Palace Road, Patna, Bihar - 800001",
    amenities: ["Wi-Fi", "Breakfast", "Gym", "Restaurant"],
    roomTypes: [
      {
        type: "Standard Room",
        pricePerNight: 2800,
        availability: 18,
      },
      {
        type: "Suite",
        pricePerNight: 5500,
        availability: 7,
      },
    ],
    rating: 4.3,
    contactInfo: {
      phone: "+91 612 234 5678",
      email: "info@patnapalace.com",
    },
  },
  {
    name: "Gaya Heritage Hotel",
    type: "Hotel",
    location: {
      city: "Gaya",
      state: "Bihar",
      country: "India",
    },
    address: "202 Heritage Lane, Gaya, Bihar - 823001",
    amenities: ["Wi-Fi", "Breakfast", "Parking", "Spa"],
    roomTypes: [
      {
        type: "Heritage Room",
        pricePerNight: 3200,
        availability: 10,
      },
      {
        type: "Family Suite",
        pricePerNight: 6500,
        availability: 3,
      },
    ],
    rating: 4.4,
    contactInfo: {
      phone: "+91 631 123 4567",
      email: "contact@gayaheritage.com",
    },
  },
  {
    name: "Bhagalpur Stay Inn",
    type: "Hotel",
    location: {
      city: "Bhagalpur",
      state: "Bihar",
      country: "India",
    },
    address: "303 Stay Street, Bhagalpur, Bihar - 812001",
    amenities: ["Wi-Fi", "Breakfast", "Laundry", "Restaurant"],
    roomTypes: [
      {
        type: "Economy Room",
        pricePerNight: 2400,
        availability: 22,
      },
      {
        type: "Deluxe Room",
        pricePerNight: 5000,
        availability: 8,
      },
    ],
    rating: 4.2,
    contactInfo: {
      phone: "+91 641 234 5678",
      email: "reservations@bhagalpurstay.com",
    },
  },
  {
    name: "Raipur Grand Hotel",
    type: "Hotel",
    location: {
      city: "Raipur",
      state: "Chhattisgarh",
      country: "India",
    },
    address: "404 Grand Road, Raipur, Chhattisgarh - 492001",
    amenities: ["Wi-Fi", "Breakfast", "Swimming Pool", "Restaurant"],
    roomTypes: [
      {
        type: "Executive Room",
        pricePerNight: 3500,
        availability: 15,
      },
      {
        type: "Luxury Suite",
        pricePerNight: 7000,
        availability: 5,
      },
    ],
    rating: 4.5,
    contactInfo: {
      phone: "+91 771 123 4567",
      email: "info@raipurgrand.com",
    },
  },
  {
    name: "Bilaspur Heritage Inn",
    type: "Hotel",
    location: {
      city: "Bilaspur",
      state: "Chhattisgarh",
      country: "India",
    },
    address: "505 Heritage Avenue, Bilaspur, Chhattisgarh - 495001",
    amenities: ["Wi-Fi", "Breakfast", "Gym", "Spa"],
    roomTypes: [
      {
        type: "Standard Room",
        pricePerNight: 3000,
        availability: 12,
      },
      {
        type: "Family Suite",
        pricePerNight: 6000,
        availability: 6,
      },
    ],
    rating: 4.3,
    contactInfo: {
      phone: "+91 775 234 5678",
      email: "contact@bilaspurheritage.com",
    },
  },
  {
    name: "Korba Stay Hotel",
    type: "Hotel",
    location: {
      city: "Korba",
      state: "Chhattisgarh",
      country: "India",
    },
    address: "606 Stay Road, Korba, Chhattisgarh - 495677",
    amenities: ["Wi-Fi", "Breakfast", "Parking", "Laundry"],
    roomTypes: [
      {
        type: "Deluxe Room",
        pricePerNight: 2700,
        availability: 20,
      },
      {
        type: "Suite",
        pricePerNight: 5500,
        availability: 4,
      },
    ],
    rating: 4.2,
    contactInfo: {
      phone: "+91 782 345 6789",
      email: "reservations@korbastay.com",
    },
  },
  {
    name: "Goa Beach Resort",
    type: "Resort",
    location: {
      city: "Panaji",
      state: "Goa",
      country: "India",
    },
    address: "123 Beach Road, Panaji, Goa - 403001",
    amenities: ["Wi-Fi", "Breakfast", "Swimming Pool", "Spa", "Beach Access"],
    roomTypes: [
      {
        type: "Standard Room",
        pricePerNight: 5000,
        availability: 25,
      },
      {
        type: "Sea View Suite",
        pricePerNight: 10000,
        availability: 10,
      },
    ],
    rating: 4.6,
    contactInfo: {
      phone: "+91 832 456 7890",
      email: "reservations@goabeachresort.com",
    },
  },
  {
    name: "Goa Heritage Hotel",
    type: "Hotel",
    location: {
      city: "Margao",
      state: "Goa",
      country: "India",
    },
    address: "456 Heritage Lane, Margao, Goa - 403601",
    amenities: ["Wi-Fi", "Breakfast", "Restaurant", "Parking"],
    roomTypes: [
      {
        type: "Classic Room",
        pricePerNight: 3500,
        availability: 18,
      },
      {
        type: "Deluxe Room",
        pricePerNight: 6000,
        availability: 8,
      },
    ],
    rating: 4.4,
    contactInfo: {
      phone: "+91 832 567 8901",
      email: "info@goaheritagehotel.com",
    },
  },
  {
    name: "Goa Adventure Lodge",
    type: "Lodge",
    location: {
      city: "Calangute",
      state: "Goa",
      country: "India",
    },
    address: "789 Adventure Street, Calangute, Goa - 403516",
    amenities: ["Wi-Fi", "Breakfast", "Adventure Activities", "Parking"],
    roomTypes: [
      {
        type: "Basic Room",
        pricePerNight: 2000,
        availability: 30,
      },
      {
        type: "Family Suite",
        pricePerNight: 5000,
        availability: 12,
      },
    ],
    rating: 4.1,
    contactInfo: {
      phone: "+91 832 678 9012",
      email: "bookings@goaadventurelodge.com",
    },
  },
  {
    name: "Gujarat Grand Hotel",
    type: "Hotel",
    location: {
      city: "Ahmedabad",
      state: "Gujarat",
      country: "India",
    },
    address: "101 Grand Avenue, Ahmedabad, Gujarat - 380001",
    amenities: ["Wi-Fi", "Breakfast", "Restaurant", "Gym"],
    roomTypes: [
      {
        type: "Standard Room",
        pricePerNight: 4500,
        availability: 20,
      },
      {
        type: "Executive Suite",
        pricePerNight: 9000,
        availability: 5,
      },
    ],
    rating: 4.5,
    contactInfo: {
      phone: "+91 79 2345 6789",
      email: "info@gujaratgrandhotel.com",
    },
  },
  {
    name: "Gujarat Palace Resort",
    type: "Resort",
    location: {
      city: "Gandhinagar",
      state: "Gujarat",
      country: "India",
    },
    address: "202 Palace Road, Gandhinagar, Gujarat - 382010",
    amenities: ["Wi-Fi", "Breakfast", "Swimming Pool", "Spa"],
    roomTypes: [
      {
        type: "Deluxe Room",
        pricePerNight: 6000,
        availability: 15,
      },
      {
        type: "Royal Suite",
        pricePerNight: 12000,
        availability: 7,
      },
    ],
    rating: 4.7,
    contactInfo: {
      phone: "+91 79 3456 7890",
      email: "reservations@gujaratpalaceresort.com",
    },
  },
  {
    name: "Gujarat Business Lodge",
    type: "Lodge",
    location: {
      city: "Surat",
      state: "Gujarat",
      country: "India",
    },
    address: "303 Business Complex, Surat, Gujarat - 395001",
    amenities: ["Wi-Fi", "Breakfast", "Conference Room", "Parking"],
    roomTypes: [
      {
        type: "Basic Room",
        pricePerNight: 2500,
        availability: 25,
      },
      {
        type: "Business Suite",
        pricePerNight: 5500,
        availability: 10,
      },
    ],
    rating: 4.2,
    contactInfo: {
      phone: "+91 261 456 7890",
      email: "contact@gujaratbusinesslodge.com",
    },
  },
  {
    name: "Haryana Luxury Inn",
    type: "Hotel",
    location: {
      city: "Gurgaon",
      state: "Haryana",
      country: "India",
    },
    address: "101 Luxury Lane, Gurgaon, Haryana - 122001",
    amenities: ["Wi-Fi", "Breakfast", "Gym", "Pool"],
    roomTypes: [
      {
        type: "Superior Room",
        pricePerNight: 5000,
        availability: 18,
      },
      {
        type: "Executive Suite",
        pricePerNight: 10000,
        availability: 6,
      },
    ],
    rating: 4.6,
    contactInfo: {
      phone: "+91 124 567 8901",
      email: "info@haryanaluxuryinn.com",
    },
  },
  {
    name: "Haryana Heritage Resort",
    type: "Resort",
    location: {
      city: "Ambala",
      state: "Haryana",
      country: "India",
    },
    address: "202 Heritage Road, Ambala, Haryana - 134001",
    amenities: ["Wi-Fi", "Breakfast", "Spa", "Garden"],
    roomTypes: [
      {
        type: "Deluxe Room",
        pricePerNight: 7000,
        availability: 12,
      },
      {
        type: "Luxury Suite",
        pricePerNight: 14000,
        availability: 4,
      },
    ],
    rating: 4.8,
    contactInfo: {
      phone: "+91 171 234 5678",
      email: "reservations@haryanaheritageresort.com",
    },
  },
  {
    name: "Haryana Business Lodge",
    type: "Lodge",
    location: {
      city: "Faridabad",
      state: "Haryana",
      country: "India",
    },
    address: "303 Business Complex, Faridabad, Haryana - 121001",
    amenities: ["Wi-Fi", "Breakfast", "Conference Room", "Parking"],
    roomTypes: [
      {
        type: "Standard Room",
        pricePerNight: 3000,
        availability: 22,
      },
      {
        type: "Business Suite",
        pricePerNight: 6000,
        availability: 8,
      },
    ],
    rating: 4.3,
    contactInfo: {
      phone: "+91 129 456 7890",
      email: "contact@haryanabusinesslodge.com",
    },
  },
  {
    name: "Himalayan Haven Hotel",
    type: "Hotel",
    location: {
      city: "Shimla",
      state: "Himachal Pradesh",
      country: "India",
    },
    address: "123 Hilltop Road, Shimla, Himachal Pradesh - 171001",
    amenities: ["Wi-Fi", "Breakfast", "Mountain View", "Restaurant"],
    roomTypes: [
      {
        type: "Deluxe Room",
        pricePerNight: 5500,
        availability: 15,
      },
      {
        type: "Family Suite",
        pricePerNight: 11000,
        availability: 5,
      },
    ],
    rating: 4.7,
    contactInfo: {
      phone: "+91 177 123 4567",
      email: "contact@himalayanhaven.com",
    },
  },
  {
    name: "Himachal Retreat Resort",
    type: "Resort",
    location: {
      city: "Manali",
      state: "Himachal Pradesh",
      country: "India",
    },
    address: "456 Snowfall Avenue, Manali, Himachal Pradesh - 175131",
    amenities: ["Wi-Fi", "Breakfast", "Spa", "Outdoor Activities"],
    roomTypes: [
      {
        type: "Standard Room",
        pricePerNight: 4000,
        availability: 20,
      },
      {
        type: "Luxury Chalet",
        pricePerNight: 9000,
        availability: 7,
      },
    ],
    rating: 4.9,
    contactInfo: {
      phone: "+91 1902 345 678",
      email: "bookings@himachalretreat.com",
    },
  },
  {
    name: "Mountain Lodge",
    type: "Lodge",
    location: {
      city: "Dharamshala",
      state: "Himachal Pradesh",
      country: "India",
    },
    address: "789 Scenic Point, Dharamshala, Himachal Pradesh - 176215",
    amenities: ["Wi-Fi", "Breakfast", "Library", "Tea House"],
    roomTypes: [
      {
        type: "Economy Room",
        pricePerNight: 2500,
        availability: 25,
      },
      {
        type: "Superior Room",
        pricePerNight: 5000,
        availability: 10,
      },
    ],
    rating: 4.5,
    contactInfo: {
      phone: "+91 1892 567 890",
      email: "info@mountainlodge.com",
    },
  },
  {
    name: "Ranchi Royal Hotel",
    type: "Hotel",
    location: {
      city: "Ranchi",
      state: "Jharkhand",
      country: "India",
    },
    address: "12 Main Road, Ranchi, Jharkhand - 834001",
    amenities: ["Wi-Fi", "Breakfast", "Restaurant", "Conference Room"],
    roomTypes: [
      {
        type: "Standard Room",
        pricePerNight: 3000,
        availability: 20,
      },
      {
        type: "Executive Suite",
        pricePerNight: 7000,
        availability: 8,
      },
    ],
    rating: 4.3,
    contactInfo: {
      phone: "+91 651 234 5678",
      email: "reservations@ranchoroyal.com",
    },
  },
  {
    name: "Jamshedpur Comfort Inn",
    type: "Hotel",
    location: {
      city: "Jamshedpur",
      state: "Jharkhand",
      country: "India",
    },
    address: "34 Steel City Road, Jamshedpur, Jharkhand - 831001",
    amenities: ["Wi-Fi", "Breakfast", "Fitness Center", "Restaurant"],
    roomTypes: [
      {
        type: "Deluxe Room",
        pricePerNight: 3500,
        availability: 25,
      },
      {
        type: "Luxury Suite",
        pricePerNight: 8000,
        availability: 6,
      },
    ],
    rating: 4.6,
    contactInfo: {
      phone: "+91 657 123 4567",
      email: "info@jamshedpurcomfortinn.com",
    },
  },
  {
    name: "Dhanbad Heritage Lodge",
    type: "Lodge",
    location: {
      city: "Dhanbad",
      state: "Jharkhand",
      country: "India",
    },
    address: "56 Industrial Area, Dhanbad, Jharkhand - 826001",
    amenities: ["Wi-Fi", "Breakfast", "Garden", "Restaurant"],
    roomTypes: [
      {
        type: "Standard Room",
        pricePerNight: 2500,
        availability: 30,
      },
      {
        type: "Family Suite",
        pricePerNight: 6000,
        availability: 5,
      },
    ],
    rating: 4.4,
    contactInfo: {
      phone: "+91 326 789 0123",
      email: "contact@dhanbadheritage.com",
    },
  },
  {
    name: "Bhopal Palace Hotel",
    type: "Hotel",
    location: {
      city: "Bhopal",
      state: "Madhya Pradesh",
      country: "India",
    },
    address: "5 Palace Road, Bhopal, Madhya Pradesh - 462001",
    amenities: ["Wi-Fi", "Breakfast", "Swimming Pool", "Restaurant", "Spa"],
    roomTypes: [
      {
        type: "Classic Room",
        pricePerNight: 4000,
        availability: 15,
      },
      {
        type: "Royal Suite",
        pricePerNight: 9000,
        availability: 4,
      },
    ],
    rating: 4.5,
    contactInfo: {
      phone: "+91 755 234 5678",
      email: "reservations@bhopalpalace.com",
    },
  },
  {
    name: "Indore Grand Inn",
    type: "Hotel",
    location: {
      city: "Indore",
      state: "Madhya Pradesh",
      country: "India",
    },
    address: "10 MG Road, Indore, Madhya Pradesh - 452001",
    amenities: [
      "Wi-Fi",
      "Breakfast",
      "Fitness Center",
      "Restaurant",
      "Conference Room",
    ],
    roomTypes: [
      {
        type: "Executive Room",
        pricePerNight: 3500,
        availability: 20,
      },
      {
        type: "Penthouse Suite",
        pricePerNight: 7500,
        availability: 6,
      },
    ],
    rating: 4.3,
    contactInfo: {
      phone: "+91 731 567 8901",
      email: "info@indoregrandinn.com",
    },
  },
  {
    name: "Jabalpur Heritage Hotel",
    type: "Hotel",
    location: {
      city: "Jabalpur",
      state: "Madhya Pradesh",
      country: "India",
    },
    address: "22 Fort Road, Jabalpur, Madhya Pradesh - 482001",
    amenities: ["Wi-Fi", "Breakfast", "Restaurant", "Garden"],
    roomTypes: [
      {
        type: "Standard Room",
        pricePerNight: 2800,
        availability: 25,
      },
      {
        type: "Luxury Suite",
        pricePerNight: 6500,
        availability: 8,
      },
    ],
    rating: 4.4,
    contactInfo: {
      phone: "+91 761 234 5678",
      email: "contact@jabalpurheritage.com",
    },
  },
  {
    name: "Mumbai Luxury Suites",
    type: "Hotel",
    location: {
      city: "Mumbai",
      state: "Maharashtra",
      country: "India",
    },
    address: "123 Marine Drive, Mumbai, Maharashtra - 400020",
    amenities: ["Wi-Fi", "Breakfast", "Swimming Pool", "Restaurant", "Spa"],
    roomTypes: [
      {
        type: "Deluxe Room",
        pricePerNight: 12000,
        availability: 10,
      },
      {
        type: "Presidential Suite",
        pricePerNight: 25000,
        availability: 3,
      },
    ],
    rating: 4.7,
    contactInfo: {
      phone: "+91 22 2345 6789",
      email: "info@mumbailuxurysuites.com",
    },
  },
  {
    name: "Pune Comfort Inn",
    type: "Hotel",
    location: {
      city: "Pune",
      state: "Maharashtra",
      country: "India",
    },
    address: "45 Bund Garden Road, Pune, Maharashtra - 411001",
    amenities: ["Wi-Fi", "Breakfast", "Fitness Center", "Restaurant"],
    roomTypes: [
      {
        type: "Superior Room",
        pricePerNight: 5000,
        availability: 20,
      },
      {
        type: "Executive Suite",
        pricePerNight: 8500,
        availability: 5,
      },
    ],
    rating: 4.2,
    contactInfo: {
      phone: "+91 20 2345 6789",
      email: "contact@punecomfortinn.com",
    },
  },
  {
    name: "Nagpur Heritage Hotel",
    type: "Hotel",
    location: {
      city: "Nagpur",
      state: "Maharashtra",
      country: "India",
    },
    address: "78 Central Avenue, Nagpur, Maharashtra - 440001",
    amenities: ["Wi-Fi", "Breakfast", "Restaurant", "Garden"],
    roomTypes: [
      {
        type: "Standard Room",
        pricePerNight: 3500,
        availability: 30,
      },
      {
        type: "Royal Suite",
        pricePerNight: 7000,
        availability: 7,
      },
    ],
    rating: 4.3,
    contactInfo: {
      phone: "+91 712 234 5678",
      email: "reservations@nagpurheritage.com",
    },
  },
  {
    name: "Hotel Imphal",
    type: "Hotel",
    location: {
      city: "Imphal",
      state: "Manipur",
      country: "India",
    },
    address: "Thangal Bazaar, Imphal, Manipur 795001",
    amenities: ["Wi-Fi", "Breakfast", "Restaurant"],
    rating: 3.5,
    contactInfo: {
      phone: "+91 385 245 0821",
      email: "info@hotelimphal.com",
    },
  },
  {
    name: "Classic Hotel",
    type: "Hotel",
    location: {
      city: "Imphal",
      state: "Manipur",
      country: "India",
    },
    address: "1st Floor, Classic Complex, Imphal, Manipur 795001",
    amenities: ["Wi-Fi", "Breakfast", "Parking"],
    rating: 4.0,
    contactInfo: {
      phone: "+91 385 244 5155",
      email: "classic@manipur.com",
    },
  },
  {
    name: "Hotel Nirmala",
    type: "Hotel",
    location: {
      city: "Imphal",
      state: "Manipur",
      country: "India",
    },
    address: "Babupara, Imphal, Manipur 795001",
    amenities: ["Wi-Fi", "Breakfast", "Conference Room"],
    rating: 3.8,
    contactInfo: {
      phone: "+91 385 245 0550",
      email: "nirmala@hotelmanipur.com",
    },
  },
  {
    name: "Hotel Royal",
    type: "Hotel",
    location: {
      city: "Imphal",
      state: "Manipur",
      country: "India",
    },
    address: "Sanjenthong, Imphal, Manipur 795001",
    amenities: ["Wi-Fi", "Breakfast", "Restaurant", "Bar"],
    rating: 3.9,
    contactInfo: {
      phone: "+91 385 245 1880",
      email: "royal@hotelmanipur.com",
    },
  },
  {
    name: "Hotel De Luxe",
    type: "Hotel",
    location: {
      city: "Imphal",
      state: "Manipur",
      country: "India",
    },
    address: "Keishampat, Imphal, Manipur 795001",
    amenities: ["Wi-Fi", "Breakfast", "Restaurant"],
    rating: 4.2,
    contactInfo: {
      phone: "+91 385 245 3440",
      email: "deluxe@hotelmanipur.com",
    },
  },
  {
    name: "The Park Kolkata",
    type: "Hotel",
    location: {
      city: "Kolkata",
      state: "West Bengal",
      country: "India",
    },
    address: "17 Park Street, Kolkata, West Bengal 700016",
    amenities: ["Wi-Fi", "Breakfast", "Swimming Pool", "Restaurant", "Gym"],
    rating: 4.2,
    contactInfo: {
      phone: "+91 33 2249 5000",
      email: "info@theparkhotels.com",
    },
  },
  {
    name: "Taj Bengal",
    type: "Hotel",
    location: {
      city: "Kolkata",
      state: "West Bengal",
      country: "India",
    },
    address: "34B Belvedere Road, Kolkata, West Bengal 700027",
    amenities: ["Wi-Fi", "Breakfast", "Swimming Pool", "Spa", "Restaurant"],
    rating: 4.6,
    contactInfo: {
      phone: "+91 33 6612 3456",
      email: "bengal@tajhotels.com",
    },
  },
  {
    name: "Hotel Hindustan International",
    type: "Hotel",
    location: {
      city: "Kolkata",
      state: "West Bengal",
      country: "India",
    },
    address: "235/1 A.J.C. Bose Road, Kolkata, West Bengal 700020",
    amenities: ["Wi-Fi", "Breakfast", "Restaurant", "Conference Room"],
    rating: 4.0,
    contactInfo: {
      phone: "+91 33 2229 2565",
      email: "info@hihkolkata.com",
    },
  },
  {
    name: "The Oberoi Grand",
    type: "Hotel",
    location: {
      city: "Kolkata",
      state: "West Bengal",
      country: "India",
    },
    address: "15 Jawaharlal Nehru Road, Kolkata, West Bengal 700013",
    amenities: ["Wi-Fi", "Breakfast", "Swimming Pool", "Spa", "Restaurant"],
    rating: 4.7,
    contactInfo: {
      phone: "+91 33 2249 2323",
      email: "reservations@oberoigroup.com",
    },
  },
  {
    name: "Radisson Blu Hotel",
    type: "Hotel",
    location: {
      city: "Kolkata",
      state: "West Bengal",
      country: "India",
    },
    address: "1 Rainey Park, Kolkata, West Bengal 700019",
    amenities: ["Wi-Fi", "Breakfast", "Swimming Pool", "Restaurant", "Bar"],
    rating: 4.3,
    contactInfo: {
      phone: "+91 33 4000 1234",
      email: "info.kolkata@radisson.com",
    },
  },
  {
    name: "Hotel Lake Land",
    type: "Hotel",
    location: {
      city: "Darjeeling",
      state: "West Bengal",
      country: "India",
    },
    address: "21/1A, Gandhi Road, Darjeeling, West Bengal 734101",
    amenities: ["Wi-Fi", "Breakfast", "Restaurant"],
    rating: 3.9,
    contactInfo: {
      phone: "+91 354 225 4582",
      email: "info@hotellakeland.com",
    },
  },
  {
    name: "Aloha On The Ganges",
    type: "Hotel",
    location: {
      city: "Rishikesh",
      state: "Uttarakhand",
      country: "India",
    },
    address: "Village Jakhali, Rishikesh, Uttarakhand 249137",
    amenities: ["Wi-Fi", "Breakfast", "Swimming Pool", "Restaurant", "Spa"],
    rating: 4.5,
    contactInfo: {
      phone: "+91 135 243 1280",
      email: "info@aloharishikesh.com",
    },
  },
  {
    name: "The Claridges Nabha Residence",
    type: "Hotel",
    location: {
      city: "Mussoorie",
      state: "Uttarakhand",
      country: "India",
    },
    address: "Rajpur Road, Mussoorie, Uttarakhand 248001",
    amenities: ["Wi-Fi", "Breakfast", "Restaurant", "Conference Room"],
    rating: 4.3,
    contactInfo: {
      phone: "+91 135 263 3030",
      email: "reservations@theclaridges.com",
    },
  },
  {
    name: "Four Points by Sheraton",
    type: "Hotel",
    location: {
      city: "Dehradun",
      state: "Uttarakhand",
      country: "India",
    },
    address: "53/5, Rajpur Road, Dehradun, Uttarakhand 248001",
    amenities: ["Wi-Fi", "Breakfast", "Restaurant", "Fitness Center"],
    rating: 4.2,
    contactInfo: {
      phone: "+91 135 267 0011",
      email: "info@fourpoints.com",
    },
  },
  {
    name: "Ramada by Wyndham",
    type: "Hotel",
    location: {
      city: "Haridwar",
      state: "Uttarakhand",
      country: "India",
    },
    address: "Ramada Hotel, Haridwar, Uttarakhand 249401",
    amenities: ["Wi-Fi", "Breakfast", "Restaurant", "Spa"],
    rating: 4.1,
    contactInfo: {
      phone: "+91 1334 220 000",
      email: "info@ramadaharidwar.com",
    },
  },
  {
    name: "Hotel Savoy",
    type: "Hotel",
    location: {
      city: "Mussoorie",
      state: "Uttarakhand",
      country: "India",
    },
    address: "The Savoy Hotel, Mussoorie, Uttarakhand 248179",
    amenities: ["Wi-Fi", "Breakfast", "Restaurant", "Bar"],
    rating: 4.6,
    contactInfo: {
      phone: "+91 135 263 0181",
      email: "info@thesavoyhotel.com",
    },
  },
  {
    name: "The Taj Mahal Hotel",
    type: "Hotel",
    location: {
      city: "Agra",
      state: "Uttar Pradesh",
      country: "India",
    },
    address: "Taj East Gate Road, Agra, Uttar Pradesh 282001",
    amenities: ["Wi-Fi", "Breakfast", "Swimming Pool", "Restaurant", "Spa"],
    rating: 4.7,
    contactInfo: {
      phone: "+91 562 233 0800",
      email: "reservations@tajhotels.com",
    },
  },
  {
    name: "Radisson Blu Hotel",
    type: "Hotel",
    location: {
      city: "Lucknow",
      state: "Uttar Pradesh",
      country: "India",
    },
    address:
      "1st Floor, 8, Shaheed Path, Vibhuti Khand, Lucknow, Uttar Pradesh 226010",
    amenities: ["Wi-Fi", "Breakfast", "Restaurant", "Fitness Center"],
    rating: 4.5,
    contactInfo: {
      phone: "+91 522 405 5555",
      email: "info@radisson.com",
    },
  },
  {
    name: "The Westin",
    type: "Hotel",
    location: {
      city: "Noida",
      state: "Uttar Pradesh",
      country: "India",
    },
    address: "The Westin, Sector 18, Noida, Uttar Pradesh 201301",
    amenities: ["Wi-Fi", "Breakfast", "Restaurant", "Bar", "Spa"],
    rating: 4.6,
    contactInfo: {
      phone: "+91 120 450 5000",
      email: "reservations@westin.com",
    },
  },
  {
    name: "Hotel Clarks Shiraz",
    type: "Hotel",
    location: {
      city: "Agra",
      state: "Uttar Pradesh",
      country: "India",
    },
    address: "54 Taj Road, Agra, Uttar Pradesh 282001",
    amenities: ["Wi-Fi", "Breakfast", "Restaurant", "Conference Room"],
    rating: 4.3,
    contactInfo: {
      phone: "+91 562 222 0300",
      email: "reservations@clarkshotels.com",
    },
  },
  {
    name: "Jaypee Palace Hotel",
    type: "Hotel",
    location: {
      city: "Agra",
      state: "Uttar Pradesh",
      country: "India",
    },
    address: "Taj East Gate Road, Agra, Uttar Pradesh 282001",
    amenities: ["Wi-Fi", "Breakfast", "Swimming Pool", "Restaurant", "Spa"],
    rating: 4.4,
    contactInfo: {
      phone: "+91 562 233 0800",
      email: "info@jaypeehotels.com",
    },
  },
  {
    name: "Hotel Polo Towers",
    type: "Hotel",
    location: {
      city: "Agartala",
      state: "Tripura",
      country: "India",
    },
    address: "Polo Ground, Agartala, Tripura 799001",
    amenities: ["Wi-Fi", "Breakfast", "Restaurant", "Conference Room"],
    rating: 4.2,
    contactInfo: {
      phone: "+91 381 232 8000",
      email: "info@polotowers.com",
    },
  },
  {
    name: "Hotel Royal Cruise",
    type: "Hotel",
    location: {
      city: "Agartala",
      state: "Tripura",
      country: "India",
    },
    address: "Chandrapur, Agartala, Tripura 799008",
    amenities: ["Wi-Fi", "Breakfast", "Restaurant", "Room Service"],
    rating: 4.0,
    contactInfo: {
      phone: "+91 381 238 2100",
      email: "reservations@royalcruise.com",
    },
  },
  {
    name: "Hotel Shivalik",
    type: "Hotel",
    location: {
      city: "Agartala",
      state: "Tripura",
      country: "India",
    },
    address: "Near Akhaura Check Post, Agartala, Tripura 799002",
    amenities: ["Wi-Fi", "Restaurant", "Bar", "Laundry Service"],
    rating: 3.8,
    contactInfo: {
      phone: "+91 381 232 2333",
      email: "contact@hotelshivalik.com",
    },
  },
  {
    name: "The Elgin Nor-Khill",
    type: "Hotel",
    location: {
      city: "Gangtok",
      state: "Sikkim",
      country: "India",
    },
    address: "Dewaal, Gangtok, Sikkim 737101",
    amenities: ["Wi-Fi", "Breakfast", "Restaurant", "Spa"],
    rating: 4.5,
    contactInfo: {
      phone: "+91 3592 202 123",
      email: "info@elginhotels.com",
    },
  },
  {
    name: "Hotel Tibet",
    type: "Hotel",
    location: {
      city: "Gangtok",
      state: "Sikkim",
      country: "India",
    },
    address: "Paljor Stadium Road, Gangtok, Sikkim 737101",
    amenities: ["Wi-Fi", "Restaurant", "Room Service", "Conference Room"],
    rating: 4.3,
    contactInfo: {
      phone: "+91 3592 202 345",
      email: "info@hoteltibet.com",
    },
  },
  {
    name: "Hotel Yangthang Heritage",
    type: "Hotel",
    location: {
      city: "Gangtok",
      state: "Sikkim",
      country: "India",
    },
    address: "Upper Burtuk, Gangtok, Sikkim 737101",
    amenities: ["Wi-Fi", "Breakfast", "Restaurant", "Bar"],
    rating: 4.1,
    contactInfo: {
      phone: "+91 3592 202 456",
      email: "reservations@yangthangheritage.com",
    },
  },
  {
    name: "The Oberoi Udaivilas",
    type: "Hotel",
    location: {
      city: "Udaipur",
      state: "Rajasthan",
      country: "India",
    },
    address: "Opp. Lake Pichola, Udaipur, Rajasthan 313001",
    amenities: ["Wi-Fi", "Breakfast", "Swimming Pool", "Spa", "Restaurant"],
    rating: 4.8,
    contactInfo: {
      phone: "+91 294 252 0505",
      email: "reservations@oberoigroup.com",
    },
  },
  {
    name: "Rambagh Palace",
    type: "Hotel",
    location: {
      city: "Jaipur",
      state: "Rajasthan",
      country: "India",
    },
    address: "Bhawani Singh Road, Jaipur, Rajasthan 302005",
    amenities: ["Wi-Fi", "Breakfast", "Swimming Pool", "Spa", "Restaurant"],
    rating: 4.7,
    contactInfo: {
      phone: "+91 141 228 8989",
      email: "reservations@tajhotels.com",
    },
  },
  {
    name: "Hotel Lake Palace",
    type: "Hotel",
    location: {
      city: "Udaipur",
      state: "Rajasthan",
      country: "India",
    },
    address: "Pichola Lake, Udaipur, Rajasthan 313001",
    amenities: ["Wi-Fi", "Breakfast", "Swimming Pool", "Restaurant"],
    rating: 4.6,
    contactInfo: {
      phone: "+91 294 252 8800",
      email: "info@lakepalaceudaipur.com",
    },
  },
  {
    name: "The Raj Palace",
    type: "Hotel",
    location: {
      city: "Jaipur",
      state: "Rajasthan",
      country: "India",
    },
    address: "Jorawar Singh Gate, Jaipur, Rajasthan 302002",
    amenities: ["Wi-Fi", "Breakfast", "Restaurant", "Spa"],
    rating: 4.5,
    contactInfo: {
      phone: "+91 141 263 8592",
      email: "info@rajpalace.com",
    },
  },
  {
    name: "Radisson Blu Hotel Amritsar",
    type: "Hotel",
    location: {
      city: "Amritsar",
      state: "Punjab",
      country: "India",
    },
    address: "Plot No 8, District Shopping Complex, Amritsar, Punjab 143001",
    amenities: [
      "Wi-Fi",
      "Breakfast",
      "Swimming Pool",
      "Restaurant",
      "Fitness Center",
    ],
    rating: 4.5,
    contactInfo: {
      phone: "+91 183 505 0500",
      email: "reservations@radissonblu.com",
    },
  },
  {
    name: "The Park Plaza",
    type: "Hotel",
    location: {
      city: "Chandigarh",
      state: "Punjab",
      country: "India",
    },
    address: "Park Plaza, 2, Sector 17, Chandigarh, Punjab 160017",
    amenities: ["Wi-Fi", "Breakfast", "Swimming Pool", "Spa", "Restaurant"],
    rating: 4.3,
    contactInfo: {
      phone: "+91 172 500 7777",
      email: "info@parkplazachandigarh.com",
    },
  },
  {
    name: "Hotel Maharaja Regency",
    type: "Hotel",
    location: {
      city: "Jalandhar",
      state: "Punjab",
      country: "India",
    },
    address: "17, Jalandhar, Punjab 144001",
    amenities: ["Wi-Fi", "Breakfast", "Restaurant", "Conference Facilities"],
    rating: 4.2,
    contactInfo: {
      phone: "+91 181 222 1111",
      email: "info@maharajaregency.com",
    },
  },
  {
    name: "Hotel Shivalikview",
    type: "Hotel",
    location: {
      city: "Chandigarh",
      state: "Punjab",
      country: "India",
    },
    address: "SCO 192-193, Sector 17C, Chandigarh, Punjab 160017",
    amenities: ["Wi-Fi", "Breakfast", "Restaurant", "Bar"],
    rating: 4.0,
    contactInfo: {
      phone: "+91 172 270 5141",
      email: "info@hotelshivalikview.com",
    },
  },
  {
    name: "Mayfair Lagoon",
    type: "Hotel",
    location: {
      city: "Bhubaneswar",
      state: "Odisha",
      country: "India",
    },
    address: "8-B, Jayadev Vihar, Bhubaneswar, Odisha 751013",
    amenities: ["Wi-Fi", "Breakfast", "Swimming Pool", "Restaurant", "Spa"],
    rating: 4.5,
    contactInfo: {
      phone: "+91 674 230 5000",
      email: "reservations@mayfairhotels.com",
    },
  },
  {
    name: "Hotel Swosti Premium",
    type: "Hotel",
    location: {
      city: "Bhubaneswar",
      state: "Odisha",
      country: "India",
    },
    address: "P-1, Nayapalli, Bhubaneswar, Odisha 751015",
    amenities: [
      "Wi-Fi",
      "Breakfast",
      "Swimming Pool",
      "Restaurant",
      "Fitness Center",
    ],
    rating: 4.2,
    contactInfo: {
      phone: "+91 674 256 7777",
      email: "info@swostihotels.com",
    },
  },
  {
    name: "Hotel Grand Central",
    type: "Hotel",
    location: {
      city: "Bhubaneswar",
      state: "Odisha",
      country: "India",
    },
    address: "Station Square, Bhubaneswar, Odisha 751006",
    amenities: ["Wi-Fi", "Breakfast", "Restaurant", "Bar"],
    rating: 4.0,
    contactInfo: {
      phone: "+91 674 253 2323",
      email: "info@hotelgrandcentral.com",
    },
  },
  {
    name: "Hotel New Marion",
    type: "Hotel",
    location: {
      city: "Cuttack",
      state: "Odisha",
      country: "India",
    },
    address: "Near Jagatpur, Cuttack, Odisha 753010",
    amenities: ["Wi-Fi", "Breakfast", "Restaurant"],
    rating: 3.8,
    contactInfo: {
      phone: "+91 671 230 1111",
      email: "info@hotelnewmarion.com",
    },
  },
  {
    name: "Hotel Vivor",
    type: "Hotel",
    location: {
      city: "Kohima",
      state: "Nagaland",
      country: "India",
    },
    address: "Near Kohima Police Station, Kohima, Nagaland 797001",
    amenities: ["Wi-Fi", "Breakfast", "Restaurant", "Room Service"],
    rating: 4.1,
    contactInfo: {
      phone: "+91 3862 225 433",
      email: "info@hotelvivor.com",
    },
  },
  {
    name: "The Nagaland Hotel",
    type: "Hotel",
    location: {
      city: "Dimapur",
      state: "Nagaland",
      country: "India",
    },
    address: "Urban Haat, Dimapur, Nagaland 797112",
    amenities: ["Wi-Fi", "Breakfast", "Restaurant", "Laundry Service"],
    rating: 3.9,
    contactInfo: {
      phone: "+91 3862 229 809",
      email: "reservations@thenagalandhotel.com",
    },
  },
  {
    name: "Hotel Saramati",
    type: "Hotel",
    location: {
      city: "Kohima",
      state: "Nagaland",
      country: "India",
    },
    address: "Upper Bayavü Hill, Kohima, Nagaland 797001",
    amenities: ["Wi-Fi", "Breakfast", "Restaurant", "Parking"],
    rating: 4.2,
    contactInfo: {
      phone: "+91 3862 233 007",
      email: "info@hotelsaramati.com",
    },
  },
  {
    name: "Hotel Grand Tizu",
    type: "Hotel",
    location: {
      city: "Dimapur",
      state: "Nagaland",
      country: "India",
    },
    address: "Near Dimapur Railway Station, Dimapur, Nagaland 797112",
    amenities: ["Wi-Fi", "Breakfast", "Restaurant", "24-hour Front Desk"],
    rating: 3.7,
    contactInfo: {
      phone: "+91 3862 228 860",
      email: "info@hotelgrandtizu.com",
    },
  },
  {
    name: "Hotel Royal Fort",
    type: "Hotel",
    location: {
      city: "Aizawl",
      state: "Mizoram",
      country: "India",
    },
    address: "Zarkawt, Aizawl, Mizoram 796001",
    amenities: ["Wi-Fi", "Breakfast", "Restaurant", "Room Service"],
    rating: 4.0,
    contactInfo: {
      phone: "+91 389 233 1818",
      email: "info@hotelroyalfort.com",
    },
  },
  {
    name: "Hotel Regency",
    type: "Hotel",
    location: {
      city: "Aizawl",
      state: "Mizoram",
      country: "India",
    },
    address: "Durtlang, Aizawl, Mizoram 796025",
    amenities: ["Wi-Fi", "Breakfast", "Restaurant", "Parking"],
    rating: 3.8,
    contactInfo: {
      phone: "+91 389 232 0540",
      email: "reservations@hotelregencymizoram.com",
    },
  },
  {
    name: "Hotel Oasis",
    type: "Hotel",
    location: {
      city: "Aizawl",
      state: "Mizoram",
      country: "India",
    },
    address: "Bungkawn, Aizawl, Mizoram 796014",
    amenities: ["Wi-Fi", "Breakfast", "Restaurant", "Laundry Service"],
    rating: 4.1,
    contactInfo: {
      phone: "+91 389 234 5678",
      email: "info@hoteloasismizoram.com",
    },
  },
  {
    name: "The Bamboo Hotel",
    type: "Hotel",
    location: {
      city: "Aizawl",
      state: "Mizoram",
      country: "India",
    },
    address: "Khatla, Aizawl, Mizoram 796005",
    amenities: ["Wi-Fi", "Breakfast", "Restaurant", "24-hour Front Desk"],
    rating: 3.9,
    contactInfo: {
      phone: "+91 389 232 0012",
      email: "info@thebamboohotelmizoram.com",
    },
  },
  {
    name: "Hotel Pinewood",
    type: "Hotel",
    location: {
      city: "Shillong",
      state: "Meghalaya",
      country: "India",
    },
    address: "Lachumiere, Shillong, Meghalaya 793001",
    amenities: ["Wi-Fi", "Breakfast", "Restaurant", "Room Service"],
    rating: 4.2,
    contactInfo: {
      phone: "+91 364 250 0910",
      email: "info@hotelpinewood.com",
    },
  },
  {
    name: "Hotel Landmark",
    type: "Hotel",
    location: {
      city: "Shillong",
      state: "Meghalaya",
      country: "India",
    },
    address: "Khyndailad, Shillong, Meghalaya 793001",
    amenities: ["Wi-Fi", "Breakfast", "Restaurant", "Parking"],
    rating: 4.0,
    contactInfo: {
      phone: "+91 364 250 5800",
      email: "reservations@hotellandmark.com",
    },
  },
  {
    name: "Hotel Grace",
    type: "Hotel",
    location: {
      city: "Shillong",
      state: "Meghalaya",
      country: "India",
    },
    address: "Police Bazaar, Shillong, Meghalaya 793001",
    amenities: ["Wi-Fi", "Breakfast", "Restaurant", "Laundry Service"],
    rating: 3.9,
    contactInfo: {
      phone: "+91 364 250 2934",
      email: "info@hotelgraceshillong.com",
    },
  },
  {
    name: "The Eee Cee Hotel",
    type: "Hotel",
    location: {
      city: "Shillong",
      state: "Meghalaya",
      country: "India",
    },
    address: "Lower Lachumiere, Shillong, Meghalaya 793001",
    amenities: ["Wi-Fi", "Breakfast", "Restaurant", "24-hour Front Desk"],
    rating: 4.1,
    contactInfo: {
      phone: "+91 364 250 4252",
      email: "info@theeeceehotel.com",
    },
  },
];

const arr1 = ["hello"];
const arr2 = ["there!"];

const getAllHotels = (hotel1, hotel2, hotel3) => [
  ...hotel1,
  ...hotel2,
  ...hotel3,
];

const allHotels = getAllHotels(hotel1, hotel2, hotel3);

module.exports = { allHotels };