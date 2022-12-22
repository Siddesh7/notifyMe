import React, { useState } from "react";

function PriceRangeForm() {
  const [formData, setFormData] = useState({
    minPrice: "",
    maxPrice: "",
    requester: "",
  });
  return (
    <div className="bg-white w-[300px] rounded-lg shadow-lg p-6">
      <form>
        <div className="mb-4">
          <label
            className="block font-bold mb-2 text-gray-700"
            htmlFor="minPrice"
            value={formData.minPrice}
            onChange={(e) => {
              setFormData({ ...formData, minPrice: e.target.value });
            }}
          >
            Minimum Price
          </label>
          <input
            className="form-input py-2 px-3 block w-full leading-tight rounded-md focus:outline-none focus:shadow-outline-blue-500"
            id="minPrice"
            type="number"
            value={formData.maxPrice}
            onChange={(e) => {
              setFormData({ ...formData, maxPrice: e.target.value });
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
          />
        </div>
        <div className="text-center">
          <button
            className="px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
            type="submit"
          >
            Create an alert
          </button>
        </div>
      </form>
    </div>
  );
}

export default PriceRangeForm;
