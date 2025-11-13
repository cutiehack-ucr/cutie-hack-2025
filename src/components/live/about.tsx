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
import TitleBanner from "../ui/title-banner";

const About = () => {
  return (
    <div className="md:mt-28">
      {/* Regular */}
      <div className="relative mx-auto hidden h-[100vh] w-full max-w-5xl md:flex">
        <Image
          src={circle}
          alt="Base beige circle with a light green outline."
          width={1000}
          height={500}
          className="absolute left-1/2 top-[31%] -translate-x-1/2 -translate-y-1/3"
        />

        <Image
          src={vines}
          alt="Decorative green vines that wrap above and below base circle."
          className="absolute -top-[7%] h-auto w-auto"
        />

        <TitleBanner title="About" className="top-[7%]" />
        <div className="absolute left-[20%] top-[19%] w-[62%] text-left font-serif text-sm text-hackathon-gray-400 md:text-lg lg:text-xl">
          Cutie Hack is a 12-hour, beginner-oriented hackathon hosted by
          students at University of California, Riverside where hackers are
          challenged to create a cool project within the time frame to demo in
          order to win awesome prizes and participate in workshops, fun games,
          and networking.
        </div>

        <Image
          src={wisps}
          alt="Light green wisps that come from the pouch."
          className="absolute left-[29%] top-[37%] h-auto w-[40%] object-contain"
        />

        <Image
          src={pouch}
          alt="Brown pouch that has a light brown ribbon in it."
          className="absolute left-[4%] top-[29%] h-auto w-[35%] object-contain"
        />

        <Image
          src={cutie}
          alt="Cutie mandarin orange that says '300+ Hackers'."
          className="absolute left-[30%] top-[53%] h-auto w-[14%] object-contain"
        />

        <Image
          src={plank}
          alt="Brown plank that says '10+ Workshops'."
          className="absolute left-[23%] top-[64%] h-auto w-[30%] object-contain"
        />

        <Image
          src={potion}
          alt="Potion bottle that has light green liquid that says '12 Hours'."
          className="absolute left-[39%] top-[34%] h-auto w-[20%] object-contain"
        />

        <Image
          src={lantern}
          alt="Light green lantern that says '75+ Projects' on it."
          className="absolute left-[48%] top-[50%] h-auto w-[29%] object-contain"
        />

        <Image
          src={gem}
          alt="Light orange gem that says '30+ Organizers' on it."
          className="absolute left-[59%] top-[39%] h-auto w-[18%] object-contain"
        />

        <Image
          src={axe}
          alt="Silver axe that says '$2K+ Prizes' on it."
          className="absolute left-[72%] top-[36%] h-auto w-[26%] object-contain"
        />
      </div>

      {/* Mobile */}
      <div className="relative mx-auto aspect-[2/16] w-full max-w-full overflow-hidden md:hidden">
        <div className="absolute left-1/2 top-1/2 h-auto w-[300%] -translate-x-1/2 -translate-y-[131%] scale-y-150 transform">
          <Image
            src={circle}
            alt="Base beige circle with a light green outline."
            className="h-auto w-full object-contain"
          />
        </div>

        <div className="absolute left-1/2 top-1/2 h-auto w-[306%] -translate-x-1/2 -translate-y-[116.8%] scale-y-150 transform">
          <Image
            src={vines}
            alt="Decorative green vines that wrap above and below base circle."
            className="h-auto w-full object-contain"
          />
        </div>

        <Image
          src={mpouch}
          alt="Brown pouch that has a light brown ribbon in it."
          className="absolute left-[9%] top-[17.0%] z-20 h-auto w-[60%] object-contain"
        />

        <Image
          src={mwisps}
          alt="Light green wisps that come from the pouch."
          className="z-19 absolute top-[20.5%] h-auto w-[100%] object-contain"
        />

        <Image
          src={mpotion}
          alt="Potion bottle that has light green liquid that says '12 Hours'."
          className="z-19 absolute left-[45%] top-[23.4%] h-auto w-[38%] object-contain"
        />

        <Image
          src={mcutie}
          alt="Cutie mandarin orange that says '300+ Hackers'."
          className="z-19 absolute left-[4%] top-[27.4%] h-auto w-[33%] object-contain"
        />

        <Image
          src={maxe}
          alt="Silver axe that says '$2K+ Prizes' on it."
          className="z-19 absolute left-[5%] top-[33.4%] h-auto w-[48%] object-contain"
        />

        <Image
          src={mlantern}
          alt="Light green lantern that says '75+ Projects' on it."
          className="z-19 absolute left-[33%] top-[28.4%] h-auto w-[60%] object-contain"
        />

        <Image
          src={mgem}
          alt="Light orange gem that says '30+ Organizers' on it."
          className="z-19 absolute left-[47%] top-[37%] h-auto w-[46%] object-contain"
        />

        <Image
          src={mplank}
          alt="Brown plank that says '10+ Workshops'."
          className="z-19 absolute left-[28%] top-[42%] h-auto w-[62%] object-contain"
        />

        <Image
          src={banner}
          alt="Brown banner."
          className="z-19 absolute left-[8%] top-[7%] h-auto w-[85%] object-contain"
        />

        <h2 className="absolute left-[50%] top-[7.5%] z-30 -translate-x-1/2 font-inknut text-[6vw] font-bold text-hackathon-off-white-100">
          About
        </h2>

        <div className="absolute left-[7.5%] top-[10.3%] z-30 w-[85%] text-center font-serif text-[5vw] text-hackathon-gray-400">
          Cutie Hack is a 12-hour, beginner-oriented hackathon hosted by
          students at University of California, Riverside where hackers are
          challenged to create a cool project within the time frame to demo in
          order to win awesome prizes and participate in workshops, fun games,
          and networking.
        </div>
      </div>
    </div>
  );
};

export default About;
