"use client";
import Image from "next/image";
import Book from "@/public/dashboard/Book.svg";
import Paper from "@/public/dashboard/paper.webp";
import { useSession } from "next-auth/react";
import { Participant } from "@/types/users";

const UserDataBook = () => {
  const { data: session } = useSession();
  console.log(session);
  const user = session?.user;
  if (!user) {
    return <></>;
  }
  const data = user as unknown as Participant;

  return (
    <div className="mx-auto">
      <div className="hidden -translate-y-20 flex-col items-center justify-start md:flex">
        <Image src={Book} alt="User Book" className="z-10" />
        <div className="absolute z-20 flex -translate-x-48 translate-y-24 list-none flex-col gap-y-12 text-center">
          <li>
            <h1 className="text-xl font-bold">Major</h1>
            <p className="text-md">{data.major}</p>
          </li>
          <li>
            <h1 className="text-xl font-bold">Food Restriction</h1>
            <p className="text-md">{data.diet}</p>
          </li>
          <li>
            <h1 className="text-xl font-bold">Gender</h1>
            <p className="text-md">{data.gender}</p>
          </li>
          <li>
            <h1 className="text-xl font-bold">School</h1>
            <p className="text-md">{data.school}</p>
          </li>
        </div>
        <div className="absolute z-20 flex translate-x-48 translate-y-24 list-none flex-col gap-y-12 text-center">
          <li>
            <h1 className="text-xl font-bold">Team</h1>
            <p className="text-md">{data.team.trim() || "No Team"}</p>
          </li>
        </div>
      </div>

      <div className="flex flex-col gap-y-16 md:hidden">
        <Image src={Paper} alt="User Paper" />
        <div className="absolute z-20 flex w-1/2 translate-x-5 translate-y-10 list-none flex-col gap-y-4">
          <li>
            <h1 className="text-md font-bold">Major</h1>
            <p className="text-sm">{data.major}</p>
          </li>
          <li>
            <h1 className="text-md font-bold">Food Restriction</h1>
            <p className="text-sm">{data.diet}</p>
          </li>
          <li>
            <h1 className="text-md font-bold">Gender</h1>
            <p className="text-sm">{data.gender}</p>
          </li>
          <li>
            <h1 className="text-md font-bold">School</h1>
            <p className="text-sm">{data.school}</p>
          </li>
        </div>
        <div className="flex flex-col gap-y-16 md:hidden">
          <Image src={Paper} alt="User Paper" className="z-10" />
          <div className="absolute z-20 flex w-1/2 translate-x-5 translate-y-10 list-none flex-col gap-y-4">
            <li>
              <h1 className="text-md font-bold">Team</h1>
              <p className="text-sm">{data.team.trim() || "No Team"}</p>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDataBook;
