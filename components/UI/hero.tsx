// // components/UI/hero.tsx

// "use client";

// import Image from "next/image";

// export default function Hero() {
//   return (
//     <section className="relative content-center items-center bg-zinc-900 box-border caret-transparent gap-x-0 flex flex-col shrink-0 h-min justify-center min-h-[1000px] gap-y-0 w-full overflow-hidden">
//       {/* Background Image with Mask */}
//       <div className="box-border caret-transparent contents">
//         <div className="[mask-image:linear-gradient(rgba(0,0,0,0.3)_67%,rgba(0,0,0,0.9)_73%)] absolute aspect-[1.38717_/_1] box-border caret-transparent shrink-0 left-[-262px] right-[-685px] translate-y-[1797.6px] z-0 overflow-hidden -top-10 bottom-auto md:aspect-[1.44231_/_1] md:bottom-[-87px] md:left-[-98px] md:right-[-120px] md:top-auto">
//           <div className="absolute box-border caret-transparent inset-0">
//             <Image
//               src="https://framerusercontent.com/images/0d1IjciVK2Luo59hCJ973unq7Xo.png?width=3006&height=2000"
//               alt=""
//               width={3006}
//               height={2000}
//               className="aspect-[auto_3006_/_2000] box-border caret-transparent h-full object-cover w-full"
//             />
//           </div>
//         </div>
//       </div>

//       {/* Main Content Container */}
//       <div className="relative content-center items-center box-border caret-transparent gap-x-2.5 flex shrink-0 h-min justify-center max-w-[680px] gap-y-2.5 w-full overflow-hidden md:max-w-[1440px]">
//         <div className="relative content-center items-center box-border caret-transparent gap-x-10 flex basis-auto flex-col grow-0 shrink-0 h-min justify-center gap-y-10 w-full pb-0 md:content-start md:items-start md:gap-x-40 md:basis-0 md:grow md:justify-start md:gap-y-40 md:w-px md:pb-10">
          
//           {/* Trust Badge + Heading */}
//           <div className="relative content-start items-start box-border caret-transparent gap-x-0 flex flex-col shrink-0 h-min justify-start gap-y-0 w-full">
//             {/* Trust Badge */}
//             <div className="relative content-center items-center box-border caret-transparent gap-x-1 flex flex-col shrink-0 h-min justify-center gap-y-1 w-full px-1 md:flex-row md:justify-start">
//               <div className="box-border caret-transparent contents">
//                 <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-center order-1 text-nowrap md:order-none">
//                   <p className="text-white text-sm box-border caret-transparent tracking-[-0.56px] leading-[18px] text-nowrap font-geist md:text-[15px] md:tracking-[-0.6px] md:leading-[21px]">
//                     Trusted by 200+ businesses
//                   </p>
//                 </div>
//               </div>
//               <div className="relative box-border caret-transparent shrink-0 h-5 w-5">
//                 <div className="box-border caret-transparent h-full w-full">
//                   <Image
//                     src="https://c.animaapp.com/mhoscdg4cN8yi3/assets/icon-1.svg"
//                     alt="Icon"
//                     width={20}
//                     height={20}
//                     className="box-border caret-transparent h-full w-full"
//                   />
//                 </div>
//               </div>
//               <div className="relative content-start items-start box-border caret-transparent gap-x-0 flex shrink-0 h-min justify-start gap-y-0 w-min">
//                 {/* 4 Avatar Images */}
//                 {[
//                   "https://framerusercontent.com/images/2d6UchpU1MbzUJ2Yeq8GV9oVUE.jpeg?width=3840&height=2160",
//                   "https://framerusercontent.com/images/QVXc7XNFjUQMh5mvlsEvlpbufA.jpg?width=5824&height=3264",
//                   "https://framerusercontent.com/images/V4ZSTNUfR6HbnZJ7laCuTCDzXe0.jpg?width=1920&height=1080",
//                   "https://framerusercontent.com/images/NZf7rUTgsiGPwfln9OdG3ArXMWI.jpg?width=6016&height=4016",
//                 ].map((src, i) => (
//                   <div key={i} className="box-border caret-transparent contents">
//                     <div className="relative aspect-[0.75_/_1] box-border caret-transparent shrink-0 h-auto w-[18px] md:aspect-auto md:h-8 md:w-6">
//                       <div className="relative box-border caret-transparent gap-x-2.5 h-full gap-y-2.5 w-full">
//                         <div className="absolute aspect-square box-border caret-transparent shrink-0 z-[1] rounded-[100px] left-0 inset-y-0 after:accent-auto after:box-border after:caret-transparent after:text-black after:block after:text-xs after:not-italic after:normal-nums after:font-normal after:h-full after:tracking-[normal] after:leading-[normal] after:list-outside after:list-disc after:pointer-events-none after:absolute after:text-start after:indent-[0px] after:normal-case after:visible after:w-full after:rounded-[100px] after:border-separate after:border-2 after:border-solid after:border-white after:left-0 after:top-0 after:font-sans_serif">
//                           <div className="absolute box-border caret-transparent rounded-[100px] inset-0">
//                             <Image
//                               src={src}
//                               alt=""
//                               width={i === 0 ? 3840 : i === 1 ? 5824 : i === 2 ? 1920 : 6016}
//                               height={i === 0 ? 2160 : i === 1 ? 3264 : i === 2 ? 1080 : 4016}
//                               className="aspect-[auto] box-border caret-transparent h-full object-cover w-full rounded-[100px]"
//                             />
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Hero Heading */}
//             <div className="box-border caret-transparent contents">
//               <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start break-words w-full">
//                 <h1 className="text-white text-5xl font-semibold box-border caret-transparent tracking-[-1.92px] leading-[44px] break-words font-geist md:text-8xl md:tracking-[-3.84px] md:leading-[90px]">
//                   Clean space
//                 </h1>
//                 <h1 className="text-white text-5xl font-semibold box-border caret-transparent tracking-[-1.92px] leading-[44px] break-words font-geist md:text-8xl md:tracking-[-3.84px] md:leading-[90px]">
//                   starts here
//                 </h1>
//               </div>
//             </div>
//           </div>

//           {/* Description */}
//           <div className="relative content-center items-center box-border caret-transparent gap-x-2.5 flex shrink-0 h-min justify-center gap-y-2.5 w-full overflow-hidden md:justify-start">
//             <div className="box-border caret-transparent contents">
//               <div className="relative box-border caret-transparent flex basis-0 flex-col grow shrink-0 justify-center max-w-xs break-words w-px md:max-w-[420px]">
//                 <p className="text-zinc-100 text-[15px] box-border caret-transparent tracking-[-0.6px] leading-[18px] break-words text-left font-geist md:text-xl md:tracking-[-0.8px] md:leading-[26px]">
//                   Professional cleaning services for offices, homes, and commercial spaces - done right, every time.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Promo Card (Right Side on Desktop) */}
//         <div className="relative content-center items-center self-auto box-border caret-transparent gap-x-0 flex basis-auto grow-0 shrink-0 h-min justify-center gap-y-0 w-full overflow-hidden md:self-stretch md:basis-0 md:grow md:h-auto md:justify-end md:w-px">
//           <div className="relative content-center items-center bg-zinc-900 box-border caret-transparent gap-x-16 flex basis-0 flex-col grow shrink-0 h-min justify-center max-w-[400px] gap-y-16 w-px overflow-hidden p-6 rounded-3xl md:content-start md:items-start md:gap-x-12 md:h-full md:justify-end md:max-w-[460px] md:gap-y-12 md:pt-[120px] md:pb-10 md:px-10 md:rounded-[32px] after:accent-auto after:box-border after:caret-transparent after:text-black after:block after:text-xs after:not-italic after:normal-nums after:font-normal after:h-full after:tracking-[normal] after:leading-[normal] after:list-outside after:list-disc after:pointer-events-none after:absolute after:text-start after:indent-[0px] after:normal-case after:visible after:w-full after:border after:border-yellow-400 after:rounded-3xl after:border-separate after:border-solid after:left-0 after:top-0 after:font-sans_serif after:md:rounded-[32px]">
            
//             {/* Promo Background Image */}
//             <div className="box-border caret-transparent contents">
//               <div className="mask-[linear-gradient(rgba(0,0,0,0.3)_61%,rgba(0,0,0,0.9)_148%)] absolute aspect-[1.38717_/_1] box-border caret-transparent shrink-0 left-[-100px] top-[-129px] z-0 overflow-hidden -right-16 md:aspect-[1.44231_/_1] md:left-[-155px] md:right-[-109px] md:top-[-26px]">
//                 <div className="absolute box-border caret-transparent inset-0">
//                   <Image
//                     src="https://framerusercontent.com/images/vONJRcDiOdig242Q3TiVm6E4.jpg?width=3400&height=3000"
//                     alt=""
//                     width={3400}
//                     height={3000}
//                     className="aspect-[auto_3400/3000] box-border caret-transparent h-full object-cover w-full"
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* Promo Text */}
//             <div className="relative content-center items-center box-border caret-transparent gap-x-2 flex flex-col shrink-0 h-min justify-center gap-y-2 w-full overflow-hidden md:content-start md:items-start">
//               <div className="box-border caret-transparent contents">
//                 <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-center break-words w-full">
//                   <p className="text-white text-[15px] box-border caret-transparent tracking-[-0.6px] leading-[18px] break-words font-geist md:text-base md:tracking-[-0.64px] md:leading-[22px]">
//                     * 12% discount for first time user
//                   </p>
//                 </div>
//               </div>
//               <div className="box-border caret-transparent contents">
//                 <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-center break-words w-full">
//                   <p className="text-white text-[15px] box-border caret-transparent tracking-[-0.6px] leading-[18px] break-words font-geist md:text-base md:tracking-[-0.64px] md:leading-[22px]">
//                     * 24% discount for repeating clients
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* CTA Button */}
//             <div className="box-border caret-transparent contents">
//               <div className="relative box-border caret-transparent shrink-0 h-14 md:h-[70px]">
//                 <a
//                   href="https://neative.framer.website/contact-us"
//                   className="relative text-blue-700 content-center items-center bg-yellow-400 shadow-[rgba(246,227,4,0.32)_0px_8px_25px_0px] box-border caret-transparent gap-x-5 flex h-full justify-center gap-y-5 w-min pl-10 pr-3 py-[30px] rounded-[35px]"
//                 >
//                   <div className="relative content-center items-center box-border caret-transparent gap-x-2.5 flex shrink-0 h-min justify-center gap-y-2.5 w-min">
//                     <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start text-nowrap">
//                       <p className="text-slate-900 text-[15px] box-border caret-transparent tracking-[-0.6px] leading-[18px] text-nowrap font-geist md:text-base md:tracking-[-0.64px] md:leading-[22px]">
//                         Get a free quote
//                       </p>
//                     </div>
//                   </div>
//                   <div className="relative content-center items-center aspect-square bg-slate-900 box-border caret-transparent gap-x-2.5 flex shrink-0 justify-center gap-y-2.5 w-[46px] overflow-hidden rounded-[23px]">
//                     <div className="relative box-border caret-transparent shrink-0 h-[22px] w-[22px]">
//                       <div className="box-border caret-transparent contents">
//                         <Image
//                           src="https://c.animaapp.com/mhoscdg4cN8yi3/assets/icon-2.svg"
//                           alt="Icon"
//                           width={22}
//                           height={22}
//                           className="text-yellow-400 box-border caret-transparent inline-block shrink-0 h-full w-full"
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



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
    <section className="relative flex items-center justify-center bg-zinc-900 min-h-screen w-full overflow-hidden px-4 sm:px-6 lg:px-8 py-24 md:py-32">
      {/* Background Image with Mask */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute w-full h-full opacity-30"
          style={{
            maskImage: 'linear-gradient(rgba(0,0,0,0.3) 67%, rgba(0,0,0,0.9) 73%)',
            WebkitMaskImage: 'linear-gradient(rgba(0,0,0,0.3) 67%, rgba(0,0,0,0.9) 73%)'
          }}
        >
          <Image
            src="/cleaning-office.jpg"
            alt=""
            fill
            className="object-cover opacity-60"
            priority
          />
        </div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Content */}
          <div className="flex flex-col gap-8 lg:gap-12">
            
            {/* Trust Badge */}
            <div 
              className={`flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2 sm:gap-3 transition-all duration-1000 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '100ms' }}
            >
              <p className="text-white text-sm md:text-[15px] tracking-tight font-geist">
                Trusted by 200+ businesses
              </p>
              
              <div className="flex items-center gap-1">
                <div className="w-5 h-5 relative">
                  <Image
                    src="https://c.animaapp.com/mhoscdg4cN8yi3/assets/icon-1.svg"
                    alt="Icon"
                    width={20}
                    height={20}
                    className="w-full h-full"
                  />
                </div>
                
                {/* Avatar Images */}
                <div className="flex -space-x-2">
                  {[
                    "https://framerusercontent.com/images/2d6UchpU1MbzUJ2Yeq8GV9oVUE.jpeg?width=3840&height=2160",
                    "https://framerusercontent.com/images/QVXc7XNFjUQMh5mvlsEvlpbufA.jpg?width=5824&height=3264",
                    "https://framerusercontent.com/images/V4ZSTNUfR6HbnZJ7laCuTCDzXe0.jpg?width=1920&height=1080",
                    "https://framerusercontent.com/images/NZf7rUTgsiGPwfln9OdG3ArXMWI.jpg?width=6016&height=4016",
                  ].map((src, i) => (
                    <div 
                      key={i} 
                      className="relative w-6 h-6 md:w-8 md:h-8 rounded-full border-2 border-white overflow-hidden transition-transform hover:scale-110 hover:z-10"
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
            </div>

            {/* Hero Heading */}
            <div 
              className={`transition-all duration-1000 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '300ms' }}
            >
              <h1 className="text-white text-5xl sm:text-6xl md:text-7xl lg:text-7xl font-semibold tracking-tight leading-tight font-geist text-center lg:text-left">
                Flawless Event & Plaza 
              </h1>
              <h1 className="text-white text-5xl sm:text-6xl md:text-7xl lg:text-7xl font-semibold tracking-tight leading-tight font-geist text-center lg:text-left">
                Cleaning You Can Count On
              </h1>
            </div>

            {/* Description */}
            <div 
              className={`transition-all duration-1000 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '500ms' }}
            >
              <p className="text-zinc-100 text-base md:text-lg lg:text-xl tracking-tight leading-relaxed font-geist max-w-md mx-auto lg:mx-0 text-center lg:text-left">
Trusted by Toronto’s biggest festivals and plazas, we bring 10+ years of expert cleaning that leaves every space spotless — and every client stress-free.              </p>
            </div>
          </div>

          {/* Promo Card (Right Side) */}
          <div 
            className={`transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
            style={{ transitionDelay: '700ms' }}
          >
            <div className="relative bg-zinc-900 border border-yellow-400 rounded-3xl md:rounded-[32px] p-6 md:p-10 max-w-md mx-auto lg:max-w-none overflow-hidden">
              
              {/* Promo Background Image with Mask */}
              <div 
                className="absolute inset-0 z-0 overflow-hidden rounded-3xl md:rounded-[32px]"
                style={{
                  maskImage: 'linear-gradient(rgba(0,0,0,0.3) 61%, rgba(0,0,0,0.9) 100%)',
                  WebkitMaskImage: 'linear-gradient(rgba(0,0,0,0.3) 61%, rgba(0,0,0,0.9) 100%)'
                }}
              >
                <div className="absolute inset-0 scale-110">
                  <Image
                    src="/men-cleaning.jpg"
                    alt=""
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10 flex flex-col gap-8 md:gap-12 min-h-[400px] md:min-h-[500px] justify-end">
                
                {/* Promo Text */}
                <div className="flex flex-col gap-2">
                  <p className="text-white text-[15px] md:text-base tracking-tight leading-snug font-geist">
                    * 12% discount for first time user
                  </p>
                  <p className="text-white text-[15px] md:text-base tracking-tight leading-snug font-geist">
                    * 24% discount for repeating clients
                  </p>
                </div>

                {/* CTA Button */}
                <a
                  href="https://neative.framer.website/contact-us"
                  className="relative inline-flex items-center justify-between bg-yellow-400 hover:bg-yellow-300 shadow-lg shadow-yellow-400/30 rounded-[35px] pl-8 md:pl-10 pr-3 py-4 md:py-5 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-yellow-400/40 group"
                >
                  <p className="text-slate-900 text-[15px] md:text-base tracking-tight font-geist font-medium whitespace-nowrap">
                    Get a free quote
                  </p>
                  
                  <div className="flex items-center justify-center w-[46px] h-[46px] bg-slate-900 rounded-full ml-4 transition-transform duration-300 group-hover:rotate-45">
                    <Image
                      src="https://c.animaapp.com/mhoscdg4cN8yi3/assets/icon-2.svg"
                      alt="Arrow"
                      width={22}
                      height={22}
                      className="w-[22px] h-[22px]"
                    />
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