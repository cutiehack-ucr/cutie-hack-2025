"use client";
import { useSession } from "next-auth/react";

const Header = () => {
  const { data: session } = useSession();
  return (
    <div className="absolute inset-0 z-10 flex -translate-y-12 translate-x-[20%] items-center px-8 font-inknut text-white">
      {/* Name: fixed on the left, no wrapping */}
      <p className="shrink-0 whitespace-nowrap text-[clamp(0.8rem,1.5vw,1.25rem)] font-bold">
        {session?.user?.firstName} {session?.user?.lastName}
      </p>

      {/* Email: small gap to the right of name, truncates if needed */}
      <p className="ml-4 overflow-hidden text-ellipsis whitespace-nowrap text-[clamp(0.6rem,1.2vw,1rem)]">
        {session?.user?.email}
      </p>
    </div>
  );
};
export default Header;
