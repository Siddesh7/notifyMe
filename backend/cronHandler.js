const cron = require("node-cron");
const axios = require("axios");
const url = `https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD&api_key=${process.env.CRYPTO_COMPARE}`;

cron.schedule("* * * * *", async () => {
  console.log("Checking alerts...");
  getPriceAlerts();
});
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
