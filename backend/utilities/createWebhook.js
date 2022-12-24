const axios = require("axios");

const headers = {
  accept: "application/json",
  "X-Alchemy-Token": "WFgCNh4VLfjHscBFxuDhE6Z5hw4dNGsn",
  "content-type": "application/json",
};
function updateWebhook(contract_address, token_id) {
  const url = "https://dashboard.alchemy.com/api/update-webhook-nft-filters";

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

function addAddressToBeTracked(address, chain) {
  const url = "https://dashboard.alchemy.com/api/update-webhook-addresses";
  let webhook_id;
  const headers = {
    accept: "application/json",
    "X-Alchemy-Token": "WFgCNh4VLfjHscBFxuDhE6Z5hw4dNGsn",
    "content-type": "application/json",
  };
  if (chain == "Ethereum") {
    webhook_id = "wh_w8jbaeae6740y7i4";
  } else if (chain == "Polygon") {
    webhook_id = "wh_6ohp66co2hm38zxg";
  } else {
    webhook_id = "wh_8lp8e0kper1or9sc";
  }

  console.log(address, webhook_id);
  const payload = {
    webhook_id: webhook_id,
    addresses_to_add: [address],
    addresses_to_remove: [""],
  };

  axios
    .patch(url, payload, { headers })
    .then((response) => console.log(response.data))
    .catch((error) => console.error(error));
}
module.exports = { updateWebhook, addAddressToBeTracked };
