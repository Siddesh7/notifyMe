import { ConnectKitButton } from "connectkit";
import React from "react";

function Navbar() {
  return (
    <nav className="bg-gray-900 py-4 px-8">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-white font-bold text-2xl">NotifyMe</div>
        <div className="flex space-x-4">
          <a
            href="/ap"
            className="text-gray-300 hover:text-white font-bold py-2 px-4 rounded-full"
          >
            Get Started
          </a>

          <ConnectKitButton />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
