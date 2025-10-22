import Image from "next/image";
import Link from "next/link";
import TitleBanner from "../ui/title-banner";
import swordInStoneWithFlash from "@/public/landing/swordInStoneWithFlash.webp";
import landingBg from "@/public/landing/landingBg.svg";
import registerDecorFrame from "@/public/landing/registerDecorFrame.webp";
import registerDecorLines from "@/public/landing/registerDecorLines.webp";

const Register = () => {
  const roles = ["participant", "mentor", "volunteer"];

  return (
    <div
      className="relative mx-auto flex w-full flex-col items-center justify-center pb-72"
      id="register"
    >
      <Image
        className="hidden w-1/2 -translate-y-[80%] lg:absolute lg:z-0 min-[1400px]:block"
        alt="Sword in Stone"
        width={850}
        height={100}
        src={swordInStoneWithFlash}
      />
      <Image
        className="absolute left-1/2 z-0 -mt-[175px] hidden -translate-x-1/2 lg:block"
        alt="Foliage with rocks and misc. items"
        width={4000}
        height={100}
        src={landingBg}
      />
      <TitleBanner title="Register" />

      <div className="mt-10 grid max-w-4xl grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-2 md:gap-y-16">
        {roles.map((role, index) => (
          <Link
            key={role}
            href={`apply/${role}`}
            className={`group relative flex h-[80px] w-[250px] flex-col items-center justify-center transition-all ease-in-out hover:-translate-y-0.5 hover:opacity-80 group-hover:flex-row ${
              index === roles.length - 1
                ? "md:col-span-2 md:justify-self-center"
                : ""
            }`}
          >
            <Image
              alt=""
              width={225}
              height={30}
              src={registerDecorFrame}
              aria-hidden
              className="absolute opacity-0 group-hover:opacity-100"
            />
            <p className="font-inknut text-2xl text-hackathon-off-white-100 group-hover:absolute group-hover:mb-6">
              {role.charAt(0).toUpperCase() + role.slice(1)}
            </p>
            <Image
              alt=""
              width={175}
              height={30}
              src={registerDecorLines}
              aria-hidden
              className="group-hover:opacity-0"
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Register;
