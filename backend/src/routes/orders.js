const express = require("express");
const router = express.Router();
const { createOrder } = require("../controllers/orders");

/* GET home page. */
router.get("/", (req, res) => {
  res.json({ message: "Welcome to nettem sarath." });
});

router.post("/create", createOrder);

module.exports = router;
