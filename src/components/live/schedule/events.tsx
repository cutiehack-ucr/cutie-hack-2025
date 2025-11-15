"use client";
import { GoogleEvent } from "@/types/calendar";
import { useState } from "react";
import Card from "./card";

interface Props {
  events: GoogleEvent[];
  totalDays: string[];
}

const Events = ({ events, totalDays }: Props) => {
  const [selectedDay, setSelectedDay] = useState(
    new Date() > new Date(events[0].start.dateTime)
      ? new Date().toLocaleString("en-US", {
          timeZone: "America/Los_Angeles",
          weekday: "long",
        })
      : "Monday",
  );

  const todaysEvents = events.filter(
    ({ start }) =>
      new Date(start.dateTime).toLocaleString("en-US", {
        timeZone: "America/Los_Angeles",
        weekday: "long",
      }) === selectedDay,
  );

  return (
    <div className="flex flex-col items-center justify-center">
      {/* Day selector */}
      <div className="mx-auto grid w-10/12 grid-cols-7 items-center rounded border-2 border-black text-base">
        {totalDays.map((day) => (
          <button
            key={day}
            className={`flex justify-center rounded p-2 text-black ${
              selectedDay === day ? "bg-hackathon-blue-100" : "bg-transparent"
            }`}
            onClick={() => setSelectedDay(day)}
          >
            {day}
          </button>
        ))}
      </div>

      {/* Events */}
      <div className="mt-6 flex w-10/12 flex-col gap-4">
        {todaysEvents.length === 0 ? (
          <div className="flex justify-center text-lg font-semibold">
            No events available
          </div>
        ) : (
          todaysEvents.map((event, index) => {
            const time = new Date(event.start.dateTime).toLocaleTimeString(
              "en-US",
              {
                hour: "2-digit",
                minute: "2-digit",
                timeZone: "America/Los_Angeles",
              },
            );

            const descriptionLine = event.description
              ? event.description.split("\n")[0].replace(/^\*/, "")
              : "";

            return (
              <Card
                key={index}
                time={time}
                title={event.summary}
                location={event.location || descriptionLine || "No Location"}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default Events;
