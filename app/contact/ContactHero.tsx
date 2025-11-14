"use client";

import Image from "next/image";

export default function ContactHero() {
  return (
    <section className="relative flex flex-col items-center justify-center bg-slate-900 overflow-hidden pt-[150px] pb-5 md:pt-40 md:pb-[120px]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/spraying-table.jpg"
          alt="Technician spraying a table for cleaning"
          fill
          className="object-cover opacity-50"
          priority
        />
        <div className="absolute inset-0 bg-slate-900/90" />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-6 w-full max-w-[680px] md:max-w-[1440px] px-5">
        <div className="flex flex-col items-center gap-2 text-center">
          <p className="font-geist text-zinc-300 text-sm md:text-base uppercase tracking-[-0.56px] md:tracking-[-0.64px]">
            let's work together
          </p>
          <div className="max-w-[300px] md:max-w-[860px]">
            <h1 className="font-geist text-white text-5xl md:text-8xl font-semibold tracking-[-1.92px] md:tracking-[-3.84px] leading-[44px] md:leading-[90px]">
              Your Spotless Space Awaits!
            </h1>
          </div>
        </div>
        <div className="max-w-[520px] md:max-w-screen-sm text-center">
          <p className="font-geist text-zinc-300 text-base md:text-lg tracking-[-0.64px] md:tracking-[-0.72px] leading-[21px] md:leading-6">
            Contact Us Now to Get Your Free Quote!
          </p>
        </div>
      </div>
    </section>
  );
}
