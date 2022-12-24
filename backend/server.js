require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cron = require("node-cron");
const handler = require("./cronHandler");

const app = express();

const mongoString = process.env.MONGO_URL;
mongoose.connect(mongoString);
const database = mongoose.connection;
app.use(express.json());

const routes = require("./routes/routes");
database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});

app.listen(3000, () => {
  console.log(`Server Started at ${3000}`);
});

app.use("/api", routes);

cron.schedule("*/30 * * * * *", async () => {
  handler.getGasAlerts();
  handler.getPriceAlerts();
});
