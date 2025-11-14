"use client";

import Navbar from "@/components/header";
import Footer from "@/components/footer";
import QuoteForm from "@/components/UI/QuoteForm";
import Image from "next/image";
import FinalCTA from "@/components/UI/FinalCTA";
import ServiceAreas from "@/components/UI/ServiceAreas";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative content-center items-center bg-slate-900 box-border caret-transparent gap-x-0 flex flex-col shrink-0 h-min justify-center gap-y-0 w-full overflow-hidden">
      <div className="relative content-center items-center box-border caret-transparent gap-x-12 flex flex-col shrink-0 h-min justify-center max-w-[680px] gap-y-12 w-full overflow-hidden pt-[150px] pb-5 md:gap-x-20 md:max-w-[1440px] md:gap-y-20 md:pt-40 md:pb-[120px]">

        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/spraying-table.jpg"
            alt="Contact Background"
            fill
            className="object-cover opacity-50"
            priority
          />
          <div className="absolute inset-0 bg-slate-900/90" />
        </div>

        <div className="relative content-center items-center box-border caret-transparent gap-x-6 flex flex-col shrink-0 h-min justify-center gap-y-6 w-full">
      <div className="relative content-center items-center box-border caret-transparent gap-x-2 flex flex-col shrink-0 h-min justify-center gap-y-2 w-full">
        <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start break-words w-full">
          <p className="text-zinc-300 text-sm box-border caret-transparent tracking-[-0.56px] leading-[16.8px] break-words text-center uppercase font-geist md:text-base md:tracking-[-0.64px] md:leading-[19.2px]">
            let's work together
          </p>
        </div>
        <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start max-w-[300px] break-words w-full md:max-w-[860px]">
          <h1 className="text-white text-5xl font-semibold box-border caret-transparent tracking-[-1.92px] leading-[44px] break-words text-center font-geist md:text-8xl md:tracking-[-3.84px] md:leading-[90px]">
          Your Spotless Space Awaits!
          </h1>
        </div>
      </div>
      <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-center max-w-[520px] break-words w-full md:max-w-screen-sm">
        <p className="text-zinc-300 text-base box-border caret-transparent tracking-[-0.64px] leading-[21px] break-words text-center font-geist md:text-lg md:tracking-[-0.72px] md:leading-6">
        Contact Us Now to Get Your Free Quote!
        </p>
      </div>
      </div>
      </div>
      </section>

      {/* Bento Grid Section */}
      <section className="relative w-full overflow-hidden bg-gray-200 px-5 md:px-10 py-[80px] md:py-[100px]">


        <div className="relative z-10 max-w-[1440px] mx-auto">
          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5">
            
            {/* Contact Form - Large Card */}
            <div className="md:col-span-7 md:row-span-2 bg-white rounded-2xl p-6 md:p-8 overflow-hidden">
              <div className="mb-6">
                <div className="bg-yellow-400 h-[3px] w-[33px] mb-3"></div>
                <h2 className="text-slate-900 text-3xl md:text-5xl font-semibold tracking-[-1.44px] md:tracking-[-2.4px] leading-tight font-geist mb-2">
                  Request Quote
                </h2>
                <p className="text-gray-500 text-sm md:text-base tracking-[-0.56px] md:tracking-[-0.64px] leading-[18px] md:leading-[21px] font-geist">
                  Fill out the form below
                </p>
              </div>
              <QuoteForm />
            </div>

            {/* Phone Card */}
            <div className="md:col-span-5 bg-slate-900 rounded-2xl p-6 md:p-8 flex flex-col justify-between overflow-hidden relative group min-h-[200px] md:min-h-[250px]">
              <div className="absolute inset-0 opacity-10">
                <Image
                  src="/spraying-table.jpg"
                  alt="Background"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative z-10">
                <div className="bg-yellow-400 h-[3px] w-[33px] mb-4"></div>
                <p className="text-zinc-400 text-xs font-medium tracking-[-0.48px] leading-[14.4px] uppercase mb-2 font-geist">
                  Call Us
                </p>
                <a href="tel:416-XXX-XXXX" className="text-white text-2xl md:text-3xl font-semibold tracking-[-1.2px] md:tracking-[-1.44px] leading-tight font-geist hover:text-yellow-400 transition-colors">
                  (416) XXX-XXXX
                </a>
                <p className="text-zinc-400 text-xs tracking-[-0.48px] leading-[16px] font-geist mt-3">
                  Monday–Friday: 8am–6pm
                </p>
                <p className="text-yellow-400 text-xs tracking-[-0.48px] leading-[16px] font-geist">
                  Emergency: 24/7
                </p>
              </div>
            </div>

            {/* Email Card */}
            <div className="md:col-span-5 bg-white rounded-2xl p-6 md:p-8 flex flex-col justify-between border border-gray-200 overflow-hidden group min-h-[200px] md:min-h-[250px]">
              <div>
                <div className="bg-yellow-400 h-[3px] w-[33px] mb-4"></div>
                <p className="text-slate-900 text-xs font-medium tracking-[-0.48px] leading-[14.4px] uppercase mb-2 font-geist">
                  Email
                </p>
                <a href="mailto:hello@theeventcleaners.ca" className="text-slate-900 text-lg md:text-xl font-semibold tracking-[-0.8px] md:tracking-[-0.96px] leading-tight font-geist hover:text-yellow-400 transition-colors break-all">
                  hello@theeventcleaners.ca
                </a>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-200">
                <p className="text-slate-900 text-xs font-medium tracking-[-0.48px] leading-[14.4px] uppercase mb-2 font-geist">
                  Location
                </p>
                <p className="text-slate-900 text-sm tracking-[-0.56px] leading-[18px] font-geist">
                  Toronto, Ontario
                </p>
                <p className="text-gray-500 text-xs tracking-[-0.48px] leading-[16px] font-geist mt-1">
                  Serving the GTA
                </p>
              </div>
            </div>

            {/* Payment Terms Card */}
            <div className="md:col-span-6 bg-yellow-400 rounded-2xl p-6 md:p-8 flex flex-col justify-between overflow-hidden min-h-[180px]">
              <div>
                <div className="bg-slate-900 h-[3px] w-[33px] mb-4"></div>
                <h3 className="text-slate-900 text-xl md:text-2xl font-semibold tracking-[-0.96px] md:tracking-[-1.12px] leading-tight font-geist mb-4">
                  Payment Terms
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <div className="bg-slate-900 text-yellow-400 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 font-bold font-geist text-xs">
                      1
                    </div>
                    <div>
                      <p className="text-slate-900 text-sm font-medium tracking-[-0.56px] leading-[18px] font-geist">
                        50% deposit (2 weeks before)
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="bg-slate-900 text-yellow-400 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 font-bold font-geist text-xs">
                      2
                    </div>
                    <div>
                      <p className="text-slate-900 text-sm font-medium tracking-[-0.56px] leading-[18px] font-geist">
                        50% final (5 days after)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Choose Us Card */}
            <div className="md:col-span-6 bg-white rounded-2xl p-6 md:p-8 border border-gray-200 overflow-hidden min-h-[180px]">
              <div className="bg-yellow-400 h-[3px] w-[33px] mb-4"></div>
              <h3 className="text-slate-900 text-xl md:text-2xl font-semibold tracking-[-0.96px] md:tracking-[-1.12px] leading-tight font-geist mb-4">
                Why Choose Us
              </h3>
              <div className="space-y-2.5">
                {[
                  "Fully insured & bonded",
                  "Eco-friendly solutions",
                  "24/7 emergency response",
                  "Satisfaction guarantee"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="bg-yellow-400 rounded-full w-1.5 h-1.5 flex-shrink-0"></div>
                    <p className="text-slate-900 text-sm tracking-[-0.56px] leading-[18px] font-geist">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
      <FinalCTA/>
      <ServiceAreas/>
      <Footer />
    </>
  );
}