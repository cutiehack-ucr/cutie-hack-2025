import Image from "next/image";
import TitleBanner from "../ui/title-banner";
import registerDecorFrame from "@/public/landing/registerDecorFrame.webp";

const Schedule = () => {
  const categories = [
    { name: "Setup", color: "text-hackathon-off-white-100" },
    { name: "Workshops", color: "text-hackathon-off-white-100" },
    { name: "Activities", color: "text-hackathon-off-white-100" },
  ];

  return (
    <div
      className="relative z-10 mx-auto -mt-[1400px] flex w-full flex-col items-center justify-center pb-[1400px] sm:mt-40 md:pb-32"
      id="schedule"
    >
      <TitleBanner title="Schedule" subtitle="November 15, 2025 (PST)" />

      <div className="mt-10 grid max-w-4xl grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-3 md:gap-y-16">
        {categories.map((category) => (
          <div
            key={category.name}
            className="relative flex h-[80px] w-[250px] flex-col items-center justify-center"
          >
            <Image
              alt=""
              width={250}
              height={80}
              src={registerDecorFrame}
              aria-hidden
              className="absolute"
            />
            <p className={`font-inknut text-lg md:text-2xl ${category.color}`}>
              {category.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Schedule;
