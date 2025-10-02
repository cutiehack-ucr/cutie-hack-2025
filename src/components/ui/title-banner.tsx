import Image from "next/image";

interface TitleBannerProps {
  title: string;
}

const TitleBanner = ({ title }: TitleBannerProps) => {
  return (
    <div className="relative mt-20 flex items-center justify-center">
      <Image
        src="/landing/titleBanner.webp"
        alt=""
        width={400}
        height={100}
        className="object-contain drop-shadow-md"
        aria-hidden
      />
      <h2 className="absolute inset-0 -mt-8 flex items-center justify-center font-inknut text-4xl text-hackathon-off-white-100">
        {title}
      </h2>
    </div>
  );
};

export default TitleBanner;
