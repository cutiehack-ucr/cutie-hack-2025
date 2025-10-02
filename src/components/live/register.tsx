import Image from "next/image";
import Link from "next/link";

const Register = () => {
  return (
    <div
      className="relative mx-auto flex w-5/6 flex-col items-center justify-center"
      id="register"
    >
      <div className="relative mt-20 flex items-center justify-center">
        <Image
          src="/landing/titleBanner.webp"
          alt="Register Title Banner"
          width={400}
          height={100}
          className="object-contain drop-shadow-md"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="-mt-8 font-inknut text-4xl text-hackathon-off-white-100">
            Register
          </p>
        </div>
      </div>

      <div className="mt-10 grid max-w-4xl grid-cols-1 gap-y-10 md:grid-cols-2 gap-x-12 md:gap-y-16">
        {[
          { role: "participant", image: "/landing/participantFrame.webp" },
          { role: "judge", image: "/landing/registerDecorLines.webp" },
          { role: "mentor", image: "/landing/registerDecorLines.webp" },
          { role: "volunteer", image: "/landing/registerDecorLines.webp" },
        ].map(({ role, image }) => (
          <Link
        key={role}
        href={`apply/${role}`}
        className={`flex transition-all hover:animate-pulse ease-in-out ${
          role === "participant" ? "justify-center" : "flex-col items-center justify-center space-y-1"
        }`}
          >
        {role === "participant" && (
          <Image
            alt=""
            width={250}
            height={0}
            src={image}
            aria-hidden
          />
        )}
        <div className={role === "participant" ? "absolute mt-4" : "mt-4"}>
          <p className="font-inknut text-2xl text-hackathon-off-white-100">
            {role.charAt(0).toUpperCase() + role.slice(1)}
          </p>
        </div>
        {role !== "participant" && (
          <Image
            alt=""
            width={175}
            height={0}
            src={image}
            aria-hidden
          />
        )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Register;
