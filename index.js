const mongoose = require("mongoose");
const config = require("./utils/config");

const app = require("./app");

console.log("Conecting to MongoDB...");

mongoose
  .connect(config.MONGODB_URI)
  .then(() => {
    const PORT = config.MONGODB_PORT;

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB", err.message);
  });