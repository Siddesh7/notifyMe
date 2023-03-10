import GasRangeForm from "../components/gasForm";
import Table from "../components/Table";
import React, { useState, useEffect } from "react";
import axios from "axios";
export default function GasPage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("https://push-notify-me.onrender.com/api/gas");
      setData(response.data);
      console.log(response.data);
    }

    fetchData();
  }, []);

  return (
    <div className="w-[80%] m-auto flex flex-col md:flex-row mt-[120px] gap-8 relative ">
      <GasRangeForm />
      {data ? (
        <Table data={data} type="gas" heading="Pending Gas Alerts" />
      ) : null}
    </div>
  );
}
