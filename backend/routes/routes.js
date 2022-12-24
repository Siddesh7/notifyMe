const express = require("express");
const PriceAlerts = require("../model/priceAlerts");
const gasAlerts = require("../model/gasAlerts");
const priceAlerts = require("../model/priceAlerts");
const nftAlerts = require("../model/nftAlerts");
const trackAddress = require("../model/trackAddress");
const utilities = require("../utilities/createWebhook");
const router = express.Router();
const Push = require("../sendNotifications");
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
router.post("/nft", async (req, res) => {
  // Create a new alert
  const alert = new nftAlerts(req.body);
  console.log(req.body);
  try {
    await alert.save();
    console.log(req.body.contract_address, req.body.token_id);
    utilities.updateWebhook(req.body.contract_address, req.body.token_id);
    res.send(alert);
  } catch (error) {
    res.send(error);
  }
});
router.post("/address", async (req, res) => {
  // Create a new alert
  const alert = new trackAddress(req.body);
  console.log(req.body);
  try {
    await alert.save();
    utilities.addAddressToBeTracked(req.body.address, req.body.chain);
    res.send(alert);
  } catch (error) {
    res.send(error);
  }
});
router.delete("/gas", (req, res) => {
  gasAlerts.findByIdAndRemove(req.body.id, (err, item) => {
    if (err) return res.status(500).send(err);
    const response = {
      message: "Item successfully deleted",
      id: item._id,
    };
    return res.status(200).send(response);
  });
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
router.get("/nft", async (req, res) => {
  // Get all alerts
  try {
    const alerts = await nftAlerts.find();
    res.send(alerts);
  } catch (error) {
    res.send(error);
  }
});
router.get("/address", async (req, res) => {
  // Get all alerts
  try {
    const alerts = await trackAddress.find();
    res.send(alerts);
  } catch (error) {
    res.send(error);
  }
});

router.post("/webhook", async (req, res) => {
  const title = `The NFT (${req.body.event.activity[0].toAddress}) was transferred !!`;
  const tokenID = req.body.event.activity[0].erc721TokenId;
  const body = `The NFT was tranferred, watch the transaction at https://goerli.etherscan.io/tx/${req.body.event.activity[0].hash}`;

  console.log(tokenID);
  try {
    const alert = await nftAlerts.findOne({
      contract_address: req.body.event.activity[0].contractAddress,
      token_id: tokenID.substring(2),
    });

    Push.sendNotification(title, body, alert.requester);

    res.send({ alert: alert });
  } catch (error) {
    res.send(error);
  }
});
router.post("/addresswebhook", async (req, res) => {
  console.log(req.body.event.activity[0]);
  try {
    res.send(req.body.event.activity[0]);
  } catch (error) {
    res.send(error);
  }
});
module.exports = router;
