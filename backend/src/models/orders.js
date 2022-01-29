const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  Name: String,
  Type: String,
  ImageLink: String,
  Price: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Orders = mongoose.model("Orders", OrderSchema);

module.exports = Orders;
