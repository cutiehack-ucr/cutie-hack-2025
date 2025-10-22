"use client";

import { useState } from "react";
import Status from "./status";
import Questions from "./questions";
import Confirmation from "./confirmation";
import Image from "next/image";
import Navigation from "@/components/ui/navigation";
import bgGlow from "@/public/landing/backgroundGlow.svg";

const Form = ({
  object,
  setObject,
  header,
  fields,
  onSubmit,
  statuses = {},
  bypass = false,
  packet = false,
}) => {
  const [loading, setLoading] = useState(false);

  const [state, setState] = useState(
    typeof object.roles[object.form] !== "undefined" && !bypass ? 0 : 1,
  );

  return (
    <div className="overflow-scroll-y flex h-full w-full flex-col items-center font-inknut">
      <Navigation hasSignout />
      <Image
        className="absolute inset-0 -top-32 z-0 h-auto w-full scale-125 overflow-y-clip bg-hackathon-teal-800 object-cover"
        alt=""
        src={bgGlow}
        priority
        aria-hidden="true"
      />
      <div className="z-10 mt-8 flex w-10/12 flex-col items-center pb-12 pt-5 md:w-1/2 lg:mt-32 xl:w-1/3">
        <Image
          src="/forms/titleHorizontal.svg"
          width={0}
          height={0}
          className="m-4 w-full"
          alt="Logo"
        />
        <Image
          src="/forms/formDeco.svg"
          width={0}
          height={0}
          className="relative top-2 w-full scale-110"
          alt=""
          aria-hidden
        />
        <h1 className="m-0 w-full rounded-t bg-hackathon-gray-400 px-4 py-8 text-center text-2xl font-bold text-hackathon-off-white-100">
          {header}
        </h1>
        <div className="grid grid-cols-1 gap-3 rounded-b bg-hackathon-off-white-100 p-8">
          {state === 0 ? (
            <Status object={object} statuses={statuses} setState={setState} />
          ) : state === 1 ? (
            <Questions
              loading={loading}
              setLoading={setLoading}
              object={object}
              setObject={setObject}
              fields={fields}
              onSubmit={onSubmit}
              setState={setState}
              packet={packet}
            />
          ) : (
            <Confirmation />
          )}
        </div>
        <Image
          src="/forms/formDeco.svg"
          width={0}
          height={0}
          className="relative -bottom-2 w-full rotate-180 scale-110"
          alt=""
          aria-hidden
        />
      </div>
    </div>
  );
};

export default Form;
