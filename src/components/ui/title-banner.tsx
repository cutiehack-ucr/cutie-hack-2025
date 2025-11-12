import Image from "next/image";
import titleBanner from "@/public/landing/titleBanner.webp";

interface TitleBannerProps {
  title: string;
}

const TitleBanner = ({ title }: TitleBannerProps) => {
  return (
    <div className="relative flex w-full items-start justify-center">
      <Image
        src={titleBanner}
        alt=""
        width={400}
        className="h-auto object-contain px-8 drop-shadow-md md:px-0"
        aria-hidden
      />
      <h2 className="absolute inset-0 mt-5 flex items-start justify-center font-inknut text-2xl text-hackathon-off-white-100 md:text-4xl">
        {title}
      </h2>
    </div>
  );
};

export default TitleBanner;
