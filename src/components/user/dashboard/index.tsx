import Countdown from "@/components/ui/countdown";
import Header from "../header";
import Tile from "./tile";
import { QrCode, ParkingCircle } from "lucide-react";
import Rooms from "./rooms";
import Packing from "./packing";
import BulletList from "./bulletlist";
import { JUDGING } from "@/data/user/judging";
import { RULES } from "@/data/user/rules";

import CountdownHeader from "@/public/dashboard/CountdownHeader.svg";
import CountdownFooter from "@/public/dashboard/CountdownFooter.svg";
import countdownDigitsBg from "@/public/landing/countdownDigitsBg.webp";

import Image from "next/image";
import UserDataBook from "../userData";
import PageHeader from "../pageHeader";

const DashboardWrapper = async () => {
  return (
    <div className="flex h-[calc(100vh-48px)] w-full flex-col p-4 md:gap-y-20">
      <PageHeader pageTitle="Home" />
      <Header />
      <div className="flex translate-y-48 justify-center md:translate-y-0">
        <UserDataBook />
      </div>
    </div>
  );
};

export default DashboardWrapper;
