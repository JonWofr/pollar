import { ConnectKitButton } from 'connectkit';
import { useEffect, useState } from 'react';
import { useAccount } from 'wagmi';

export default function Home() {
  const { address: initialAddress } = useAccount();
  const [address, setAddress] = useState<string>();

  useEffect(() => {
    setAddress(initialAddress);
  }, [initialAddress]);

  return (
    <>
      <ConnectKitButton />
      {address && <div>Connected Wallet: {address}</div>}
    </>
  );
}
