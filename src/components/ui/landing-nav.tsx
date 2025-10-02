"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const LandingNav = () => {
  const [hamburgerNav, setHamburgerNav] = useState(false);
  const toggleNav = () => {
    setHamburgerNav(!hamburgerNav);
  };

  const navHoverAnimation = "ease-in-out relative hover:cursor-pointer hover:scale-105 hover:after:rotate-45 transition-all hover:after:content-[''] hover:after:absolute hover:after:block hover:after:h-2 hover:after:w-2 hover:after:border-black hover:after:border-[2px] hover:after:left-1/2 hover:after:-translate-x-1/2"

  return (
    <>
      <nav className="relative flex w-full items-start justify-between px-4 py-2 md:px-20 lg:hidden animate-">
        <Link href="/" className="flex items-center hover:scale-105 transition-all">
          <Image
            src="/landing/navbarIcon.webp"
            alt="Sword and Shield Icon"
            width={100}
            height={100}
            className="w-16 z-10"
          />
        </Link>
        <button
          onClick={toggleNav}
          className="mt-3 flex flex-col gap-[4px] hover:cursor-pointer hover:scale-105 transition-all z-10 pr-2"
        >
          <div className="h-1 w-8 rounded-xl bg-white border-[1px] border-black"></div>
          <div className="h-1 w-8 rounded-xl bg-white border-[1px] border-black"></div>
          <div className="h-1 w-8 rounded-xl bg-white border-[1px] border-black"></div>
        </button>
        {hamburgerNav && (
          <div className="bg-hackathon-off-white-100 absolute w-screen z-0 left-0 top-0 shadow-lg py-4 max-h-screen overflow-y-auto">
            <ul className="w-full text-center flex flex-col px-4 pt-12 font-inknut gap-2">
              <Link href="" className="mt-1">About</Link>
              <Link href="">Schedule</Link>
              <Link href="">Partners</Link>
              <Link href="">FAQ</Link>
              <Link href="">Archive</Link>
              <Link href="" className="mx-auto w-fit rounded-3xl border-2 border-solid border-black bg-hackathon-teal-300 px-4 py-1">Register</Link>
            </ul>
          </div>
        )}
      </nav>

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
            className="w-20 lg:-mt-9 hover:scale-105 transition-all"
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
            <Link 
              href=""
              className={navHoverAnimation}
            >
              About
            </Link>
            <Link href="" className={navHoverAnimation}>Schedule</Link>
            <Link href="" className={navHoverAnimation}>Partners</Link>
            <Link href="" className={navHoverAnimation}>FAQ</Link>
            <Link href="" className={navHoverAnimation}>Archive</Link>
            <Link
              href=""
              className="hover:scale-105 transition-all -mt-2 rounded-3xl border-2 border-solid border-black bg-hackathon-teal-300 px-4 py-1"
            >
              Register
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
};

export default LandingNav;
