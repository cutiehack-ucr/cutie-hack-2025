import Image from "next/image";
import paperBg from "@/public/schedule/paper.svg";
import paperBgMobile from "@/public/schedule/paper-mobile.svg";

interface EventCardProps {
  time: string;
  title: string;
  location: string;
}

const EventCard = ({ time, title, location }: EventCardProps) => {
  return (
    <div className="relative flex h-[86px] w-full items-center justify-between px-6 md:h-[80px] md:px-8">
      {/* Desktop Paper */}
      <Image
        src={paperBg}
        alt=""
        fill
        className="absolute inset-0 hidden object-fill md:block"
        aria-hidden
      />
      {/* Mobile Paper */}
      <Image
        src={paperBgMobile}
        alt=""
        fill
        className="absolute inset-0 block object-fill md:hidden"
        aria-hidden
      />

      {/* Mobile Layout */}
      <div className="relative z-10 flex w-full flex-col justify-between py-2 md:hidden">
        <div className="flex w-full items-center justify-center">
          <h3 className="text-md px-10 text-center font-inknut font-bold text-black">
            {title}
          </h3>
        </div>
        <div className="flex w-full items-center pt-0.5">
          <div className="flex w-1/2 items-center justify-center">
            <p className="font-inknut text-sm text-black">{time}</p>
          </div>
          <div className="flex w-1/2 items-center justify-center">
            <p className="font-inknut text-sm text-black">{location}</p>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="relative z-10 hidden w-full items-center justify-between md:flex">
        <p className="font-inknut text-base text-black">{time}</p>
        <h3 className="font-inknut text-xl font-bold text-black">{title}</h3>
        <p className="font-inknut text-base text-black">{location}</p>
      </div>
    </div>
  );
};

export default EventCard;
