import Image from "next/image";
import Link from "next/link";
import TitleBanner from "../ui/title-banner";

const Register = () => {
  const roles = ["participant", "judge", "mentor", "volunteer"];

  return (
    <div
      className="relative mx-auto flex w-5/6 flex-col items-center justify-center"
      id="register"
    >
      <TitleBanner title="Register" />

      <div className="mt-10 grid max-w-4xl grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-2 md:gap-y-16">
        {roles.map((role) => (
          <Link
            key={role}
            href={role === "judge" ? "judge/register" : `apply/${role}`}
            className="group relative flex h-[80px] w-[250px] flex-col items-center justify-center transition-all ease-in-out hover:-translate-y-0.5 group-hover:flex-row"
          >
            <Image
              alt=""
              width={225}
              height={0}
              src="/landing/registerDecorFrame.webp"
              aria-hidden
              className="hidden group-hover:block"
            />
            <p className="font-inknut text-2xl text-hackathon-off-white-100 group-hover:absolute group-hover:mb-6">
              {role.charAt(0).toUpperCase() + role.slice(1)}
            </p>
            <Image
              alt=""
              width={175}
              height={0}
              src="/landing/registerDecorLines.webp"
              aria-hidden
              className="group-hover:hidden"
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Register;
