import { db } from "@/utils/firebase";
import { collection, getDocs } from "firebase/firestore";

export const dynamic = "force-dynamic";

type EventItem = {
  name: string;
  attendance: number;
};

export const GET = async () => {
  const snapshot = await getDocs(collection(db, "events"));

  const events: EventItem[] = [];

  snapshot.forEach((doc) => {
    const data = doc.data() as Record<string, unknown>;
    events.push({
      name: (data.name as string) ?? "",
      attendance: Number((data.attendance as unknown) ?? 0),
    });
  });

  return Response.json(events);
};
