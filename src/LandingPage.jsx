import PriceRangeForm from "./components/PriceForm";
import { ConnectKitButton } from "connectkit";
export default function LandingPage() {
  return (
    <>
      <nav className="flex items-center justify-between px-4 py-3 bg-white shadow-md">
        <div className="flex items-center">
          <span className="font-bold text-2xl ml-2">NotifyMe</span>
        </div>
        <div className="flex">
          {/* <button className="px-4 py-2 rounded-full bg-blue-500 text-white font-bold hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue mr-4">
            Login
          </button> */}
          <ConnectKitButton />
        </div>
      </nav>
      <div className="flex flex-col w-[90%] m-auto mt-[70px]">
        <PriceRangeForm />
      </div>{" "}
    </>
  );
}
