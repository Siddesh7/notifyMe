const mongoose = require("mongoose");

const trackAddress = new mongoose.Schema({
  requester: {
    type: String,
  },
  address: {
    type: String,
  },
  chain: {
    type: String,
  },
});

module.exports = mongoose.model("trackAddress", trackAddress);
