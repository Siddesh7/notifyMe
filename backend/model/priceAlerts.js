const mongoose = require("mongoose");

const PriceAlerts = new mongoose.Schema({
  requester: {
    type: String,
  },
  minPrice: {
    type: Number,
  },
  maxPrice: {
    type: Number,
  },
});

module.exports = mongoose.model("PriceAlerts", PriceAlerts);
