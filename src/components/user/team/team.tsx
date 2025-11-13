import Details from "./details";
import NewTeam from "./new";
import { getSession } from "@/utils/auth";
import { fetchTeam } from "../actions/fetchTeam";
import { Label } from "@/components/ui/label";
import Header from "../header";
import PageHeader from "../pageHeader";
import Image from "next/image";

import CountdownHeader from "@/public/dashboard/CountdownHeader.svg";
import CountdownFooter from "@/public/dashboard/CountdownFooter.svg";
import countdownDigitsBg from "@/public/landing/countdownDigitsBg.webp";
import Countdown from "@/components/ui/countdown";

const Team = async () => {
  const session = await getSession();

  if (!session?.user) return <></>;

  const team = session.user.team;

  const details = await fetchTeam(team);

  return (
    <div className="flex h-[calc(100vh-48px)] w-full flex-col p-4">
      <PageHeader pageTitle="Teams" />
      <div className="flex h-full w-full translate-y-36 flex-col items-center justify-center gap-y-36 sm:-translate-y-12">
        <div className="flex w-full translate-y-16 flex-col items-center justify-around gap-y-12 sm:flex-row sm:items-start">
          <Header />
          <Image
            src={CountdownFooter}
            alt="Countdown Footer"
            className="z-10 block scale-x-125 sm:hidden"
          />
          <div className="flex flex-col items-center justify-center sm:scale-125">
            <div className="relative flex w-full items-center justify-center">
              <Image
                src={CountdownHeader}
                alt="Countdown Header"
                className="-z-10 scale-x-125"
              />
              <span className="absolute -translate-y-2 text-center text-xs font-bold text-white">
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
        {team === "" ? <NewTeam /> : <Details team={details} />}
      </div>
    </div>
    // <div className="flex h-full flex-col items-center gap-3 py-4">
    //   <Label className="self-start text-2xl font-bold">Team</Label>
    // </div>
  );
};

export default Team;
