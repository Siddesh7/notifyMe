import { ConnectKitButton } from "connectkit";
import React from "react";

function Navbar() {
  return (
    <nav className="bg-gray-900 py-4 px-8">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-white font-bold text-2xl">NotifyMe</div>
        <ConnectKitButton />
      </div>
    </nav>
  );
}

export default Navbar;
