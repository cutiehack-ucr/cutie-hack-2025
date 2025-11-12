import Image from "next/image";
import paperBg from "@/public/schedule/paper.svg";

interface EventCardProps {
  time: string;
  title: string;
  location: string;
}

const EventCard = ({ time, title, location }: EventCardProps) => {
  return (
    <div className="relative flex h-[80px] w-full items-center justify-between px-8">
      <Image
        src={paperBg}
        alt=""
        fill
        className="absolute inset-0 object-fill"
        aria-hidden
      />
      <div className="relative z-10 flex w-full items-center justify-between">
        <p className="font-inknut text-sm text-black md:text-base">{time}</p>
        <h3 className="font-inknut text-base font-bold text-black md:text-xl">
          {title}
        </h3>
        <p className="font-inknut text-sm text-black md:text-base">
          {location}
        </p>
      </div>
    </div>
  );
};

export default EventCard;
