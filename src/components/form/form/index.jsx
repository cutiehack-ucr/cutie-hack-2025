"use client";

import { useState } from "react";
import Status from "./status";
import Questions from "./questions";
import Confirmation from "./confirmation";
import Image from "next/image";
import Navigation from "@/components/ui/navigation";

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
      <Navigation hasSignout/>
      <Image
        className="absolute -top-32 inset-0 z-0 w-[125%] bg-hackathon-teal-800 object-cover h-auto"
        alt=""
        width={0}
        height={0}
        src="/landing/backgroundGlow.svg"
        priority
        aria-hidden="true"
      />
      <div className="mt-8 z-10 lg:mt-32 flex w-10/12 flex-col items-center pb-12 pt-5 md:w-1/2 xl:w-1/3">
        <Image src="/forms/titleHorizontal.svg" width={0} height={0} className="m-4 w-full" alt="Logo" />
        <Image src="/forms/formDeco.svg" width={0} height={0} className="relative top-2 w-full scale-110" alt="" aria-hidden/>
        <h1 className="m-0 w-full rounded-t text-hackathon-off-white-100 bg-hackathon-gray-400 px-4 py-8 text-2xl text-center font-bold">
          {header}
        </h1>
        <div className="rounded-b bg-hackathon-off-white-100 p-8 grid grid-cols-1 gap-3">
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
        <Image src="/forms/formDeco.svg" width={0} height={0} className="relative -bottom-2 w-full scale-110 rotate-180" alt="" aria-hidden/>
      </div>
    </div>
  );
};

export default Form;
