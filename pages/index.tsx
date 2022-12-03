import { ConnectKitButton } from 'connectkit';
import { useAccount } from 'wagmi';

export default function Home() {
  const { address, isConnecting, isDisconnected } = useAccount();

  return (
    <>
      <ConnectKitButton />
      {isConnecting && <div>Connecting...</div>}
      {isDisconnected && <div>Disconnected</div>}
      {address && <div>Connected Wallet: {address}</div>}
    </>
  );
}
