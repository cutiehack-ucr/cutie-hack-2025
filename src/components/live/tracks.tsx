import TitleBanner from "@/components/ui/title-banner";
import Image from "next/image";
import line from "@/public/tracks/Lines.svg";
import innervines from "@/public/tracks/Inner vines.svg";

import ScrollItem from "../ui/scroll";
import { tracksData } from "@/data/tracks";
import { tracksMobileData } from "@/data/tracks";

const Tracks = () => {
  return (
    <div className="w-full">
      {/* Regular */}
      <div className="relative mx-auto hidden aspect-[9/16] w-full max-w-5xl pt-96 md:block">
        <TitleBanner title="Tracks" />

        <div className="pointer-events-none absolute inset-0">
          <Image
            src={line}
            alt="Decorative white line"
            className="absolute -left-[10%] top-[23%] z-30 h-[2%] w-[30%] object-contain"
          />
          <Image
            src={line}
            alt="Decorative white line"
            className="absolute -right-[10%] top-[23%] z-10 h-[2%] w-[30%] object-contain"
          />
        </div>
        {tracksData.map((track) => (
          <ScrollItem
            key={track.label}
            label={track.label}
            desc={track.desc}
            image={track.image}
            imageClass={`absolute ${track.imageClass}`}
            labelClass={track.labelClass}
            descClass={track.descClass}
            variant="desktop"
          />
        ))}
      </div>

      {/* Mobile */}
      <div className="relative mx-auto -mt-[1300px] min-h-[2700px] max-w-full md:hidden">
        <div className="relative mb-8 mt-8 flex flex-col items-center justify-center md:mb-12 md:mt-12">
          <TitleBanner title="Tracks" />
        </div>

        <div className="absolute top-[36%] z-0 w-[100%]">
          <Image
            src={innervines}
            alt="Inner vines decoration"
            className="h-auto w-full object-contain"
          />
        </div>

        {tracksMobileData.map((track) => (
          <ScrollItem
            key={track.label}
            label={track.label}
            desc={track.desc}
            image={track.image}
            imageClass={track.imageClass}
            labelClass={track.labelClass}
            descClass={track.descClass}
            variant="mobile"
          />
        ))}
      </div>
    </div>
  );
};

export default Tracks;
