import Image from "next/image";
import circle from "@/public/about/Ellipse 151.svg";
import vines from "@/public/about/Vines.svg";
import wisps from "@/public/about/wisps.svg";
import pouch from "@/public/about/pouch.svg";
import cutie from "@/public/about/Cutie.svg";
import plank from "@/public/about/plank 1.svg";
import potion from "@/public/about/Potion.svg";
import lantern from "@/public/about/Lantern.svg";
import gem from "@/public/about/GEM2.svg";
import axe from "@/public/about/axe.svg";
import banner from "@/public/about/Title Banner.svg";

import mwisps from "@/public/about/wisps mobile.svg";
import mpouch from "@/public/about/pouch mobile.svg";
import mcutie from "@/public/about/Cutie mobile.svg";
import mplank from "@/public/about/plank 1 mobile.svg";
import mpotion from "@/public/about/Potion mobile.svg";
import mlantern from "@/public/about/Lantern mobile.svg";
import mgem from "@/public/about/GEM2 mobile.svg";
import maxe from "@/public/about/axe mobile.svg";

const About = () => {
  return (
    <>
      {/* Regular */}
      <div className="relative mx-auto hidden aspect-[16/9] w-full max-w-5xl md:block lg:block">
        <Image
          src={circle}
          alt="Base circle"
          width={1000}
          height={500}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/3"
        />

        <Image
          src={vines}
          alt="Vines"
          className="absolute -top-[14%] h-auto w-auto"
        />

        <Image
          src={wisps}
          alt="Wisps"
          className="absolute left-[29%] top-[59%] h-auto w-[40%] object-contain"
        />

        <Image
          src={pouch}
          alt="Pouch"
          className="absolute left-[4%] top-[46%] h-auto w-[35%] object-contain"
        />

        <Image
          src={cutie}
          alt="Cutie"
          className="absolute left-[30%] top-[86%] h-auto w-[14%] object-contain"
        />

        <Image
          src={plank}
          alt="Plank"
          className="absolute left-[23%] top-[105%] h-auto w-[30%] object-contain"
        />

        <Image
          src={potion}
          alt="Potion"
          className="absolute left-[39%] top-[55%] h-auto w-[20%] object-contain"
        />

        <Image
          src={lantern}
          alt="Lantern"
          className="absolute left-[48%] top-[81%] h-auto w-[29%] object-contain"
        />

        <Image
          src={gem}
          alt="Gem"
          className="absolute left-[59%] top-[62%] h-auto w-[18%] object-contain"
        />

        <Image
          src={axe}
          alt="Axe"
          className="absolute left-[72%] top-[58%] h-auto w-[26%] object-contain"
        />

        <Image
          src={banner}
          alt="Banner"
          className="absolute left-[50%] top-[10%] h-auto w-[35%] -translate-x-1/2 object-contain"
        />

        <h1 className="absolute left-[50%] top-[12%] z-10 -translate-x-1/2 font-inknut text-2xl font-bold text-white md:text-3xl lg:text-4xl">
          About
        </h1>

        <div className="absolute left-[20%] top-[29%] w-[62%] text-left font-serif text-sm text-[#3B332B] md:text-lg lg:text-xl">
          Cutie Hack is a 12-hour, beginner-oriented hackathon hosted by
          students at University of California, Riverside where hackers are
          challenged to create a cool project within the time frame to demo in
          order to win awesome prizes and participate in workshops, fun games,
          and networking.
        </div>
      </div>

      {/* Mobile */}
      <div className="relative mx-auto aspect-[2/16] w-full max-w-full overflow-hidden md:hidden">
        <div className="absolute left-1/2 top-1/2 h-auto w-[300%] -translate-x-1/2 -translate-y-[131%] scale-y-150 transform">
          <Image
            src={circle}
            alt="Base circle"
            className="h-auto w-full object-contain"
          />
        </div>

        <div className="absolute left-1/2 top-1/2 h-auto w-[306%] -translate-x-1/2 -translate-y-[116.8%] scale-y-150 transform">
          <Image
            src={vines}
            alt="Base vines"
            className="h-auto w-full object-contain"
          />
        </div>

        <Image
          src={mpouch}
          alt="Pouch"
          className="absolute left-[9%] top-[17.0%] z-20 h-auto w-[60%] object-contain"
        />

        <Image
          src={mwisps}
          alt="Wisps"
          className="z-19 absolute top-[20.5%] h-auto w-[100%] object-contain"
        />

        <Image
          src={mpotion}
          alt="Wisps"
          className="z-19 absolute left-[45%] top-[23.4%] h-auto w-[38%] object-contain"
        />

        <Image
          src={mcutie}
          alt="Wisps"
          className="z-19 absolute left-[4%] top-[27.4%] h-auto w-[33%] object-contain"
        />

        <Image
          src={maxe}
          alt="Wisps"
          className="z-19 absolute left-[5%] top-[33.4%] h-auto w-[48%] object-contain"
        />

        <Image
          src={mlantern}
          alt="Wisps"
          className="z-19 absolute left-[33%] top-[28.4%] h-auto w-[60%] object-contain"
        />

        <Image
          src={mgem}
          alt="Wisps"
          className="z-19 absolute left-[47%] top-[37%] h-auto w-[46%] object-contain"
        />

        <Image
          src={mplank}
          alt="Wisps"
          className="z-19 absolute left-[28%] top-[42%] h-auto w-[62%] object-contain"
        />

        <Image
          src={banner}
          alt="Wisps"
          className="z-19 absolute left-[8%] top-[7%] h-auto w-[85%] object-contain"
        />

        <h1 className="absolute left-[50%] top-[7.5%] z-30 -translate-x-1/2 font-inknut text-[6vw] font-bold text-hackathon-off-white-100">
          About
        </h1>

        <div className="absolute left-[7.5%] top-[10.3%] z-30 w-[85%] text-center font-serif text-[5vw] text-[#3B332B]">
          Cutie Hack is a 12-hour, beginner-oriented hackathon hosted by
          students at University of California, Riverside where hackers are
          challenged to create a cool project within the time frame to demo in
          order to win awesome prizes and participate in workshops, fun games,
          and networking.
        </div>
      </div>
    </>
  );
};

export default About;
