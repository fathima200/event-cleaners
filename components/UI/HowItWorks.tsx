"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function HowItWorksSection() {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const stepsRef = useRef<HTMLDivElement>(null);

  const steps = [
    {
      number: "01",
      title: "Share details",
      description: "Fill out a quick form with details about your space, schedule, and preferences.",
      image: "/men-cleaning.jpg",
    },
    {
      number: "02",
      title: "Get quote",
      description: "We'll send you a personalized estimate, no hidden fees, no upselling.",
      image: "/cleaning-office.jpg",
    },
    {
      number: "03",
      title: "We clean",
      description: "Our team arrives on time, equipped, and ready to clean thoroughly.",
      image: "/men-cleaning.jpg",
    },
    {
      number: "04",
      title: "You relax",
      description: "Enjoy a spotless home or workspace that looks, feels, and smells truly clean.",
      image: "/cleaning-office.jpg",
    },
  ];

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          steps.forEach((_, index) => {
            setTimeout(() => {
              setVisibleSteps((prev) => [...new Set([...prev, index])]);
            }, index * 150);
          });
        }
      });
    }, observerOptions);

    if (stepsRef.current) observer.observe(stepsRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative bg-white w-full overflow-hidden px-5 py-20 md:px-12 md:py-32 lg:py-20">
      <div className="max-w-[1600px] mx-auto">
        
        {/* Header Section - Centered */}
        <div className="text-center mb-20 md:mb-10">
          <div className="inline-flex flex-col items-center space-y-4 mb-8">
            <div className="bg-yellow-400 h-[3px] w-[40px]"></div>
            <p className="text-gray-500 text-base md:text-lg tracking-tight uppercase font-geist font-medium">
              How it works
            </p>
          </div>
          <h2 className="text-slate-900 text-5xl md:text-7xl lg:text-6xl font-medium tracking-tight leading-[1.1] font-geist mb-2 max-w-5xl mx-auto">
            Get cleaner space in four steps
          </h2>
          <p className="text-slate-600 text-lg md:text-xl lg:text-2xl tracking-tight font-geist max-w-2xl mx-auto">
            And sometimes, in as little as 24 hours.
          </p>
        </div>
{/* Bento Grid Layout - Uneven but contained */}
<div ref={stepsRef} className="grid grid-cols-4 md:grid-cols-8 gap-5 md:gap-6 mb-16 md:mb-24">
  
  {/* Step 01 - Tall Left */}
<div
  className={`
    col-span-4 md:col-span-3 md:row-span-2
    transition-all duration-700 ease-out
    ${
      visibleSteps.includes(0)
        ? "opacity-100 translate-y-0"
        : "opacity-0 translate-y-12"
    }
  `}
>
  <div className="relative h-full min-h-[380px] md:min-h-full bg-white border border-yellow-400 rounded-2xl md:rounded-3xl overflow-hidden group">
    <Image
      src={steps[0].image}
      alt={steps[0].title}
      fill
      className="object-cover transition-transform duration-700 group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>
    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
      <p className="text-yellow-400 text-3xl md:text-4xl font-bold mb-3 font-geist">
        {steps[0].number}
      </p>
      <p className="text-white text-xl md:text-2xl font-bold tracking-tight uppercase mb-3 font-geist">
        {steps[0].title}
      </p>
      <p className="text-white/90 text-base md:text-lg leading-relaxed font-geist">
        {steps[0].description}
      </p>
    </div>
  </div>
</div>


  {/* Step 02 - Short Top Right */}
  <div
    className={`
      col-span-4 md:col-span-5
      transition-all duration-700 ease-out
      ${
        visibleSteps.includes(1)
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-12"
      }
    `}
  >
    <div className="relative h-full min-h-[280px] md:min-h-[320px]  bg-white border border-yellow-400 rounded-2xl md:rounded-3xl overflow-hidden group">
      <Image
        src={steps[1].image}
        alt={steps[1].title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
        <p className="text-yellow-400 text-3xl md:text-4xl font-bold mb-3 font-geist">
          {steps[1].number}
        </p>
        <p className="text-white text-xl md:text-2xl font-bold tracking-tight uppercase mb-3 font-geist">
          {steps[1].title}
        </p>
        <p className="text-white/90 text-base md:text-lg leading-relaxed font-geist">
          {steps[1].description}
        </p>
      </div>
    </div>
  </div>

  {/* Step 03 - Short Bottom Right */}
  <div
    className={`
      col-span-4 md:col-span-2
      transition-all duration-700 ease-out
      ${
        visibleSteps.includes(2)
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-12"
      }
    `}
  >
    <div className="relative h-full min-h-[280px] md:min-h-[320px]  bg-white border border-yellow-400 rounded-2xl md:rounded-3xl overflow-hidden group">
      <Image
        src={steps[2].image}
        alt={steps[2].title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
        <p className="text-yellow-400 text-3xl md:text-4xl font-bold mb-3 font-geist">
          {steps[2].number}
        </p>
        <p className="text-white text-xl md:text-2xl font-bold tracking-tight uppercase mb-3 font-geist">
          {steps[2].title}
        </p>
        <p className="text-white/90 text-base md:text-lg leading-relaxed font-geist">
          {steps[2].description}
        </p>
      </div>
    </div>
  </div>

  {/* Step 04 - Medium Bottom Right */}
  <div
    className={`
      col-span-4 md:col-span-3
      transition-all duration-700 ease-out
      ${
        visibleSteps.includes(3)
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-12"
      }
    `}
  >
    <div className="relative h-full min-h-[280px] md:min-h-[320px]  bg-white border border-yellow-400 rounded-2xl md:rounded-3xl overflow-hidden group">
      <Image
        src={steps[3].image}
        alt={steps[3].title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
        <p className="text-yellow-400 text-3xl md:text-4xl font-bold mb-3 font-geist">
          {steps[3].number}
        </p>
        <p className="text-white text-xl md:text-2xl font-bold tracking-tight uppercase mb-3 font-geist">
          {steps[3].title}
        </p>
        <p className="text-white/90 text-base md:text-lg leading-relaxed font-geist">
          {steps[3].description}
        </p>
      </div>
    </div>
  </div>

</div>
        {/* CTA Section - Centered Below */}
        <div className="text-center mt-20 md:mt-5">
          <div className="inline-flex flex-col items-center space-y-6">
            <div className="space-y-3">
              <p className="text-slate-900 text-xl md:text-2xl lg:text-3xl font-bold tracking-tight uppercase font-geist">
                Ready to Get Started?
              </p>
              <p className="text-slate-600 text-base md:text-lg lg:text-xl tracking-tight leading-relaxed font-geist max-w-md">
                Simple pricing, no hidden fees - see what works for your space.
              </p>
            </div>
            
            {/* CTA Button */}
            <a
              href="https://neative.framer.website/pricing"
              className="inline-flex items-center justify-center gap-5 bg-yellow-400 shadow-[rgba(246,227,4,0.32)_0px_8px_25px_0px] h-16 md:h-15 px-8 md:px-12 rounded-full hover:shadow-[rgba(246,227,4,0.5)_0px_12px_35px_0px] transition-all duration-300 group"
            >
              <span className="text-slate-900 text-base md:text-lg font-bold tracking-tight whitespace-nowrap font-geist">
                View our pricing
              </span>
              <div className="flex items-center justify-center w-[50px] h-[50px] md:w-[40px] md:h-[40px] bg-slate-900 rounded-full group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-6 h-6 text-yellow-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}