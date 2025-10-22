import Image from "next/image";
import Link from "next/link";
import TitleBanner from "../ui/title-banner";
import swordInStone from "@/public/landing/swordInStone.svg";
import landingBg from "@/public/landing/landingBg.svg";
import registerDecorFrame from "@/public/landing/registerDecorFrame.webp";
import registerDecorLines from "@/public/landing/registerDecorLines.webp";

const Register = () => {
  const roles = ["participant", "mentor", "volunteer"];

  return (
    <div
      className="relative mx-auto flex w-full flex-col items-center justify-center pb-56 max-[1400px]:mt-12 max-[1400px]:pb-32"
      id="register"
    >
      <Image
        className="lg:z-1 hidden w-1/2 -translate-y-[80%] lg:absolute min-[1400px]:block"
        alt="Sword in Stone"
        width={850}
        height={100}
        src={swordInStone}
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
            <p className="font-inknut text-lg text-hackathon-off-white-100 group-hover:absolute group-hover:mb-6 md:text-2xl">
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
