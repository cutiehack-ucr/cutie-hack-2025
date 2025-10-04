import React from "react";
import Image from "next/image";
import Countdown from "../ui/countdown";

const CountdownSign = () => {
  return (
    <div className="relative flex w-full flex-col items-center justify-center lg:w-auto min-[1400px]:mt-60">
      <div className="relative w-fit max-[600px]:w-[500px] max-[460px]:w-[450px]">
        <Image
          src="/landing/countdownBg.webp"
          alt="Countdown background"
          width={520}
          height={0}
          className="w-full object-contain"
          priority
        />

        <div className="absolute inset-0 mt-8 flex flex-col items-center justify-start px-6 pt-6 max-[640px]:mt-0 lg:mt-8">
          <div className="flex flex-col items-center gap-1 text-base text-white sm:flex-row sm:gap-2 min-[660px]:text-xl">
            <p className="font-inknut">November 15, 2025</p>
            <span className="hidden sm:inline">•</span>
            <p className="font-inknut">UC Riverside</p>
          </div>

          <Countdown
            classNames={{
              unit: "text-white",
              background: "bg-hackathon-blue-100",
              digit: "text-black",
            }}
            backgroundImage="/landing/countdownDigitsBg.webp"
          />

          <button className="mt-[20%] w-fit rounded-[20px] border-[3px] border-solid border-black bg-hackathon-off-white-100 px-6 py-[10px] font-inknut text-xl shadow-[-3px_3px_2px_0px_#47B7A0] max-[455px]:mt-12">
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default CountdownSign;
