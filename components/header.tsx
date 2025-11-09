// // header.tsx

// "use client";

// import React, { useState } from "react";
// import Image from "next/image"; // ✅ Added import for Image

// const DesktopMenu = () => (
//   <div className="relative content-center items-center box-border caret-transparent gap-x-12 flex h-min justify-center gap-y-12 w-min overflow-hidden">
//     {/* About */}
//     <div className="relative box-border caret-transparent shrink-0">
//       <a
//         href="https://neative.framer.website/about"
//         className="relative text-blue-700 content-center items-center box-border caret-transparent gap-x-1 flex h-min justify-center gap-y-1 w-min overflow-hidden px-3 py-1.5"
//       >
//         <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start text-nowrap">
//           <p className="text-white text-[15px] box-border caret-transparent tracking-[-0.6px] leading-[18px] text-nowrap font-geist md:text-base md:tracking-[-0.64px] md:leading-[22px]">
//             About
//           </p>
//         </div>
//       </a>
//     </div>

//     {/* Services */}
//     <div className="relative box-border caret-transparent shrink-0">
//       <a
//         href="https://neative.framer.website/services"
//         className="relative text-blue-700 content-center items-center box-border caret-transparent gap-x-1 flex h-min justify-center gap-y-1 w-min overflow-hidden px-3 py-1.5"
//       >
//         <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start text-nowrap">
//           <p className="text-white text-[15px] box-border caret-transparent tracking-[-0.6px] leading-[18px] text-nowrap font-geist md:text-base md:tracking-[-0.64px] md:leading-[22px]">
//             Services
//           </p>
//         </div>
//       </a>
//     </div>

//     {/* Pricing */}
//     <div className="relative box-border caret-transparent shrink-0">
//       <a
//         href="https://neative.framer.website/pricing"
//         className="relative text-blue-700 content-center items-center box-border caret-transparent gap-x-1 flex h-min justify-center gap-y-1 w-min overflow-hidden px-3 py-1.5"
//       >
//         <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start text-nowrap">
//           <p className="text-white text-[15px] box-border caret-transparent tracking-[-0.6px] leading-[18px] text-nowrap font-geist md:text-base md:tracking-[-0.64px] md:leading-[22px]">
//             Pricing
//           </p>
//         </div>
//       </a>
//     </div>
//   </div>
// );

// const ContactButton = () => (
//   <div className="relative box-border caret-transparent shrink-0 h-10">
//     <a
//       href="https://neative.framer.website/contact-us"
//       className="
//         relative content-center items-center box-border caret-transparent 
//         gap-x-5 flex h-full justify-center gap-y-5 w-full  py-7 rounded-[35px]
        
//         /* Mobile (default) */
//          bg-[#081D3A] text-white px-30
        
//         /* Desktop only: override to original */
//         md:bg-white md:text-slate-900 md:px-12 md:py-6
//       "
//     >
//       <div className="relative content-center items-center box-border caret-transparent gap-x-2.5 flex shrink-0 h-min justify-center gap-y-2.5 w-min">
//         <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start text-nowrap">
//           <p className="text-[15px] box-border caret-transparent tracking-[-0.6px] leading-[18px] text-nowrap font-geist md:text-base md:tracking-[-0.64px] md:leading-[22px]">
//             Contact us
//           </p>
//         </div>
//       </div>
//     </a>
//   </div>
// );

// const NavbarLogo = () => (
//   <div className="relative content-center items-center box-border caret-transparent gap-x-0 flex shrink-0 h-min  justify-center gap-y-0 w-min">
//     <div className="relative box-border caret-transparent shrink-0">
//       <div className="relative box-border caret-transparent h-40 w-40 overflow-hidden">
//         <a
//           aria-label="brand logo link to home"
//           href="/"
//           className="absolute text-blue-700 content-center items-center box-border caret-transparent gap-x-2.5 flex shrink-0 h-min justify-center gap-y-2.5 w-full left-0 top-0"
//         >
//           <div className="relative text-black aspect-[1.04762_/_1] box-border caret-transparent shrink-0">
//             <div className="aspect-[1.04762_/_1] box-border caret-transparent h-full w-full">
//               <Image
//                 src="/a-logo.png"
//                 alt="Icon"
//                 width={150}     
//                 height={150}
//                 className="box-border caret-transparent h-full w-full object-contain"
//               />
//             </div>
//           </div>
//         </a>
//       </div>
//     </div>
//   </div>
// );
// /* -------------------------------------------------------------------------- */
// /*                                   NAVBAR                                   */
// /* -------------------------------------------------------------------------- */
// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <>
//       {/* Fixed Navbar */}
//       <nav className="fixed inset-x-0 top-0 z-50 flex h-20 w-full items-center justify-between overflow-hidden bg-[#081D3A] backdrop-blur-sm px-4 sm:px-8">
//         <div className="flex w-full items-center justify-between">

//           {/* Logo (Left) */}
//           <NavbarLogo />

//           {/* Desktop: Centered Menu + Right CTA */}
//           <div className="hidden md:flex md:w-full md:justify-center md:items-center">
//             <div className="flex w-full max-w-3xl justify-center items-center gap-x-12">
//               <DesktopMenu />
//             </div>
//             <div className="ml-auto">
//               <ContactButton />
//             </div>
//           </div>

//           {/* Mobile: Only Hamburger */}
//           <div className="flex md:hidden">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               aria-label="Toggle menu"
//               className="relative box-border caret-transparent p-2 rounded-md text-white hover:bg-white/10 transition-colors"
//             >
//               <div className="space-y-1">
//                 <span className="block h-0.5 w-6 bg-white"></span>
//                 <span className="block h-0.5 w-6 bg-white"></span>
//                 <span className="block h-0.5 w-6 bg-white"></span>
//               </div>
//             </button>
//           </div>

//         </div>
//       </nav>

//       {/* Mobile Menu Dropdown */}
//       {isOpen && (
//         <div className="fixed inset-x-0 top-20 z-40 bg-[#eeda03] border-t border-white/10 md:hidden rounded-4xl mx-5 shadow-lg mt-5">
//           <div className="flex flex-col items-center gap-y-6 px-6 py-8">
//             <a
//               href="https://neative.framer.website/about"
//               onClick={() => setIsOpen(false)}
//               className="text-black text-lg font-geist tracking-[-0.6px] hover:text-blue-300 transition-colors"
//             >
//               About
//             </a>
//             <a
//               href="https://neative.framer.website/services"
//               onClick={() => setIsOpen(false)}
//               className="text-black text-lg font-geist tracking-[-0.6px] hover:text-blue-300 transition-colors"
//             >
//               Services
//             </a>
//             <a
//               href="https://neative.framer.website/pricing"
//               onClick={() => setIsOpen(false)}
//               className="text-black text-lg font-geist tracking-[-0.6px] hover:text-blue-300 transition-colors"
//             >
//               Pricing
//             </a>
//             <div className="mt-4">
//               <ContactButton />
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }




// header.tsx

"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const DesktopMenu = () => (
  <div className="relative content-center items-center box-border caret-transparent gap-x-12 flex h-min justify-center gap-y-12 w-min overflow-hidden">
    {/* About */}
    <div className="relative box-border caret-transparent shrink-0">
      <a
        href=""
        className="relative text-blue-700 content-center items-center box-border caret-transparent gap-x-1 flex h-min justify-center gap-y-1 w-min overflow-hidden px-3 py-1.5 group"
      >
        <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start text-nowrap">
          <p className="text-white text-[15px] box-border caret-transparent tracking-[-0.6px] leading-[18px] text-nowrap font-geist md:text-base md:tracking-[-0.64px] md:leading-[22px] transition-all duration-300 group-hover:text-[#eeda03]">
            About
          </p>
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#eeda03] transition-all duration-300 group-hover:w-full"></span>
        </div>
      </a>
    </div>

    {/* Services */}
    <div className="relative box-border caret-transparent shrink-0">
      <a
        href=""
        className="relative text-blue-700 content-center items-center box-border caret-transparent gap-x-1 flex h-min justify-center gap-y-1 w-min overflow-hidden px-3 py-1.5 group"
      >
        <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start text-nowrap">
          <p className="text-white text-[15px] box-border caret-transparent tracking-[-0.6px] leading-[18px] text-nowrap font-geist md:text-base md:tracking-[-0.64px] md:leading-[22px] transition-all duration-300 group-hover:text-[#eeda03]">
            Services
          </p>
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#eeda03] transition-all duration-300 group-hover:w-full"></span>
        </div>
      </a>
    </div>

    {/* Pricing */}
    <div className="relative box-border caret-transparent shrink-0">
      <a
        href=""
        className="relative text-blue-700 content-center items-center box-border caret-transparent gap-x-1 flex h-min justify-center gap-y-1 w-min overflow-hidden px-3 py-1.5 group"
      >
        <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start text-nowrap">
          <p className="text-white text-[15px] box-border caret-transparent tracking-[-0.6px] leading-[18px] text-nowrap font-geist md:text-base md:tracking-[-0.64px] md:leading-[22px] transition-all duration-300 group-hover:text-[#eeda03]">
            Pricing
          </p>
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#eeda03] transition-all duration-300 group-hover:w-full"></span>
        </div>
      </a>
    </div>
  </div>
);

const ContactButton = () => (
  <div className="relative box-border caret-transparent shrink-0 h-10">
    <a
      href="https://neative.framer.website/contact-us"
      className="
        relative content-center items-center box-border caret-transparent 
        gap-x-5 flex h-full justify-center gap-y-5 w-full py-7 rounded-[35px]
        transition-all duration-300 hover:scale-105 hover:shadow-lg
        
        /* Mobile (default) */
        bg-[#081D3A] text-white px-30 border border-white/20
        
        /* Desktop only: override to original */
        md:bg-white md:text-slate-900 md:px-12 md:py-6 md:hover:bg-[#eeda03] md:border-0
      "
    >
      <div className="relative content-center items-center box-border caret-transparent gap-x-2.5 flex shrink-0 h-min justify-center gap-y-2.5 w-min">
        <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start text-nowrap">
          <p className="text-[15px] box-border caret-transparent tracking-[-0.6px] leading-[18px] text-nowrap font-geist md:text-base md:tracking-[-0.64px] md:leading-[22px] font-medium">
            Contact us
          </p>
        </div>
      </div>
    </a>
  </div>
);

const NavbarLogo = () => (
  <div className="relative content-center items-center box-border caret-transparent gap-x-0 flex shrink-0 h-min justify-center gap-y-0 w-min">
    <div className="relative box-border caret-transparent shrink-0">
      <div className="relative box-border caret-transparent h-40 w-40 overflow-hidden">
        <a
          aria-label="brand logo link to home"
          href="/"
          className="absolute text-blue-700 content-center items-center box-border caret-transparent gap-x-2.5 flex shrink-0 h-min justify-center gap-y-2.5 w-full left-0 top-0 transition-transform duration-300 hover:scale-110"
        >
          <div className="relative text-black aspect-[1.04762_/_1] box-border caret-transparent shrink-0">
            <div className="aspect-[1.04762_/_1] box-border caret-transparent h-full w-full">
              <Image
                src="/a-logo.png"
                alt="Icon"
                width={150}     
                height={150}
                className="box-border caret-transparent h-full w-full object-contain"
              />
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
);

/* -------------------------------------------------------------------------- */
/*                                   NAVBAR                                   */
/* -------------------------------------------------------------------------- */
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Fixed Navbar with Glassmorphism */}
      <nav 
        className={`
          fixed inset-x-0 top-0 z-50 flex h-20 w-full items-center justify-between 
          overflow-visible px-4 sm:px-8 transition-all duration-500
          ${scrolled 
            ? 'bg-[#081D3A]/80 backdrop-blur-xl shadow-lg shadow-black/10 border-b border-white/5' 
            : 'bg-[#081D3A]/40 backdrop-blur-md'
          }
        `}
      >
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.02] to-transparent pointer-events-none"></div>
        
        <div className="flex w-full items-center justify-between relative z-10">

          {/* Logo (Left) */}
          <NavbarLogo />

          {/* Desktop: Centered Menu + Right CTA */}
          <div className="hidden md:flex md:w-full md:justify-center md:items-center">
            <div className="flex w-full max-w-3xl justify-center items-center gap-x-12">
              <DesktopMenu />
            </div>
            <div className="ml-auto">
              <ContactButton />
            </div>
          </div>

          {/* Mobile: Hamburger with Animation */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="relative box-border caret-transparent p-2 rounded-lg text-white hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="space-y-1.5">
                <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </div>
            </button>
          </div>

        </div>
      </nav>

      {/* Mobile Menu Dropdown with Glassmorphism */}
      <div 
        className={`
          fixed inset-x-0 top-20 z-40 md:hidden mx-5 mt-3 overflow-hidden
          transition-all duration-500 ease-out
          ${isOpen 
            ? 'max-h-[500px] opacity-100' 
            : 'max-h-0 opacity-0 pointer-events-none'
          }
        `}
      >
        <div className="bg-[#eeda03]/95 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl shadow-black/20">
          <div className="flex flex-col items-center gap-y-6 px-6 py-8">
            <a
              href=""
              onClick={() => setIsOpen(false)}
              className="text-black text-lg font-geist tracking-[-0.6px] hover:text-[#081D3A] transition-all duration-300 hover:scale-110 font-medium"
            >
              About
            </a>
            <div className="w-16 h-px bg-black/10"></div>
            <a
              href=""
              onClick={() => setIsOpen(false)}
              className="text-black text-lg font-geist tracking-[-0.6px] hover:text-[#081D3A] transition-all duration-300 hover:scale-110 font-medium"
            >
              Services
            </a>
            <div className="w-16 h-px bg-black/10"></div>
            <a
              href=""
              onClick={() => setIsOpen(false)}
              className="text-black text-lg font-geist tracking-[-0.6px] hover:text-[#081D3A] transition-all duration-300 hover:scale-110 font-medium"
            >
              Pricing
            </a>
            <div className="mt-2 w-full">
              <ContactButton />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}