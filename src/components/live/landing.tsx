import Image from "next/image";
import Countdown from "../ui/countdown";
import LandingNav from "../ui/landing-nav";

const Landing = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-hackathon-teal-800">
      <div className="relative flex min-h-[600px] w-full flex-col items-center justify-center overflow-hidden">
        <Image
          className="absolute inset-0 z-0 h-auto w-full object-contain"
          alt=""
          width={100}
          height={100}
          src="/landing/backgroundGlow.svg"
          priority
        />

        <Image
          className="hidden lg:absolute lg:z-10 lg:mt-60 lg:block"
          alt="Sword in Stone"
          width={850}
          height={100}
          src="/landing/swordInStoneWithFlash.webp"
          priority
        />

        <div className="fixed left-0 top-0 z-20 w-full">
          <LandingNav />
        </div>

        <div className="relative z-10 mt-[120px] flex w-5/6 flex-col items-center gap-6 px-4 lg:flex-row lg:items-center lg:justify-between lg:px-20">
          <div className="flex w-full flex-col items-center text-center font-inknut lg:w-auto lg:items-start">
            <h1 className="text-xl">ACM Presents:</h1>
            <Image
              className="mt-5 w-[300px] object-contain sm:w-[400px]"
              alt="Cutie Hack 2025 Text"
              src="/landing/cutieHackText.svg"
              width={100}
              height={100}
              priority
            />
          </div>

          <div className="flex w-full flex-col items-center justify-center lg:w-auto lg:justify-end">
            <div className="flex flex-col items-center justify-center rounded-[12px] bg-hackathon-off-white-100 px-4 py-[10px]">
              <div className="flex flex-col items-center gap-1 sm:flex-row sm:gap-2">
                <p className="font-inknut">November 15, 2025</p>
                <span className="hidden sm:inline">•</span>
                <p className="font-inknut">UC Riverside</p>
              </div>
              <Countdown
                classNames={{
                  unit: "text-black",
                  background: "bg-hackathon-blue-100",
                  digit: "text-black",
                }}
                backgroundImage="/landing/countdownDigitsBg.webp"
              />
            </div>
            <button className="w-fit rounded-[20px] border-[3px] border-solid border-black bg-hackathon-off-white-100 px-6 py-[10px] font-inknut shadow-[-3px_3px_2px_0px_#47B7A0]">
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
