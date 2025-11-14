import Image from "next/image";
import FooterBricks1 from "@/public/landing/footerbricks1.svg";
import FooterBricks2 from "@/public/landing/footerbricks2.svg";
import MageCutie from "@/public/landing/magecutie.svg";
import Dragon from "@/public/landing/dragon.svg";
import BrownBricks from "@/public/landing/brownbricks.svg";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="relative flex items-center justify-center text-center font-poppins text-white">
      <Image
        src={FooterBricks1}
        alt="FooterBricks1"
        className="z-40 w-screen"
      />
      <Image
        src={FooterBricks2}
        alt="FooterBricks2"
        className="absolute bottom-0 right-0 top-0 z-0 h-5/6"
      />
      <Image
        src={BrownBricks}
        alt="BrownBricks"
        className="absolute bottom-0 right-0 z-10 w-auto 2xl:w-3/4"
      />
      <Image
        src={Dragon}
        alt="Dragon"
        className="absolute bottom-4 right-0 z-30 w-10/12 2xl:bottom-8"
      />
      <Link
        href="https://www.instagram.com/cutiehack_ucr/"
        target="_blank"
        className="absolute bottom-[49%] right-[45%] z-40 hover:scale-105 hover:opacity-95 md:right-[50%]"
      >
        <RiInstagramFill className="-rotate-12 text-4xl drop-shadow-xl md:text-6xl 2xl:text-8xl" />
      </Link>
      <Link
        href="https://www.linkedin.com/company/cutie-hack/"
        target="_blank"
        className="absolute bottom-[52%] right-[30%] z-40 hover:scale-105 hover:opacity-95"
      >
        <FaLinkedin className="rotate-6 text-4xl drop-shadow-xl md:text-6xl 2xl:text-8xl" />
      </Link>
      <Link
        href="mailto:citrushack@gmail.com"
        target="_blank"
        className="absolute bottom-[53%] right-[15%] z-40 hover:scale-105 hover:opacity-95"
      >
        <MdEmail className="rotate-12 text-4xl drop-shadow-xl md:text-6xl 2xl:text-8xl" />
      </Link>
      <Image
        src={MageCutie}
        alt="MageCutie"
        className="absolute bottom-8 left-8 z-50 w-1/4"
      />
      <p className="md:text-md absolute bottom-1 z-30 text-xs md:bottom-2 md:right-2 2xl:text-xl">{`© 2025 Cutie Hack • Made with 💗 and 🪄 by ACM Hacks`}</p>
    </div>
  );
};

export default Footer;
