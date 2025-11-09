// "use client";

// import Image from "next/image";
// import { SectionHeader } from "@/components/SectionHeader";

// export default function ServicesSection() {
//   const services = [
//     {
//       icon: "https://framerusercontent.com/images/EJiX9pQTdQtrv9XaNrwNmR1yTw.png?width=290&height=378",
//       title: "Event Venues",
//       desc: "Festivals, concerts, and parades like Caribana and Pride – we handle pre-event, during-event, and post-event cleaning to make your events unforgettable.",
//     },
//     {
//       icon: "https://framerusercontent.com/images/EZxFKRJx1xbdn5nFmsmd2aaWmg.png?width=296&height=296",
//       title: "Parking Lots",
//       desc: "Large commercial plazas like Yorkdale and Scarborough Town Centre – our sweeping, debris removal, and pressure washing services boost curb appeal and safety.",
//     },
//     {
//       icon: "https://framerusercontent.com/images/sCFJh8S4jrb6jZV8vYCqe0Lne0.png?width=333&height=331",
//       title: "Winter Spaces",
//       desc: "Event grounds and plazas during Toronto’s harsh winters – our 24/7 snow removal and de-icing keep your spaces accessible and safe.",
//     },
//   ];

//   const galleryImages = [
//     {
//       src: "https://framerusercontent.com/images/kPKkQK9JXBbk0yG8uxPMX634II.png?width=2200&height=1144",
//       mobileAspect: "aspect-[1.92308_/_1]",
//       desktopAspect: "aspect-[0.980392_/_1]",
//       objectPosition: "object-[62.7%_47.1%]",
//       className: "md:order-1",
//     },
//     {
//       src: "https://framerusercontent.com/images/wxH8favwzyKL08fxNE0pcfylT0.png?width=3000&height=2000",
//       mobileAspect: "aspect-[0.980392_/_1]",
//       desktopAspect: "aspect-[0.980392_/_1]",
//       className: "order-1 md:order-none",
//     },
//   ];

//   return (
//     <section className="relative content-center items-center bg-zinc-100 box-border caret-transparent gap-x-0 flex flex-col shrink-0 h-min justify-center gap-y-0 w-full overflow-hidden px-5 py-[60px] md:pt-[100px] md:pb-[120px] md:px-10">
//       <div className="relative content-center items-center box-border caret-transparent gap-x-10 flex flex-col shrink-0 h-min justify-center max-w-[680px] gap-y-10 w-full overflow-hidden md:gap-x-0 md:max-w-[1440px] md:gap-y-0">
//         <div className="relative content-center items-center box-border caret-transparent gap-x-10 flex flex-col shrink-0 h-min justify-center gap-y-10 w-full overflow-hidden md:gap-x-20 md:gap-y-20">
          
//           {/* Section Header */}
//           <SectionHeader
//             variant="variant1"
//             tagText="Who We Serve"
//             title={"Spaces We \nTransform"}
//             description="We keep Toronto’s busiest event venues and commercial plazas pristine, ensuring every space shines for guests and visitors."
//             showLink={true}
//             linkText="Discover Our Services"
//             linkUrl="https://neative.framer.website/about"
//             linkIconSrc="https://c.animaapp.com/mhoscdg4cN8yi3/assets/icon-2.svg"
//           />

//           {/* Service Cards Grid */}
//           <div className="relative content-center items-center box-border caret-transparent gap-x-5 flex flex-col shrink-0 auto-rows-[minmax(0px,1fr)] grid-cols-[repeat(3,minmax(50px,1fr))] grid-rows-[repeat(1,minmax(0px,1fr))] h-min justify-center gap-y-5 w-full overflow-hidden md:[align-items:normal] md:grid md:flex-row">
//             {services.map((service, index) => (
//               <div key={index} className="box-border caret-transparent contents">
//                 <div className="relative self-auto box-border caret-transparent shrink-0 justify-self-start w-full md:self-start">
//                   <div className="relative content-start items-start bg-white box-border caret-transparent gap-x-6 flex flex-col h-min justify-start gap-y-6 w-full p-6 rounded-2xl">
                    
//                     {/* Icon + Title   (add an icon ) */ } 
//                     <div className="relative content-start items-start box-border caret-transparent gap-x-2 flex flex-col shrink-0 h-min justify-start gap-y-2 w-full">
//                       <div className="relative aspect-[0.788462/1] box-border caret-transparent shrink-0 w-[47px]">
//                         <div className="absolute box-border caret-transparent inset-0">
//                         </div>
//                       </div>
//                       <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start break-words w-full">
//                         <p className="text-slate-900 text-base font-medium box-border caret-transparent tracking-[-0.64px] leading-[19.2px] break-words uppercase font-geist md:text-xl md:tracking-[-0.8px] md:leading-6">
//                           {service.title}
//                         </p>
//                       </div>
//                     </div>

//                     {/* Description */}
//                     <div className="relative content-center items-center box-border caret-transparent gap-x-2.5 flex shrink-0 h-min justify-start gap-y-2.5 w-full">
//                       <div className="relative box-border caret-transparent flex basis-0 flex-col grow shrink-0 justify-center break-words w-px">
//                         <p className="text-slate-600 text-sm box-border caret-transparent tracking-[-0.56px] leading-[18px] break-words font-geist md:text-[15px] md:tracking-[-0.6px] md:leading-[21px]">
//                           {service.desc}
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Gallery */}
//           <div className="relative content-end items-end box-border caret-transparent gap-x-5 flex flex-col shrink-0 h-min justify-center gap-y-5 w-full overflow-hidden md:flex-row">
//             {galleryImages.map((img, index) => (
//               <div
//                 key={index}
//                 className={`relative content-center items-center box-border caret-transparent gap-x-2.5 flex basis-auto flex-row grow-0 shrink-0 h-min justify-center gap-y-2.5 w-full overflow-hidden rounded-2xl md:basis-0 md:flex-col md:grow md:w-px md:rounded-[32px] ${img.className}`}
//               >
//                 <div className="box-border caret-transparent contents">
//                   <div
//                     className={`relative ${img.mobileAspect} box-border caret-transparent basis-0 grow shrink-0 w-px md:${img.desktopAspect} md:basis-auto md:grow-0 md:w-full`}
//                   >
//                     <div className="absolute box-border caret-transparent inset-0">
//                       <Image
//                         src="/men-cleaning.jpg"
//                         width={600}
//                         height={400}
//                         alt=""
//                         className={`aspect-auto box-border caret-transparent h-full object-cover w-full ${img.objectPosition || ''}`}
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }




"use client";

import Image from "next/image";
import { SectionHeader } from "@/components/SectionHeader";
import { useEffect, useRef, useState } from "react";

export default function ServicesSection() {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [visibleGallery, setVisibleGallery] = useState(false);
  const cardsRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      title: "Event Venues",
      desc: "Pre, during, and post-event cleaning for festivals and concerts.",
    },
    {
      title: "Parking Lots",
      desc: "Sweeping, debris removal, and pressure washing services.",
    },
    {
      title: "Winter Spaces",
      desc: "24/7 snow removal and de-icing services.",
    },
  ];

  const galleryImages = [
    {
      src: "/men-cleaning.jpg",
      alt: "Professional cleaning service",
    },
    {
      src: "/men-cleaning.jpg",
      alt: "Commercial space cleaning",
    },
  ];

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px",
    };

    const cardsObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          services.forEach((_, index) => {
            setTimeout(() => {
              setVisibleCards((prev) => [...new Set([...prev, index])]);
            }, index * 150);
          });
        }
      });
    }, observerOptions);

    const galleryObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleGallery(true);
        }
      });
    }, observerOptions);

    if (cardsRef.current) cardsObserver.observe(cardsRef.current);
    if (galleryRef.current) galleryObserver.observe(galleryRef.current);

    return () => {
      cardsObserver.disconnect();
      galleryObserver.disconnect();
    };
  }, []);

  return (
    <section className="relative bg-zinc-100 w-full overflow-hidden">
      
      {/* Header Section */}
      <div className="px-6 pt-20 pb-12 md:px-12 md:pt-32 md:pb-16 max-w-[1400px] mx-auto">
        <SectionHeader
          variant="variant1"
          tagText="Who We Serve"
          title={"Spaces We \nTransform"}
          description="We keep Toronto's busiest event venues and commercial plazas pristine, ensuring every space shines for guests and visitors."
          showLink={true}
          linkText="Discover Our Services"
          linkUrl="https://neative.framer.website/about"
          linkIconSrc="https://c.animaapp.com/mhoscdg4cN8yi3/assets/icon-2.svg"
        />
      </div>

      {/* Main Content Grid */}
      <div className="px-6 pb-20 md:px-12 md:pb-32 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left: Service Cards */}
          <div ref={cardsRef} className="lg:col-span-5  space-y-4">
            {services.map((service, index) => (
              <div
                key={index}
                className={`
                  transition-all duration-700 ease-out rounded-lg
                  ${
                    visibleCards.includes(index)
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-8"
                  }
                `}
              >
                <div className="bg-white p-6 md:p-8 border rounded-2xl border-zinc-200 hover:border-zinc-300 transition-colors duration-300">
                  <div className="flex items-start gap-5">
                    {/* Icon */}
                    <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14">
                      <svg
                        className="w-full h-full text-zinc-900"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        {index === 0 && (
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                          />
                        )}
                        {index === 1 && (
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                          />
                        )}
                        {index === 2 && (
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                          />
                        )}
                      </svg>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-slate-900 text-lg md:text-xl font-medium mb-2 tracking-tight">
                        {service.title}
                      </h3>
                      <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                        {service.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

{/* Right: Gallery Images */}
<div
  ref={galleryRef}
  className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
>
  {galleryImages.map((img, index) => (
    <div
      key={index}
      className={`
        relative overflow-hidden rounded-2xl
        transition-all duration-700 ease-out
        ${
          visibleGallery
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-12"
        }
        ${index === 0 ? "md:row-span-2" : ""}
      `}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      <div className="relative h-full min-h-[300px] md:min-h-[400px]">
        <Image
          src={img.src}
          width={800}
          height={1000}
          alt={img.alt}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  ))}
</div>
        </div>
      </div>
    </section>
  );
}