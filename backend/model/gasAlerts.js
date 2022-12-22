const mongoose = require("mongoose");

const GasAlerts = new mongoose.Schema({
  requester: {
    type: String,
  },
  gasPrice: {
    type: Number,
  },
});

module.exports = mongoose.model("GasAlerts", GasAlerts);
