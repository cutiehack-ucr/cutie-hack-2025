import Image from "next/image";
import Link from "next/link";

const Register = () => {
  return (
    <div className="relative mx-auto flex w-5/6 flex-col items-center justify-center">
      <div className="relative mt-20 flex items-center justify-center">
        <Image
          src="/landing/titleBanner.webp"
          alt="Register Title Banner"
          width={400}
          height={100}
          className="object-contain"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="-mt-8 font-inknut text-4xl text-hackathon-off-white-100">
            Register
          </p>
        </div>
      </div>

      <div className="mt-10 grid w-full max-w-4xl grid-cols-1 gap-y-10 md:grid-cols-3 md:gap-x-10 md:gap-y-16">
        <div className="flex justify-center">
          <Image
            alt="Participant Register Button Frame"
            width={250}
            height={0}
            src={"/landing/participantFrame.webp"}
          />
          <div className="absolute mt-4">
            <Link
              href=""
              className="font-inknut text-2xl text-hackathon-off-white-100"
            >
              Participant
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center space-y-1">
          <Link
            href=""
            className="mt-4 font-inknut text-2xl text-hackathon-off-white-100"
          >
            Partner
          </Link>
          <Image
            alt="Partner Register Button Decor Lines"
            width={175}
            height={0}
            src={"/landing/registerDecorLines.webp"}
          />
        </div>

        <div className="flex flex-col items-center justify-center space-y-1">
          <Link
            href=""
            className="mt-4 font-inknut text-2xl text-hackathon-off-white-100"
          >
            Judge
          </Link>
          <Image
            alt="Judge Register Button Decor Line"
            width={175}
            height={0}
            src={"/landing/registerDecorLines.webp"}
          />
        </div>
      </div>
      <div className="relative mx-auto flex w-5/6 flex-col items-center justify-center">
        <div className="mt-10 grid w-full max-w-4xl grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-x-10 md:gap-y-16 lg:w-2/5">
          <div className="flex flex-col items-center justify-center space-y-1 md:col-span-1">
            <Link
              href=""
              className="mt-4 font-inknut text-2xl text-hackathon-off-white-100"
            >
              Mentor
            </Link>
            <Image
              alt="Mentor Register Button Decor Line"
              width={175}
              height={0}
              src={"/landing/registerDecorLines.webp"}
            />
          </div>
          <div className="flex flex-col items-center justify-center space-y-1 md:col-span-1 md:col-start-2">
            <Link
              href=""
              className="mt-4 font-inknut text-2xl text-hackathon-off-white-100"
            >
              Volunteer
            </Link>
            <Image
              alt="Volunteer Register Button Decor Line"
              width={175}
              height={0}
              src={"/landing/registerDecorLines.webp"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
