import React from "react";
import { useAccount } from "wagmi";

function Tracked({ data, type, heading }) {
  const { address } = useAccount();
  return (
    <table className="table-auto w-full text-gray-700 md:absolute w-full md:w-[55%] right-0">
      <thead>
        <tr className="bg-gray-300 text-gray-800">
          <th className="py-2 px-4">{heading}</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr
            className="odd:bg-gray-200 even:bg-white text-center"
            key={item._id}
          >
            {item.requester === address ? (
              type == "nft" ? (
                <td className="py-2 px-4 break-all">{`${item.contract_address}:${item.token_id}`}</td>
              ) : (
                <td className="py-2 px-4">{`${item.address}`}</td>
              )
            ) : null}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Tracked;
