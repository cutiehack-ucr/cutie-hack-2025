export interface CalendarEvent {
  id: string;
  summary: string;
  location?: string;
  start: {
    dateTime?: string;
    date?: string;
  };
  end: {
    dateTime?: string;
    date?: string;
  };
}

export interface ProcessedEvent {
  id: string;
  title: string;
  location: string;
  time: string;
  startDateTime: Date;
}

// Mock events for development/fallback
const MOCK_EVENTS: ProcessedEvent[] = [
  {
    id: "1",
    title: "Opening Ceremony",
    location: "Main Hall",
    time: "7:30 AM",
    startDateTime: new Date("2025-11-15T07:30:00-08:00"),
  },
  {
    id: "2",
    title: "Hacking Begins",
    location: "Various Rooms",
    time: "9:00 AM",
    startDateTime: new Date("2025-11-15T09:00:00-08:00"),
  },
  {
    id: "3",
    title: "Workshop: Intro to Web Dev",
    location: "Room 101",
    time: "11:00 AM",
    startDateTime: new Date("2025-11-15T11:00:00-08:00"),
  },
];

export async function fetchCalendarEvents(): Promise<ProcessedEvent[]> {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY;
  const calendarId = process.env.NEXT_PUBLIC_GOOGLE_CALENDAR;

  if (!apiKey || !calendarId) {
    console.error("Missing Google Calendar API credentials");
    return MOCK_EVENTS;
  }

  try {
    // Set time range for November 15, 2025 (PST)
    const timeMin = new Date("2025-11-15T00:00:00-08:00").toISOString();
    const timeMax = new Date("2025-11-15T23:59:59-08:00").toISOString();

    const url = `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(
      calendarId,
    )}/events?key=${apiKey}&timeMin=${timeMin}&timeMax=${timeMax}&singleEvents=true&orderBy=startTime`;

    const response = await fetch(url, {
      next: { revalidate: 300 }, // Revalidate every 5 minutes
    });

    if (!response.ok) {
      console.warn(`Calendar API error: ${response.status}. Using mock data.`);
      return MOCK_EVENTS;
    }

    const data = await response.json();

    // Check if there's an error in the response
    if (data.error) {
      console.warn(
        `Calendar API error: ${data.error.message}. Using mock data.`,
      );
      return MOCK_EVENTS;
    }

    const events: CalendarEvent[] = data.items || [];

    // If no events found, return mock events
    if (events.length === 0) {
      console.warn("No events found in calendar. Using mock data.");
      return MOCK_EVENTS;
    }

    return events.map((event) => {
      const startTime = event.start.dateTime || event.start.date || "";
      const startDate = new Date(startTime);

      // Format time in PST
      const timeString = startDate.toLocaleTimeString("en-US", {
        timeZone: "America/Los_Angeles",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      });

      return {
        id: event.id,
        title: event.summary || "Untitled Event",
        location: event.location || "Location TBA",
        time: timeString,
        startDateTime: startDate,
      };
    });
  } catch (error) {
    console.error("Error fetching calendar events:", error);
    return MOCK_EVENTS;
  }
}
