"use client";

import { useState } from "react";
import Image from "next/image";

const faqData = [
  {
    question: "What types of spaces do you clean?",
    answer: "We specialize in event venues, parking lots, plazas and community spaces. If you need cleaning before, during, or after a festival, or routine parking lot care, we’ve got you covered.\n\nCustom packages are available—just tell us what you need and we’ll create a solution for your space.",
  },
  {
    question: "Are your cleaning products eco-friendly?",
    answer: "Absolutely. We use professional-grade, eco-friendly products that are safe for guests, staff, and the environment.\n\nIf you need a specific type of product or have concerns about allergies or sensitivities, let us know—we’re happy to tailor our service.",
  },
  {
    question: "How do I book a cleaning session?",
    answer: "Booking with us is simple—just fill out our quick online form with your space details, preferred schedule, and any special requests.\n\nWe’ll follow up fast with a quote and available time slots. You can also reach us directly by phone or email.",
  },
  {
    question: "Do I need to be on-site during the service?",
    answer: "It’s completely up to you! Many clients choose to hand over access and come back to a spotless space.\n\nIf you want to be present or have specific instructions, we’ll work around your schedule and needs.",
  },
  {
    question: "What if I’m not satisfied with the service?",
    answer: "Your satisfaction is our top priority. If something’s not right, let us know and we’ll make it right—no hassle, no extra fees.\n\nWe follow up after every job to ensure our standards are met and our clients are happy.",
  },
];

const AccordionItem = ({ question, answer, isOpen, onClick }: { question: string; answer: string; isOpen: boolean; onClick: () => void }) => {
  return (
    <div className="relative box-border caret-transparent shrink-0 w-full">
      <div className="relative content-start items-start box-border caret-transparent flex flex-col h-min justify-center w-full overflow-hidden py-4 border-b border-gray-500/30">
        <button
          onClick={onClick}
          className="relative content-center items-center box-border caret-transparent flex shrink-0 h-min justify-between w-full overflow-hidden text-left"
        >
          <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start break-words w-[90%]">
            <p className="text-white text-base box-border caret-transparent tracking-[-0.64px] leading-[21px] break-words font-geist md:text-lg md:tracking-[-0.72px] md:leading-6">
              {question}
            </p>
          </div>
          <div className={`relative box-border caret-transparent shrink-0 h-6 w-6 transition-transform duration-300 ${isOpen ? 'rotate-45' : 'rotate-0'}`}>
            <Image
              src="https://c.animaapp.com/mhoscdg4cN8yi3/assets/icon-8.svg"
              alt="Toggle Icon"
              fill
              className="box-border caret-transparent h-full w-full"
            />
          </div>
        </button>
        <div className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 pt-4' : 'grid-rows-[0fr] opacity-0'}`}>
          <div className="overflow-hidden">
            <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start break-words w-[90%]">
              <p className="text-stone-300 text-sm box-border caret-transparent tracking-[-0.56px] leading-[21px] break-words font-geist md:text-[15px] md:tracking-[-0.6px] md:leading-[24px] whitespace-pre-line">
                {answer}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function FinalCTA() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative content-center items-center box-border caret-transparent flex flex-col shrink-0 h-min justify-center w-full overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/girl-cleaning.webp"
          alt="Abstract background image"
          fill
          className="object-cover object-center"
        />
      </div>
      <div className="relative flex flex-col items-center md:items-end gap-16 w-full px-5 py-[60px] md:px-10 md:py-20">
        <div className="relative content-start items-start bg-slate-900/80 backdrop-blur-md box-border caret-transparent gap-x-4 flex flex-col shrink-0 h-min justify-start max-w-[640px] gap-y-4 w-full overflow-hidden p-6 md:p-10 rounded-2xl">
          <div className="relative content-center items-center box-border caret-transparent gap-x-2.5 flex shrink-0 h-min justify-start gap-y-2.5 w-full">
            <div className="relative box-border caret-transparent flex basis-0 flex-col grow shrink-0 justify-start break-words w-px">
              <h3 className="text-white text-[28px] box-border caret-transparent tracking-[-1.12px] leading-[33.6px] break-words text-left uppercase font-geist md:text-[40px] md:tracking-[-1.6px] md:leading-[48px]">
                All you need to know
              </h3>
            </div>
          </div>
          <div className="relative content-center items-center box-border caret-transparent gap-x-5 flex flex-col h-min justify-center gap-y-2 w-full">
            {faqData.map((faq, index) => (
              <AccordionItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() => handleToggle(index)}
              />
            ))}
          </div>
        </div>
        <CTACard />
      </div>
    </section>
  );
}

export const CTACard = () => {
  return (
    <div className="relative w-full max-w-[1120px] overflow-hidden rounded-2xl md:rounded-[32px]">
      <div className="absolute inset-0 z-0">
        <Image
          src="/cleaning-office.jpg"
          alt="Background of a clean office"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/70"></div>
      </div>
      <div className="relative z-10 content-center items-center box-border caret-transparent gap-x-10 flex flex-col shrink-0 h-min justify-center gap-y-10 w-full p-6 md:p-10">
      <div className="box-border caret-transparent contents"></div>
      <div className="relative content-start items-start box-border caret-transparent gap-x-10 flex flex-col shrink-0 h-min justify-start gap-y-10 w-full md:content-end md:items-end md:gap-x-[normal] md:flex-row md:justify-between md:gap-y-[normal]">
        <div className="relative content-start items-start box-border caret-transparent gap-x-6 flex basis-auto flex-col grow-0 shrink-0 h-min justify-start order-1 gap-y-6 w-full md:gap-x-8 md:basis-0 md:grow md:order-none md:gap-y-8 md:w-px">
          <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start max-w-60 break-words w-full md:max-w-[404px]">
            <h2 className="text-white text-5xl font-light box-border caret-transparent tracking-[-1.92px] leading-[48px] break-words font-geist md:text-[80px] md:tracking-[-3.2px] md:leading-[75px]">
              Event Cleaning that works around you
            </h2>
          </div>
          <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start max-w-60 break-words w-full md:max-w-xs">
            <p className="text-stone-50 text-[15px] box-border caret-transparent tracking-[-0.6px] leading-[18px] break-words font-geist md:text-base md:tracking-[-0.64px] md:leading-[22px]">
              Our expert cleaners handle the mess so you can focus on what
              matters.
            </p>
          </div>
        </div>
        <div className="relative content-end items-end box-border caret-transparent gap-x-1 flex basis-auto flex-col grow-0 shrink-0 h-min justify-start gap-y-1 w-full md:gap-x-2 md:basis-0 md:grow md:gap-y-2 md:w-px">
          <div className="box-border caret-transparent contents">
            <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start break-words w-full">
              <p className="text-stone-50 text-sm box-border caret-transparent tracking-[-0.56px] leading-[16.8px] break-words text-right uppercase font-geist md:text-base md:tracking-[-0.64px] md:leading-[19.2px]">
                Event Cleaning
              </p>
            </div>
          </div>
          <div className="box-border caret-transparent contents">
            <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start break-words w-full">
              <p className="text-stone-50 text-sm box-border caret-transparent tracking-[-0.56px] leading-[16.8px] break-words text-right uppercase font-geist md:text-base md:tracking-[-0.64px] md:leading-[19.2px]">
                Car Lot Cleaning
              </p>
            </div>
          </div>
          <div className="box-border caret-transparent contents">
            <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start break-words w-full">
              <p className="text-stone-50 text-sm box-border caret-transparent tracking-[-0.56px] leading-[16.8px] break-words text-right uppercase font-geist md:text-base md:tracking-[-0.64px] md:leading-[19.2px]">
                Pressure Washing
              </p>
            </div>
          </div>
          <div className="box-border caret-transparent contents">
            <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start break-words w-full">
              <p className="text-stone-50 text-sm box-border caret-transparent tracking-[-0.56px] leading-[16.8px] break-words text-right uppercase font-geist md:text-base md:tracking-[-0.64px] md:leading-[19.2px]">
                Snow Removal
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative content-start items-start bg-[#F6E304] box-border caret-transparent gap-x-4 flex flex-col shrink-0 h-min justify-start gap-y-4 w-full overflow-hidden p-4 rounded-2xl md:content-center md:items-center md:gap-x-[normal] md:flex-row md:justify-between md:gap-y-[normal] md:p-6">
        <div className="relative box-border caret-transparent flex basis-auto flex-col grow-0 shrink-0 justify-start max-w-40 break-words w-full md:basis-0 md:grow md:max-w-[200px] md:w-px">
          <p className="text-slate-900 text-base font-medium box-border caret-transparent tracking-[-0.64px] leading-[19.2px] break-words uppercase font-geist md:text-xl md:tracking-[-0.8px] md:leading-6">
            Got a space in need of a refresh?
          </p>
        </div>
        <div className="box-border caret-transparent contents">
          <div className="relative box-border caret-transparent shrink-0 h-14 md:h-16">
            <a
              href="/contact"
              className="relative text-blue-700 content-center items-center bg-slate-900 shadow-[rgba(8,29,58,0.32)_0px_8px_25px_0px] box-border caret-transparent gap-x-5 flex h-full justify-center gap-y-5 w-min pl-6 pr-3 py-6 rounded-[35px]"
            >
              <div className="relative content-center items-center box-border caret-transparent gap-x-2.5 flex shrink-0 h-min justify-center gap-y-2.5 w-min">
                <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start text-nowrap">
                  <p className="text-[#F6E304] text-[15px] box-border caret-transparent tracking-[-0.6px] leading-[18px] text-nowrap font-geist md:text-base md:tracking-[-0.64px] md:leading-[22px]">
                   Contact Us
                  </p>
                </div>
              </div>
              <div className="relative content-center items-center aspect-square bg-[#F6E304] box-border caret-transparent gap-x-2.5 flex shrink-0 justify-center gap-y-2.5 w-10 overflow-hidden rounded-[23px]">
                <div className="relative box-border caret-transparent shrink-0 h-5 w-5">
                  <div className="box-border caret-transparent contents">
                    <Image
                      src="https://c.animaapp.com/mhoscdg4cN8yi3/assets/icon-9.svg"
                      alt="Icon"
                      width={20}
                      height={20}
                      className="text-slate-900 box-border caret-transparent inline-block shrink-0 h-full w-full"
                    />
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};
