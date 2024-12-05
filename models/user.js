const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: [, "First name required"],
    minLength: [3, "First name should be at least 3 characters."],
    maxLength: [12, "First name should not exceed 12 characters."],
  },
  lastname: {
    type: String,
    minLength: [1, "Second name should be at least 1 character."],
    maxLength: [15, "Second name should not exceed 15 characters,"],
  },
  email: {
    type: String,
    unique: true,
    required: [true, "User email address required"],
  },
  phone: {
    type: String,
    unique: true,
    required: [true, "User mobile number required"],
  },
  userType: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
  password: {
    type: String,
    required: [true, "Password required"],
  },
  accountCreatedAt: {
    type: Date,
    default: Date.now,
  },
  isAccountActive: {
    type: Boolean,
    default: false,
  },
  trips: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Trip",
    },
  ],
});

module.exports = mongoose.model("User", userSchema, "users");