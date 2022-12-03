import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { WagmiConfig, createClient } from 'wagmi';
import { ConnectKitProvider, getDefaultClient } from 'connectkit';

const client = createClient(
  getDefaultClient({
    appName: 'Your App Name',
    autoConnect: true,
  })
);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={client}>
      <ConnectKitProvider>
        <Component {...pageProps} />;
      </ConnectKitProvider>
    </WagmiConfig>
  );
}
