"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { CTABlock } from "../CTABlock";
// import { SectionHeader } from "@/components/SectionHeader";

type StatCardProps = {
  layout: string;
  mainStat?: string;
  mainTitle: string;
  description: string;
  imageUrl?: string;
  imageClassName?: string;
  showIcon?: boolean;
  iconUrl?: string;
  secondaryStat?: string;
  secondaryTitle?: string;
  secondaryDescription?: string;
  secondaryImageUrl?: string;
  secondaryImageClassName?: string;
  tertiaryTitle?: string;
  tertiaryDescription?: string;
  index: number;
  visible: boolean;
};

const StatCard = (props: StatCardProps) => {
  if (props.layout === "variant1") {
    return (
      <div
        className={`w-full transition-all duration-700 ease-out ${
          props.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        <div className="w-full flex flex-col gap-5">
          <div className="relative box-border caret-transparent shrink-0 w-full">
            <div className="relative content-start items-start mb-5 bg-[#eeda03] box-border caret-transparent gap-x-14 flex flex-col h-min justify-center gap-y-14 w-full overflow-hidden p-8 rounded-2xl">
              <div className="relative content-center items-center box-border caret-transparent gap-x-14 flex flex-col shrink-0 h-min justify-center gap-y-14 w-full">
                <div className="relative content-center items-center box-border caret-transparent gap-x-2.5 flex flex-col shrink-0 h-min justify-center gap-y-2.5 w-full">
                  <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start break-words w-full">
                    <p className="text-slate-900 text-base font-medium box-border caret-transparent tracking-[-0.64px] leading-[19.2px] break-words text-left uppercase font-geist md:text-xl md:tracking-[-0.8px] md:leading-6">
                      {props.mainTitle}
                    </p>
                  </div>
                </div>
                <div className="relative content-center items-center box-border caret-transparent gap-x-2.5 flex flex-col shrink-0 h-min justify-center gap-y-2.5 w-full">
                  <div className="relative content-end items-end box-border caret-transparent flex shrink-0 h-min justify-between w-full overflow-hidden">
                    <div className="relative box-border caret-transparent flex basis-0 flex-col grow shrink-0 justify-start break-words w-px">
                      <p className="text-slate-900 text-[28px] box-border caret-transparent tracking-[-1.12px] leading-[33.6px] break-words uppercase font-geist md:text-[40px] md:tracking-[-1.6px] md:leading-[48px]">
                        {props.mainStat}
                      </p>
                    </div>
                    <div className="relative box-border caret-transparent flex basis-0 flex-col grow shrink-0 justify-start break-words w-px">
                      <p className="text-slate-600 text-sm box-border caret-transparent tracking-[-0.56px] leading-[18px] break-words text-left font-geist md:text-[15px] md:tracking-[-0.6px] md:leading-[21px]">
                        {props.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {props.imageUrl && (
          <div className="relative w-full h-[360px] rounded-3xl mb-5 md:rounded-2xl overflow-hidden">
            <Image
              src={props.imageUrl}
              alt=""
              fill
              className="object-cover object-[29.3%_23%]"
            />
          </div>
        )}
        <div className="w-full">
            <div className="relative content-start items-start bg-zinc-100 box-border caret-transparent gap-x-10 flex flex-col h-min justify-center gap-y-10 w-full overflow-hidden p-8 rounded-2xl">
              <div className="relative box-border caret-transparent flex flex-col shrink-0 w-full content-center items-center gap-x-8 h-min justify-center order-1 gap-y-8">
                <div className="relative content-center items-center box-border caret-transparent gap-x-0 flex flex-col shrink-0 h-min justify-center gap-y-0 w-full">
                  <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start break-words w-full">
                    <p className="text-slate-900 text-[28px] box-border caret-transparent tracking-[-1.12px] leading-[33.6px] break-words uppercase font-geist md:text-[40px] md:tracking-[-1.6px] md:leading-[48px]">
                      {props.secondaryStat}
                    </p>
                  </div>
                  <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start break-words w-full">
                    <p className="text-slate-900 text-base font-medium box-border caret-transparent tracking-[-0.64px] leading-[19.2px] break-words text-left uppercase font-geist md:text-xl md:tracking-[-0.8px] md:leading-6">
                      {props.secondaryTitle}
                    </p>
                  </div>
                </div>
                <div className="relative content-center items-center box-border caret-transparent gap-x-2.5 flex flex-col shrink-0 h-min justify-center gap-y-2.5 w-full">
                  <div className="relative content-end items-end box-border caret-transparent flex shrink-0 h-min justify-between order-1 w-full overflow-hidden">
                    <div className="relative box-border caret-transparent flex basis-0 flex-col grow shrink-0 justify-start break-words w-px">
                      <p className="text-slate-600 text-sm box-border caret-transparent tracking-[-0.56px] leading-[18px] break-words text-left font-geist md:text-[15px] md:tracking-[-0.6px] md:leading-[21px]">
                        {props.secondaryDescription}
                      </p>
                    </div>
                  </div>
                  {props.showIcon && props.iconUrl && (
                    <div className="relative text-slate-900 box-border caret-transparent fill-slate-900 shrink-0 h-[3px] w-full">
                      <div className="box-border caret-transparent fill-slate-900 h-full w-full">
                        <div className="w-full h-full bg-[#eeda03]"></div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
        </div>
      </div>
    );
  }

  if (props.layout === "variant2") {
    return (
      <div
        className={`w-full transition-all duration-700 ease-out ${
          props.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
        style={{ transitionDelay: `${props.index * 150}ms` }}
      >
        <div className="w-full flex flex-col gap-5">
          <div className="w-full">
              <div className="relative box-border caret-transparent flex flex-col justify-center w-full content-start items-start bg-zinc-100 gap-x-10 h-full gap-y-10 overflow-hidden p-8 rounded-2xl">
                <div className="relative box-border caret-transparent flex flex-col shrink-0 w-full content-center items-center gap-x-8 h-min justify-center order-1 gap-y-8">
                  <div className="relative content-center items-center box-border caret-transparent gap-x-0 flex flex-col shrink-0 h-min justify-center gap-y-0 w-full">
                    <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start break-words w-full">
                      <p className="text-slate-900 text-[28px] box-border caret-transparent tracking-[-1.12px] leading-[33.6px] break-words uppercase font-geist md:text-[40px] md:tracking-[-1.6px] md:leading-[48px]">
                        {props.mainStat}
                      </p>
                    </div>
                    <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start break-words w-full">
                      <p className="text-slate-900 text-base font-medium box-border caret-transparent tracking-[-0.64px] leading-[19.2px] break-words text-left uppercase font-geist md:text-xl md:tracking-[-0.8px] md:leading-6">
                        {props.mainTitle}
                      </p>
                    </div>
                  </div>
                  <div className="relative content-center items-center box-border caret-transparent gap-x-2.5 flex flex-col shrink-0 h-min justify-center gap-y-2.5 w-full">
                    <div className="relative content-end items-end box-border caret-transparent flex shrink-0 h-min justify-between order-1 w-full overflow-hidden">
                      <div className="relative box-border caret-transparent flex basis-0 flex-col grow shrink-0 justify-start break-words w-px">
                        <p className="text-slate-600 text-sm box-border caret-transparent tracking-[-0.56px] leading-[18px] break-words text-left font-geist md:text-[15px] md:tracking-[-0.6px] md:leading-[21px]">
                          {props.description}
                        </p>
                      </div>
                    </div>
                    {props.showIcon && props.iconUrl && (
                      <div className="relative text-slate-900 box-border caret-transparent fill-slate-900 shrink-0 h-[3px] w-full">
                        <div className="box-border caret-transparent fill-slate-900 h-full w-full">
                          <div className="w-full h-full bg-[#eeda03]"></div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                {props.imageUrl && (
                  <div className="relative aspect-[0.65/1] shrink-0 max-w-[100px] w-[26%] ml-auto">
                    <Image
                      src={props.imageUrl}
                      alt=""
                      width={122}
                      height={134}
                      className="h-full object-contain w-full"
                    />
                  </div>
                )}
              </div>
            </div>
          <div className="w-full">
              <div className="relative box-border caret-transparent flex flex-col justify-center w-full content-start items-start bg-[#eeda03] gap-x-10 h-full gap-y-10 overflow-hidden p-8 rounded-2xl">
                <div className="relative box-border caret-transparent flex flex-col shrink-0 w-full content-center items-center gap-x-8 h-min justify-center order-1 gap-y-8">
                  <div className="relative content-center items-center box-border caret-transparent gap-x-0 flex flex-col shrink-0 h-min justify-center gap-y-0 w-full">
                    <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start break-words w-full">
                      <p className="text-slate-900 text-[28px] box-border caret-transparent tracking-[-1.12px] leading-[33.6px] break-words uppercase font-geist md:text-[40px] md:tracking-[-1.6px] md:leading-[48px]">
                        {props.secondaryStat}
                      </p>
                    </div>
                    <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start break-words w-full">
                      <p className="text-slate-900 text-base font-medium box-border caret-transparent tracking-[-0.64px] leading-[19.2px] break-words text-left uppercase font-geist md:text-xl md:tracking-[-0.8px] md:leading-6">
                        {props.secondaryTitle}
                      </p>
                    </div>
                  </div>
                  <div className="relative content-center items-center box-border caret-transparent gap-x-2.5 flex flex-col shrink-0 h-min justify-center gap-y-2.5 w-full">
                    <div className="relative content-end items-end box-border caret-transparent flex shrink-0 h-min justify-between order-1 w-full overflow-hidden">
                      <div className="relative box-border caret-transparent flex basis-0 flex-col grow shrink-0 justify-start break-words w-px">
                        <p className="text-slate-600 text-sm box-border caret-transparent tracking-[-0.56px] leading-[18px] break-words text-left font-geist md:text-[15px] md:tracking-[-0.6px] md:leading-[21px]">
                          {props.secondaryDescription}
                        </p>
                      </div>
                    </div>
                    {props.showIcon && props.iconUrl && (
                      <div className="relative text-slate-900 box-border caret-transparent fill-slate-900 shrink-0 h-[3px] w-full">
                        <div className="box-border caret-transparent fill-slate-900 h-full w-full">
                          <div className="w-full h-full bg-[#eeda03]"></div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                {props.secondaryImageUrl && (
                  <div className="relative aspect-[0.65/1] shrink-0 max-w-[100px] w-[26%] ml-auto">
                    <Image
                      src={props.secondaryImageUrl}
                      alt=""
                      width={303}
                      height={271}
                      className={props.secondaryImageClassName || "h-full object-contain w-full"}
                    />
                  </div>
                )}
              </div>
            </div>
        </div>
      </div>
    );
  }

  // Default layout (third column with multiple cards)
  return (
      <div
        className={`w-full transition-all duration-700 ease-out ${
          props.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
        style={{ transitionDelay: `${props.index * 150}ms` }}
      >
        <div className="w-full flex flex-col gap-5">
          <div className="w-full">
            <div className="relative content-start items-start bg-[#eeda03] box-border caret-transparent gap-x-14 flex flex-col h-min justify-center gap-y-14 w-full overflow-hidden p-8 rounded-2xl">
              <div className="relative content-center items-center box-border caret-transparent gap-x-14 flex flex-col shrink-0 h-min justify-center gap-y-14 w-full">
                <div className="relative content-center items-center box-border caret-transparent gap-x-2.5 flex flex-col shrink-0 h-min justify-center gap-y-2.5 w-full">
                  <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start break-words w-full">
                    <p className="text-slate-900 text-base font-medium box-border caret-transparent tracking-[-0.64px] leading-[19.2px] break-words text-left uppercase font-geist md:text-xl md:tracking-[-0.8px] md:leading-6">
                      {props.mainTitle}
                    </p>
                  </div>
                </div>
                <div className="relative content-center items-center box-border caret-transparent gap-x-2.5 flex flex-col shrink-0 h-min justify-center gap-y-2.5 w-full">
                  <div className="relative content-end items-end box-border caret-transparent flex shrink-0 h-min justify-between w-full overflow-hidden">
                    <div className="relative box-border caret-transparent flex basis-0 flex-col grow shrink-0 justify-start break-words w-px">
                      <p className="text-slate-900 text-[28px] box-border caret-transparent tracking-[-1.12px] leading-[33.6px] break-words uppercase font-geist md:text-[40px] md:tracking-[-1.6px] md:leading-[48px]">
                        {props.mainStat}
                      </p>
                    </div>
                    <div className="relative box-border caret-transparent flex basis-0 flex-col grow shrink-0 justify-start break-words w-px">
                      <p className="text-slate-600 text-sm box-border caret-transparent tracking-[-0.56px] leading-[18px] break-words text-left font-geist md:text-[15px] md:tracking-[-0.6px] md:leading-[21px]">
                        {props.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full bg-zinc-100 flex flex-col md:flex-row md:h-[400px] justify-between gap-5 p-5 md:p-8 rounded-2xl">
            <div className="flex flex-col gap-5 md:gap-6 flex-1">
              <div className="flex flex-col gap-2">
                <p className="text-slate-900 text-base font-medium tracking-[-0.64px] leading-[19.2px] break-words uppercase font-geist md:text-xl md:tracking-[-0.8px] md:leading-6">
                  {props.secondaryTitle}
                </p>
                <p className="text-slate-600 text-sm tracking-[-0.56px] leading-[18px] break-words text-left font-geist md:text-[15px] md:tracking-[-0.6px] md:leading-[21px]">
                  {props.secondaryDescription}
                </p>
              </div>
              {props.secondaryImageUrl && (
                <div className="relative w-full h-[200px] md:h-auto md:flex-1 rounded-2xl overflow-hidden">
                  <Image
                    src={props.secondaryImageUrl}
                    alt=""
                    fill
                    className={props.secondaryImageClassName || "object-cover rounded-2xl"}
                  />
                </div>
              )}
            </div>
          </div>
          <div className="w-full">
            <div className="relative content-start items-start bg-[#eeda03] box-border caret-transparent gap-x-14 flex flex-col h-min justify-center gap-y-14 w-full overflow-hidden p-8 rounded-2xl">
              <div className="relative content-center items-center box-border caret-transparent gap-x-14 flex flex-col shrink-0 h-min justify-center gap-y-14 w-full">
                <div className="relative content-center items-center box-border caret-transparent gap-x-2.5 flex flex-col shrink-0 h-min justify-center gap-y-2.5 w-full">
                  <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start break-words w-full">
                    <p className="text-slate-900 text-base font-medium box-border caret-transparent tracking-[-0.64px] leading-[19.2px] break-words text-left uppercase font-geist md:text-xl md:tracking-[-0.8px] md:leading-6">
                      {props.tertiaryTitle}
                    </p>
                  </div>
                </div>
                <div className="relative content-center items-center box-border caret-transparent gap-x-2.5 flex flex-col shrink-0 h-min justify-center gap-y-2.5 w-full">
                  <div className="relative content-end items-end box-border caret-transparent flex shrink-0 h-min justify-between w-full overflow-hidden">
                    <div className="relative box-border caret-transparent flex basis-0 flex-col grow shrink-0 justify-start break-words w-px">
                      <p className="text-slate-900 text-[28px] box-border caret-transparent tracking-[-1.12px] leading-[33.6px] break-words uppercase font-geist md:text-[40px] md:tracking-[-1.6px] md:leading-[48px]">
                        {props.secondaryStat}
                      </p>
                    </div>
                    <div className="relative box-border caret-transparent flex basis-0 flex-col grow shrink-0 justify-start break-words w-px">
                      <p className="text-slate-600 text-sm box-border caret-transparent tracking-[-0.56px] leading-[18px] break-words text-left whitespace-pre-line font-geist md:text-[15px] md:tracking-[-0.6px] md:leading-[21px]">
                        {props.tertiaryDescription}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

    const SectionHeader = ({ variant, tagText, title, description, showLink }) => (
  <div className="space-y-2">
    <span className="inline-block px-4 py-1.5 text-[#eeda03] rounded-full text-sm font-bold">
      {tagText}
    </span>
    <h2 className="text-4xl md:text-5xl lg:text-7xl font-medium text-white tracking-tight">
      {title}
    </h2>
    <p className="text-lg md:text-xl text-white/70 max-w-2xl">
      {description}
    </p>
  </div>
);


export default function WhyChooseUs() {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = cardRefs.current.findIndex((ref) => ref === entry.target);
          if (index !== -1) {
            setVisibleCards((prev) => {
              if (!prev.includes(index)) {
                return [...prev, index];
              }
              return prev;
            });
          }
        }
      });
    }, observerOptions);



    // Use setTimeout to ensure refs are set after render
    const timeoutId = setTimeout(() => {
      cardRefs.current.forEach((ref) => {
        if (ref) observer.observe(ref);
      });
    }, 0);

    return () => {
      clearTimeout(timeoutId);
      cardRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
      observer.disconnect();
    };
  }, []);

  // Set refs for each card
  const setCardRef = (index: number) => (el: HTMLDivElement | null) => {
    cardRefs.current[index] = el;
  };


  return (
    <section
      ref={sectionRef}
      className="relative bg-[#0a0e27] w-full overflow-x-hidden px-5 py-[60px] md:px-10 md:py-[120px]"
    >
      <div className="px-6 pt-20 pb-12 md:px-12 md:pt-32 md:pb-16 max-w-[1400px] mx-auto">
        <SectionHeader
          variant=""
          tagText="Why it works"

          title="Our clients stay for a reason"

          description="A clean space isn't the end - it's the beginning of something better." showLink={undefined}          
        />

        {/* Stats Grid */}
        <div className="relative w-full gap-5 md:gap-6 flex flex-col md:flex-row mt-10 md:mt-20">
          {/* Card 1 - variant1 */}
          <div ref={setCardRef(0)} className="w-full md:flex-1 md:min-w-0">
            <StatCard
              layout="variant1"
              mainTitle="Loved by locals"
              mainStat="90%"
              description="of our bookings are from repeat clients."
              imageUrl="/cleaning-office.jpg"
              secondaryStat="10+"
              secondaryTitle="years of experience"
              secondaryDescription="We don't just clean, we obsess over detail."
              showIcon={true}
              index={0}
              visible={visibleCards.includes(0)}
            />
          </div>

          {/* Card 2 - variant2 */}
          <div ref={setCardRef(1)} className="w-full md:flex-1 md:min-w-0">
            <StatCard
              layout="variant2"
              mainStat="6+"
              mainTitle="hours saved"
              description="Clients save 6+ hours weekly by handing us their mess."
              showIcon={true}
              imageUrl="/Yoy2z4yJJAhYA6g5BKbgeZglNY.avif"
              secondaryStat="Trained"
              secondaryTitle="experts only"
              secondaryDescription="No temps. No shortcuts. Just pros trained to impress."
              secondaryImageUrl="/iFbdPcSL6PkB4N6f5doKK2ee8.avif"
              secondaryImageClassName="aspect-[auto_303_/_271] box-border caret-transparent h-full object-contain w-full"
              index={1}
              visible={visibleCards.includes(1)}
            />
          </div>

          {/* Card 3 - default */}
          <div ref={setCardRef(2)} className="w-full md:flex-1 md:min-w-0">
            <StatCard
              layout=""
              mainTitle="verified reviews"
              mainStat="512"
              description="reviews from busy home & businesses."
              secondaryTitle="Refer & Get credit"
              secondaryDescription="Share us, to earn discounts."
              secondaryImageUrl="/men-cleaning.jpg"
              secondaryImageClassName="aspect-[auto_2000_/_1333] box-border caret-transparent h-full object-cover w-full rounded-2xl"
              tertiaryTitle="instant booking"
              secondaryStat="sec"
              tertiaryDescription="Real-time slots, live updates, zero hassle."
              index={2}
              visible={visibleCards.includes(2)}
            />
          </div>
        </div>

        
      </div>
    </section>
  );
}
