"use client";
import { useSession } from "next-auth/react";

const Header = () => {
  const { data: session } = useSession();
  return (
    <div className="flex flex-col text-white">
      <p className="font-medium">Welcome</p>
      <p className="mb-0 text-2xl font-bold">{session?.user?.firstName}</p>
    </div>
  );
};
export default Header;
