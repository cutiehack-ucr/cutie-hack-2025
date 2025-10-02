import Image from "next/image";
import Link from "next/link";
import TitleBanner from "../ui/title-banner";

const Register = () => {
  return (
    <div
      className="relative mx-auto flex w-5/6 flex-col items-center justify-center"
      id="register"
    >
      <TitleBanner title="Register" />

      <div className="mt-10 grid max-w-4xl grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-2 md:gap-y-16">
        {[
          { role: "participant", image: "/landing/participantFrame.webp" },
          { role: "judge", image: "/landing/registerDecorLines.webp" },
          { role: "mentor", image: "/landing/registerDecorLines.webp" },
          { role: "volunteer", image: "/landing/registerDecorLines.webp" },
        ].map(({ role, image }) => (
          <Link
            key={role}
            href={role === "judge" ? "judge/register" : `apply/${role}`}
            className={`flex transition-all ease-in-out hover:animate-pulse ${
              role === "participant"
                ? "justify-center"
                : "flex-col items-center justify-center space-y-1"
            }`}
          >
            {role === "participant" && (
              <Image alt="" width={250} height={0} src={image} aria-hidden />
            )}
            <p
              className={`mt-4 font-inknut text-2xl text-hackathon-off-white-100 ${
                role === "participant" ? "absolute" : ""
              }`}
            >
              {role.charAt(0).toUpperCase() + role.slice(1)}
            </p>
            {role !== "participant" && (
              <Image alt="" width={175} height={0} src={image} aria-hidden />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Register;
