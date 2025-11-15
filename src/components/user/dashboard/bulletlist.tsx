import Image from "next/image";
import BulletListBg from "@/public/dashboard/bulletListBg.webp";

interface props {
  text: string;
  list: string[];
}

const BulletList = ({ text, list }: props) => {
  return (
    <div className="relative flex h-[60vh] -translate-y-20 items-start justify-center font-inknut md:-translate-y-0">
      <Image src={BulletListBg} alt="Bullet List Background" />
      <div className="absolute mt-4 font-bold">{text}</div>

      <div className="absolute flex w-[70%] translate-x-3 translate-y-12 flex-col justify-start gap-x-10 gap-y-2 text-sm leading-6 tracking-wider">
        {list.map((list, index) => (
          <li key={index}>{list}</li>
        ))}
      </div>
    </div>
  );
};

export default BulletList;
