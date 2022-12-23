import { WagmiConfig, createClient } from "wagmi";
import { ConnectKitProvider, getDefaultClient } from "connectkit";
import LandingPage from "./LandingPage";

const client = createClient(
  getDefaultClient({
    appName: "Your App Name",
  })
);

const App = () => {
  return (
    <WagmiConfig client={client}>
      <ConnectKitProvider>
        <LandingPage />
      </ConnectKitProvider>
    </WagmiConfig>
  );
};

export default App;
