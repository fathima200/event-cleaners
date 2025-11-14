"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function HowItWorksSection() {
  const [visibleSteps, setVisibleSteps] = useState([]);
  const stepsRefs = useRef([]);

  const steps = [
    {
      number: "01",
      title: "Share your details",
      description: "Let us know about your event or parking area, schedule, and special requests using our quick form.",
      image: "/men-cleaning.jpg",
    },
    {
      number: "02",
      title: "Receive a clear quote",
      description: "We'll send a personalized estimate—no hidden fees and no hard sell.",
      image: "/girl-cleaning.webp",
    },
    {
      number: "03",
      title: "We clean—thoroughly",
      description: "Our crew arrives equipped and ready, tackling every challenge from crowded venues to high-traffic parking lots.",
      image: "/scrubing.png",
    },
    {
      number: "04",
      title: "You enjoy the results",
      description: "Relax and focus on your business. Your event space or car park will look, feel, and smell professionally clean.",
      image: "/spraying-table.jpg",
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
          const index = stepsRefs.current.indexOf(entry.target);
          if (index !== -1 && !visibleSteps.includes(index)) {
            setVisibleSteps((prev) => [...prev, index]);
          }
        }
      });
    }, observerOptions);

    stepsRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [visibleSteps]);

  return (
    <section className="relative bg-gray-200 w-full overflow-hidden">
      
      {/* Header Section */}
      <div className="px-6 pt-20 pb-12 md:px-12 md:pt-32 md:pb-16 max-w-[1400px] mx-auto">
        <div className="relative bg-[#eeda03] h-[3px] w-[43px] mb-1"></div>
        <p className="text-slate-500 text-sm md:text-base tracking-widest uppercase font-medium mb-0">
          How It Works
        </p>
        <h2 className="text-[#0a0e27] text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-tight mb-6">
          Get cleaner, stress-free spaces in four simple steps
        </h2>
        <p className="text-slate-600 text-lg md:text-xl leading-relaxed">
          From busy events to spotless car parks—often as fast as 24 hours.
        </p>
      </div>

      {/* Bento Grid Layout */}
      <div className="relative px-6 pb-20 md:px-12 md:pb-32 max-w-[1400px] mx-auto">
        <div className="relative grid gap-4 md:gap-6 w-full grid-cols-1 md:grid-cols-4 md:grid-rows-3 auto-rows-fr">
          {steps.map((step, index) => {
            const patterns = [
              'md:col-span-2 md:row-span-2',
              'md:col-span-2 md:row-span-1',
              'md:col-span-2 md:row-span-2',
              'md:col-span-2 md:row-span-1',
            ];
            
            const pattern = patterns[index % patterns.length];
            const mobileImagePosition = index % 2 === 0 ? 'order-1' : 'order-2';
            const mobileContentPosition = index % 2 === 0 ? 'order-2' : 'order-1';
            
            return (
              <div 
                key={index}
                ref={(el) => (stepsRefs.current[index] = el)}
                className={`relative group overflow-visible md:overflow-hidden bg-transparent md:bg-white rounded-2xl transition-all duration-500 md:hover:shadow-xl md:hover:-translate-y-1 ${pattern} ${
                  visibleSteps.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col gap-4 md:gap-0 md:flex-row h-full md:bg-white">
                  {/* Image Container */}
                  <div className={`relative overflow-hidden rounded-2xl bg-white ${mobileImagePosition} ${
                    index % 2 === 0 
                      ? 'md:w-1/2 h-72 md:h-full md:rounded-l-2xl md:rounded-r-none' 
                      : 'md:w-2/5 h-72 md:h-full md:rounded-l-2xl md:rounded-r-none'
                  }`}>
                    <Image 
                      src={step.image} 
                      alt={step.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    
                    {/* Glass Border Effect with Text Label */}
                    <div className="absolute inset-3 border-2 border-yellow-400/70 rounded-xl pointer-events-none transition-all duration-500 group-hover:border-yellow-400/90 group-hover:inset-2">
                      
                      {/* Top Label - Service Number */}
                      <div className="absolute -top-3 left-6 bg-yellow-400 text-slate-900 text-xs font-bold px-3 py-1 rounded-full tracking-wider">
                        #{step.number}
                      </div>
                      
                      {/* Bottom Right Label - "Premium Service" */}
                      <div className="absolute -bottom-3 right-6 bg-gradient-to-r from-yellow-400 to-yellow-500 text-slate-900 text-xs font-semibold px-4 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Premium Service
                      </div>
                    </div>
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 md:bg-gradient-to-r" />
                  </div>
                  
                  {/* Content Container */}
                  <div className={`flex flex-col justify-center p-6 rounded-2xl md:rounded-none bg-white ${mobileContentPosition} ${
                    index % 2 === 0 
                      ? 'md:w-1/2 md:p-8' 
                      : 'md:w-3/5 md:p-8'
                  }`}>
                    <p className="text-slate-900 text-xl md:text-2xl font-medium tracking-tight leading-tight mb-4 uppercase font-geist transform transition-transform duration-300 group-hover:translate-x-1">
                      {step.title}
                    </p>
                    <p className="text-gray-500 text-base md:text-[15px] tracking-tight leading-relaxed font-geist transition-colors duration-300 group-hover:text-gray-700">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative px-6 pb-20 md:px-12 md:pb-32 max-w-[1400px] mx-auto border-t border-slate-200 pt-5 md:pt-5">
        <div className="max-w-4xl">
          <h3 className="text-[#0a0e27] text-2xl md:text-4xl lg:text-5xl font-medium leading-tight mb-4">
            Ready to get started?
          </h3>

          <a
            href="/contact"
            className="inline-flex items-center gap-3 bg-[#0a0e27] text-[#eeda03] border-2 border-[#0a0e27] px-8 py-4 rounded-full font-bold text-base md:text-lg hover:bg-transparent hover:text-[#0a0e27] transition-all duration-300"
          >
            Contact Us
            <svg
              className="w-5 h-5"
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
          </a>
        </div>
      </div>

    </section>
  );
}