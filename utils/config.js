require("dotenv").config();

const MONGODB_URI = process.env.MONGODB_URI;
const MONGODB_PORT = process.env.MONGODB_PORT;
const JWT_SECRET= process.env.JWT_SECRET

module.exports = {
  MONGODB_URI,
  MONGODB_PORT,
  JWT_SECRET
};