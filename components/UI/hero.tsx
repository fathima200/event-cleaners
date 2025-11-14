// components/UI/hero.tsx

"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative flex items-center justify-center bg-[#000312] min-h-screen w-full overflow-hidden px-4 sm:px-6 lg:px-8 py-24 md:py-32">
      {/* Background Image with Mask */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute w-full h-full opacity-40"
          style={{
            maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.8) 70%, rgba(0,0,0,1) 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.8) 70%, rgba(0,0,0,1) 100%)'
          }}
        >
          <Image
            src="/cleaning-office.jpg"
            alt=""
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Content */}
          <div className="flex flex-col gap-6 lg:gap-8">
            
            {/* Trust Badge */}
            <div 
              className={`flex items-center gap-3 transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <p className="text-white/90 text-[15px] font-medium font-geist">
                Trusted by 200+ businesses
              </p>
              
              <svg className="w-5 h-5 text-white/60" viewBox="0 0 24 24" fill="none">
                <path d="M13 7l5 5m0 0l-5 5m5-5H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              
              {/* Avatar Images */}
              <div className="flex -space-x-3">
                {[
                  "https://framerusercontent.com/images/2d6UchpU1MbzUJ2Yeq8GV9oVUE.jpeg",
                  "https://framerusercontent.com/images/QVXc7XNFjUQMh5mvlsEvlpbufA.jpg",
                  "https://framerusercontent.com/images/V4ZSTNUfR6HbnZJ7laCuTCDzXe0.jpg",
                  "https://framerusercontent.com/images/NZf7rUTgsiGPwfln9OdG3ArXMWI.jpg",
                ].map((src, i) => (
                  <div 
                    key={i} 
                    className="relative w-9 h-9 rounded-full border-2 border-[#0a0e27] overflow-hidden"
                  >
                    <Image
                      src={src}
                      alt=""
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Hero Heading - Cleaner, Bigger */}
            <div 
              className={`transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '150ms' }}
            >
              <h1 className="text-white text-5xl sm:text-4xl lg:text-[90px] xl:text-[80px] font-medium tracking-[-0.03em] leading-[1.05] mb-6 font-geist">
                We Clean Up Toronto's Biggest Events
              </h1>
              <h2 className="text-[#eeda03] text-2xl sm:text-7xl lg:text-[90px] xl:text-[40px] font-extralight tracking-[-0.03em] leading-[1.05] opacity-90 font-geist">
                So You Don't Have To
              </h2>
            </div>

            {/* Description - More Breathing Room */}
            <div 
              className={`transition-all duration-700 ease-out mt-6 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '300ms' }}
            >
              <p className="text-white/80 text-lg lg:text-xl leading-tight max-w-[600px] font-geist">
                Caribana. Pride. Your next festival. For 10+ years, we've been the team that makes sure everything's spotless before the sun comes up.
              </p>
            </div>

            {/* CTAs - Cleaner Spacing */}

          </div>

          {/* Promo Card (Right Side) - Simplified */}
          <div 
            className={`transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
            style={{ transitionDelay: '450ms' }}
          >
            <div className="relative bg-zinc-900 backdrop-blur-sm border border-[#eeda03] rounded-3xl p-8 lg:p-12 overflow-hidden min-h-[400px] md:min-h-[500px] flex flex-col justify-end">
              
              {/* Promo Background Image */}
              <div className="absolute inset-0 z-0 opacity-30">
                <Image
                  src="/men-cleaning.jpg"
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>

              {/* Gradient Overlay for Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e27] via-[#0a0e27]/50 to-transparent z-[1]" />

              {/* Content */}
              <div className="relative z-10 flex flex-col gap-6">
                
                {/* Promo Text */}
                <div className="space-y-2">
                  <p className="text-white text-base font-geist">* We are here for first time user</p>
                  <p className="text-white text-base font-geist">* And also for repeating clients</p>
                </div>

                {/* CTA Button - Match Inspiration Style */}
                <a
                  href="/contact"
                  className="inline-flex items-center justify-between bg-[#eeda03] hover:bg-[#d4c403] text-[#0a0e27] rounded-full px-8 py-4 transition-colors group max-w-[280px] font-geist"
                >
                  <span className="font-bold text-base">Get a free quote</span>
                  
                  <div className="flex items-center justify-center w-10 h-10 bg-[#0a0e27] rounded-full ml-4 group-hover:scale-105 transition-transform">
                    <svg
                      className="w-5 h-5 text-[#eeda03]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}