import Table from "../components/Table";
import React, { useState, useEffect } from "react";
import axios from "axios";
import NftTracker from "../components/nftForm";
import Tracked from "../components/NftTracked";
export default function NFTPage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("http://localhost:3000/api/nft");
      setData(response.data);
      console.log(response.data);
    }

    fetchData();
  }, []);

  return (
    <div className="w-[80%] m-auto flex flex-col md:flex-row mt-[120px] gap-8 relative ">
      <NftTracker />
      {data ? (
        <Tracked data={data} type="nft" heading="NFTs being Tracked" />
      ) : null}
    </div>
  );
}
