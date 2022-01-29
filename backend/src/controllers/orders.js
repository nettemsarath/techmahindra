const createOrder = (req, res) => {
  const { orders } = req.body;
  return res.status(200).json(orders);
};

module.exports = {
  createOrder,
};
