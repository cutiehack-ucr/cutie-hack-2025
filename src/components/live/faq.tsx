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
      className="flex w-full flex-col items-center justify-center py-16 text-[#EDEAE0] bg-hackathon-teal-800"
    >
{/* === Title row: ornament | banner | ornament === */}
<div className="w-11/12 max-w-6xl mb-8 grid grid-cols-[1fr_auto_1fr] items-center gap-4">
  {/* Left ornament */}
  <div className="hidden sm:block">
    <OrnamentSide />
  </div>

  {/* Banner */}
  <div className="justify-self-center translate-x-[10px]">
    <TitleBanner title="FAQ" />
  </div>

  {/* Right ornament */}
  <div className="hidden sm:block">
    <OrnamentSide />
  </div>
</div>


      {/* === Decorative ornament before first question === */}
      <div className="w-10/12 max-w-3xl mb-1">
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
                <AccordionTrigger
                  className="
                    group flex w-full items-center justify-between px-4 py-1
                    text-left text-[17px] font-inknut tracking-wide
                    text-[#EDEAE0] hover:no-underline
                    [&>svg]:hidden
                  "
                >
                  <span>{question}</span>

                  {/* dropdown chevrons */}
                  <span className="shrink-0">
                    <ChevronRight
                      className="h-6 w-6 stroke-[2] text-[#EDEAE0] transition-transform duration-200 group-data-[state=open]:hidden"
                      aria-hidden
                    />
                    <ChevronDown
                      className="hidden h-6 w-6 stroke-[2] text-[#EDEAE0] transition-transform duration-200 group-data-[state=open]:block"
                      aria-hidden
                    />
                  </span>
                </AccordionTrigger>



                {/* Answer */}
                <AccordionContent
                  className="
                    px-4 pb-4 text-[#EDEAE0]/90 text-[15px]
                    leading-relaxed font-forum
                  "
                >
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
      <div className="w-11/12 max-w-5xl mt-20">
        <Ornament />
      </div>
    </section>
  );
};

export default FAQ;
