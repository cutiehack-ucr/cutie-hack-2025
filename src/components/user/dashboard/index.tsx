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

const DashboardWrapper = async () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-start gap-y-48 font-inknut">
      <div className="flex flex-col sm:flex-row w-full translate-y-16 gap-y-12 items-center sm:items-start justify-around">
        <Header />
        <Image
            src={CountdownFooter}
            alt="Countdown Footer"
            className="z-10 scale-x-105 sm:hidden block"
          />
        <div className="flex sm:scale-105 flex-col items-center justify-center">
          <div className="relative flex w-full items-center justify-center">
            <Image
              src={CountdownHeader}
              alt="Countdown Header"
              className="-z-10 scale-x-105"
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
      <UserDataBook />

      {/* <Header />
      <div className="grid grid-cols-1 gap-3 lg:grid-cols-3">
        <div className="col-span-1 flex flex-col gap-3 md:col-span-2">
          <Countdown />
          <div className="flex flex-col gap-4 md:flex-row">
            <Tile
              icon={<QrCode size={40} />}
              text="Check In"
              link="/user/checkin"
            />
            <Tile
              icon={<ParkingCircle size={40} />}
              text="Parking Info"
              newTab
              link="https://transportation.ucr.edu/visitor-parking"
            />
          </div>
          <Rooms />
          <Packing />
        </div>

        <div className="flex flex-col gap-4">
          <BulletList text="Rules" list={RULES} />
          <BulletList text="Judging" list={JUDGING} />
        </div>
      </div> */}
    </div>
  );
};

export default DashboardWrapper;
