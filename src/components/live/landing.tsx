import Image from "next/image";
import Countdown from "../ui/countdown";
import LandingNav from "../ui/landing-nav";
import Link from "next/link";

const Landing = () => {
  return (
    <div className="flex flex-col items-center justify-center overflow-x-hidden lg:overflow-x-visible">
      <div className="relative flex min-h-screen w-full flex-col items-center">
        <Image
          className="absolute inset-0 z-0 h-full w-full bg-hackathon-teal-800 object-cover lg:h-auto"
          alt="Background glow for Cutie Hack landing page"
          width={0}
          height={0}
          src="/landing/backgroundGlow.svg"
          priority
        />

        <Image
          className="hidden lg:absolute lg:z-10 lg:mt-10 min-[1400px]:block"
          alt="Sword in Stone"
          width={850}
          height={100}
          src="/landing/swordInStoneWithFlash.webp"
          priority
        />

        <div className="fixed left-0 top-0 z-20 w-full">
          <LandingNav />
        </div>

        <div className="relative z-10 flex w-[90%] flex-col items-center gap-6 px-4 max-[1400px]:mt-[150px] lg:items-center lg:justify-between lg:px-20  min-[1400px]:flex-row">
          <div className="flex w-full flex-col items-center text-center font-inknut lg:w-auto">
            <h1 className="text-xl">ACM Presents:</h1>
            <Image
              className="mt-5 w-[300px] object-contain sm:w-[300px] min-[1400px]:w-[400px]"
              alt="Cutie Hack 2025 Text"
              src="/landing/cutieHackText.svg"
              width={100}
              height={100}
              priority
            />
          </div>

          <div className="relative flex w-full flex-col items-center justify-center lg:w-auto min-[1400px]:mt-60">
            <div className="relative w-fit max-[600px]:w-[500px] max-[460px]:w-[450px]">
              <Image
                src="/landing/countdownBg.webp"
                alt="Countdown background"
                width={520}
                height={0}
                className="w-full object-contain"
                priority
              />

              <div className="absolute inset-0 mt-8 flex flex-col items-center justify-start px-6 pt-6 max-[640px]:mt-0 lg:mt-8">
                <div className="flex flex-col items-center gap-1 text-base text-white sm:flex-row sm:gap-2 min-[660px]:text-xl">
                  <p className="font-inknut">November 15, 2025</p>
                  <span className="hidden sm:inline">•</span>
                  <p className="font-inknut">UC Riverside</p>
                </div>

                <Countdown
                  classNames={{
                    unit: "text-white",
                    background: "bg-hackathon-blue-100",
                    digit: "text-black",
                  }}
                  backgroundImage="/landing/countdownDigitsBg.webp"
                />

                <button className="mt-[20%] w-fit rounded-[20px] border-[3px] border-solid border-black bg-hackathon-off-white-100 px-6 py-[10px] font-inknut text-xl shadow-[-3px_3px_2px_0px_#47B7A0] max-[455px]:mt-12">
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative mx-auto flex w-5/6 flex-col items-center justify-center">
        <div className="relative mt-20 flex items-center justify-center">
          <Image
            src="/landing/titleBanner.webp"
            alt="Register Title Banner"
            width={400}
            height={100}
            className="object-contain"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="-mt-8 font-inknut text-4xl text-hackathon-off-white-100">
              Register
            </p>
          </div>
        </div>

        <div className="mt-10 grid w-full max-w-4xl grid-cols-1 gap-y-10 md:grid-cols-3 md:gap-x-10 md:gap-y-16">
          <div className="flex justify-center">
            <Image
              alt="Participant Register Button Frame"
              width={250}
              height={0}
              src={"/landing/participantFrame.webp"}
            />
            <div className="absolute mt-4">
              <Link
                href=""
                className="font-inknut text-2xl text-hackathon-off-white-100"
              >
                Participant
              </Link>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center space-y-1">
            <Link
              href=""
              className="mt-4 font-inknut text-2xl text-hackathon-off-white-100"
            >
              Partner
            </Link>
            <Image
              alt="Partner Register Button Decor Lines"
              width={175}
              height={0}
              src={"/landing/registerDecorLines.webp"}
            />
          </div>

          <div className="flex flex-col items-center justify-center space-y-1">
            <Link
              href=""
              className="mt-4 font-inknut text-2xl text-hackathon-off-white-100"
            >
              Judge
            </Link>
            <Image
              alt="Judge Register Button Decor Line"
              width={175}
              height={0}
              src={"/landing/registerDecorLines.webp"}
            />
          </div>
        </div>
        <div className="relative mx-auto flex w-5/6 flex-col items-center justify-center">
          <div className="mt-10 grid w-full max-w-4xl grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-x-10 md:gap-y-16 lg:w-2/5">
            <div className="flex flex-col items-center justify-center space-y-1 md:col-span-1">
              <Link
                href=""
                className="mt-4 font-inknut text-2xl text-hackathon-off-white-100"
              >
                Mentor
              </Link>
              <Image
                alt="Mentor Register Button Decor Line"
                width={175}
                height={0}
                src={"/landing/registerDecorLines.webp"}
              />
            </div>
            <div className="flex flex-col items-center justify-center space-y-1 md:col-span-1 md:col-start-2">
              <Link
                href=""
                className="mt-4 font-inknut text-2xl text-hackathon-off-white-100"
              >
                Volunteer
              </Link>
              <Image
                alt="Volunteer Register Button Decor Line"
                width={175}
                height={0}
                src={"/landing/registerDecorLines.webp"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
