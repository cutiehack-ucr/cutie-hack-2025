"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { QUESTIONS } from "@/data/faq";
import TitleBanner from "@/components/ui/title-banner";
import Ornament from "@/components/ui/ornament";
import OrnamentSide from "@/components/ui/ornament-side";
import { ChevronRight, ChevronDown } from "lucide-react";

const FAQ = () => {
  return (
    <section
      id="faq"
      className="flex w-full flex-col items-center justify-center bg-hackathon-teal-800 py-16 text-[#EDEAE0] sm:mt-40"
    >
      {/* === Title row: ornament | banner | ornament === */}
      <div className="mb-8 w-11/12 max-w-6xl items-center gap-4 md:grid md:grid-cols-[1fr_auto_1fr]">
        {/* Left ornament */}
        <div className="hidden sm:block">
          <OrnamentSide />
        </div>

        {/* Banner */}
        <div className="w-full font-bold">
          <TitleBanner title="FAQ" />
        </div>

        {/* Right ornament */}
        <div className="hidden sm:block">
          <OrnamentSide />
        </div>
      </div>

      {/* === Decorative ornament before first question === */}
      <div className="mb-1 w-10/12 max-w-3xl">
        <Ornament />
      </div>
      {/* === Accordion content === */}
      <div className="w-10/12 max-w-3xl space-y-3">
        <Accordion type="single" collapsible className="w-full">
          {QUESTIONS.map(({ question, answer }, index) => (
            <div key={index}>
              <AccordionItem
                value={question}
                className="border-0 bg-transparent"
              >
                {/* Question */}
                <AccordionTrigger className="[&>svg]:hidden: group flex w-full items-center justify-between px-4 py-1 text-left font-inknut text-[17px] tracking-wide text-[#EDEAE0] hover:no-underline">
                  <span>{question}</span>
                </AccordionTrigger>

                {/* Answer */}
                <AccordionContent className="px-4 pb-4 font-forum text-[15px] leading-relaxed text-[#EDEAE0]/90">
                  {answer}
                </AccordionContent>
              </AccordionItem>

              {/* Ornament divider between questions */}
              {index !== QUESTIONS.length - 1 && (
                <div className="my-2">
                  <Ornament />
                </div>
              )}
            </div>
          ))}
        </Accordion>
      </div>

      {/* === Bottom divider === */}
      <div className="mt-20 w-11/12 max-w-5xl">
        <Ornament />
      </div>
    </section>
  );
};

export default FAQ;
