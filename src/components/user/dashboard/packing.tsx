import PackingBgMobile from "@/public/dashboard/packingBgMobile.png";
import PackingBg from "@/public/dashboard/packingBg.png";
import Image from "next/image";
const list: string[] = [
  "Computer and accessories (mouse, keyboard, etc.)",
  "Chargers (phone, laptop, etc.)",
  "Hardware that you might want to hack on or incorporate into your build.",
  "Sleep-related things (sleeping bags, pillow, blankets, etc.)",
  "There will be a resting area within the venue itself, but we can't provide sleeping materials to hackers.",
  "A change of clothes (including something warm such as a jacket or sweatshirt)",
  "Toiletries: toothbrush, toothpaste, soap, towels, face wash",
  "Medication (if needed)",
  "Refillable water bottle",
];

const Packing = (): React.ReactNode => {
  return (
    <div>
      <div className="relative flex h-[95vh] -translate-y-20 items-start justify-center font-inknut md:hidden">
        <Image src={PackingBgMobile} alt="Hack Rooms background image" />
        <div className="absolute mt-4 font-bold">Packing List</div>

        <div className="absolute flex w-[70%] translate-x-3 translate-y-16 flex-col justify-start gap-x-10 gap-y-2 text-sm leading-6 tracking-wider">
          {list.map((list, index) => (
            <li key={index}>{list}</li>
          ))}
        </div>
      </div>
      <div className="hidden items-start font-inknut md:flex">
        <Image src={PackingBg} alt="Hack Rooms background image" />
        <div className="absolute mx-auto mt-4 translate-x-32 justify-self-center font-bold">
          Packing List
        </div>
        <div className="absolute flex w-[23%] flex-1 translate-x-6 translate-y-16 flex-col flex-wrap justify-start gap-x-10 gap-y-2 text-xs leading-6 tracking-wider">
          {list.map((list, index) => (
            <li key={index}>{list}</li>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Packing;
