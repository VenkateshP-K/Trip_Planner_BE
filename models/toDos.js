const mongoose = require("mongoose");

const toDosSchema = new mongoose.Schema({
  toDoName: {
    type: String,
    required: [true, "toDo name required"],
    unique: true,
  },
  toDoDescription: {
    type: String,
    required: [true, "ToDo description required"],
  },
  toDoStatus: {
    type: String,
    enum: ["pending", "in-progress", "completed"],
    default: "pending",
  },
  tripId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Trip",
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("ToDos", toDosSchema, "todos");