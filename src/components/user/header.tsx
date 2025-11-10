"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import CharacterStats from "@/public/dashboard/Character Stats.svg";
import CharacterStatsMobile from "@/public/dashboard/Character Stats Mobile.svg";

const Header = () => {
  const { data: session } = useSession();
  return (
    <div className="relative flex w-fit h-fit items-center justify-center">
      <Image
        src={CharacterStats}
        alt="Character Stats"
        className="z-10 scale-105 hidden sm:block"
      />
      <Image
        src={CharacterStatsMobile}
        alt="Character Stats"
        className="z-10 scale-105 block sm:hidden"
      />
      <div className="absolute inset-0 z-10 flex flex-col sm:flex-row sm:-translate-y-11 sm:translate-x-40 justify-end sm:justify-start items-center gap-y-9 sm:gap-0 px-8 font-inknut text-white">
        <p className="shrink-0 whitespace-nowrap text-[clamp(0.75rem,1.5vw,1.25rem)] font-bold">
          {session?.user?.firstName} {session?.user?.lastName}
        </p>

        <p className="ml-4 overflow-hidden text-ellipsis whitespace-nowrap text-[clamp(0.8rem,1.4vw,1.2rem)]">
          {session?.user?.email}
        </p>
      </div>
    </div>


  );
};
export default Header;
