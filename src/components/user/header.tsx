"use client";
import { useSession } from "next-auth/react";

const Header = () => {
  const { data: session } = useSession();
  return (
    <div className="absolute inset-0 flex items-center px-8 text-white font-inknut z-10 -translate-y-12 translate-x-[20%]">
      {/* Name: fixed on the left, no wrapping */}
      <p className="text-[clamp(0.8rem,1.5vw,1.25rem)] font-bold whitespace-nowrap shrink-0">
        {session?.user?.firstName} {session?.user?.lastName}
      </p>

      {/* Email: small gap to the right of name, truncates if needed */}
      <p className="ml-4 text-[clamp(0.6rem,1.2vw,1rem)] whitespace-nowrap overflow-hidden text-ellipsis">
        {session?.user?.email}
      </p>
    </div>
  );
};
export default Header;
