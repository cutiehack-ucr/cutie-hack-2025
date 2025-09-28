"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const LandingNav = () => {
  const [hamburgerNav, setHamburgerNav] = useState(false);
  const toggleNav = () => {
    setHamburgerNav(!hamburgerNav);
  };

  return (
    <>
      <div className="relative flex w-full items-start justify-between px-8 py-4 md:px-20 lg:hidden">
        <Link href="/" className="flex items-center">
          <Image
            src="/landing/navbarIcon.webp"
            alt="Sword and Shield Icon"
            width={100}
            height={100}
            className="w-20"
          />
        </Link>
        {!hamburgerNav ? (
          <div
            onClick={toggleNav}
            className="mt-3 flex flex-col gap-[6px] hover:cursor-pointer"
          >
            <div className="h-1 w-8 rounded-xl bg-black"></div>
            <div className="h-1 w-8 rounded-xl bg-black"></div>
            <div className="h-1 w-8 rounded-xl bg-black"></div>
          </div>
        ) : (
          <div className="bg-hackathon-off-white-100">
            <ul className="flex flex-col px-4 py-2 text-right font-inknut font-normal">
              <Link
                href=""
                onClick={toggleNav}
                className="text-xl font-bold hover:cursor-pointer"
              >
                x
              </Link>
              <Link href="" className="mt-1">
                Register
              </Link>
              <Link href="">About</Link>
              <Link href="">Schedule</Link>
              <Link href="">Partners</Link>
              <Link href="">FAQ</Link>
              <Link href="">Archive</Link>
              <Link href="">Log In</Link>
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
            className="w-20 lg:-mt-9"
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
            <Link href="">Register</Link>
            <Link href="">About</Link>
            <Link href="">Schedule</Link>
            <Link href="">Partners</Link>
            <Link href="">FAQ</Link>
            <Link href="">Archive</Link>
            <Link
              href=""
              className="-mt-2 rounded-3xl border-2 border-solid border-black bg-hackathon-teal-300 px-4 py-1"
            >
              Log In
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
};

export default LandingNav;
