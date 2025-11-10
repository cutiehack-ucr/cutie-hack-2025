"use client";
import Image from "next/image";
import Book from "@/public/dashboard/Book.svg";
import { useSession } from "next-auth/react";

const UserDataBook = () => {
    const { data: session} = useSession();
    console.log(session)
    return (
        <div className="flex w-full justify-center">
        <div className="flex flex-col items-center justify-start">
          <Image src={Book} alt="User Book" className="z-10" />
          <div className="flex flex-col list-none z-20 absolute -translate-x-48 translate-y-24 text-center gap-y-12">
            <li>
              <h1 className="font-bold text-xl">Major</h1>
              <p className="text-md">{session?.user.major}</p>
            </li>
            <li>
              <h1 className="font-bold text-xl">Food Restriction</h1>
              <p className="text-md">{session?.user.diet}</p>
            </li>
            <li>
              <h1 className="font-bold text-xl">Gender</h1>
              <p className="text-md">{session?.user.gender}</p>
            </li>
            <li>
              <h1 className="font-bold text-xl">School</h1>
              <p className="text-md">{session?.user.school}</p>
            </li>
          </div>
          <div className="flex flex-col list-none z-20 absolute translate-x-48 translate-y-24 text-center gap-y-12">
            <li>
              <h1 className="font-bold text-xl">Team</h1>
              <p className="text-md">{session?.user.team}</p>
            </li>
            <li>
              <h1 className="font-bold text-xl">Devpost</h1>
              <p className="text-md">Vegan</p>
            </li>
            <li>
              <h1 className="font-bold text-xl">Members</h1>
              <p className="text-md">Male</p>
            </li>
          </div>
        </div>
      </div>
    )
}

export default UserDataBook;