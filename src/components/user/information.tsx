"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import Header from "./header";
import PageHeader from "./pageHeader";
import Rooms from "./dashboard/rooms";
import Packing from "./dashboard/packing";
import BulletList from "./dashboard/bulletlist";
import { JUDGING } from "@/data/user/judging";
import { RULES } from "@/data/user/rules";

const InfoPage = () => {
  const [date, setDate] = useState(new Date());
  const { data: session } = useSession();
  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  if (!session?.user) return <></>;

  return (
    <div className="flex h-[calc(100vh-48px)] w-full flex-col p-4 md:gap-y-20">
      <PageHeader pageTitle="Information" />
      <Header />
      <div className="flex translate-y-48 flex-col gap-y-12 md:-translate-y-24 md:translate-x-32 md:gap-y-6">
        <Rooms />
        <div className="flex flex-col gap-x-16 md:flex-row">
          <Packing />
          <BulletList text="Rules" list={RULES} />
          <BulletList text="Judging" list={JUDGING} />
        </div>
      </div>
    </div>
  );
};

export default InfoPage;
