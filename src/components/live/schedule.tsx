import Image from "next/image";
import TitleBanner from "../ui/title-banner";
import registerDecorFrame from "@/public/landing/registerDecorFrame.webp";
import bulletin from "@/public/schedule/bulletin.svg";
import bulletinMobile from "@/public/schedule/bulletin-mobile.svg";
import EventCard from "./schedule/event-card";
import { fetchCalendarEvents } from "@/utils/calendar";

const Schedule = async () => {
  const categories = [
    { name: "Setup", color: "text-hackathon-off-white-100" },
    { name: "Workshops", color: "text-hackathon-off-white-100" },
    { name: "Activities", color: "text-hackathon-off-white-100" },
  ];

  const events = await fetchCalendarEvents();

  return (
    <div
      className="relative z-10 mx-auto mt-[5vh] flex w-full flex-col items-center justify-center md:mt-[10vh] 2xl:mt-[5vh]"
      id="schedule"
    >
      <TitleBanner title="Schedule" subtitle="November 15, 2025 (PST)" />

      <div className="mt-10 hidden max-w-4xl grid-cols-1 gap-x-12 gap-y-10 sm:grid md:grid-cols-3 md:gap-y-16">
        {categories.map((category) => (
          <div
            key={category.name}
            className="relative flex h-[80px] w-[250px] flex-col items-center justify-center"
          >
            <Image
              alt=""
              width={250}
              height={80}
              src={registerDecorFrame}
              aria-hidden
              className="absolute"
            />
            <p className={`font-inknut text-lg md:text-2xl ${category.color}`}>
              {category.name}
            </p>
          </div>
        ))}
      </div>

      {/* Bulletin Board with Events - Desktop */}
      <div className="relative mx-auto mt-8 hidden w-4/5 md:block">
        <Image
          src={bulletin}
          alt="Bulletin Board"
          width={1038}
          height={748}
          className="h-auto w-full"
        />

        {/* Events Container */}
        <div className="absolute inset-x-0 bottom-8 top-8 flex items-start justify-center overflow-y-scroll px-16">
          <div className="flex w-full max-w-3xl flex-col gap-4">
            {events.length > 0 ? (
              events.map((event) => (
                <EventCard
                  key={event.id}
                  time={event.time}
                  title={event.title}
                  location={event.location}
                />
              ))
            ) : (
              <div className="flex items-center justify-center py-12">
                <p className="font-inknut text-lg text-hackathon-off-white-100">
                  No events scheduled yet
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Bulletin Board with Events - Mobile */}
      <div className="relative mt-8 block w-full px-4 md:hidden">
        <Image
          src={bulletinMobile}
          alt="Bulletin Board"
          width={330}
          height={2013}
          className="h-auto w-full"
        />

        {/* Events Container */}
        <div className="absolute inset-0 flex items-start justify-center px-8 pt-8">
          <div className="flex w-full flex-col gap-4">
            {events.length > 0 ? (
              events.map((event) => (
                <EventCard
                  key={event.id}
                  time={event.time}
                  title={event.title}
                  location={event.location}
                />
              ))
            ) : (
              <div className="flex items-center justify-center py-12">
                <p className="font-inknut text-lg text-hackathon-off-white-100">
                  No events scheduled yet
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
