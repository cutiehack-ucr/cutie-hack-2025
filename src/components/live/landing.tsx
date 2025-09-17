import Countdown from "../ui/countdown";

const Landing = () => {
  return (
    <div className="flex flex-col items-center justify-center">

      <div className="flex flex-col items-center justify-center bg-off-white-100 rounded-[12px] py-[10px] px-4">
        <div className="flex flex-col items-center gap-1 sm:flex-row sm:gap-2">
          <p className="font-inknut">November 15, 2025</p>
          <span className="hidden sm:inline">•</span>
          <p className="font-inknut">UC Riverside</p>
        </div>
        <Countdown
          classNames={{
            unit: "text-black",
            background: "bg-hackathon-blue-100",
            digit: "text-black",
          }}
          backgroundImage="/landing/countdownDigitsBg.webp"
        />
      </div>

    </div>
  );
};

export default Landing;
