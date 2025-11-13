"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import CharacterStats from "@/public/dashboard/Character Stats.svg";
import CharacterStatsMobile from "@/public/dashboard/Character Stats Mobile.svg";
import Countdown from "../ui/countdown";

import CountdownHeader from "@/public/dashboard/CountdownHeader.svg";
import CountdownFooter from "@/public/dashboard/CountdownFooter.svg";
import countdownDigitsBg from "@/public/landing/countdownDigitsBg.webp";

const Header = () => {
  const { data: session } = useSession();
  return (
    <div className="flex h-full w-full translate-y-12 flex-col items-center justify-center gap-y-36 sm:-translate-y-32">
      <div className="flex w-full translate-y-16 flex-col items-center justify-around gap-y-12 sm:flex-row sm:items-start">
        <div className="relative flex h-fit w-fit items-center justify-center">
          <Image
            src={CharacterStats}
            alt="Character Stats"
            className="z-10 hidden scale-105 sm:block"
          />
          <Image
            src={CharacterStatsMobile}
            alt="Character Stats"
            className="z-10 block scale-105 sm:hidden"
          />
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-end gap-y-9 px-8 font-inknut text-white sm:-translate-y-11 sm:translate-x-40 sm:flex-row sm:justify-start sm:gap-0">
            <p className="shrink-0 whitespace-nowrap text-[clamp(0.75rem,1.5vw,1.25rem)] font-bold">
              {session?.user?.firstName} {session?.user?.lastName}
            </p>

            <p className="ml-4 overflow-hidden text-ellipsis whitespace-nowrap text-[clamp(0.8rem,1.4vw,1.2rem)]">
              {session?.user?.email}
            </p>
          </div>
        </div>
        <Image
          src={CountdownFooter}
          alt="Countdown Footer"
          className="z-10 block scale-x-125 sm:hidden"
        />
        <div className="flex flex-col items-center justify-center sm:scale-125">
          <div className="relative flex w-full items-center justify-center">
            <Image
              src={CountdownHeader}
              alt="Countdown Header"
              className="-z-10 scale-x-125"
            />
            <span className="absolute -translate-y-2 text-center text-xs font-bold text-white">
              Time until Submission
            </span>
          </div>

          <Countdown
            classNames={{
              unit: "text-white",
              background: "bg-hackathon-blue-100",
              digit: "text-black",
            }}
            backgroundImage={countdownDigitsBg.src}
          />

          <Image
            src={CountdownFooter}
            alt="Countdown Footer"
            className="z-10 scale-x-125"
          />
        </div>
      </div>
    </div>
  );
};
export default Header;
