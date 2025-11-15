import TitleBanner from "@/components/ui/title-banner";
import Image, { StaticImageData } from "next/image";
import target from "@/public/board/target.svg";
import judges from "@/data/judges";
interface JudgeCardProps {
  photo: StaticImageData;
  name: string;
  title: string;
}

export const JudgeCard = ({ photo, name, title }: JudgeCardProps) => {
  return (
    <div className="relative flex flex-col items-center text-center font-inknut text-black">
      <div className="relative">
        <Image src={target} alt="target" />
        <Image
          src={photo}
          alt={name}
          className="absolute left-1/2 top-[30%] w-6/12 -translate-x-1/2"
        />
      </div>
      <p className="md:text-md absolute bottom-10 mt-4 px-1 text-xs font-semibold 2xl:bottom-12">
        {name}
      </p>
      <p className="absolute bottom-4 text-sm 2xl:bottom-6">{title}</p>
    </div>
  );
};

const Judges = () => {
  return (
    <div className="mt-[5vh] flex flex-col items-center justify-center md:mt-[10vh] 2xl:mt-[5vh]">
      <TitleBanner title="Judges" />
      <div className="grid grid-cols-2 gap-x-8 px-4 md:grid-cols-4">
        {judges.map(({ photo, name, title }, key) => (
          <div key={key}>
            <JudgeCard photo={photo} name={name} title={title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Judges;
