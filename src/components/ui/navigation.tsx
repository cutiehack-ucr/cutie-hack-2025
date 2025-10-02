"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navigation = () => {
  const [hamburgerNav, setHamburgerNav] = useState(false);
  const toggleNav = () => {
    setHamburgerNav(!hamburgerNav);
  };

  const navHoverAnimation =
    "ease-in-out relative hover:cursor-pointer hover:scale-105 hover:after:rotate-45 transition-all hover:after:content-[''] hover:after:absolute hover:after:block hover:after:h-2 hover:after:w-2 hover:after:border-black hover:after:border-[2px] hover:after:left-1/2 hover:after:-translate-x-1/2";

  return (
    <nav className="fixed left-0 top-0 z-20 w-full">
      <div className="relative flex w-full items-start justify-between px-4 py-2 md:px-20 lg:hidden">
        <Link
          href="/"
          className="flex items-center transition-all hover:scale-105"
        >
          <Image
            src="/landing/navbarIcon.webp"
            alt="Sword and Shield Icon"
            width={100}
            height={100}
            className="z-10 w-16"
          />
        </Link>
        <button
          onClick={toggleNav}
          className="z-10 mt-3 flex flex-col gap-[4px] pr-2 transition-all hover:scale-105 hover:cursor-pointer"
        >
          <div className="h-1 w-8 rounded-xl border-[1px] border-black bg-white"></div>
          <div className="h-1 w-8 rounded-xl border-[1px] border-black bg-white"></div>
          <div className="h-1 w-8 rounded-xl border-[1px] border-black bg-white"></div>
        </button>
        {hamburgerNav && (
          <div className="absolute left-0 top-0 z-0 max-h-screen w-screen overflow-y-auto bg-hackathon-off-white-100 py-4 shadow-lg">
            <ul className="flex w-full flex-col gap-2 px-4 pt-12 text-center font-inknut">
              <Link href="" className="mt-1">
                About
              </Link>
              <Link href="">Schedule</Link>
              <Link href="">Partners</Link>
              <Link href="">FAQ</Link>
              <Link href="">Archive</Link>
              <Link
                href="/#register"
                className="mx-auto w-fit rounded-3xl border-2 border-solid border-black bg-hackathon-teal-300 px-4 py-1"
              >
                Register
              </Link>
            </ul>
          </div>
        )}
      </div>

      <div className="relative hidden w-full items-center justify-center py-4 lg:flex">
        <Link
          href="/"
          className="absolute left-1/2 hidden -translate-x-[500px] lg:block"
        >
          <Image
            src="/landing/navbarIcon.webp"
            width={100}
            height={100}
            alt="Sword and Shield Icon"
            className="w-20 transition-all hover:scale-105 lg:-mt-9"
          />
        </Link>
        <div
          className="hidden items-center justify-center font-bold lg:flex"
          style={{
            backgroundImage: "url(/landing/navbarFrame.webp)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "760px",
            aspectRatio: 886 / 154.4,
          }}
        >
          <ul className="-mt-9 flex space-x-8 font-inknut font-normal">
            <Link href="/#about" className={navHoverAnimation}>
              About
            </Link>
            <Link href="/#schedule" className={navHoverAnimation}>
              Schedule
            </Link>
            <Link href="/#partners" className={navHoverAnimation}>
              Partners
            </Link>
            <Link href="/#faq" className={navHoverAnimation}>
              FAQ
            </Link>
            <Link href="/" className={navHoverAnimation}>
              Archive
            </Link>
            <Link
              href="/#register"
              className="-mt-2 rounded-3xl border-2 border-solid border-black bg-hackathon-teal-300 px-4 py-1 transition-all hover:scale-105"
            >
              Register
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
