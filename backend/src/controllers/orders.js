const { insertOrder } = require("../modules/Orders");

const createOrder = async (req, res) => {
  const { orders } = req.body;
  try {
    for (let order of orders) {
      await insertOrder(order);
    }
    return res.status(200).json(orders);
  } catch (error) {
    return res.status(200).json({
      status: false,
      message: "order cannot be empty",
    });
  }
};

module.exports = {
  createOrder,
};
