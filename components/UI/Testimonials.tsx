'use client';

import React, { useState } from 'react';
import Image from 'next/image';

// Testimonials data
const testimonials = [
  {
    id: 1,
    name: "Sarah M.",
    location: "Scarborough",
    rating: "4.9",
    image: "/woman.jpg",
    review: "The team was quick, professional, and left our event venue spotless. From pre-event setup to post-event clean-up, every detail was handled with care. We didn't have to worry about a thing—our guests and staff all noticed the difference. Truly the best cleaning service we've used.",
    shortReview: "The team was quick, professional, and left our event venue spotless."
  },
  {
    id: 2,
    name: "James T.",
    location: "Mississauga, ON",
    rating: "5.0",
    image: "/senior-man.jpg",
    review: "Our parking lot looked brand new after their visit. They swept, pressure washed, and removed stains we thought were permanent! Scheduling was easy and they worked around our busiest hours. I wouldn't trust anyone else with our property.",
    shortReview: "Our parking lot looked brand new after their visit."
  },
  {
    id: 3,
    name: "Samson R.",
    location: "North York, ON",
    rating: "4.8",
    image: "/well-done.jpg",
    review: "They showed up right on time, brought all their own supplies, and cleaned places I didn't even think of. As a manager with endless tasks, knowing cleaning is handled is a huge relief. What impressed me most was their attention to detail and friendliness. Highly recommended for busy professionals.",
    shortReview: "They showed up right on time with all their supplies."
  },
  {
    id: 4,
    name: "Jennifa K.",
    location: "Vaughan, ON",
    rating: "4.9",
    image: "/medium-shot.jpg",
    review: "Reliable, detail-oriented, and friendly. Our festival clean-up was seamless from start to finish. Every surface looked spotless, even after hundreds of visitors. Their team even checked in after the event to make sure we were happy—customer service you just don't see these days.",
    shortReview: "Reliable, detail-oriented, and friendly service."
  },
  {
    id: 5,
    name: "Esther L.",
    location: "Scarborough, ON",
    rating: "5.0",
    image: "/businesswoman.jpg",
    review: "The team was quick, professional, and left our event venue spotless. From pre-event setup to post-event clean-up, every detail was handled with care. We didn't have to worry about a thing—our guests and staff all noticed the difference. Truly the best cleaning service we've used.",
    shortReview: "Quick, professional, and thorough service."
  }
];

// TestimonialCard Component - Performance optimized but styling retained
export const TestimonialCard = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTestimonial = testimonials[activeIndex];

  return (
    <div className="relative box-border caret-transparent shrink-0 max-w-[1120px] w-full">
      <div className="relative content-center items-center bg-white box-border caret-transparent gap-x-0 flex flex-col md:flex-row h-min justify-center max-w-full gap-y-0 w-full overflow-hidden rounded-[32px]">
        {/* Left side - Image section - OPTIMIZED: Only render active image */}
        <div className="relative content-center items-center self-stretch box-border caret-transparent gap-x-0 flex basis-0 grow shrink-0 justify-center opacity-[0.931661] gap-y-0 translate-y-[2.73355px] w-full md:w-px overflow-hidden py-[50px] min-h-[300px] md:min-h-0">
          {/* PERFORMANCE FIX: Only render the active image instead of all 5 */}
          <div className="absolute inset-0">
            <Image
              src={activeTestimonial.image}
              alt={`Testimonial from ${activeTestimonial.name}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority={activeIndex === 0}
            />
          </div>
          
          <div className="relative content-end items-end box-border caret-transparent flex shrink-0 h-full justify-between w-[85%] md:w-[70%] overflow-hidden pl-5 pb-5 rounded-2xl after:accent-auto after:box-border after:caret-transparent after:text-black after:block after:text-xs after:not-italic after:normal-nums after:font-normal after:h-full after:tracking-[normal] after:leading-[normal] after:list-outside after:list-disc after:pointer-events-none after:absolute after:text-start after:indent-[0px] after:normal-case after:visible after:w-full after:border after:border-yellow-400 after:rounded-2xl after:border-separate after:border-solid after:left-0 after:top-0 after:font-sans_serif">
            <div className="absolute aspect-[3.89412/1] bg-slate-900/60 box-border caret-transparent blur-[10px] shrink-0 mix-blend-hard-light opacity-[0.56] w-full z-0 right-0 bottom-0.5"></div>
            <div className="relative content-start items-start box-border caret-transparent gap-x-0 flex flex-col shrink-0 h-min justify-start gap-y-0 w-min">
              <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start text-nowrap">
                <p className="text-yellow-400 text-base box-border caret-transparent tracking-[-0.64px] leading-[21px] text-nowrap font-geist md:text-lg md:tracking-[-0.72px] md:leading-6">
                  {activeTestimonial.name}
                </p>
              </div>
              <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-center break-words w-[106px]">
                <p className="text-white text-sm box-border caret-transparent tracking-[-0.56px] leading-[18px] break-words font-geist md:text-[15px] md:tracking-[-0.6px] md:leading-[21px]">
                  {activeTestimonial.location}
                </p>
              </div>
            </div>
            <div className="relative content-start items-start bg-yellow-400 box-border caret-transparent gap-x-0.5 flex shrink-0 h-min justify-start gap-y-0.5 w-min overflow-hidden p-2 rounded-l-lg">
              <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start text-nowrap">
                <p className="text-slate-900 text-[15px] box-border caret-transparent tracking-[-0.6px] leading-[18px] text-left text-nowrap font-geist md:text-base md:tracking-[-0.64px] md:leading-[22px]">
                  {activeTestimonial.rating}
                </p>
              </div>
              <div className="relative aspect-square box-border caret-transparent shrink-0 w-2.5">
                <div className="box-border caret-transparent contents">
                  <svg className="w-full h-full text-slate-900" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Content section */}
        <div className="relative content-start items-start box-border caret-transparent gap-x-6 md:gap-x-20 flex basis-0 flex-col grow shrink-0 h-min justify-center opacity-[0.818406] gap-y-6 md:gap-y-20 md:translate-y-[7.26375px] w-full md:w-px p-6 md:p-10">
          <div className="relative content-start items-start box-border caret-transparent gap-x-6 md:gap-x-8 flex flex-col shrink-0 h-min justify-center gap-y-6 md:gap-y-8 w-full">
            <div className="relative content-start items-start box-border caret-transparent gap-x-0.5 flex flex-col shrink-0 h-min justify-center gap-y-0.5 w-full">
              <div className="relative box-border caret-transparent shrink-0 h-3 w-[60px]">
                <div className="box-border caret-transparent h-full w-full">
                  <svg className="w-full h-full" viewBox="0 0 60 12" fill="none">
                    <path d="M6 0L7.2 4.2H12L8.4 6.6L9.6 10.8L6 8.4L2.4 10.8L3.6 6.6L0 4.2H4.8L6 0Z" fill="#FCD34D"/>
                    <path d="M18 0L19.2 4.2H24L20.4 6.6L21.6 10.8L18 8.4L14.4 10.8L15.6 6.6L12 4.2H16.8L18 0Z" fill="#FCD34D"/>
                    <path d="M30 0L31.2 4.2H36L32.4 6.6L33.6 10.8L30 8.4L26.4 10.8L27.6 6.6L24 4.2H28.8L30 0Z" fill="#FCD34D"/>
                    <path d="M42 0L43.2 4.2H48L44.4 6.6L45.6 10.8L42 8.4L38.4 10.8L39.6 6.6L36 4.2H40.8L42 0Z" fill="#FCD34D"/>
                    <path d="M54 0L55.2 4.2H60L56.4 6.6L57.6 10.8L54 8.4L50.4 10.8L51.6 6.6L48 4.2H52.8L54 0Z" fill="#FCD34D"/>
                  </svg>
                </div>
              </div>
              <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start break-words w-full">
                <p className="text-gray-500 text-sm box-border caret-transparent tracking-[-0.56px] leading-[16.8px] break-words uppercase font-geist md:text-base md:tracking-[-0.64px] md:leading-[19.2px]">
                  Rated 4.9/5 by 1,200+ Happy Clients
                </p>
              </div>
            </div>
            <div className="relative content-start items-start box-border caret-transparent gap-x-4 md:gap-x-6 flex flex-col shrink-0 h-min justify-center gap-y-4 md:gap-y-6 w-full">
              <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start max-w-[520px] break-words w-full">
                <p className="text-slate-900 text-lg md:text-xl font-medium box-border caret-transparent tracking-[-0.72px] md:tracking-[-0.8px] leading-[24px] md:leading-6 break-words font-geist md:text-[32px] md:tracking-[-1.28px] md:leading-[38px]">
                  {activeTestimonial.shortReview}
                </p>
              </div>
              <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start max-w-[520px] break-words w-full">
                <p className="text-gray-500 text-sm md:text-[15px] box-border caret-transparent tracking-[-0.56px] md:tracking-[-0.6px] leading-[18px] md:leading-[18px] break-words text-left font-geist md:text-xl md:tracking-[-0.8px] md:leading-[26px]">
                  {activeTestimonial.review}
                </p>
              </div>
            </div>
          </div>
          
          {/* Avatar images */}
          <div className="relative content-center items-center box-border caret-transparent gap-x-1 flex shrink-0 h-min justify-start gap-y-1 w-full">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className={`relative aspect-square box-border caret-transparent shrink-0 cursor-pointer transition-all duration-300 ${
                  index === activeIndex ? 'w-12 md:w-14' : 'w-10 md:w-12'
                }`}
                onClick={() => setActiveIndex(index)}
              >
                <div className={`relative aspect-square box-border caret-transparent gap-x-0 h-full gap-y-0 w-full overflow-hidden rounded-[100px] transition-all duration-300 ${
                  index === activeIndex 
                    ? 'after:accent-auto after:box-border after:caret-transparent after:text-black after:block after:text-xs after:not-italic after:normal-nums after:font-normal after:h-full after:tracking-[normal] after:leading-[normal] after:list-outside after:list-disc after:pointer-events-none after:absolute after:text-start after:indent-[0px] after:normal-case after:visible after:w-full after:border-2 md:after:border after:border-yellow-400 after:rounded-[100px] after:border-separate after:border-solid after:left-0 after:top-0 after:font-sans_serif' 
                    : 'opacity-70 hover:opacity-100'
                }`}>
                  <div className="absolute box-border caret-transparent shrink-0 h-full w-full left-[0%] -top-px">
                    <div className="absolute box-border caret-transparent inset-0">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 40px, 56px"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Testimonials Section Component
export const Testimonial = () => {
  return (
    <section className="bg-[#0A0E27] px-5 py-16 md:px-10 md:py-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 md:mb-20">
          <div className="bg-[#eeda03] h-[3px] w-[43px] mb-2"></div>
          <p className="text-slate-500 text-sm md:text-base tracking-widest uppercase font-medium mb-4">
            testimonials
          </p>
          <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-medium mb-6">
            Real clients. Real clean results.
          </h2>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl">
            Here's what happy customers are saying about our top-rated cleaning service.
          </p>
        </div>
        
        {/* Testimonial Card */}
        <TestimonialCard />
      </div>
    </section>
  );
};

// Demo
export default function Testimonials() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Testimonial />
    </div>
  );
}