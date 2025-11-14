import React from "react";
import Image from "next/image";
import Countdown from "../ui/countdown";
import countdownBg from "@/public/landing/countdownBg.webp";
import countdownDigitsBg from "@/public/landing/countdownDigitsBg.webp";
import instagramIcon from "@/public/socials/instagram.svg";
import linkedinIcon from "@/public/socials/linkedin.svg";
import mailIcon from "@/public/socials/mail.svg";
import Link from "next/link";
const CountdownSign = () => {
  return (
    <div className="relative flex w-full flex-col items-center justify-center lg:w-auto min-[1400px]:mt-60">
      <div className="relative h-auto w-fit max-[600px]:w-[500px] max-[460px]:w-[450px]">
        <Image
          src={countdownBg}
          alt="Countdown background"
          width={520}
          className="h-auto w-full object-contain"
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
            backgroundImage={countdownDigitsBg.src}
          />

          <div className="mt-[20%] flex w-fit -rotate-12 flex-row">
            <Link
              href="https://www.instagram.com/cutiehack_ucr/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all hover:scale-95 hover:opacity-80"
            >
              <Image
                src={instagramIcon}
                alt="Instagram"
                width={55}
                className="h-auto p-[1px] md:p-0"
              />
            </Link>
            <Link
              href="https://www.linkedin.com/company/cutie-hack"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 p-1 transition-all hover:scale-95 hover:opacity-80"
            >
              <Image
                src={linkedinIcon}
                alt="LinkedIn"
                width={55}
                className="h-auto p-[1px] md:p-0"
              />
            </Link>
            <Link
              href="mailto:citrushack@gmail.com"
              className="transition-all hover:scale-95 hover:opacity-80"
            >
              <Image
                src={mailIcon}
                alt="Email"
                width={75}
                className="h-auto p-[1px] md:p-0"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountdownSign;
