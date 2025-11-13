"use client";

import { Label } from "../ui/label";
import { useSidebar } from "../ui/sidebar";

type PageHeaderProps = {
  pageTitle: string;
};

const PageHeader = ({ pageTitle }: PageHeaderProps) => {
  const { isMobile, toggleSidebar } = useSidebar();

  return (
    <div className="flex justify-between pt-4">
      <Label className="pr-5 text-2xl font-bold text-white">{pageTitle}</Label>
      {isMobile && (
        <button
          onClick={toggleSidebar}
          className="z-10 mb-2 flex flex-col items-end gap-[4px] pr-2 drop-shadow-md transition-all hover:scale-105 hover:cursor-pointer"
        >
          <div className="h-1 w-8 rounded-xl border-[1px] border-black bg-white"></div>
          <div className="h-1 w-8 rounded-xl border-[1px] border-black bg-white"></div>
          <div className="h-1 w-8 rounded-xl border-[1px] border-black bg-white"></div>
        </button>
      )}
    </div>
  );
};

export default PageHeader;
