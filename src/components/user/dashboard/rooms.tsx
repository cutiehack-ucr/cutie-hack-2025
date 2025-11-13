import { Badge } from "@/components/ui/badge";
import BackgroundMobile from "@/public/dashboard/hackRoomsBgMobile.webp";
import Background from "@/public/dashboard/hackRoomsBg.webp";
import Room from "@/public/dashboard/hackRoom.webp";
import Image from "next/image";

const rooms: string[] = ["WCH127", "WCH110", "WCH130", "Bytes", "WCH129"];

const Rooms = (): React.ReactNode => {
  return (
    <div>
      <div className="relative flex h-[30vh] items-start justify-center font-inknut md:hidden">
        <Image src={BackgroundMobile} alt="Hack Rooms background image" />
        <div className="absolute mt-4 font-bold">Hacking Rooms</div>
        <div className="absolute flex w-full flex-1 translate-y-16 list-none flex-wrap justify-center gap-x-10 gap-y-4">
          {rooms.map((room: string, index: number) => (
            <li key={index} className="flex items-center justify-center">
              <Image
                src={Room}
                alt="Hack Room Badge"
                className="-z-10 scale-125"
              />
              <span className="absolute z-10 text-sm font-light text-white">
                {room}
              </span>
            </li>
          ))}
        </div>
      </div>
      <div className="hidden items-center font-inknut md:flex">
        <Image
          src={Background}
          alt="Hack Rooms background image"
          className="translate-x-3 scale-x-105"
        />
        <div className="absolute translate-x-8 font-bold">Hacking Rooms</div>
        <div className="absolute flex w-full flex-1 -translate-x-[23%] list-none flex-wrap justify-center gap-x-4 gap-y-4">
          {rooms.map((room: string, index: number) => (
            <li key={index} className="flex items-center justify-center">
              <Image src={Room} alt="Hack Room Badge" className="scale-105" />
              <span className="absolute text-xs font-light text-white">
                {room}
              </span>
            </li>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rooms;
