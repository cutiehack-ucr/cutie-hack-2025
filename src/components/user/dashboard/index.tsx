import Countdown from "@/components/ui/countdown";
import Header from "../header";
import Tile from "./tile";
import { QrCode, ParkingCircle } from "lucide-react";
import Rooms from "./rooms";
import Packing from "./packing";
import BulletList from "./bulletlist";
import { JUDGING } from "@/data/user/judging";
import { RULES } from "@/data/user/rules";

import CharacterStats from "@/public/dashboard/Character Stats.svg";
import CountdownHeader from "@/public/dashboard/CountdownHeader.svg";
import CountdownFooter from "@/public/dashboard/CountdownFooter.svg";
import Book from "@/public/dashboard/Book.svg";
import countdownDigitsBg from "@/public/landing/countdownDigitsBg.webp";

import Image from "next/image";
import { useSession } from "next-auth/react";
import CountdownSign from "@/components/live/countdown-sign";

const DashboardWrapper = async () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-start gap-y-48 font-poppins">
      <div className="relative flex w-full translate-y-16 items-start justify-around">
        <div className="relative flex w-fit items-center justify-center">
          <Image
            src={CharacterStats}
            alt="Character Stats"
            className="z-10 scale-125"
          />
          <Header />
        </div>

        <div className="flex scale-125 flex-col items-center justify-center">
          <div className="relative flex w-full items-center justify-center">
            <Image
              src={CountdownHeader}
              alt="Countdown Header"
              className="-z-10 scale-x-125"
            />
            <span className="text-md absolute -translate-y-2 text-center font-inknut text-white">
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
      <div className="flex w-full justify-center">
        <div className="relative flex flex-col items-center">
          <div className="absolute bottom-[-10px] h-[20px] w-[60%] animate-shadowPulse rounded-full bg-black/30 blur-xl" />

          <Image src={Book} alt="User Book" className="z-10 animate-float" />

          <div className="z-20"></div>
        </div>
      </div>

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
