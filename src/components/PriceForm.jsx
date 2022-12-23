import React, { useState } from "react";
import { useAccount } from "wagmi";
function PriceRangeForm() {
  const { address } = useAccount();
  const [formData, setFormData] = useState({
    requester: address,
    minPrice: "",
    maxPrice: "",
  });

  const url = "http://localhost:3000/api/price";
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
    <div className="bg-white w-[300px] rounded-lg shadow-lg p-6">
      <form>
        <div className="mb-4">
          <label
            className="block font-bold mb-2 text-gray-700"
            htmlFor="minPrice"
          >
            Minimum Price
          </label>
          <input
            className="form-input py-2 px-3 block w-full leading-tight rounded-md focus:outline-none focus:shadow-outline-blue-500"
            id="minPrice"
            type="number"
            value={formData.minPrice}
            onChange={(e) => {
              setFormData({ ...formData, minPrice: e.target.value });
            }}
          />
        </div>
        <div className="mb-4">
          <label
            className="block font-bold mb-2 text-gray-700"
            htmlFor="maxPrice"
          >
            Maximum Price
          </label>
          <input
            className="form-input py-2 px-3 block w-full leading-tight rounded-md focus:outline-none focus:shadow-outline-blue-500"
            id="maxPrice"
            type="number"
            value={formData.maxPrice}
            onChange={(e) => {
              setFormData({ ...formData, maxPrice: e.target.value });
            }}
          />
        </div>
        <div className="text-center">
          <button
            className="px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
            type="submit"
            onClick={handleSubmit}
          >
            Create an alert
          </button>
        </div>
      </form>
    </div>
  );
}

export default PriceRangeForm;
