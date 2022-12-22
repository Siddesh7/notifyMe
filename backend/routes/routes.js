const express = require("express");
const PriceAlerts = require("../model/priceAlerts");
const gasAlerts = require("../model/gasAlerts");
const priceAlerts = require("../model/priceAlerts");

const router = express.Router();

router.post("/price", async (req, res) => {
  // Create a new alert
  const alert = new PriceAlerts(req.body);
  console.log(req.body);
  try {
    await alert.save();
    res.send(alert);
  } catch (error) {
    res.send(error);
  }
});
router.post("/gas", async (req, res) => {
  // Create a new alert
  const alert = new gasAlerts(req.body);
  console.log(req.body);
  try {
    await alert.save();
    res.send(alert);
  } catch (error) {
    res.send(error);
  }
});

router.delete("/price", (req, res) => {
  priceAlerts.findByIdAndRemove(req.body.id, (err, item) => {
    if (err) return res.status(500).send(err);
    const response = {
      message: "Item successfully deleted",
      id: item._id,
    };
    return res.status(200).send(response);
  });
});
router.get("/price", async (req, res) => {
  // Get all alerts
  try {
    const alerts = await PriceAlerts.find();
    res.send(alerts);
  } catch (error) {
    res.send(error);
  }
});
router.get("/gas", async (req, res) => {
  // Get all alerts
  try {
    const alerts = await gasAlerts.find();
    res.send(alerts);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
