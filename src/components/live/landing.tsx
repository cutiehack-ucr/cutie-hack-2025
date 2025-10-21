import Image from "next/image";
import CountdownSign from "./countdown-sign";

const Landing = () => {
  return (
    <div className="flex flex-col items-center justify-center overflow-x-hidden lg:overflow-x-visible">
      <div className="relative flex min-h-screen w-full flex-col items-center">
        <Image
          className="absolute inset-0 z-0 h-full w-full bg-hackathon-teal-800 lg:h-auto"
          alt=""
          width={4000}
          height={1800}
          src="/landing/backgroundGlow.svg"
          priority
          aria-hidden="true"
        />

        <div className="relative z-10 flex w-[90%] flex-col items-center gap-6 px-4 max-[1400px]:mt-[150px] lg:items-center lg:justify-between lg:px-20 min-[1400px]:flex-row">
          <Image
            className="object-contain min-[1400px]:mb-8 min-[1400px]:ml-20"
            alt="Cutie Hack 2025 Title"
            src="/landing/cutieHackTitle.svg"
            width={400}
            height={400}
            sizes="(min-width: 1400px) 400px, 300px"
          />
          <CountdownSign />
        </div>
      </div>
    </div>
  );
};

export default Landing;
