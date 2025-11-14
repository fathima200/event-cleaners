"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function OurExperience() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const events = [
    { name: "Caribana", logo: "/Caribana.png" },
    { name: "Pride Toronto", logo: "/pride.jpeg" },
    { name: "TIFF", logo: "/tiff.png" },
    { name: "Taste of Toronto", logo: "/taste.jpeg" },
    { name: "Toronto Jazz Festival", logo: "/jazfest.jpeg" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative bg-white w-full overflow-hidden py-20 md:py-32"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Section - Two Column Layout */}
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-16 md:mb-24 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          
          {/* Left Column: Title & Description */}
          <div className="flex flex-col justify-center">
            <div className="relative bg-[#eeda03] h-[3px] w-[43px] mb-1"></div>
            <p className="text-slate-500 text-sm md:text-base tracking-widest uppercase font-medium mb-4">
              Our Experience
            </p>
            <h2 className="text-[#0a0e27] text-4xl md:text-5xl lg:text-6xl font-Medium font-geist tracking-tight leading-tight mb-6">
              The Events That Trust Us
            </h2>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-xl mb-8">
              We've proudly served iconic festivals like Caribana and Pride Parade for over a decade. Our efficient, insured team uses top-tier tools to deliver spotless results, every time.
            </p>
            
            {/* CTA */}
            <a
              href="/services"
              className="inline-flex items-center gap-3 bg-[#fff046] text-[#0a0e27] px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-sm md:text-base hover:bg-[#d4c403] transition-all duration-300 w-fit"
            >
              See All Our Services
              <svg
                className="w-4 h-4 md:w-5 md:h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Right Column: Image */}
          <div className="relative h-[400px] md:h-[500px] lg:h-full min-h-[450px] overflow-hidden rounded-3xl group">
            <Image
              src="/a-guy.avif"
              alt="A professional cleaner smiling"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            
            {/* Glass Border Effect */}
            <div className="absolute inset-4 border-1 border-yellow-400/70 rounded-2xl pointer-events-none transition-all duration-500 group-hover:border-yellow-400/90 group-hover:inset-3">
              {/* Top Label */}
              <div className="absolute -top-3 left-6 bg-yellow-300 text-slate-900 text-xs font-bold px-3 py-1 rounded-full tracking-wider">
                Professional Team
              </div>
            </div>
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        </div>

        {/* Logo Section with Infinite Scroll */}
        <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className=" rounded-3xl p-8 md:p-12 border border-slate-200 overflow-hidden">
            <h3 className="text-center text-xs md:text-sm font-bold text-slate-500 uppercase tracking-widest mb-10 md:mb-12">
              Trusted by Toronto's biggest names
            </h3>
            
            {/* Infinite Horizontal Scroll */}
            <div className="relative">
              {/* Gradient Overlays */}
              {/* <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none"></div>
              <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none"></div> */}
              
              <div className="flex overflow-hidden">
                <div className="flex animate-scroll">
                  {/* First set of logos */}
                  {events.map((event, index) => (
                    <div 
                      key={`first-${index}`}
                      className="flex-shrink-0 w-40 md:w-48 h-20 md:h-24 flex items-center justify-center mx-6 md:mx-8"
                    >
                      <div className="relative w-full h-full">
                        <Image
                          src={event.logo}
                          alt={event.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                  ))}
                  {/* Duplicate set for seamless loop */}
                  {events.map((event, index) => (
                    <div 
                      key={`second-${index}`}
                      className="flex-shrink-0 w-40 md:w-48 h-20 md:h-24 flex items-center justify-center mx-6 md:mx-8"
                    >
                      <div className="relative w-full h-full">
                        <Image
                          src={event.logo}
                          alt={event.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          
          .animate-scroll {
            animation: scroll 20s linear infinite;
          }
          
          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `}</style>
      </div>
    </section>
  );
}