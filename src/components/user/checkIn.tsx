"use client";

import Image from "next/image";
import QRBG from "@/public/dashboard/QRBG.svg";
import { QRCodeSVG } from "qrcode.react";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import Header from "./header";
import PageHeader from "./pageHeader";

const CheckinPage = () => {
  const [date, setDate] = useState(new Date());
  const { data: session } = useSession();
  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  if (!session?.user) return <></>;

  return (
    <div className="flex h-[calc(100vh-48px)] w-full flex-col p-4">
      <PageHeader pageTitle="Check In" />
      <Header />
      <div className="m-auto flex h-1/2 w-full translate-y-48 flex-col items-center justify-center rounded-lg sm:w-1/2 md:translate-y-0">
        <Image
          src={QRBG}
          alt="QR Background"
          className="absolute -z-10 w-11/12 sm:w-fit"
        />
        <QRCodeSVG
          value={`${session.user.id}&${date.toISOString()}&${session.user.firstName}${session.user.lastName}`}
          className="h-full w-10/12 sm:w-full"
        />
      </div>
    </div>
  );
};

export default CheckinPage;
