import Image, { StaticImageData } from "next/image";
import TitleBanner from "@/components/ui/title-banner";
import sponsors from "@/data/sponsors";
import banner from "@/public/landing/sponsorbanner.svg";
interface SponsorProps {
  logo: StaticImageData;
}

export const Banner = ({ logo }: SponsorProps) => {
  return (
    <div className="relative">
      <Image src={banner} alt="banner" />
      <Image
        src={logo}
        alt="SponsorBanner"
        className="absolute left-[25%] top-[28%] z-10 w-6/12"
      />
    </div>
  );
};

const Sponsors = () => {
  return (
    <section className="z-50 flex flex-col items-center justify-center text-center">
      <TitleBanner title="Sponsors" />
      <div className="mt-8 grid grid-cols-2 gap-4 px-4 md:mt-0 md:grid-cols-4 md:gap-8">
        {sponsors.map(({ logo }, index) => (
          <div key={index}>
            <Banner logo={logo} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Sponsors;
