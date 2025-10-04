import Image from "next/image";
import CountdownSign from "./countdown-sign";

const Landing = () => {
  return (
    <div className="flex flex-col items-center justify-center overflow-x-hidden lg:overflow-x-visible">
      <div className="relative flex min-h-screen w-full flex-col items-center">
        <Image
          className="absolute inset-0 z-0 h-full w-full bg-hackathon-teal-800 object-cover lg:h-auto"
          alt=""
          width={0}
          height={0}
          src="/landing/backgroundGlow.svg"
          priority
          aria-hidden="true"
        />

        <Image
          className="hidden lg:absolute lg:z-10 lg:mt-10 min-[1400px]:block"
          alt="Sword in Stone"
          width={850}
          height={100}
          src="/landing/swordInStoneWithFlash.webp"
          priority
        />

        <div className="relative z-10 flex w-[90%] flex-col items-center gap-6 px-4 max-[1400px]:mt-[150px] lg:items-center lg:justify-between lg:px-20 min-[1400px]:flex-row">
          <div className="flex w-full flex-col items-center text-center font-inknut lg:w-auto">
            <h1 className="text-xl">ACM Presents:</h1>
            <Image
              className="mt-5 w-[300px] object-contain sm:w-[300px] min-[1400px]:w-[400px]"
              alt="Cutie Hack 2025 Title"
              src="/landing/cutieHackText.svg"
              width={100}
              height={100}
              priority
            />
          </div>
          <CountdownSign />
        </div>
      </div>
    </div>
  );
};

export default Landing;
