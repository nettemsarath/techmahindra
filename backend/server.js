const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();

const ordersRoute = require("./src/routes/orders");

// create express app
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

// Configuring the database
const DB_URL = process.env.DB_URL;

mongoose.Promise = global.Promise;

// mongoose.connect(DB_URL, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// mongoose.connection.on("error", function () {
//   console.log("Could not connect to the database. Exiting now...");
//   process.exit();
// });
// mongoose.connection.once("open", function () {
//   console.log("Successfully connected to the database");
// });

app.use("/", ordersRoute);

const PORT = process.env.PORT || 8000;
// listen for requests
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
