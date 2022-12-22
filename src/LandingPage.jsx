export default function LandingPage() {
  return (
    <>
      <nav className="flex items-center justify-between px-4 py-3 bg-white shadow-md">
        <div className="flex items-center">
          <img src="/logo.png" alt="Logo" className="w-8 h-8" />
          <span className="font-bold text-2xl ml-2">Our Web3 App</span>
        </div>
        <div className="flex">
          <button className="px-4 py-2 rounded-full bg-blue-500 text-white font-bold hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue mr-4">
            Login
          </button>
          <button className="px-4 py-2 rounded-full bg-blue-500 text-white font-bold hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue">
            Sign Up
          </button>
        </div>
      </nav>
      <div className="bg-gray-100 h-screen flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Welcome to Our Web3 App
        </h1>
        <p className="text-gray-600 mb-8">
          A decentralized application built on the Ethereum blockchain
        </p>
        <button className="px-4 py-2 rounded-full bg-blue-500 text-white font-bold hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue">
          Get Started
        </button>
      </div>{" "}
    </>
  );
}
