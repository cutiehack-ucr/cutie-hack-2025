import Image, { StaticImageData } from "next/image";

interface ScrollItemProps {
  image: StaticImageData; // scroll image
  label: string; // "1st", "2nd"
  desc?: string; // description for award
  labelClass?: string; // label positioning/styling
  imageClass?: string; // scroll positioning/styling
  descClass?: string; // desc positioning/styling
  variant?: "desktop" | "mobile";
}

const ScrollItem = ({
  image,
  label,
  desc,
  labelClass = "",
  imageClass = "",
  descClass = "",
  variant = "desktop",
}: ScrollItemProps) => {
  if (variant === "mobile") {
    return (
      <div className={`relative ${imageClass}`}>
        <div className="relative h-full w-full">
          <Image
            src={image}
            alt={`${label} scroll`}
            className="h-auto w-full"
          />

          {label && (
            <div className={`absolute ${labelClass}`}>
              <span className="block break-words text-center font-inknut text-hackathon-gray-400">
                {label}
              </span>
            </div>
          )}

          {desc && (
            <div className={`absolute ${descClass}`}>
              <span className="block break-words text-center font-inknut text-[3vw] font-bold text-hackathon-gray-400">
                {desc}
              </span>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className={`absolute ${imageClass} flex items-center justify-center`}>
      <div className="relative h-full w-full">
        <Image src={image} alt={`${label} scroll`} className="h-auto w-full" />
        <div
          className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform ${labelClass}`}
        >
          <span className="block whitespace-pre-line break-words text-center font-inknut leading-[1.3] text-hackathon-gray-400">
            {label}
          </span>
        </div>
        <div
          className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform ${descClass}`}
        >
          <span className="block break-words text-center font-inknut text-sm font-bold text-hackathon-gray-400 md:text-sm lg:text-lg">
            {desc}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ScrollItem;
