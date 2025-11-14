import TitleBanner from "@/components/ui/title-banner";
import Image, { StaticImageData } from "next/image";
import target from "@/public/board/target.svg";
import { directors, leads } from "@/data/leads";
interface TeamCardProps {
  photo: StaticImageData;
  name: string;
  role: string;
}

export const TeamCard = ({ photo, name, role }: TeamCardProps) => {
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
      <p className="absolute bottom-10 mt-4 font-semibold">{name}</p>
      <p className="absolute bottom-5 text-sm">{role}</p>
    </div>
  );
};
const Team = () => {
  return (
    <div className="mt-[5vh] flex flex-col items-center justify-center md:mt-[10vh] 2xl:mt-[5vh]">
      <TitleBanner title="Leads" />
      <div className="grid grid-cols-1 gap-x-8 md:grid-cols-2">
        {directors.map(({ photo, name, role }, key) => (
          <div key={key}>
            <TeamCard photo={photo} name={name} role={role} />
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 gap-x-8 md:grid-cols-4">
        {leads.map(({ photo, name, role }, key) => (
          <div key={key}>
            <TeamCard photo={photo} name={name} role={role} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
