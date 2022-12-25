import { Link } from "react-router-dom";
import AnimateText from "./components/animatedText";

export default function LandingPage() {
  return (
    <div className="h-[100vh] md:overflow-y-hidden">
      {/* <PriceRangeForm /> */}
      {/* <ContrastingCard /> */}
      <div className="bg-gray-900 min-h-screen flex flex-col py-12 pt-[120px]">
        <div className="w-[80%] mx-auto text-center">
          <AnimateText />
          <p className="text-gray-400 my-8 ">
            The ultimate utility tool for setting alerts on important events.
          </p>
          <a
            href="/app"
            className="bg-gray-200 hover:bg-gray-300 text-black font-medium py-2 px-7 my-[12px] rounded-md"
          >
            Less go
          </a>
          <div className="flex flex-col md:flex-row space-y-8 space-x-0 md:space-y-0 md:space-x-4 mt-[20px]">
            <Link
              to="/gas"
              className="bg-white rounded-lg shadow-lg py-4 px-6 w-[25%]"
            >
              <div className="text-lg font-bold text-gray-800 mb-[6px]">
                Set Gas Price Alerts
              </div>

              <p className="text-gray-600 mb-4">
                Never miss out on the perfect time to make onchain transactions.
                Stay ahead of the game with alerts for when gas prices reach
                your target level!
              </p>
            </Link>
            <Link
              to="/price"
              className="bg-white rounded-lg shadow-lg py-4 px-6 w-[25%]"
            >
              <div className="text-lg font-bold text-gray-800 mb-[6px]">
                Set ETH Price Alerts
              </div>
              <p className="text-gray-600 mb-4">
                Don't miss out on the next Ethereum price surge - set alerts and
                get notified!
              </p>
            </Link>
            <Link
              to="/nft"
              className="bg-white rounded-lg shadow-lg py-4 px-6 w-[25%]"
            >
              <div className="text-lg font-bold text-gray-800 mb-[6px]">
                Set NFT Transfer Alerts
              </div>

              <p className="text-gray-600 mb-4">
                Track your favourite NFTs and get notified every time it is
                transferred!
              </p>
            </Link>
            <Link
              to="/address"
              className="bg-white rounded-lg shadow-lg py-4 px-6 w-[25%]"
            >
              <div className="text-lg font-bold text-gray-800 mb-[6px]">
                Watch a Particular Wallet
              </div>

              <p className="text-gray-600 mb-4">
                Stay on top of your crypto portfolio - set alerts for specific
                wallet addresses and get notified of any activity!
              </p>
            </Link>{" "}
            <div className="bg-gray-400 rounded-lg shadow-lg py-4 px-6 w-[25%] flex flex-row items-center justify-center">
              <div className="text-lg font-bold text-gray-800 mb-[6px]">
                More Prompts coming soon!
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
