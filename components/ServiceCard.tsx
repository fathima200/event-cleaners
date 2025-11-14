"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ServiceData } from "@/utils/servicesData";

interface ServiceCardProps {
  service: ServiceData;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  // Define grow factors for a more dynamic layout on desktop
  const growFactors = ["md:grow-[0.75]", "md:grow", "md:grow", "md:grow-[0.75]"];
  const growClass = growFactors[index % 4];

  return (
    <motion.div
      className={`relative box-border caret-transparent basis-auto grow-0 shrink-0 w-full md:basis-0 md:w-px ${growClass}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
    >
      <Link
        href={`/services/${service.slug}`}
        className="relative text-blue-700 content-center items-center bg-white box-border caret-transparent gap-x-0 flex h-min justify-center gap-y-0 w-full overflow-hidden p-2 rounded-[32px]"
      >
        <div className="relative content-start items-start bg-zinc-900 box-border caret-transparent gap-x-[420px] flex basis-0 flex-col grow shrink-0 h-min justify-between gap-y-8 w-px overflow-hidden p-8 rounded-3xl after:absolute after:inset-0 after:border after:rounded-3xl after:border-white/20">
          <div className="absolute box-border caret-transparent shrink-0 h-[120%] left-[-10%] top-[-10%] w-[120%] z-0 overflow-hidden [mask-image:linear-gradient(rgba(0,0,0,0.6)_21%,rgb(0,0,0)_28%,rgb(0,0,0)_64%,rgba(0,0,0,0.12)_73%)]">
            <div className="absolute box-border caret-transparent inset-0">
              <Image
                src={service.cardImage}
                alt={`Background for ${service.title}`}
                fill
                className="box-border caret-transparent object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          <div className="relative z-10 box-border caret-transparent flex flex-col shrink-0 justify-center max-w-[232px] break-words w-full">
            <p className="text-white text-[15px] box-border caret-transparent tracking-[-0.6px] leading-[18px] break-words text-left font-geist md:text-xl md:tracking-[-0.8px] md:leading-[26px]">
              {service.cardTitle}
            </p>
          </div>

          <div className="relative z-10 content-start items-start box-border caret-transparent gap-x-8 flex flex-col shrink-0 h-min justify-start gap-y-8 w-full overflow-hidden">
            <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-center break-words w-full max-w-[400px]">
              <p className="text-zinc-100 text-sm box-border caret-transparent tracking-[-0.56px] leading-[18px] break-words text-left font-geist md:text-[15px] md:tracking-[-0.6px] md:leading-[21px]">
                {service.cardDescription}
              </p>
            </div>
            <div className="relative content-center items-center box-border caret-transparent flex shrink-0 h-min justify-between w-full overflow-hidden">
              <div className="relative content-end items-end box-border caret-transparent gap-x-2 flex basis-0 grow shrink-0 h-min justify-start gap-y-2 w-px overflow-hidden">
                {/* Icon can be added here if needed */}
                <p className="text-zinc-100 text-xs box-border caret-transparent tracking-[-0.48px] leading-[15px] break-words font-geist md:text-sm md:tracking-[-0.56px] md:leading-[18px]">
                  {service.title}
                </p>
              </div>
              <div className="relative content-center items-center bg-yellow-300 box-border caret-transparent flex shrink-0 justify-center rounded-full px-4 py-2">
                <p className="text-slate-900 text-xs font-bold font-geist">View More</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ServiceCard;