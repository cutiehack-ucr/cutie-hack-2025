"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import TitleBanner from "@/components/ui/title-banner";

const faqs = [
  { question: "What is a hackathon?", answer: "A hackathon is a collaborative event where participants work together intensively on software or hardware projects." },
  { question: "Who can participate?", answer: "Anyone with an interest in coding, design, or innovation can participate!" },
  { question: "Do I need experience?", answer: "No experience is required. Beginners are welcome and absolutely encouraged!" },
  { question: "What should I bring?", answer: "Bring your laptop, charger, and eagerness to code!" },
  { question: "Is it free to join?", answer: "Yes! This hackathon is completely free to join. We also provide free food :)" },
];

export default function FAQ() {
  return (
    <section
      id="faq"
      className="min-h-screen bg-[#0b3544] flex flex-col items-center justify-center text-white py-16 px-6 font-serif"
    >
      <div className="relative flex items-center justify-center w-full mb-10">
        <span className="text-white text-lg">✦</span>

        <div className="flex-1 mx-3 flex items-center">
          <Separator className="bg-white opacity-90" />
        </div>

        <div className="relative flex flex-col items-center justify-center">
          <TitleBanner title="FAQ" />
        </div>

        <div className="flex-1 mx-3 flex items-center">
          <Separator className="bg-white opacity-90" />
        </div>

        <span className="text-white text-lg">✦</span>
      </div>

      <div className="mt-4 w-full max-w-2xl space-y-4">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="border-none bg-transparent text-white"
            >
              <div className="flex items-center justify-center">
                <span className="text-white text-lg">✦</span>
                <div className="flex-1 border-t border-white mx-2"></div>
                <span className="text-white text-lg">✦</span>
              </div>

              <AccordionTrigger className="text-left w-full flex justify-between items-center font-semibold text-lg py-3 px-2 hover:opacity-90 focus:outline-none">
                {faq.question}
              </AccordionTrigger>

              <AccordionContent className="ml-6 pb-3 text-base font-light animate-fadeIn">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      
      <div className="mt-10 flex items-center justify-center w-full">
        <span className="text-white text-lg">✦</span>
        <div className="flex-1 border-t border-white mx-2"></div>
        <span className="text-white text-lg">✦</span>
      </div>
    </section>
  );
}
