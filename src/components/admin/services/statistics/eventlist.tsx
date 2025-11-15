"use client";

interface eventStats {
  name: string;
  attendance: number;
}

interface EventListProps {
  events: eventStats[];
}

const EventList = ({ events }: EventListProps) => {
  const max =
    events && events.length
      ? events.reduce(
          (m: number, e: eventStats) => Math.max(m, e.attendance),
          0,
        )
      : 0;

  if (!events) {
    return <div className="text-white">Loading...</div>;
  }

  if (events.length === 0) {
    return <div className="text-white">No events found.</div>;
  }

  return (
    <div className="mt-3 flex flex-col gap-3">
      {events.map((ev: eventStats, idx: number) => (
        <div key={idx} className="flex items-center gap-4">
          <div className="w-48 truncate text-white">{ev.name}</div>
          <div className="w-12 text-right text-white">{ev.attendance}</div>
          <div className="h-4 flex-1 overflow-hidden rounded bg-white/10">
            <div
              className="h-4 bg-teal-500"
              style={{ width: `${max ? (ev.attendance / max) * 100 : 0}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventList;
