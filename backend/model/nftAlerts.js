const mongoose = require("mongoose");

const nftAlerts = new mongoose.Schema({
  requester: {
    type: String,
  },
  contract_address: {
    type: String,
  },
  token_id: {
    type: String,
  },
});

module.exports = mongoose.model("nftAlerts", nftAlerts);
