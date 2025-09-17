"use client";
import { useState } from "react";

const LandingNav = () => {
  const [hamburgerNav, setHamburgerNav] = useState(false);
  const toggleNav = () => {
    setHamburgerNav(!hamburgerNav);
  };

  return (
    <>
      <div className="relative flex w-full items-start justify-between px-8 py-4 md:px-20 lg:hidden">
        <img
          src="/landing/navbarIcon.webp"
          alt="Sword and Shield Icon"
          className="w-20"
        />
        {hamburgerNav ? (
          <div
            onClick={toggleNav}
            className="flex flex-col gap-[6px] hover:cursor-pointer mt-3"
          >
            <div className="h-1 w-8 rounded-xl bg-black"></div>
            <div className="h-1 w-8 rounded-xl bg-black"></div>
            <div className="h-1 w-8 rounded-xl bg-black"></div>
          </div>
        ) : (
          <div className="bg-off-white-100">
            <ul className="flex flex-col text-right px-4 py-2">
                <a onClick={toggleNav} className="text-xl font-bold hover:cursor-pointer">x</a>
                <a className="mt-1">Register</a>
                <a>About</a>
                <a>Schedule</a>
                <a>Partners</a>
                <a>FAQ</a>
                <a>Archive</a>
                <a>Log In</a>
            </ul>
          </div>
        )}
      </div>

      <div className="relative hidden w-full items-center justify-center py-4 lg:flex">
        <img
          src="/landing/navbarIcon.webp"
          alt="Sword and Shield Icon"
          className="absolute left-1/2 hidden w-20 -translate-x-[500px] lg:-mt-9 lg:block"
        />
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
            <a>Register</a>
            <a>About</a>
            <a>Schedule</a>
            <a>Partners</a>
            <a>FAQ</a>
            <a>Archive</a>
            <button className="-mt-2 rounded-3xl border-2 border-solid border-black bg-teal-300 px-4 py-1">
              Log In
            </button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default LandingNav;
