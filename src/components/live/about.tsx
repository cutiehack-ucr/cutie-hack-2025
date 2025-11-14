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
import jar from "@/public/about/jar.svg";
import mwisps from "@/public/about/wisps mobile.svg";
import mpouch from "@/public/about/pouch mobile.svg";
import mcutie from "@/public/about/Cutie mobile.svg";
import mplank from "@/public/about/plank 1 mobile.svg";
import mpotion from "@/public/about/Potion mobile.svg";
import mlantern from "@/public/about/Lantern mobile.svg";
import mgem from "@/public/about/GEM2 mobile.svg";
import maxe from "@/public/about/axe mobile.svg";
import TitleBanner from "../ui/title-banner";
import greenpump from "@/public/about/greenpump.svg";
const About = () => {
  return (
    <>
      {/* Regular */}
      <div className="relative mx-auto mt-32 hidden h-[100vh] w-full max-w-5xl md:flex">
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
          className="absolute -top-[7%] h-auto w-auto md:-top-[16%] 2xl:-top-[6%]"
        />
        <div className="absolute left-1/2 top-[7%] -translate-x-1/2 md:top-[4%] 2xl:top-[9%]">
          <TitleBanner title="About" />
        </div>
        <div className="absolute left-[20%] top-[19%] w-[62%] text-left font-serif text-sm text-hackathon-gray-400 md:text-lg lg:text-xl 2xl:top-[21%]">
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
          className="absolute left-[32%] top-[56%] h-auto w-[14%] object-contain 2xl:left-[30%] 2xl:top-[53%]"
        />

        <Image
          src={plank}
          alt="Brown plank that says '10+ Workshops'."
          className="absolute left-[23%] top-[70%] h-auto w-[30%] object-contain 2xl:top-[64%]"
        />

        <Image
          src={potion}
          alt="Potion bottle that has light green liquid that says '12 Hours'."
          className="absolute left-[39%] top-[34%] h-auto w-[20%] object-contain"
        />

        <Image
          src={lantern}
          alt="Light green lantern that says '75+ Projects' on it."
          className="absolute left-[48%] top-[54%] h-auto w-[29%] object-contain 2xl:top-[50%]"
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
      <div className="relative overflow-hidden md:hidden">
        <Image
          src={greenpump}
          alt="Base beige circle with a light green outline."
        />
        <div className="absolute top-[8%] md:top-[4%] 2xl:top-[9%]">
          <TitleBanner title="About" />
        </div>
        <div className="absolute left-1/2 top-[14%] w-4/5 -translate-x-1/2 text-center font-serif text-xl text-hackathon-gray-400">
          Cutie Hack is a 12-hour, beginner-oriented hackathon hosted by
          students at University of California, Riverside where hackers are
          challenged to create a cool project within the time frame to demo in
          order to win awesome prizes and participate in workshops, fun games,
          and networking.
        </div>
        <Image src={jar} alt="jar" className="absolute left-4 top-[32%]" />
        <Image
          src={mpotion}
          alt="Potion bottle that has light green liquid that says '12 Hours'."
          className="absolute left-[50%] top-[44%] w-5/12 -rotate-12"
        />
        <Image
          src={mcutie}
          alt="Cutie mandarin orange that says '300+ Hackers'."
          className="absolute left-[4%] top-[50%] w-5/12"
        />
        <Image
          src={mlantern}
          alt="Light green lantern that says '75+ Projects' on it."
          className="absolute left-[40%] top-[54%] w-8/12"
        />
        <Image
          src={maxe}
          alt="Silver axe that says '$2K+ Prizes' on it."
          className="absolute left-[5%] top-[62%] w-6/12"
        />
        <Image
          src={mgem}
          alt="Light orange gem that says '30+ Organizers' on it."
          className="absolute left-[30%] top-[70%] w-8/12"
        />
        <Image
          src={mplank}
          alt="Brown plank that says '10+ Workshops'."
          className="absolute left-[22%] top-[84%] w-8/12"
        />
      </div>
    </>
  );
};

export default About;
