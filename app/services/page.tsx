"use client";

import { servicesData } from "@/utils/servicesData";
import Navbar from "@/components/header";
import Footer from "@/components/footer";
import { motion } from "framer-motion";
import Image from "next/image";
import { CTAButton } from "@/components/CTAButton";
import Link from "next/link";
import HowItWorksSection from "@/components/UI/HowItWorks";
import ServiceCard from "@/components/ServiceCard";
// import { SectionHeader } from "@/components/SectionHeader"; // Assuming this is a valid import path
export default function ServicesPage() {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative flex items-center justify-center bg-slate-900 min-h-screen w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/brush.avif" // You can change this to your desired image
            alt="Background image of a clean space"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-slate-900/70"></div>
        </div>
        <div className="relative z-10 content-center items-center box-border caret-transparent gap-x-12 flex flex-col shrink-0 h-min justify-center max-w-[680px] gap-y-12 w-full overflow-hidden pt-[90px] pb-5 md:gap-x-20 md:max-w-[1440px] md:gap-y-20 md:pt-30 md:pb-[120px]">
          <div className="relative content-center items-center box-border caret-transparent gap-x-6 flex flex-col shrink-0 h-min justify-center gap-y-6 w-full">
      <div className="relative content-center items-center box-border caret-transparent gap-x-2 flex flex-col shrink-0 h-min justify-center gap-y-2 w-full">
        <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start break-words w-full">
          <p className="text-zinc-300 text-sm box-border caret-transparent tracking-[-0.56px] leading-[16.8px] break-words text-center uppercase font-geist md:text-base md:tracking-[-0.64px] md:leading-[19.2px]">
            we bring trusted care and attention to every detail.
          </p>
        </div>
        <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start max-w-[300px] break-words w-full md:max-w-[860px]">
          <h1 className="text-white text-5xl font-semibold box-border caret-transparent tracking-[-1.92px] leading-[44px] break-words text-center font-geist md:text-8xl md:tracking-[-3.84px] md:leading-[90px]">
             Service for every space, 
          </h1>
          <h1 className="text-white text-2xl font-semibold md:font-light box-border caret-transparent tracking-[-1.92px] leading-[44px] break-words text-center font-geist md:text-5xl md:tracking-[-3.84px] md:leading-[90px]">
              a standard for every clean
          </h1>
        </div>
      </div>
      <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-center max-w-[520px] break-words w-full md:max-w-screen-sm">
        <p className="text-zinc-300 text-base box-border caret-transparent tracking-[-0.64px] leading-[21px] break-words text-center font-geist md:text-lg md:tracking-[-0.72px] md:leading-6">
          Discover our full range of expert cleaning solutions designed to make your venue shine, your property spotless, and your life easier.
        </p>
      </div>
          </div>   
          <CTAButton/>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative content-center items-center bg-zinc-100 box-border caret-transparent gap-x-0 flex flex-col shrink-0 h-min justify-center gap-y-0 w-full px-5 py-[60px] scroll-mt-5 md:px-10 md:py-[100px]">
        <div className="relative content-center items-center box-border caret-transparent gap-x-10 flex flex-col shrink-0 h-min justify-center max-w-[680px] gap-y-10 w-full md:gap-x-20 md:max-w-[1440px] md:gap-y-20">
          {/* Section Header */}
          <div className="relative content-center items-center box-border caret-transparent gap-x-8 flex flex-col shrink-0 h-min justify-center gap-y-8 w-full overflow-hidden md:gap-x-5 md:flex-row md:gap-y-5">
            <div className="relative content-center items-center box-border caret-transparent gap-x-4 flex basis-auto flex-col grow-0 shrink-0 h-min justify-center gap-y-4 w-full md:gap-x-6 md:basis-0 md:grow md:gap-y-6 md:w-px">
              <div className="relative content-center items-center box-border caret-transparent gap-x-2 flex flex-col shrink-0 h-min justify-center gap-y-2 w-full">
                <div className="relative content-center items-center box-border caret-transparent gap-x-0 flex flex-col shrink-0 h-min justify-center gap-y-0 w-full overflow-hidden">
                  <div className="relative bg-yellow-400 box-border caret-transparent shrink-0 h-[3px] w-[33px]"></div>
                  <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start break-words w-full">
                    <p className="text-gray-500 text-sm box-border caret-transparent tracking-[-0.56px] leading-[16.8px] break-words text-center uppercase font-geist md:text-base md:tracking-[-0.64px] md:leading-[19.2px]">
                      what we clean
                    </p>
                  </div>
                </div>
                <div className="relative content-center items-center box-border caret-transparent gap-x-2.5 flex shrink-0 h-min justify-center max-w-[520px] gap-y-2.5 w-full md:max-w-none">
                  <div className="relative box-border caret-transparent flex basis-0 flex-col grow shrink-0 justify-start max-w-none break-words w-px md:max-w-[700px]">
                    <h2 className="text-slate-900 text-5xl font-light box-border caret-transparent tracking-[-1.92px] leading-[48px] break-words text-center font-geist md:text-[80px] md:tracking-[-3.2px] md:leading-[75px]">
                      Explore the cleaning services we offer
                    </h2>
                  </div>
                </div>
              </div>
              <div className="relative content-end items-end box-border caret-transparent gap-x-2.5 flex shrink-0 h-min justify-center max-w-[420px] gap-y-2.5 w-full overflow-hidden md:max-w-none">
                <div className="relative box-border caret-transparent flex basis-0 flex-col grow shrink-0 justify-center max-w-none break-words w-px md:max-w-[520px]">
                  <p className="text-slate-600 text-base box-border caret-transparent tracking-[-0.64px] leading-[21px] break-words text-center font-geist md:text-lg md:tracking-[-0.72px] md:leading-6">
                From crowded festivals to high-traffic car parks, we deliver deep, dependable cleaning designed to keep your spaces safe and welcoming.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Service Cards */}
          <div className="relative content-center items-center box-border caret-transparent gap-x-5 flex flex-col shrink-0 h-min justify-center gap-y-5 w-full overflow-hidden md:gap-x-10 md:gap-y-10">
            <div className="relative content-center items-center box-border caret-transparent gap-x-5 flex flex-col shrink-0 h-min justify-center gap-y-5 w-full overflow-hidden md:flex-row">
              {/* event cleaning*/}
              <motion.div
                className="relative box-border caret-transparent basis-auto grow-0 shrink-0 w-full md:basis-0 md:w-px md:grow-[0.75]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <Link href="/services/event-cleaning" className="relative text-blue-700 content-center items-center bg-white box-border caret-transparent gap-x-0 flex h-min justify-center gap-y-0 w-full overflow-hidden p-2 rounded-[32px]">
                  <div className="relative content-start items-start bg-zinc-900 box-border caret-transparent gap-x-[420px] flex basis-0 flex-col grow shrink-0 h-min justify-center gap-y-[420px] w-px overflow-hidden p-8 rounded-3xl after:accent-auto after:box-border after:caret-transparent after:text-blue-700 after:block after:text-xs after:not-italic after:normal-nums after:font-normal after:h-full after:tracking-[normal] after:leading-[normal] after:list-outside after:list-disc after:pointer-events-none after:absolute after:text-start after:indent-[0px] after:normal-case after:visible after:w-full after:border after:rounded-3xl after:border-separate after:border-solid after:border-white after:left-0 after:top-0 after:font-sans_serif">
                    <div className="absolute box-border caret-transparent shrink-0 h-[120%] left-[-10.0236%] top-[-9.87197%] w-[120%] z-0 overflow-hidden [mask-image:linear-gradient(rgba(0,0,0,0.6)_21%,rgb(0,0,0)_28%,rgb(0,0,0)_64%,rgba(0,0,0,0.12)_73%)]">
                      <div className="absolute box-border caret-transparent inset-0">
                      <Image
                        src="/event-2.jpg"
                        alt=""
                        fill
                        className="box-border caret-transparent object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      </div>
                    </div>
                    <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-center max-w-[232px] break-words w-full">
                      <p className="text-white text-[15px] box-border caret-transparent tracking-[-0.6px] leading-[18px] break-words text-left font-geist md:text-xl md:tracking-[-0.8px] md:leading-[26px]">
                        Spotless Events That Wow Guests
                      </p>
                    </div>
                    <div className="relative content-start items-start box-border caret-transparent gap-x-8 flex flex-col shrink-0 h-min justify-start gap-y-8 w-full overflow-hidden">
                      <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-center break-words w-full max-w-[400px]">
                        <p className="text-zinc-100 text-sm box-border caret-transparent tracking-[-0.56px] leading-[18px] break-words text-left font-geist md:text-[15px] md:tracking-[-0.6px] md:leading-[21px]">
                          Whether it’s Caribana, Pride Parade, or a local festival, our team handles pre-event, during-event, and post-event cleaning to ensure a flawless experience.
                        </p>
                      </div>
                      <div className="relative content-center items-center box-border caret-transparent flex shrink-0 h-min justify-between w-full overflow-hidden">
                        <div className="relative content-end items-end box-border caret-transparent gap-x-2 flex basis-0 grow shrink-0 h-min justify-start gap-y-2 w-px overflow-hidden">
                          <div className="relative aspect-square box-border caret-transparent shrink-0 w-8 overflow-hidden">
                            <div className="absolute box-border caret-transparent inset-0">
                            <Image
                              src="https://framerusercontent.com/images/rLTous16dTKITMdFkouZnZ0gAc.png"
                              alt=""
                              fill
                              className="box-border caret-transparent object-contain"
                              sizes="32px"
                            />
                            </div>
                          </div>
                          <div className="relative box-border caret-transparent flex basis-0 flex-col grow shrink-0 justify-start max-w-xs break-words w-px">
                            <p className="text-zinc-100 text-xs box-border caret-transparent tracking-[-0.48px] leading-[15px] break-words font-geist md:text-sm md:tracking-[-0.56px] md:leading-[18px]">
                              Event Cleaning
                            </p>
                          </div>
                        </div>
                        <div className="relative content-center items-center bg-yellow-300 box-border caret-transparent flex shrink-0 justify-center rounded-full px-4 py-2">
                          <p className="text-slate-900 text-xs font-bold font-geist">
                            View More
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
              {/* parking-lot-cleaning*/}
              <motion.div
                className="relative box-border caret-transparent basis-auto grow-0 shrink-0 w-full md:basis-0 md:w-px md:grow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
              >
                <Link href="/services/parking-lot-cleaning" className="relative text-blue-700 content-center items-center bg-white box-border caret-transparent gap-x-0 flex h-min justify-center gap-y-0 w-full overflow-hidden p-2 rounded-[32px]">
                  <div className="relative content-start items-start bg-zinc-900 box-border caret-transparent gap-x-[420px] flex basis-0 flex-col grow shrink-0 h-min justify-center gap-y-[420px] w-px overflow-hidden p-8 rounded-3xl after:accent-auto after:box-border after:caret-transparent after:text-blue-700 after:block after:text-xs after:not-italic after:normal-nums after:font-normal after:h-full after:tracking-[normal] after:leading-[normal] after:list-outside after:list-disc after:pointer-events-none after:absolute after:text-start after:indent-[0px] after:normal-case after:visible after:w-full after:border after:rounded-3xl after:border-separate after:border-solid after:border-white after:left-0 after:top-0 after:font-sans_serif">
                    <div className="absolute box-border caret-transparent shrink-0 h-[120%] left-[-10.0236%] top-[-9.87197%] w-[120%] z-0 overflow-hidden [mask-image:linear-gradient(rgba(0,0,0,0.6)_21%,rgb(0,0,0)_28%,rgb(0,0,0)_64%,rgba(0,0,0,0.12)_73%)]">
                      <div className="absolute box-border caret-transparent inset-0">
                        <Image
                          src="/parking-2.jpg"
                          alt=""
                          fill
                          className="box-border caret-transparent object-cover object-[54.4%_72.1%]"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                    </div>
                    <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-center max-w-[232px] break-words w-full">
                      <p className="text-white text-[15px] box-border caret-transparent tracking-[-0.6px] leading-[18px] break-words text-left font-geist md:text-xl md:tracking-[-0.8px] md:leading-[26px]">
                        Pristine Parking Lots for Lasting Impressions
                      </p>
                    </div>
                    <div className="relative content-start items-start box-border caret-transparent gap-x-8 flex flex-col shrink-0 h-min justify-start gap-y-8 w-full overflow-hidden">
 <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-center break-words w-full max-w-[480px]">
                        <p className="text-zinc-100 text-sm box-border caret-transparent tracking-[-0.56px] leading-[18px] break-words text-left font-geist md:text-[15px] md:tracking-[-0.6px] md:leading-[21px]">
                          Keep plazas like Yorkdale or Scarborough Town Centre pristine with our sweeping, debris removal, and stain treatment services.
                        </p>
                      </div>
                      <div className="relative content-center items-center box-border caret-transparent flex shrink-0 h-min justify-between w-full overflow-hidden">
                        <div className="relative content-end items-end box-border caret-transparent gap-x-2 flex basis-0 grow shrink-0 h-min justify-start gap-y-2 w-px overflow-hidden">
                          <div className="relative aspect-square box-border caret-transparent shrink-0 w-8 overflow-hidden">
                            <div className="absolute box-border caret-transparent inset-0">
                            <Image
                              src="https://framerusercontent.com/images/pE1nEasaMORw13ZMV1ob3iYkxCU.png"
                              alt=""
                              fill
                              className="box-border caret-transparent object-contain"
                              sizes="32px"
                            />
                            </div>
                          </div>
                          <div className="relative box-border caret-transparent flex basis-0 flex-col grow shrink-0 justify-start max-w-xs break-words w-px">
                            <p className="text-zinc-100 text-xs box-border caret-transparent tracking-[-0.48px] leading-[15px] break-words font-geist md:text-sm md:tracking-[-0.56px] md:leading-[18px]">
                              Parking Lot Cleaning
                            </p>
                          </div>
                        </div>
                        <div className="relative content-center items-center bg-yellow-300 box-border caret-transparent flex shrink-0 justify-center rounded-full px-4 py-2">
                          <p className="text-slate-900 text-xs font-bold font-geist">
                            View More
                          </p>
                        </div>
 </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            </div>
          </div>
          <div className="relative content-center items-center box-border caret-transparent gap-x-5 flex flex-col shrink-0 h-min justify-center gap-y-5 w-full overflow-hidden md:flex-row">
            {/* pressure washing */}
            <motion.div
              className="relative box-border caret-transparent basis-auto grow-0 shrink-0 w-full md:basis-0 md:w-px md:grow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Link href="/services/pressure-washing" className="relative text-blue-700 content-center items-center bg-white box-border caret-transparent gap-x-0 flex h-min justify-center gap-y-0 w-full overflow-hidden p-2 rounded-[32px]">
                <div className="relative content-start items-start bg-zinc-900 box-border caret-transparent gap-x-[420px] flex basis-0 flex-col grow shrink-0 h-min justify-center gap-y-[420px] w-px overflow-hidden p-8 rounded-3xl after:accent-auto after:box-border after:caret-transparent after:text-blue-700 after:block after:text-xs after:not-italic after:normal-nums after:font-normal after:h-full after:tracking-[normal] after:leading-[normal] after:list-outside after:list-disc after:pointer-events-none after:absolute after:text-start after:indent-[0px] after:normal-case after:visible after:w-full after:border after:rounded-3xl after:border-separate after:border-solid after:border-white after:left-0 after:top-0 after:font-sans_serif">
                  <div className="absolute box-border caret-transparent shrink-0 h-[120%] left-[-10.0236%] top-[-9.87197%] w-[120%] z-0 overflow-hidden [mask-image:linear-gradient(rgba(0,0,0,0.6)_21%,rgb(0,0,0)_28%,rgb(0,0,0)_64%,rgba(0,0,0,0.12)_73%)]">
                    <div className="absolute box-border caret-transparent inset-0">
                      <Image
                        src="/pressure-1.jpg"
                        alt=""
                        fill
                        className="box-border caret-transparent object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  </div>
                  <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-center max-w-[232px] break-words w-full">
                    <p className="text-white text-[15px] box-border caret-transparent tracking-[-0.6px] leading-[18px] break-words text-left font-geist md:text-xl md:tracking-[-0.8px] md:leading-[26px]">
                      High-Powered Cleaning for Any Surface
                    </p>
                  </div>
                  <div className="relative content-start items-start box-border caret-transparent gap-x-8 flex flex-col shrink-0 h-min justify-start gap-y-8 w-full overflow-hidden">
                    <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-center break-words w-full max-w-[480px]">
                      <p className="text-zinc-100 text-sm box-border caret-transparent tracking-[-0.56px] leading-[18px] break-words text-left font-geist md:text-[15px] md:tracking-[-0.6px] md:leading-[21px]">
                        Our pressure washing restores sidewalks, facades, and parking areas to their original shine, perfect for events and plazas.
                      </p>
                    </div>
                    <div className="relative content-center items-center box-border caret-transparent flex shrink-0 h-min justify-between w-full overflow-hidden">
                      <div className="relative content-end items-end box-border caret-transparent gap-x-2 flex basis-0 grow shrink-0 h-min justify-start gap-y-2 w-px overflow-hidden">
                        <div className="relative aspect-square box-border caret-transparent shrink-0 w-8 overflow-hidden">
                          <div className="absolute box-border caret-transparent inset-0">
                            <Image
                              src="https://framerusercontent.com/images/k6W1tvNaOZEih2K6a63bGDb2bY.png"
                              alt=""
                              fill
                              className="box-border caret-transparent object-contain"
                              sizes="32px"
                            />
                          </div>
                        </div>
                        <div className="relative box-border caret-transparent flex basis-0 flex-col grow shrink-0 justify-start max-w-xs break-words w-px">
                          <p className="text-zinc-100 text-xs box-border caret-transparent tracking-[-0.48px] leading-[15px] break-words font-geist md:text-sm md:tracking-[-0.56px] md:leading-[18px]">
                            Pressure Washing
                          </p>
                        </div>
                      </div>
                      <div className="relative content-center items-center bg-yellow-300 box-border caret-transparent flex shrink-0 justify-center rounded-full px-4 py-2">
                        <p className="text-slate-900 text-xs font-bold font-geist">
                          View More
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
            {/* snow removal*/}
            <motion.div
              className="relative box-border caret-transparent basis-auto grow-0 shrink-0 w-full md:basis-0 md:w-px md:grow-[0.75]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
            >
              <Link href="/services/snow-removal" className="relative text-blue-700 content-center items-center bg-white box-border caret-transparent gap-x-0 flex h-min justify-center gap-y-0 w-full overflow-hidden p-2 rounded-[32px]">
                <div className="relative content-start items-start bg-zinc-900 box-border caret-transparent gap-x-[420px] flex basis-0 flex-col grow shrink-0 h-min justify-center gap-y-[420px] w-px overflow-hidden p-8 rounded-3xl after:accent-auto after:box-border after:caret-transparent after:text-blue-700 after:block after:text-xs after:not-italic after:normal-nums after:font-normal after:h-full after:tracking-[normal] after:leading-[normal] after:list-outside after:list-disc after:pointer-events-none after:absolute after:text-start after:indent-[0px] after:normal-case after:visible after:w-full after:border after:rounded-3xl after:border-separate after:border-solid after:border-white after:left-0 after:top-0 after:font-sans_serif">
                  <div className="absolute box-border caret-transparent shrink-0 h-[120%] left-[-10.0236%] top-[-9.87197%] w-[120%] z-0 overflow-hidden [mask-image:linear-gradient(rgba(0,0,0,0.72)_21%,rgb(0,0,0)_28%,rgb(0,0,0)_64%,rgba(0,0,0,0.12)_73%)]">
                    <div className="absolute box-border caret-transparent inset-0">
                      <Image
                        src="/snow-1.jpg"
                        alt=""
                        fill
                        className="box-border caret-transparent object-cover object-[84.9%_43.7%]"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  </div>
                  <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-center max-w-[232px] break-words w-full">
                    <p className="text-white text-[15px] box-border caret-transparent tracking-[-0.6px] leading-[18px] break-words text-left font-geist md:text-xl md:tracking-[-0.8px] md:leading-[26px]">
                      Safe, Accessible Spaces All Winter
                    </p>
                  </div>
                  <div className="relative content-start items-start box-border caret-transparent gap-x-8 flex flex-col shrink-0 h-min justify-start gap-y-8 w-full overflow-hidden">
                    <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-center break-words w-full max-w-[400px]">
                      <p className="text-zinc-100 text-sm box-border caret-transparent tracking-[-0.56px] leading-[18px] break-words text-left font-geist md:text-[15px] md:tracking-[-0.6px] md:leading-[21px]">
                        Our 24/7 snow removal and de-icing services keep event grounds and plazas safe during Toronto’s harsh winters.
                      </p>
                    </div>
                    <div className="relative content-center items-center box-border caret-transparent flex shrink-0 h-min justify-between w-full overflow-hidden">
                      <div className="relative content-end items-end box-border caret-transparent gap-x-2 flex basis-0 grow shrink-0 h-min justify-start gap-y-2 w-px overflow-hidden">
                        <div className="relative aspect-square box-border caret-transparent shrink-0 w-8 overflow-hidden">
                          <div className="absolute box-border caret-transparent inset-0">
                            <Image
                              src="https://framerusercontent.com/images/EnT4aQt0PenxFslhe3fkE0yHOpA.png"
                              alt=""
                              fill
                              className="box-border caret-transparent object-contain"
                              sizes="32px"
                            />
                          </div>
                        </div>
                        <div className="relative box-border caret-transparent flex basis-0 flex-col grow shrink-0 justify-start max-w-xs break-words w-px">
                          <p className="text-zinc-100 text-xs box-border caret-transparent tracking-[-0.48px] leading-[15px] break-words font-geist md:text-sm md:tracking-[-0.56px] md:leading-[18px]">
                            Snow Removal
                          </p>
                        </div>
                      </div>
                      <div className="relative content-center items-center bg-yellow-300 box-border caret-transparent flex shrink-0 justify-center rounded-full px-4 py-2">
                        <p className="text-slate-900 text-xs font-bold font-geist">
                          View More
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
<HowItWorksSection/>

<section className="relative content-center items-center box-border caret-transparent gap-x-0 flex flex-col shrink-0 h-min justify-center min-h-[auto] gap-y-0 w-full overflow-hidden px-5 py-10 md:min-h-[1000px] md:px-10 md:py-20">
<div className="relative w-full max-w-[1150px] overflow-hidden rounded-2xl md:rounded-[32px]">
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
                Car Park Cleaning
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
      <div className="relative content-start items-start bg-[#F6E304] box-border caret-transparent gap-x-4 flex flex-col shrink-0 h-min justify-start gap-y-4 w-full overflow-hidden p-4 rounded-3xl md:content-center md:items-center md:gap-x-[normal] md:flex-row md:justify-between md:gap-y-[normal] md:p-6">
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
</section>
      
      <Footer />
    </>
  );
}