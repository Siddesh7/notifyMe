import PriceRangeForm from "../components/PriceForm";
import Table from "../components/Table";
import React, { useState, useEffect } from "react";
import axios from "axios";
export default function PricePage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        "https://push-notify-me.onrender.com/api/price"
      );
      setData(response.data);
      console.log(response.data);
    }

    fetchData();
  }, []);

  return (
    <div className="w-[80%] m-auto flex flex-col md:flex-row mt-[120px] gap-8 relative ">
      <PriceRangeForm />
      {data ? (
        <Table data={data} type="price" heading="Pending Alerts (ETH)" />
      ) : null}
    </div>
  );
}
