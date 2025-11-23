import Image from "next/image";
import CountdownSign from "./countdown-sign";
import bgGlow from "@/public/landing/bgGlow.svg";
import bgGlowSmall from "@/public/landing/backgroundGlow.svg";
import title from "@/public/landing/cutieHackTitle.svg";

import mobileTitle from "@/public/landing/mobileTitle.svg";
import mobileLanding from "@/public/landing/mobileLanding.svg";
// import Countdown from "../ui/countdown";
// import countdownDigitsBg from "@/public/landing/countdownDigitsBg.webp";
import Link from "next/link";

const Landing = () => {
  return (
    <div className="flex flex-col items-center justify-center overflow-x-hidden overflow-y-clip lg:overflow-x-clip">
      <div className="relative hidden min-h-screen w-full flex-col items-center lg:flex">
        <Image
          className="absolute inset-0 z-0 min-h-full bg-hackathon-teal-800 max-[1400px]:hidden lg:h-auto"
          alt=""
          width={4000}
          height={1800}
          src={bgGlow}
          priority
          aria-hidden="true"
        />
        <Image
          className="absolute z-0 min-h-full translate-y-12 scale-150 bg-hackathon-teal-800 min-[1400px]:hidden"
          alt=""
          width={4000}
          height={1800}
          src={bgGlowSmall}
          priority
          aria-hidden="true"
        />

        <div className="relative z-10 flex h-auto w-[90%] flex-col items-center gap-6 px-4 max-[1400px]:mt-48 max-[800px]:mt-24 lg:items-center lg:justify-between lg:px-20 min-[1400px]:flex-row">
          <Image
            className="object-contain min-[1400px]:mb-12 min-[1400px]:ml-12"
            alt="Cutie Hack 2025 Title"
            src={title}
            width={400}
            sizes="(min-width: 1400px) 400px, 300px"
          />
          <CountdownSign />
        </div>
      </div>

      <div className="relative z-10 mt-40 flex w-full flex-col items-center justify-center lg:hidden">
        <Image
          src={mobileTitle}
          alt="Mobile Title"
          className="mb-10 h-auto w-full max-w-[900px]"
          priority
        />

        <div className="relative w-full">
          <Image
            src={mobileLanding}
            alt="Mobile Landing"
            className="w-full object-cover"
            priority
          />

          <div className="absolute bottom-[11%] left-1/2 -translate-x-1/2 text-center font-inknut text-white md:bottom-[17%]">
            {/* <Countdown
              classNames={{
                unit: "text-white md:text-xl sm:text-md",
                background: "bg-hackathon-blue-100",
                digit: "text-black md:text-xl sm:text-md",
              }}
              backgroundImage={countdownDigitsBg.src}
            /> */}
            <p className="text-sm opacity-70">November 15, 2025</p>
            <p className="mb-4 mt-2 text-sm opacity-70">UC Riverside</p>

            <p className="text-xl font-bold">Hacking has concluded!</p>
            <p className="mt-2 font-inknut text-sm">
              Check out our winners:{" "}
              <Link
                href="https://cutie-hack-2025.devpost.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline transition-all hover:opacity-75"
              >
                Devpost
              </Link>
            </p>
            <p className="mt-2 font-inknut text-sm">Want to see more?</p>
            <p className="mb-12 mt-2 font-inknut text-sm">
              Check out{" "}
              <Link href="https://www.citrushack.com" className="underline">
                Citrus Hack (April 2026)!
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
