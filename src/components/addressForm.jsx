import React, { useState } from "react";
import { useAccount } from "wagmi";
function ActivityTracker() {
  const { address } = useAccount();
  const [formData, setFormData] = useState({
    requester: address,
    address: "",
    chain: "",
  });
  const [selectedOption, setSelectedOption] = useState("Polygon");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    setFormData({ ...formData, chain: event.target.value });
  };
  const url = "http://localhost:3000/api/address";
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
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
        Activity tracker (transfers){" "}
      </div>
      <form>
        <div className="mb-8">
          <label
            className="block font-medium mb-2 text-white"
            htmlFor="minPrice"
          >
            Wallet Address
          </label>
          <input
            className="form-input py-2 px-3 block w-full leading-tight rounded-md focus:outline-none focus:shadow-outline-blue-500"
            id="minPrice"
            type="text"
            value={formData.address}
            onChange={(e) => {
              setFormData({ ...formData, address: e.target.value });
            }}
          />
        </div>
        <div className="mb-8">
          <div>
            <label className="text-gray-200 font-medium text-16px">
              <input
                type="radio"
                value="Polygon"
                checked={selectedOption === "Polygon"}
                onChange={handleOptionChange}
              />
              Polygon
            </label>
          </div>
          <div>
            <label className="text-gray-200 font-medium text-16px">
              <input
                type="radio"
                value="Ethereum"
                checked={selectedOption === "Ethereum"}
                onChange={handleOptionChange}
              />
              Ethereum
            </label>
          </div>
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

export default ActivityTracker;
