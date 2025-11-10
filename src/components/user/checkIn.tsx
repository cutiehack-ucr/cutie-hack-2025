"use client";

import Image from "next/image";
import QRBG from "@/public/dashboard/QRBG.svg"
import { QRCodeSVG } from "qrcode.react";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { Label } from "@/components/ui/label";
import { useSidebar } from "../ui/sidebar";
import Header from "./header";
import Countdown from "../ui/countdown";

import CountdownHeader from "@/public/dashboard/CountdownHeader.svg";
import CountdownFooter from "@/public/dashboard/CountdownFooter.svg";
import countdownDigitsBg from "@/public/landing/countdownDigitsBg.webp";

const CheckinPage = () => {
  const [date, setDate] = useState(new Date());
  const { data: session } = useSession();
  const { isMobile, toggleSidebar } = useSidebar();

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  if (!session?.user) return <></>;

  return (
    <div className="flex h-[calc(100vh-48px)] w-full flex-col p-4">
      <div className="pt-4 flex justify-between">
        <Label className="pr-5 text-2xl font-bold text-white">Check In</Label>
        {isMobile && (
          <button
            onClick={toggleSidebar}
            className="z-10 mb-2 flex flex-col items-end gap-[4px] pr-2 drop-shadow-md transition-all hover:scale-105 hover:cursor-pointer"
          >
            <div className="h-1 w-8 rounded-xl border-[1px] border-black bg-white"></div>
            <div className="h-1 w-8 rounded-xl border-[1px] border-black bg-white"></div>
            <div className="h-1 w-8 rounded-xl border-[1px] border-black bg-white"></div>
          </button>
        )}
      </div>
      <div className="flex h-full flex-col w-full items-center justify-center gap-y-36 sm:-translate-y-12 translate-y-36">
        <div className="flex flex-col sm:flex-row w-full translate-y-16 gap-y-12 items-center sm:items-start justify-around">
        <Header />
        <Image
            src={CountdownFooter}
            alt="Countdown Footer"
            className="z-10 scale-x-125 sm:hidden block"
          />
        <div className="flex sm:scale-125 flex-col items-center justify-center">
          <div className="relative flex w-full items-center justify-center">
            <Image
              src={CountdownHeader}
              alt="Countdown Header"
              className="-z-10 scale-x-125"
            />
            <span className="text-xs absolute -translate-y-2 text-center font-bold text-white">
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
        <div className="m-auto flex flex-col items-center justify-center rounded-lg h-1/2 w-full sm:w-1/2">
          <Image src={QRBG} alt="QR Background" className="absolute -z-10 sm:w-fit w-11/12" />
          <QRCodeSVG
            value={`${session.user.id}&${date.toISOString()}&${session.user.firstName}${session.user.lastName}`}
            className="h-full w-10/12 sm:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default CheckinPage;
