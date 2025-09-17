"use client";
import { useState, useEffect } from "react";
import data from "@/data/config";

interface digitProps {
  value: number;
  unit: string;
  classNames: {
    unit: string;
    digit: string;
    background: string;
  };
  backgroundImage?: string;
}

const Digits = ({ value, unit, classNames, backgroundImage }: digitProps) => {
  return (
    <div className="flex flex-col items-center gap-4 last:hidden sm:last:flex">
      <div className="m-3 mb-0 flex gap-1 lg:!gap-1">
        <div
          className={`flex items-center justify-center rounded ${classNames.background} bg-opacity-40 p-3 text-lg font-bold ${classNames.digit} font-inknut lg:min-w-11 lg:p-3 lg:text-3xl`}
          style={{
            backgroundImage: backgroundImage
              ? `url(${backgroundImage})`
              : undefined,
            backgroundSize: "cover",
            backgroundPosition: "center",
            aspectRatio: 121.22 / 100.76,
            width: "91px",
          }}
        >
          {value.toString().padStart(2, "0")}
        </div>
      </div>
      <div className={`m-2 mt-0 text-xs ${classNames.unit} font-inknut`}>
        {unit}
      </div>
    </div>
  );
};

interface countdownProps {
  classNames: {
    unit: string;
    digit: string;
    background: string;
  };
  backgroundImage?: string;
}

const Countdown = ({ classNames, backgroundImage }: countdownProps) => {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const timeLeft = data.end.getTime() - new Date().getTime();
      if (timeLeft <= 0) {
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setCountdown({
          days: Math.floor(timeLeft / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
          ),
          minutes: Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((timeLeft % (1000 * 60)) / 1000),
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center font-bold">
      {Object.entries(countdown).map(([unit, value], index) => (
        <Digits
          key={index}
          unit={unit}
          value={value}
          classNames={classNames}
          backgroundImage={backgroundImage}
        />
      ))}
    </div>
  );
};

export default Countdown;
