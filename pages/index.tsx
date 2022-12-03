import { ConnectKitButton } from "connectkit";
import { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import Image from "next/image";
import Link from "next/link";

import Logo from "../assets/img/logo.svg";
import LogoCircle from "../assets/img/logoCircle.svg";
import PollIcon from "../assets/img/pollIcon.svg";

export default function Home() {
  const { address: initialAddress } = useAccount();
  const [address, setAddress] = useState<string>();

  useEffect(() => {
    setAddress(initialAddress);
  }, [initialAddress]);

  return (
    <div className="flex justify-center">
      <div className="flex justify-between items-center p-[1rem] max-w-[1084px] w-full ">
        <nav className="flex justify-between items-center gap-[3rem]">
          <div className="flex items-center gap-[1.5rem]">
            <LogoCircle className="h-[60px]" />
            <Logo className="h-[20px]" />
          </div>
          <div>
            <ul className="flex gap-[1rem]">
              <Link href="#" className="font-[700]">
                Home
              </Link>
              <Link href="#" className="">
                Polls
              </Link>
            </ul>
          </div>
        </nav>

        <div className="flex items-center gap-[2rem]">
          <button className="flex items-center gap-[1rem] px-[3rem] py-[1rem] rounded-[20px] bg-[#2E2E2E]">
            <PollIcon className="h-[1rem]" />
            <span className="text-white text-[length:18px]">Create Polls</span>
          </button>
          <ConnectKitButton.Custom>
            {({ isConnected, isConnecting, show, hide, address, ensName }) => {
              return (
                <button onClick={show}>
                  {isConnected && address ? (
                    <p>
                      {address.substring(0, 8)}....{address.substring(37)}
                    </p>
                  ) : (
                    "Custom Connect"
                  )}
                </button>
              );
            }}
          </ConnectKitButton.Custom>
          {/* {address && <div>Connected Wallet: {address}</div>} */}
        </div>
      </div>
    </div>
  );
}
