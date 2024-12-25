require("dotenv").config();

const MONGODB_URI = process.env.MONGODB_URI;
const MONGODB_PORT = process.env.MONGODB_PORT;

// email credentials
const EMAIL_HOST = process.env.EMAIL_HOST;
const EMAIL_PORT = process.env.EMAIL_PORT;
const EMAIL_USERNAME = process.env.EMAIL_USERNAME;
const EMAIL_PASSWORD = process.env.EMAIL_PASS;
const JWT_SECRET= process.env.JWT_SECRET

module.exports = {
  MONGODB_URI,
  MONGODB_PORT,
  EMAIL_HOST,
  EMAIL_PORT,
  EMAIL_USERNAME,
  EMAIL_PASSWORD,
  JWT_SECRET
};