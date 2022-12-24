import { WagmiConfig, createClient } from "wagmi";
import { mainnet, polygon, polygonMumbai, goerli } from "wagmi/chains";
import { ConnectKitProvider, getDefaultClient } from "connectkit";
import LandingPage from "./LandingPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import PricePage from "./pages/pricePage";
import GasPage from "./pages/gasPage";
import NFTPage from "./pages/nftPage";
import AddressPage from "./pages/addressPage";

const chains = [mainnet, polygon, polygonMumbai, goerli];

const client = createClient(
  getDefaultClient({
    appName: "NotifyMe",
    chains,
  })
);

const App = () => {
  return (
    <WagmiConfig client={client}>
      <ConnectKitProvider theme="retro">
        <Navbar />

        <Router>
          <Routes>
            <Route exact path="/" element={<LandingPage />}></Route>
            <Route exact path="/price" element={<PricePage />}></Route>
            <Route exact path="/gas" element={<GasPage />}></Route>
            <Route exact path="/nft" element={<NFTPage />}></Route>
            <Route exact path="/address" element={<AddressPage />}></Route>
          </Routes>
        </Router>
      </ConnectKitProvider>
    </WagmiConfig>
  );
};

export default App;
