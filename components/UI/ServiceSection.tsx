"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Mock SectionHeader component
const SectionHeader = ({ variant, tagText, title, description, showLink }: { variant: string; tagText: string; title: string; description: string; showLink: boolean }) => (
  <div className="space-y-4">
    <span className="inline-block px-4 py-1.5 text-[#eeda03] rounded-full text-sm font-semibold">
      {tagText}
    </span>
    <h2 className="text-4xl md:text-5xl lg:text-7xl font-senibold text-white tracking-tight">
      {title}
    </h2>
    <p className="text-lg md:text-xl text-white/70 max-w-2xl">
      {description}
    </p>
  </div>
);

export default function ServicesSection() {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const services = [
    {
      title: "Spotless Events That Wow Guests",
      desc: "Whether it's Caribana, Pride Parade, or a local festival, our team handles pre-event, during-event, and post-event cleaning to ensure a flawless experience.",
      cta: "View More",
      link: "/services/event-cleaning",
      image: "/event-2.jpg",
      number: "01",
      label: "Event Cleaning",
      icon: "https://framerusercontent.com/images/rLTous16dTKITMdFkouZnZ0gAc.png",
      size: "large"
    },
    {
      title: "Pristine Parking Lots for Lasting Impressions",
      desc: "Keep plazas like Yorkdale or Scarborough Town Centre pristine with our sweeping, debris removal, and stain treatment services.",
      cta: "View More",
      link: "/services/parking-lot-cleaning",
      image: "/parking-2.jpg",
      number: "02",
      label: "Parking Lot Cleaning",
      icon: "https://framerusercontent.com/images/pE1nEasaMORw13ZMV1ob3iYkxCU.png",
      size: "normal"
    },
    {
      title: "High-Powered Cleaning for Any Surface",
      desc: "Our pressure washing restores sidewalks, facades, and parking areas to their original shine, perfect for events and plazas.",
      cta: "View More",
      link: "/services/pressure-washing",
      image: "/pressure-1.jpg",
      number: "03",
      label: "Pressure Washing",
      icon: "https://framerusercontent.com/images/k6W1tvNaOZEih2K6a63bGDb2bY.png",
      size: "normal"
    },
    {
      title: "Safe, Accessible Spaces All Winter",
      desc: "Our 24/7 snow removal and de-icing services keep event grounds and plazas safe during Toronto's harsh winters.",
      cta: "View More",
      link: "/services/snow-removal",
      image: "/snow-1.jpg",
      number: "04",
      label: "Snow Removal",
      icon: "https://framerusercontent.com/images/EnT4aQt0PenxFslhe3fkE0yHOpA.png",
      size: "large"
    },
  ];

  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: "0px 0px -100px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = cardRefs.current.findIndex(ref => ref === entry.target);
          if (index !== -1 && !visibleCards.includes(index)) {
            setVisibleCards((prev) => [...prev, index]);          }
        }
      });
    }, observerOptions);

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      observer.disconnect();
    };
  }, [visibleCards]);

  return (
    <section className="relative bg-[#0a0e27] w-full overflow-hidden">
      
      {/* Header Section */}
      <div className="px-6 pt-20 pb-12 md:px-12 md:pt-32 md:pb-16 max-w-[1400px] mx-auto">
        <SectionHeader
          variant="variant1"
          tagText="Services"
          title={"Here's What We Handle"}
          description="Big events. Busy parking lots. The messes nobody wants to deal with. We show up, we clean it, we're gone."
          showLink={false}
        />
      </div>

      {/* Services Grid */}
      <div className="relative px-6 pb-20 md:px-12 md:pb-32 max-w-[1400px] mx-auto">
        <div className="relative content-center items-center box-border caret-transparent gap-x-5 flex flex-col shrink-0 h-min justify-center gap-y-5 w-full overflow-hidden md:gap-x-10 md:gap-y-10">
          
          {/* First Row */}
          <div className="relative content-center items-center box-border caret-transparent gap-x-5 flex flex-col shrink-0 h-min justify-center gap-y-5 w-full overflow-hidden md:flex-row">
            {/* Card 1 - Large */}
            <div ref={(el) => { cardRefs.current[0] = el; }}              className={`relative box-border caret-transparent basis-auto grow-0 shrink-0 w-full md:basis-0 md:w-px md:grow-[0.75] transition-all duration-700 ease-out ${
                visibleCards.includes(0) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
              }`}
            >
              <Link 
                href={services[0].link} 
                className="relative text-blue- after:border-solid after:border-yellow-100 content-center items-center box-border caret-transparent gap-x-0 flex h-min justify-center gap-y-0 w-full overflow-hidden rounded-[32px]"
              >
                <div className="relative content-start items-start bg-zinc-900 box-border caret-transparent gap-x-[420px] flex basis-0 flex-col grow shrink-0 h-min justify-center gap-y-[420px] w-px overflow-hidden p-8 rounded-[32px]">
                  <div className="absolute box-border caret-transparent shrink-0 h-[120%] left-[-10.0236%] top-[-9.87197%] w-[120%] z-0 overflow-hidden [mask-image:linear-gradient(rgba(0,0,0,0.6)_21%,rgb(0,0,0)_28%,rgb(0,0,0)_64%,rgba(0,0,0,0.12)_73%)]">
                    <div className="absolute box-border caret-transparent inset-0">
                      <Image
                        src={services[0].image}
                        alt={services[0].title}
                        fill
                        className="box-border caret-transparent object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  </div>
                  <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-center max-w-[232px] break-words w-full">
                    <p className="text-white text-[15px] box-border caret-transparent tracking-[-0.6px] leading-[18px] break-words text-left font-geist md:text-xl md:tracking-[-0.8px] md:leading-[26px]">
                      {services[0].title}
                    </p>
                  </div>
                  <div className="relative content-start items-start box-border caret-transparent gap-x-8 flex flex-col shrink-0 h-min justify-start gap-y-8 w-full overflow-hidden">
                    <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-center break-words w-full max-w-[400px]">
                      <p className="text-zinc-100 text-sm box-border caret-transparent tracking-[-0.56px] leading-[18px] break-words text-left font-geist md:text-[15px] md:tracking-[-0.6px] md:leading-[21px]">
                        {services[0].desc}
                      </p>
                    </div>
                    <div className="relative content-center items-center box-border caret-transparent flex shrink-0 h-min justify-between w-full overflow-hidden">
                      <div className="relative content-end items-end box-border caret-transparent gap-x-2 flex basis-0 grow shrink-0 h-min justify-start gap-y-2 w-px overflow-hidden">
                        <div className="relative aspect-square box-border caret-transparent shrink-0 w-8 overflow-hidden">
                          <div className="absolute box-border caret-transparent inset-0">
                            <Image
                              src={services[0].icon}
                              alt=""
                              fill
                              className="box-border caret-transparent object-contain"
                              sizes="32px"
                            />
                          </div>
                        </div>
                        <div className="relative box-border caret-transparent flex basis-0 flex-col grow shrink-0 justify-start max-w-xs break-words w-px">
                          <p className="text-zinc-100 text-xs box-border caret-transparent tracking-[-0.48px] leading-[15px] break-words font-geist md:text-sm md:tracking-[-0.56px] md:leading-[18px]">
                            {services[0].label}
                          </p>
                        </div>
                      </div>
                      <div className="relative content-center items-center bg-yellow-300 box-border caret-transparent flex shrink-0 justify-center rounded-full px-4 py-2">
                        <p className="text-slate-900 text-xs font-bold font-geist">
                          {services[0].cta}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            {/* Card 2 - Normal */}
            <div ref={(el) => { cardRefs.current[1] = el; }}
              className={`relative box-border caret-transparent basis-auto grow-0 shrink-0 w-full md:basis-0 md:w-px md:grow transition-all duration-700 ease-out ${
                visibleCards.includes(1) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
              }`}
              style={{ transitionDelay: '150ms' }}
            >
              <Link 
                href={services[1].link} 
                className="relative text-blue-700 content-center items-center  box-border caret-transparent gap-x-0 flex h-min justify-center gap-y-0 w-full overflow-hidden p-2 rounded-[32px]"
              >
                <div className="relative content-start items-start bg-zinc-900 box-border caret-transparent gap-x-[420px] flex basis-0 flex-col grow shrink-0 h-min justify-center gap-y-[420px] w-px overflow-hidden p-8 rounded-3xl after:accent-auto after:box-border after:caret-transparent after:text-blue-700 after:block after:text-xs after:not-italic after:normal-nums after:font-normal after:h-full after:tracking-[normal] after:leading-[normal] after:list-outside after:list-disc after:pointer-events-none after:absolute after:text-start after:indent-[0px] after:normal-case after:visible after:w-full after:border after:rounded-3xl after:border-separate after:border-solid after:border-yellow-100 after:left-0 after:top-0 after:font-sans_serif">
                  <div className="absolute box-border caret-transparent shrink-0 h-[120%] left-[-10.0236%] top-[-9.87197%] w-[120%] z-0 overflow-hidden [mask-image:linear-gradient(rgba(0,0,0,0.6)_21%,rgb(0,0,0)_28%,rgb(0,0,0)_64%,rgba(0,0,0,0.12)_73%)]">
                    <div className="absolute box-border caret-transparent inset-0">
                      <Image
                        src={services[1].image}
                        alt={services[1].title}
                        fill
                        className="box-border caret-transparent object-cover object-[54.4%_72.1%]"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  </div>
                  <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-center max-w-[232px] break-words w-full">
                    <p className="text-white text-[15px] box-border caret-transparent tracking-[-0.6px] leading-[18px] break-words text-left font-geist md:text-xl md:tracking-[-0.8px] md:leading-[26px]">
                      {services[1].title}
                    </p>
                  </div>
                  <div className="relative content-start items-start box-border caret-transparent gap-x-8 flex flex-col shrink-0 h-min justify-start gap-y-8 w-full overflow-hidden">
                    <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-center break-words w-full max-w-[480px]">
                      <p className="text-zinc-100 text-sm box-border caret-transparent tracking-[-0.56px] leading-[18px] break-words text-left font-geist md:text-[15px] md:tracking-[-0.6px] md:leading-[21px]">
                        {services[1].desc}
                      </p>
                    </div>
                    <div className="relative content-center items-center box-border caret-transparent flex shrink-0 h-min justify-between w-full overflow-hidden">
                      <div className="relative content-end items-end box-border caret-transparent gap-x-2 flex basis-0 grow shrink-0 h-min justify-start gap-y-2 w-px overflow-hidden">
                        <div className="relative aspect-square box-border caret-transparent shrink-0 w-8 overflow-hidden">
                          <div className="absolute box-border caret-transparent inset-0">
                            <Image
                              src={services[1].icon}
                              alt=""
                              fill
                              className="box-border caret-transparent object-contain"
                              sizes="32px"
                            />
                          </div>
                        </div>
                        <div className="relative box-border caret-transparent flex basis-0 flex-col grow shrink-0 justify-start max-w-xs break-words w-px">
                          <p className="text-zinc-100 text-xs box-border caret-transparent tracking-[-0.48px] leading-[15px] break-words font-geist md:text-sm md:tracking-[-0.56px] md:leading-[18px]">
                            {services[1].label}
                          </p>
                        </div>
                      </div>
                      <div className="relative content-center items-center bg-yellow-300 box-border caret-transparent flex shrink-0 justify-center rounded-full px-4 py-2">
                        <p className="text-slate-900 text-xs font-bold font-geist">
                          {services[1].cta}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* Second Row */}
          <div className="relative content-center items-center box-border caret-transparent gap-x-5 flex flex-col shrink-0 h-min justify-center gap-y-5 w-full overflow-hidden md:flex-row">
            {/* Card 3 - Normal */}
            <div ref={(el) => {cardRefs.current[2] = el; }}
              className={`relative box-border caret-transparent basis-auto grow-0 shrink-0 w-full md:basis-0 md:w-px md:grow transition-all duration-700 ease-out ${
                visibleCards.includes(2) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
              }`}
            >
              <Link 
                href={services[2].link} 
                className="relative text-blue-700 content-center items-center  box-border caret-transparent gap-x-0 flex h-min justify-center gap-y-0 w-full overflow-hidden p-2 rounded-[32px]"
              >
                <div className="relative content-start items-start bg-zinc-900 box-border caret-transparent gap-x-[420px] flex basis-0 flex-col grow shrink-0 h-min justify-center gap-y-[420px] w-px overflow-hidden p-8 rounded-3xl after:accent-auto after:box-border after:caret-transparent after:block after:text-xs after:not-italic after:normal-nums after:font-normal after:h-full after:tracking-[normal] after:leading-[normal] after:list-outside after:list-disc after:pointer-events-none after:absolute after:text-start after:indent-[0px] after:normal-case after:visible after:w-full after:border after:rounded-3xl after:border-separate after:border-solid after:border-yellow-100 after:left-0 after:top-0 ">
                  <div className="absolute box-border caret-transparent shrink-0 h-[120%] left-[-10.0236%] top-[-9.87197%] w-[120%] z-0 overflow-hidden [mask-image:linear-gradient(rgba(0,0,0,0.6)_21%,rgb(0,0,0)_28%,rgb(0,0,0)_64%,rgba(0,0,0,0.12)_73%)]">
                    <div className="absolute box-border caret-transparent inset-0">
                      <Image
                        src={services[2].image}
                        alt={services[2].title}
                        fill
                        className="box-border caret-transparent object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  </div>
                  <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-center max-w-[232px] break-words w-full">
                    <p className="text-white text-[15px] box-border caret-transparent tracking-[-0.6px] leading-[18px] break-words text-left font-geist md:text-xl md:tracking-[-0.8px] md:leading-[26px]">
                      {services[2].title}
                    </p>
                  </div>
                  <div className="relative content-start items-start box-border caret-transparent gap-x-8 flex flex-col shrink-0 h-min justify-start gap-y-8 w-full overflow-hidden">
                    <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-center break-words w-full max-w-[480px]">
                      <p className="text-zinc-100 text-sm box-border caret-transparent tracking-[-0.56px] leading-[18px] break-words text-left font-geist md:text-[15px] md:tracking-[-0.6px] md:leading-[21px]">
                        {services[2].desc}
                      </p>
                    </div>
                    <div className="relative content-center items-center box-border caret-transparent flex shrink-0 h-min justify-between w-full overflow-hidden">
                      <div className="relative content-end items-end box-border caret-transparent gap-x-2 flex basis-0 grow shrink-0 h-min justify-start gap-y-2 w-px overflow-hidden">
                        <div className="relative aspect-square box-border caret-transparent shrink-0 w-8 overflow-hidden">
                          <div className="absolute box-border caret-transparent inset-0">
                            <Image
                              src={services[2].icon}
                              alt=""
                              fill
                              className="box-border caret-transparent object-contain"
                              sizes="32px"
                            />
                          </div>
                        </div>
                        <div className="relative box-border caret-transparent flex basis-0 flex-col grow shrink-0 justify-start max-w-xs break-words w-px">
                          <p className="text-zinc-100 text-xs box-border caret-transparent tracking-[-0.48px] leading-[15px] break-words font-geist md:text-sm md:tracking-[-0.56px] md:leading-[18px]">
                            {services[2].label}
                          </p>
                        </div>
                      </div>
                      <div className="relative content-center items-center bg-yellow-300 box-border caret-transparent flex shrink-0 justify-center rounded-full px-4 py-2">
                        <p className="text-slate-900 text-xs font-bold font-geist">
                          {services[2].cta}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            {/* Card 4 - Large */}
            <div ref={(el) => {cardRefs.current[3] = el}}
              className={`relative box-border caret-transparent basis-auto grow-0 shrink-0 w-full md:basis-0 md:w-px md:grow-[0.75] transition-all duration-700 ease-out ${
                visibleCards.includes(3) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
              }`}
              style={{ transitionDelay: '150ms' }}
            >
              <Link 
                href={services[3].link} 
                className="relative  content-center items-center  box-border caret-transparent gap-x-0 flex h-min justify-center gap-y-0 w-full overflow-hidden p-2 rounded-[32px]"
              >
                <div className="relative content-start items-start bg-zinc-900 box-border caret-transparent gap-x-[420px] flex basis-0 flex-col grow shrink-0 h-min justify-center gap-y-[420px] w-px overflow-hidden p-8 rounded-3xl after:accent-auto after:box-border after:caret-transparent after:text-blue-700 after:block after:text-xs after:not-italic after:normal-nums after:font-normal after:h-full after:tracking-[normal] after:leading-[normal] after:list-outside after:list-disc after:pointer-events-none after:absolute after:text-start after:indent-[0px] after:normal-case after:visible after:w-full after:border after:rounded-3xl after:border-separate after:border-solid after:border-yellow-100 after:left-0 after:top-0 ">
                  <div className="absolute box-border caret-transparent shrink-0 h-[120%] left-[-10.0236%] top-[-9.87197%] w-[120%] z-0 overflow-hidden [mask-image:linear-gradient(rgba(0,0,0,0.72)_21%,rgb(0,0,0)_28%,rgb(0,0,0)_64%,rgba(0,0,0,0.12)_73%)]">
                    <div className="absolute box-border caret-transparent inset-0">
                      <Image
                        src={services[3].image}
                        alt={services[3].title}
                        fill
                        className="box-border caret-transparent object-cover object-[84.9%_43.7%]"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  </div>
                  <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-center max-w-[232px] break-words w-full">
                    <p className="text-white text-[15px] box-border caret-transparent tracking-[-0.6px] leading-[18px] break-words text-left font-geist md:text-xl md:tracking-[-0.8px] md:leading-[26px]">
                      {services[3].title}
                    </p>
                  </div>
                  <div className="relative content-start items-start box-border caret-transparent gap-x-8 flex flex-col shrink-0 h-min justify-start gap-y-8 w-full overflow-hidden">
                    <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-center break-words w-full max-w-[400px]">
                      <p className="text-zinc-100 text-sm box-border caret-transparent tracking-[-0.56px] leading-[18px] break-words text-left font-geist md:text-[15px] md:tracking-[-0.6px] md:leading-[21px]">
                        {services[3].desc}
                      </p>
                    </div>
                    <div className="relative content-center items-center box-border caret-transparent flex shrink-0 h-min justify-between w-full overflow-hidden">
                      <div className="relative content-end items-end box-border caret-transparent gap-x-2 flex basis-0 grow shrink-0 h-min justify-start gap-y-2 w-px overflow-hidden">
                        <div className="relative aspect-square box-border caret-transparent shrink-0 w-8 overflow-hidden">
                          <div className="absolute box-border caret-transparent inset-0">
                            <Image
                              src={services[3].icon}
                              alt=""
                              fill
                              className="box-border caret-transparent object-contain"
                              sizes="32px"
                            />
                          </div>
                        </div>
                        <div className="relative box-border caret-transparent flex basis-0 flex-col grow shrink-0 justify-start max-w-xs break-words w-px">
                          <p className="text-zinc-100 text-xs box-border caret-transparent tracking-[-0.48px] leading-[15px] break-words font-geist md:text-sm md:tracking-[-0.56px] md:leading-[18px]">
                            {services[3].label}
                          </p>
                        </div>
                      </div>
                      <div className="relative content-center items-center bg-yellow-300 box-border caret-transparent flex shrink-0 justify-center rounded-full px-4 py-2">
                        <p className="text-slate-900 text-xs font-bold font-geist">
                          {services[3].cta}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}