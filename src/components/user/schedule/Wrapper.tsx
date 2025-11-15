import { api } from "@/utils/api";
import Schedule from "./Schedule";

const ScheduleWrapper = async () => {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY;
  const calendarId = process.env.NEXT_PUBLIC_GOOGLE_CALENDAR;

  if (!apiKey || !calendarId) {
    console.error("Missing Google Calendar API credentials");
    return [];
  }

  const timeMin = new Date("2025-11-15T00:00:00-08:00").toISOString();
  const timeMax = new Date("2025-11-16T23:59:59-08:00").toISOString();

  const url = `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(
    calendarId,
  )}/events?key=${apiKey}&timeMin=${timeMin}&timeMax=${timeMax}&singleEvents=true&orderBy=startTime`;

  const { items } = await api({
    url: url,
    method: "GET",
  });

  return <Schedule eventList={items} />;
};

export default ScheduleWrapper;
