import React, { useState } from "react";
import { useAccount } from "wagmi";
function NftTracker() {
  const { address } = useAccount();
  const [formData, setFormData] = useState({
    requester: address,
    contract_address: "",
    token_id: "",
  });

  const url = "https://push-notify-me.onrender.com/api/nft";
  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div className="bg-gray-900 rounded-lg shadow-lg p-6 w-full md:w-[40%]">
      <div className="text-gray-200 font-bold text-4xl mb-2">
        NFT tracker (transfers){" "}
        <p className="text-[24px] text-gray-600">(Ethereum Mainnet)</p>
      </div>
      <form>
        <div className="mb-8">
          <label
            className="block font-medium mb-2 text-white"
            htmlFor="minPrice"
          >
            Contract Address
          </label>
          <input
            className="form-input py-2 px-3 block w-full leading-tight rounded-md focus:outline-none focus:shadow-outline-blue-500"
            id="minPrice"
            type="text"
            value={formData.contract_address}
            onChange={(e) => {
              setFormData({ ...formData, contract_address: e.target.value });
            }}
          />
        </div>
        <div className="mb-8">
          <label
            className="block font-medium mb-2 text-white"
            htmlFor="minPrice"
          >
            Token ID
          </label>
          <input
            className="form-input py-2 px-3 block w-full leading-tight rounded-md focus:outline-none focus:shadow-outline-blue-500"
            id="minPrice"
            type="number"
            value={formData.token_id}
            onChange={(e) => {
              setFormData({ ...formData, token_id: e.target.value });
            }}
          />
        </div>

        <div className="text-center mb-[20px]">
          {address ? (
            <a
              href="/app"
              onClick={handleSubmit}
              className="bg-gray-200 hover:bg-gray-300 text-black font-medium py-2 px-7 rounded-md"
            >
              Create an alert
            </a>
          ) : (
            <p className="font-medium mb-2 text-red-800">
              Please Connect your wallet first
            </p>
          )}
        </div>
      </form>
    </div>
  );
}

export default NftTracker;
