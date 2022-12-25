import React, { useState, useEffect } from "react";
import axios from "axios";
import Tracked from "../components/NftTracked";
import ActivityTracker from "../components/addressForm";
export default function AddressPage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        "https://push-notify-me.onrender.com/api/address"
      );
      setData(response.data);
      console.log(response.data);
    }

    fetchData();
  }, []);

  return (
    <div className="w-[80%] m-auto flex flex-col md:flex-row mt-[120px] gap-8 relative ">
      <ActivityTracker />
      {data ? (
        <Tracked data={data} type="address" heading="Addresses being Tracked" />
      ) : null}
    </div>
  );
}
