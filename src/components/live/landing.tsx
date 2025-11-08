import Image from "next/image";
import CountdownSign from "./countdown-sign";
import bgGlow from "@/public/landing/bgGlow.svg";
import bgGlowSmall from "@/public/landing/backgroundGlow.svg";
import title from "@/public/landing/cutieHackTitle.svg";

import mobileTitle from "@/public/landing/mobileTitle.webp";
import mobileLanding from "@/public/landing/mobileLanding.webp";
import mobileFrame from "@/public/landing/mobileFancyFrame.svg";
import Countdown from "../ui/countdown";
import countdownDigitsBg from "@/public/landing/countdownDigitsBg.webp";

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
          className="mb-10 h-auto w-full max-w-[900px] scale-125"
          priority
        />

        <Image
          src={mobileFrame}
          alt="Mobile Frame Under Title"
          className="mb-20 mt-5 w-1/2"
        />

        <div className="relative w-full">
          <Image
            src={mobileLanding}
            alt="Mobile Landing"
            className="w-full object-cover"
            priority
          />

          <div className="font-inknut-antiqua absolute bottom-[11%] left-1/2 -translate-x-1/2 text-center text-white md:bottom-[17%]">
            <Countdown
              classNames={{
                unit: "text-white md:text-xl sm:text-lg",
                background: "bg-hackathon-blue-100",
                digit: "text-black md:text-xl sm:text-lg",
              }}
              backgroundImage={countdownDigitsBg.src}
            />

            <div className="mt-4 sm:text-3xl md:text-4xl">
              November 15, 2025
            </div>
            <div className="mt-2 sm:text-3xl md:text-4xl">UC Riverside</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
