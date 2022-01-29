const Orders = require("../models/orders");

const insertOrder = async (orderDetails) => {
  try {
    const NewOrder = new Orders(orderDetails);
    await NewOrder.save();
    return orderDetails;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  insertOrder,
};
