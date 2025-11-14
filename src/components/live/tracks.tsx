import TitleBanner from "@/components/ui/title-banner";
import Image from "next/image";
import line from "@/public/tracks/lines.svg";
import innervines from "@/public/tracks/Inner vines.svg";

import ScrollItem from "../ui/scroll";
import { tracksData } from "@/data/tracks";
import { tracksMobileData } from "@/data/tracks";

const Tracks = () => {
  return (
    <div className="mt-[5vh] md:mt-[30vh] 2xl:mt-[25vh]">
      <TitleBanner title="Tracks" />

      <div className="hidden w-full grid-cols-2 px-8 pt-8 md:grid">
        <div className="flex justify-start">
          <Image
            src={line}
            alt="Decorative white line"
            className="h-auto w-[60%] object-contain"
          />
        </div>

        <div className="flex justify-end">
          <Image
            src={line}
            alt="Decorative white line"
            className="h-auto w-[60%] object-contain"
          />
        </div>
      </div>

      {/* Regular */}

      <div className="relative mx-auto hidden aspect-[9/16] w-full max-w-5xl md:flex">
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
      <div className="relative mx-auto md:hidden">
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
