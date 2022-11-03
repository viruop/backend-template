const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "../.env" });

module.exports = function connectDatabase() {
  mongoose.connect(process.env.MONGO_URL);
  const connection = mongoose.connection;
  connection
    .once("open", () => {
      console.log("Database Connected");
    })
    .on("error", (err) => {
      console.log(`Logged Error: ${err}`);
      connection.close(() => process.exit(1));
    });
};
