const https = require("https");
const axios = require("axios");
const url = `https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD&api_key=${process.env.CRYPTO_COMPARE}`;
const Push = require("./sendNotifications");
async function getPriceAlerts() {
  let currentPrice;
  try {
    axios
      .get("http://localhost:3000/api/price")
      .then((response) => {
        const alerts = response.data;
        console.log(alerts);
        axios
          .get(url)
          .then((response) => {
            currentPrice = response.data.USD;

            alerts.forEach((entry) => {
              console.log(entry.minPrice, entry.maxPrice, currentPrice);
              if (
                entry.maxPrice > currentPrice &&
                entry.minPrice < currentPrice
              ) {
                console.log(entry._id);
                axios
                  .delete("http://localhost:3000/api/price", {
                    data: {
                      id: entry._id,
                    },
                  })
                  .then((res) => console.log(res.data))
                  .catch((err) => console.error(err));
                const response = `THe price of ETH hit ${entry.price} sending notification to ${entry.requester}`;
                console.log(response);
                const title = `Price Alert`;
                const body = `Price of $ETH hit your alert price.`;
                Push.sendNotification(title, body, entry.requester);
              }
            });
          })
          .catch((error) => {
            console.error(error);
          });
      })
      .catch((error) => {
        console.error(error);
      });
  } catch (error) {
    console.log(error);
  }
}
async function getGasAlerts() {
  let currentPrice;
  try {
    axios
      .get("http://localhost:3000/api/gas")
      .then((response) => {
        const alerts = response.data;
        console.log(alerts);

        axios
          .get("https://api.etherscan.io/api", {
            params: {
              module: "proxy",
              action: "eth_gasPrice",
            },
          })
          .then((response) => {
            const gasPriceInWei = response.data.result;
            const gasPriceInGwei = Math.floor(gasPriceInWei / 1000000000);

            alerts.forEach((entry) => {
              console.log(entry.gasPrice, gasPriceInGwei);
              if (entry.gasPrice === gasPriceInGwei) {
                console.log(entry._id);
                axios
                  .delete("http://localhost:3000/api/gas", {
                    data: {
                      id: entry._id,
                    },
                  })
                  .then((res) => console.log(res.data))
                  .catch((err) => console.error(err));
                const response = `THe price of ETH hit ${entry.price} sending notification to ${entry.requester}`;
                console.log(response);
                const title = `Price Alert`;
                const body = `GasPrice of $ETH hit your alert price.`;
                Push.sendNotification(title, body, entry.requester);
              }
            });
          })
          .catch((error) => {
            console.error(error);
          });
      })
      .catch((error) => {
        console.error(error);
      });
  } catch (error) {
    console.log(error);
  }
}

module.exports = { getPriceAlerts, getGasAlerts };
