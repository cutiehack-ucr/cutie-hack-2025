import Image from "next/image";
import titleBanner from "@/public/landing/titleBanner.webp";

interface TitleBannerProps {
  title: string;
  subtitle?: string;
}

const TitleBanner = ({ title, subtitle }: TitleBannerProps) => {
  return (
    <div className="relative flex w-full items-start justify-center">
      <Image
        src={titleBanner}
        alt=""
        width={400}
        className="h-auto object-contain px-8 drop-shadow-md md:px-0"
        aria-hidden
      />
      <div className="absolute inset-0 mt-5 flex flex-col items-center justify-start font-inknut text-hackathon-off-white-100">
        <h2
          className={
            subtitle ? "-mt-2 text-xl md:text-2xl" : "text-2xl md:text-4xl"
          }
        >
          {title}
        </h2>
        {subtitle && <p className="-mt-0.5 text-xs md:text-base">{subtitle}</p>}
      </div>
    </div>
  );
};

export default TitleBanner;
