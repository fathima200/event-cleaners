"use client";

import Image from "next/image";
import Navbar from "@/components/header";
import Footer from "@/components/footer";
import { CTAButton } from "@/components/CTAButton";

import { useEffect, useRef, useState } from "react";
import WhyChooseUs from "@/components/UI/WhyChooseUs";
import OurExperience from "@/components/UI/OurExperience";
import ServicesSection from "@/components/UI/ServiceSection";

type ValueCardProps = {
  imageUrl: string;
  imageVariant: string;
  title: string;
  description: string;
};
function StorySection() {
  const [visibleElements, setVisibleElements] = useState<number[]>([]);
  const [counters, setCounters] = useState({ cleans: 0, rebook: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

    const values = [
    {
      title: "Reliability",
      description:
        "We show up on time. Every. Single. Time. Your event can't afford no-shows, and we get that.",
      imageUrl: "/cleaning-team.jpg",
    },
    {
      title: "Quality Work",
      description:
        "Spotless isn’t good enough. We clean until it looks like nothing ever happened.",
      imageUrl: "/cleaning-spotless.jpg",
    },
    {
      title: "Sustainability",
      description:
        "We use eco-friendly products whenever possible. Toronto's our home too.",
      imageUrl: "/eco-friendly-cleaning.jpg",
    },
    {
      title: "Straight Talk",
      description:
        "Transparent pricing. No hidden fees. No 'call for a quote' games.",
      imageUrl: "/honest-team.jpg",
    },
  ];


  const stats = [
    {
      value: "0%",
      label: "Compromise",
      description: "We never cut corners on eco-friendly cleaning. Every job delivers a spotless space—and a conscience you can feel good about.",
      color: "yellow"
    },
    {
      value: "5,000+",
      label: "Cleans Completed",
      description: "From events to plazas to commercial lots, we treat each space with the utmost care and attention.",
      color: "dark"
    },
    {
      value: "95%",
      label: "Rebook Rate",
      description: "Nearly all our clients return within 60 days, trusting us for reliable, consistent quality every time.",
      color: "yellow"
    },
  ];

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Trigger text animations
          [0, 1, 2, 3, 4].forEach((index) => {
            setTimeout(() => {
              setVisibleElements((prev) => [...new Set([...prev, index])]);
            }, index * 150);
          });

          // Animate counters
          animateCounter(5000, (val) => setCounters(prev => ({ ...prev, cleans: val })));
          animateCounter(95, (val) => setCounters(prev => ({ ...prev, rebook: val })));
        }
      });
    }, observerOptions);

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  const animateCounter = (target: number, callback: (val: number) => void) => {
    let current = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        callback(target);
        clearInterval(timer);
      } else {
        callback(Math.floor(current));
      }
    }, 30);
  };

  return (
    <section ref={sectionRef} className="relative bg-[#e5e5e5] w-full overflow-hidden py-16 md:py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Content Side */}
          <div className="lg:col-span-7 space-y-10 md:space-y-12">
            
            {/* Main Text */}
            <div
              className={`
                space-y-6 transition-all duration-1000 ease-out
                ${visibleElements.includes(0) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
              `}
            >
              <div className="relative bg-[#eeda03] h-[3px] w-[33px]"></div>
              <p className="text-[#0a0e27] text-xl md:text-xl lg:text-2xl leading-10 font-light">
                We started with a simple goal: to raise the standard of what a truly clean space feels like. Guided by innovation, sustainable practices, and a people-first mindset, Over{" "}
                <span className="font-bold text-[#eeda03]">10+ years</span> TheEventCleaners has grown into a trusted partner for venues, offices, car parks, and retail spaces across the city.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
              
              {/* Stat 1 - 0% Compromise - Spans 2 columns */}
              <div
                className={`
                  md:col-span-2 bg-white rounded-2xl p-6 md:p-8 border-l-4 border-[#eeda03]
                  transition-all duration-700 ease-out
                  ${visibleElements.includes(1) ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}
                `}
                style={{ transitionDelay: '150ms' }}
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="text-5xl md:text-6xl lg:text-7xl font-light text-[#0a0e27] leading-none">
                      0%
                    </div>
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="text-xl md:text-2xl font-bold text-[#0a0e27] mb-2">
                      Compromise
                    </h3>
                    <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                      We never cut corners on eco-friendly cleaning. Every job delivers a spotless space—and a conscience you can feel good about.
                    </p>
                  </div>
                </div>
              </div>

              {/* Stat 2 - 5,000+ Cleans */}
              <div
                className={`
                  bg-[#0a0e27] rounded-2xl p-6 md:p-8
                  transition-all duration-700 ease-out
                  ${visibleElements.includes(2) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
                `}
                style={{ transitionDelay: '300ms' }}
              >
                <div className="space-y-4">
                  <div className="text-4xl md:text-5xl font-light text-[#eeda03] leading-none">
                    {counters.cleans.toLocaleString()}+
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-white mb-2">
                      Cleans Completed
                    </h3>
                    <p className="text-white/70 text-xs md:text-sm leading-relaxed">
                      From events to plazas to commercial lots, we treat each space with the utmost care and attention.
                    </p>
                  </div>
                </div>
              </div>

              {/* Stat 3 - 95% Rebook */}
              <div
                className={`
                  bg-[#eeda03] rounded-2xl p-6 md:p-8
                  transition-all duration-700 ease-out
                  ${visibleElements.includes(3) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
                `}
                style={{ transitionDelay: '450ms' }}
              >
                <div className="space-y-4">
                  <div className="text-4xl md:text-5xl font-light text-[#0a0e27] leading-none">
                    {counters.rebook}%
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-[#0a0e27] mb-2">
                      Rebook Rate
                    </h3>
                    <p className="text-[#0a0e27]/80 text-xs md:text-sm leading-relaxed">
                      Nearly all our clients return within 60 days, trusting us for reliable, consistent quality every time.
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* Image Side */}
          <div
            className={`
              lg:col-span-5 transition-all duration-1000 ease-out
              ${visibleElements.includes(4) ? "opacity-100 scale-100" : "opacity-0 scale-95"}
            `}
            style={{ transitionDelay: '600ms' }}
          >
            <div className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded-3xl overflow-hidden group">
              <Image
                src="/cleaning-office.jpg"
                alt="Our story"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e27]/40 via-transparent to-transparent"></div>
              
              {/* Floating badge */}
              <div className="absolute bottom-6 left-6 bg-white rounded-2xl px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#eeda03] rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#0a0e27]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#0a0e27]">10+</div>
                    <div className="text-xs text-slate-600">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

const HeroText = () => {
  return (
    <div className="relative content-center items-center box-border caret-transparent gap-x-6 flex flex-col shrink-0 h-min justify-center gap-y-6 w-full">
      <div className="relative content-center items-center box-border caret-transparent gap-x-2 flex flex-col shrink-0 h-min justify-center gap-y-2 w-full">
        <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start break-words w-full">
          <p className="text-zinc-300 text-sm box-border caret-transparent tracking-[-0.56px] leading-[16.8px] break-words text-center uppercase font-geist md:text-base md:tracking-[-0.64px] md:leading-[19.2px]">
            Every clean tells a story of trust and care
          </p>
        </div>
        <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start max-w-[300px] break-words w-full md:max-w-[860px]">
          <h1 className="text-white text-5xl font-semibold box-border caret-transparent tracking-[-1.92px] leading-[44px] break-words text-center font-geist md:text-8xl md:tracking-[-3.84px] md:leading-[90px]">
            Care for your space like it's our own
          </h1>
        </div>
      </div>
      <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-center max-w-[520px] break-words w-full md:max-w-screen-sm">
        <p className="text-zinc-300 text-base box-border caret-transparent tracking-[-0.64px] leading-[21px] break-words text-center font-geist md:text-lg md:tracking-[-0.72px] md:leading-6">
          We’re a people-first cleaning team. Our mission is simple: to create healthier, 
          happier environments for every client we serve. 
        </p>
      </div>
    </div>
  );
};

const ValueCard = ({ imageUrl, imageVariant, title, description }: ValueCardProps) => {
  return (
    <div className="relative box-border caret-transparent basis-auto grow-0 shrink-0 max-w-[520px] w-full md:basis-0 md:grow md:max-w-none md:w-px">
      <div className="relative content-center items-center bg-white box-border caret-transparent gap-x-8 flex flex-col h-min justify-center gap-y-8 w-full p-8 rounded-[32px]">
        <div className="relative content-center items-center box-border caret-transparent gap-x-4 flex flex-col shrink-0 h-min justify-center gap-y-4 w-[155px]">
          <div className="relative aspect-[0.9/_1] box-border caret-transparent shrink-0 w-[72px]">
            <div className="absolute box-border caret-transparent inset-0">
              <Image
                src={imageUrl}
                alt={title}
                fill
                className={`box-border caret-transparent h-full object-contain w-full ${imageVariant}`}
              />
            </div>
          </div>
          <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start break-words w-full">
            <p className="text-slate-900 text-base font-medium box-border caret-transparent tracking-[-0.64px] leading-[19.2px] break-words text-center uppercase font-geist md:text-xl md:tracking-[-0.8px] md:leading-6">
              {title}
            </p>
          </div>
        </div>
        <div className="relative box-border caret-transparent flex flex-col justify-center break-words w-full">
          <p className="text-slate-900/70 text-sm box-border caret-transparent tracking-[-0.56px] leading-[18px] break-words text-center font-geist md:text-[15px] md:tracking-[-0.6px] md:leading-[21px]">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

const ValueCards = () => {
  const values = [
    {
      imageUrl: "/built.avif",
      imageVariant: "aspect-[auto_131_/_147]",
      title: "Built on Purpose",
      description: "Our mission? Bring peace of mind to businesses, venues, and communities through consistent, eco-friendly cleaning that puts people above all."
    },
    {
      imageUrl: "/led.avif",
      imageVariant: "aspect-[auto_171_/_147]",
      title: "Led by the Values",
      description: "Integrity guides every choice—from the products we use, to the staff we recruit, to the way we follow up after each clean. Clean, safe, sustainable, and always consistent—these are our standards."
    },
    {
      imageUrl: "/grown.webp",
      imageVariant: "aspect-[auto_156_/_147]",
      title: "Grown by Trust",
      description: "What started as a small crew has become a thriving team united by care, pride in our work, and loyal clients who return again and again.."
    }
  ];

  return (
    <div className="relative content-center items-center box-border caret-transparent gap-x-5 flex flex-col shrink-0 h-min justify-center max-w-none gap-y-5 w-full overflow-hidden px-5 md:flex-row md:max-w-[1120px] md:px-10">
      {values.map((value, index) => (
        <ValueCard key={index} {...value} />
      ))}
    </div>
  );
};

const ProcessCTA = () => (
  <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 w-full">
    <div className="space-y-2">
      <p className="text-slate-900 text-base md:text-xl font-medium uppercase tracking-tight font-geist">
        Ready to Get Started?
      </p>
      <p className="text-slate-600 text-sm md:text-base max-w-xs font-geist">
        Simple pricing, no hidden fees - see what works for your space.
      </p>
    </div>
    <div className="shrink-0">
      <a
        href="/contact"
        className="group relative inline-flex items-center gap-4 bg-yellow-400 hover:bg-yellow-300 text-slate-900 font-medium px-6 py-4 md:px-8 md:py-5 rounded-full shadow-lg shadow-yellow-400/30 hover:shadow-xl hover:shadow-yellow-400/40 transition-all duration-300 hover:scale-105"
      >
        <span className="text-base md:text-lg tracking-tight">Contact Us</span>
        <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-slate-900 rounded-full transition-transform duration-300 group-hover:translate-x-1">
          <svg className="w-5 h-5 md:w-6 md:h-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </a>
    </div>
  </div>
);


export type ProcessGridProps = {
  imageUrl: string;
  title: string;
  description: string;
};

export const ProcessGrid = ({ imageUrl, title, description }: ProcessGridProps) => {
  return (
    <div className="flex items-start gap-4">
      <div className="relative shrink-0 w-20 h-24 rounded-lg overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="space-y-1">
        <h3 className="text-slate-900 text-base md:text-xl font-medium font-geist leading-tight">
          {title}
        </h3>
        <p className="text-gray-500 text-sm md:text-base font-geist leading-snug">
          {description}
        </p>
      </div>
    </div>
  );
};

export const ProcessHeader = () => {
  return (
    <div className="max-w-md md:max-w-2xl">
      <h2 className="text-slate-900 text-5xl md:text-7xl lg:text-8xl font-light tracking-tighter leading-tight font-geist">
        How we work, why it works
      </h2>
    </div>
  );
};

const ProcessSection = () => {
  return (
    <section className="bg-white w-full overflow-hidden px-6 md:px-12 py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-14 md:gap-20">
        <div className="w-full flex flex-col items-start gap-10 md:gap-14">
          <ProcessHeader />
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <ProcessGrid
              imageUrl="https://framerusercontent.com/images/CO1vziaO1QIah4gPL7T8SeMPOfo.png?scale-down-to=512"
              title="Consistency"
              description="The same quality, every time. No surprises."
            />
            <ProcessGrid
              imageUrl="https://framerusercontent.com/images/sV4XQi8iuU6TnA9b2xb1rx822TQ.png"
              title="Communication"
              description="We are always clear and responsive."
            />
            <ProcessGrid
              imageUrl="https://framerusercontent.com/images/5Gytk03BljQXhQxcuDF4qQhXUTM.png"
              title="Care"
              description="We treat your space like our own."
            />
            <ProcessGrid
              imageUrl="/scrubing.png"
              title="Sustainability"
              description="Clean with impact, not with chemicals."
            />
          </div>
        </div>
        <ProcessCTA />
      </div>
    </section>
  );
};

const CTAContent = () => {
  return (
    <div className="relative content-start items-start box-border caret-transparent gap-x-6 flex flex-col shrink-0 h-min justify-start gap-y-6 w-full md:gap-x-8 md:gap-y-8">
      <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start max-w-[300px] break-words w-full md:max-w-[500px]">
        <h2 className="text-white text-5xl font-light box-border caret-transparent tracking-[-1.92px] leading-[48px] break-words font-geist md:text-[80px] md:tracking-[-3.2px] md:leading-[75px]">
          Let’s make your space feel like new
        </h2>
      </div>
    </div>
  );
};

const CTADetails = () => {
  return (
    <div className="relative content-start items-start box-border caret-transparent gap-x-10 flex flex-col shrink-0 h-min justify-start opacity-[0.732583] gap-y-10 translate-y-[10.6967px] w-full overflow-hidden pl-0 md:content-center md:items-center md:gap-x-[normal] md:flex-row md:justify-between md:gap-y-[normal] md:pl-[100px]">
      <div className="relative content-start items-start box-border caret-transparent gap-x-5 flex basis-auto flex-col grow-0 shrink-0 h-min justify-start max-w-60 gap-y-5 w-full md:basis-0 md:grow md:w-px">
        <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-center break-words w-full">
          <p className="text-zinc-300 text-sm box-border caret-transparent tracking-[-0.56px] leading-[18px] break-words font-geist md:text-[15px] md:tracking-[-0.6px] md:leading-[21px]">
            One-time refresh or a long-term cleaning partner, our team is ready
            to show you what reliable, caring service feels like.
          </p>
        </div>
        <div className="relative box-border caret-transparent shrink-0 h-[3px] w-[220px]">
          <div className="box-border caret-transparent h-full w-full">
            <img
              src="https://c.animaapp.com/mhuxto4j5mnRzD/assets/icon-4.svg"
              alt="Icon"
              className="box-border caret-transparent h-full w-full"
            />
          </div>
        </div>
        <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-center break-words w-full">
          <p className="text-zinc-300 text-sm box-border caret-transparent tracking-[-0.56px] leading-[18px] break-words font-geist md:text-[15px] md:tracking-[-0.6px] md:leading-[21px]">
            We’re not just here to clean, we’re here to earn your trust.
          </p>
        </div>
      </div>
      <div className="relative content-start items-start bg-yellow-400 box-border caret-transparent gap-x-10 flex basis-auto flex-col grow-0 shrink-0 h-min justify-start max-w-[400px] gap-y-10 w-full overflow-hidden p-4 rounded-2xl md:gap-x-20 md:basis-0 md:grow md:gap-y-20 md:w-px md:p-5">
        <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start max-w-60 break-words w-full md:max-w-[300px]">
          <p className="text-slate-900 text-sm box-border caret-transparent tracking-[-0.56px] leading-[18px] break-words font-geist md:text-[15px] md:tracking-[-0.6px] md:leading-[21px]">
            Book your first clean and experience what “truly fresh” feels like
          </p>
        </div>
        <div className="relative content-start items-start box-border caret-transparent gap-x-2.5 flex flex-col shrink-0 h-min justify-start gap-y-2.5 w-full md:content-center md:items-center md:flex-row">
          <div className="relative content-start items-start box-border caret-transparent gap-x-0 flex basis-auto flex-col grow-0 shrink-0 h-min justify-center gap-y-0 w-full overflow-hidden md:basis-0 md:grow md:w-px">
            <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start break-words w-full">
              <p className="text-slate-900 text-xl font-medium box-border caret-transparent tracking-[-0.8px] leading-6 break-words font-geist md:text-[32px] md:tracking-[-1.28px] md:leading-[38px]">
                12%
              </p>
            </div>
            <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start break-words w-full">
              <p className="text-slate-600 text-[15px] box-border caret-transparent tracking-[-0.6px] leading-[18px] break-words font-geist md:text-base md:tracking-[-0.64px] md:leading-[22px]">
                off your first visit
              </p>
            </div>
          </div>
          <div className="box-border caret-transparent contents">
            <div className="relative box-border caret-transparent shrink-0 h-14 md:h-16">
              <a
                href="/services"
                className="relative text-blue-700 content-center items-center bg-slate-900 shadow-[rgba(8,29,58,0.32)_0px_8px_25px_0px] box-border caret-transparent gap-x-5 flex h-full justify-center gap-y-5 w-min pl-6 pr-3 py-6 rounded-[35px]"
              >
                <div className="relative content-center items-center box-border caret-transparent gap-x-2.5 flex shrink-0 h-min justify-center gap-y-2.5 w-min">
                  <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start text-nowrap">
                    <p className="text-yellow-400 text-[15px] box-border caret-transparent tracking-[-0.6px] leading-[18px] text-nowrap font-geist md:text-base md:tracking-[-0.64px] md:leading-[22px]">
                      Our Services
                    </p>
                  </div>
                </div>
                <div className="relative content-center items-center aspect-square bg-yellow-400 box-border caret-transparent gap-x-2.5 flex shrink-0 justify-center gap-y-2.5 w-10 overflow-hidden rounded-[23px]">
                  <div className="relative box-border caret-transparent shrink-0 h-5 w-5">
                    <div className="box-border caret-transparent contents">
                      <img
                        src="https://c.animaapp.com/mhuxto4j5mnRzD/assets/icon-5.svg"
                        alt="Icon"
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

const CTASection = () => {
  return (
    <section className="relative content-center items-center bg-white box-border caret-transparent gap-x-0 flex flex-col shrink-0 h-min justify-center min-h-[auto] gap-y-0 w-full overflow-hidden px-5 py-10 md:px-10 md:py-20">
      <div className="relative content-center items-center box-border caret-transparent gap-x-5 flex flex-col shrink-0 h-min justify-center max-w-[680px] gap-y-5 w-full md:gap-x-10 md:max-w-[1440px] md:gap-y-10">
        <div className="relative content-center items-center box-border caret-transparent gap-x-12 flex flex-col shrink-0 h-min justify-center gap-y-12 w-full overflow-hidden p-5 rounded-2xl md:gap-x-[104px] md:gap-y-[104px] md:p-10 md:rounded-[32px]">
          <div className="absolute inset-0 z-0">
            <Image
              src="/brush.avif"
              alt="background"
              fill
              className="object-cover rounded-2xl md:rounded-[32px]"
            />
            <div className="absolute inset-0 bg-slate-900/80"></div>
          </div>
          <div className="box-border caret-transparent contents"></div>
          <CTAContent />
          <CTADetails />
        </div>
      </div>
    </section>
  );
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      
      {/* New Hero Section */}
      <section className="relative content-center items-center bg-slate-900 box-border caret-transparent gap-x-0 flex flex-col shrink-0 h-min justify-center gap-y-0 w-full overflow-hidden">
        <div className="relative content-center items-center box-border caret-transparent gap-x-12 flex flex-col shrink-0 h-min justify-center max-w-[680px] gap-y-12 w-full overflow-hidden pt-[150px] pb-5 md:gap-x-20 md:max-w-[1440px] md:gap-y-20 md:pt-40 md:pb-[120px]">
          <HeroText />
          <CTAButton/>
          <ValueCards />
        </div>
      </section>
      <StorySection/>
      <OurExperience/>
      <ServicesSection/>
      <ProcessSection/>
      <CTASection />
      <WhyChooseUs/>
      <Footer />
    </>
  );
}
