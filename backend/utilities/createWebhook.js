const axios = require("axios");

const url = "https://dashboard.alchemy.com/api/update-webhook-nft-filters";

const headers = {
  accept: "application/json",
  "X-Alchemy-Token": "WFgCNh4VLfjHscBFxuDhE6Z5hw4dNGsn",
  "content-type": "application/json",
};
function updateWebhook(contract_address, token_id) {
  const payload = {
    webhook_id: "wh_vi6djfxgancsnf3o",
    nft_filters_to_add: [
      {
        contract_address: contract_address,
        token_id: token_id,
      },
    ],
  };
  axios
    .patch(url, payload, { headers })
    .then((response) => {
      console.log(response.data); // Outputs the response data
    })
    .catch((error) => {
      console.error(error); // Outputs any error that occurs
    });
}
module.exports = { updateWebhook };
