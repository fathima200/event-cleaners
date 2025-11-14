// "use client";

// import React, { useState, useEffect } from "react";
// import Image from "next/image";

// const DesktopMenu = () => (
//   <div className="relative content-center items-center box-border caret-transparent gap-x-12 flex h-min justify-center gap-y-12 w-min overflow-hidden">
//     {/* About */}
//     <div className="relative box-border caret-transparent shrink-0">
//       <a
//         href="/about"
//         className="relative text-blue-700 content-center items-center box-border caret-transparent gap-x-1 flex h-min justify-center gap-y-1 w-min overflow-hidden px-3 py-1.5 group"
//       >
//         <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start text-nowrap">
//           <p className="text-white text-[15px] box-border caret-transparent tracking-[-0.6px] leading-[18px] text-nowrap font-geist md:text-base md:tracking-[-0.64px] md:leading-[22px] transition-all duration-300 group-hover:text-[#eeda03]">
//             About
//           </p>
//           <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#eeda03] transition-all duration-300 group-hover:w-full"></span>
//         </div>
//       </a>
//     </div>

//     {/* Services */}
//     <div className="relative box-border caret-transparent shrink-0">
//       <a
//         href="/services"
//         className="relative text-blue-700 content-center items-center box-border caret-transparent gap-x-1 flex h-min justify-center gap-y-1 w-min overflow-hidden px-3 py-1.5 group"
//       >
//         <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start text-nowrap">
//           <p className="text-white text-[15px] box-border caret-transparent tracking-[-0.6px] leading-[18px] text-nowrap font-geist md:text-base md:tracking-[-0.64px] md:leading-[22px] transition-all duration-300 group-hover:text-[#eeda03]">
//             Services
//           </p>
//           <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#eeda03] transition-all duration-300 group-hover:w-full"></span>
//         </div>
//       </a>
//     </div>

//     {/* Contact */}
//     <div className="relative box-border caret-transparent shrink-0">
//       <a
//         href="/contact"
//         className="relative text-blue-700 content-center items-center box-border caret-transparent gap-x-1 flex h-min justify-center gap-y-1 w-min overflow-hidden px-3 py-1.5 group"
//       >
//         <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start text-nowrap">
//           <p className="text-white text-[15px] box-border caret-transparent tracking-[-0.6px] leading-[18px] text-nowrap font-geist md:text-base md:tracking-[-0.64px] md:leading-[22px] transition-all duration-300 group-hover:text-[#eeda03]">
//             Contact
//           </p>
//           <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#eeda03] transition-all duration-300 group-hover:w-full"></span>
//         </div>
//       </a>
//     </div>
//   </div>
// );

// const ContactButton = () => (
//   <div className="relative box-border caret-transparent shrink-0 h-10">
//     <a
//       href="/contact"
//       className="
//         relative content-center items-center box-border caret-transparent 
//         gap-x-5 flex h-full justify-center gap-y-5 w-full py-7 rounded-full
//         transition-all duration-300
        
//         /* Mobile (default) */
//         bg-[#0a0e27] text-white px-30 border border-white/20
        
//         /* Desktop only: override to original */
//         md:bg-yellow-300 md:text-slate-900 md:px-12 md:py-6 md:hover:bg-[#eeda03] md:border-0
//       "
//     >
//       <div className="relative content-center items-center box-border caret-transparent gap-x-2.5 flex shrink-0 h-min justify-center gap-y-2.5 w-min">
//         <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start text-nowrap">
//           <p className="text-[15px] box-border  caret-transparent tracking-[-0.6px] leading-[18px] text-nowrap font-geist md:text-base md:tracking-[-0.64px] md:leading-[22px] font-medium">
//             Contact us
//           </p>
//         </div>
//       </div>
//     </a>
//   </div>
// );

// const NavbarLogo = () => (
//   <div className="flex items-center justify-center">
//     <a
//       aria-label="brand logo link to home"
//       href="/"
//       className="transition-transform duration-300 hover:scale-110"
//     >
//       <Image
//         src="/TheEventCleaners.png"
//         alt="Icon"
//         width={300}
//         height={300}
//         className="object-contain md:w-[400px] md:h-[400px]"
//       />
//     </a>
//   </div>
// );

// /* -------------------------------------------------------------------------- */
// /*                                   NAVBAR                                   */
// /* -------------------------------------------------------------------------- */
// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

  
//   useEffect(() => {
//     // Check if window is defined (client-side only)
//     if (typeof window !== 'undefined') {
//       const handleScroll = () => {
//         setScrolled(window.scrollY > 20);
//       };
//       window.addEventListener("scroll", handleScroll);
//       return () => window.removeEventListener("scroll", handleScroll);
//     }
//   }, []);
//   return (
//     <>
//       {/* Fixed Navbar - Clean Design */}
//       <nav 
//         className={`
//           fixed inset-x-0 top-0 z-50 flex h-20 w-full items-center justify-between 
//           overflow-visible px-4 sm:px-8 transition-all duration-300
//           ${scrolled 
//             ? 'bg-[#0a0e27]/55 backdrop-blur-sm border-b border-white/10' 
//             : 'bg-[#0a0e27]/50 backdrop-blur-sm'
//           }
//         `}
//       >
        
//         <div className="flex w-full items-center justify-between relative z-10">

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

//           {/* Mobile: Hamburger with Animation */}
//           <div className="flex md:hidden">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               aria-label="Toggle menu"
//               className="relative box-border caret-transparent p-2 rounded-lg text-white hover:bg-white/10 transition-all duration-300 group"
//             >
//               <div className="space-y-1.5">
//                 <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
//                 <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
//                 <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
//               </div>
//             </button>
//           </div>

//         </div>
//       </nav>

//       {/* Mobile Menu Dropdown - Clean Design */}
//       <div 
//         className={`
//           fixed inset-x-0 top-20 z-40 md:hidden mx-5 mt-3 overflow-hidden
//           transition-all duration-300 ease-out
//           ${isOpen 
//             ? 'max-h-[500px] opacity-100' 
//             : 'max-h-0 opacity-0 pointer-events-none'
//           }
//         `}
//       >
//         <div className="bg-[#eeda03] border border-white/10 rounded-[12px]">
//           <div className="flex flex-col items-center gap-y-6 px-6 py-8">
//             <a
//               href="/about"
//               onClick={() => setIsOpen(false)}
//               className="text-black text-lg font-geist tracking-[-0.6px] hover:text-[#0a0e27] transition-all duration-300 font-medium"
//             >
//               About
//             </a>
//             <div className="w-16 h-px bg-black/10"></div>
//             <a
//               href="/services"
//               onClick={() => setIsOpen(false)}
//               className="text-black text-lg font-geist tracking-[-0.6px] hover:text-[#0a0e27] transition-all duration-300 font-medium"
//             >
//               Services
//             </a>
//             <div className="w-16 h-px bg-black/10"></div>
//             <a
//               href="/contact"
//               onClick={() => setIsOpen(false)}
//               className="text-black text-lg font-geist tracking-[-0.6px] hover:text-[#0a0e27] transition-all duration-300 font-medium"
//             >
//               Contact
//             </a>
//             <div className="mt-2 w-full">
//               <ContactButton />
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }



"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const DesktopMenu = () => (
  <div className="relative content-center items-center box-border caret-transparent gap-x-12 flex h-min justify-center gap-y-12 w-min overflow-hidden">
    {/* About */}
    <div className="relative box-border caret-transparent shrink-0">
      <Link
        href="/about"
        className="relative text-blue-700 content-center items-center box-border caret-transparent gap-x-1 flex h-min justify-center gap-y-1 w-min overflow-hidden px-3 py-1.5 group"
      >
        <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start text-nowrap">
          <p className="text-white text-[15px] box-border caret-transparent tracking-[-0.6px] leading-[18px] text-nowrap font-geist md:text-base md:tracking-[-0.64px] md:leading-[22px] transition-all duration-300 group-hover:text-[#eeda03]">
            About
          </p>
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#eeda03] transition-all duration-300 group-hover:w-full"></span>
        </div>
      </Link>
    </div>

    {/* Services */}
    <div className="relative box-border caret-transparent shrink-0">
      <Link
        href="/services"
        className="relative text-blue-700 content-center items-center box-border caret-transparent gap-x-1 flex h-min justify-center gap-y-1 w-min overflow-hidden px-3 py-1.5 group"
      >
        <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start text-nowrap">
          <p className="text-white text-[15px] box-border caret-transparent tracking-[-0.6px] leading-[18px] text-nowrap font-geist md:text-base md:tracking-[-0.64px] md:leading-[22px] transition-all duration-300 group-hover:text-[#eeda03]">
            Services
          </p>
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#eeda03] transition-all duration-300 group-hover:w-full"></span>
        </div>
      </Link>
    </div>

    {/* Contact */}
    <div className="relative box-border caret-transparent shrink-0">
      <Link
        href="/contact"
        className="relative text-blue-700 content-center items-center box-border caret-transparent gap-x-1 flex h-min justify-center gap-y-1 w-min overflow-hidden px-3 py-1.5 group"
      >
        <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start text-nowrap">
          <p className="text-white text-[15px] box-border caret-transparent tracking-[-0.6px] leading-[18px] text-nowrap font-geist md:text-base md:tracking-[-0.64px] md:leading-[22px] transition-all duration-300 group-hover:text-[#eeda03]">
            Contact
          </p>
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#eeda03] transition-all duration-300 group-hover:w-full"></span>
        </div>
      </Link>
    </div>
  </div>
);

const ContactButton = () => (
  <div className="relative box-border caret-transparent shrink-0 h-10">
    <Link
      href="/contact"
      className="
        relative content-center items-center box-border caret-transparent 
        gap-x-5 flex h-full justify-center gap-y-5 w-full py-7 rounded-full
        transition-all duration-300
        
        /* Mobile (default) */
        bg-[#0a0e27] text-white px-30 border border-white/20
        
        /* Desktop only: override to original */
        md:bg-yellow-300 md:text-slate-900 md:px-12 md:py-6 md:hover:bg-[#eeda03] md:border-0
      "
    >
      <div className="relative content-center items-center box-border caret-transparent gap-x-2.5 flex shrink-0 h-min justify-center gap-y-2.5 w-min">
        <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start text-nowrap">
          <p className="text-[15px] box-border  caret-transparent tracking-[-0.6px] leading-[18px] text-nowrap font-geist md:text-base md:tracking-[-0.64px] md:leading-[22px] font-medium">
            Contact us
          </p>
        </div>
      </div>
    </Link>
  </div>
);

const NavbarLogo = () => (
  <div className="flex items-center justify-center z-10">
    <Link
      aria-label="brand logo link to home"
      href="/"
      className="transition-transform duration-300 hover:scale-110 inline-block md:pointer-events-auto pointer-events-none"
    >
      <Image
        src="/TheEventCleaners.png"
        alt="Icon"
        width={300}
        height={300}
        className="object-contain md:w-[400px] md:h-[400px]"
      />
    </Link>
  </div>
);

/* -------------------------------------------------------------------------- */
/*                                   NAVBAR                                   */
/* -------------------------------------------------------------------------- */
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Check if window is defined (client-side only)
    if (typeof window !== 'undefined') {
      const handleScroll = () => {
        setScrolled(window.scrollY > 20);
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    if (typeof window !== 'undefined' && isOpen) {
      const handleClickOutside = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        if (!target.closest('.mobile-menu') && !target.closest('.hamburger-btn')) {
          setIsOpen(false);
        }
      };
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [isOpen]);

  const handleMobileNavClick = (path: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsOpen(false);
    // Small delay to let menu close animation play
    setTimeout(() => {
      router.push(path);
    }, 100);
  };

  return (
    <>
      {/* Fixed Navbar - Clean Design */}
      <nav 
        className={`
          fixed inset-x-0 top-0 z-50 flex h-20 w-full items-center justify-between 
          overflow-hidden px-4 sm:px-8 transition-all duration-300
          ${scrolled 
            ? 'bg-[#0a0e27]/55 backdrop-blur-sm border-b border-white/10' 
            : 'bg-[#0a0e27]/50 backdrop-blur-sm'
          }
        `}
      >
        
        <div className="flex w-full items-center justify-between relative">

          {/* Logo (Left) */}
          <div className="relative z-10">
            <NavbarLogo />
          </div>

          {/* Desktop: Centered Menu + Right CTA */}
          <div className="hidden md:flex md:w-full md:justify-center md:items-center absolute left-0 right-0 pointer-events-none">
            <div className="flex w-full max-w-3xl justify-center items-center gap-x-12 pointer-events-auto">
              <DesktopMenu />
            </div>
          </div>

          {/* Desktop CTA (Right) */}
          <div className="hidden md:block ml-auto relative z-10">
            <ContactButton />
          </div>

          {/* Mobile: Hamburger with Animation */}
          <div className="flex md:hidden">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(!isOpen);
              }}
              aria-label="Toggle menu"
              className="hamburger-btn relative box-border caret-transparent p-2 rounded-lg text-white hover:bg-white/10 transition-all duration-300 group"
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

      {/* Mobile Menu Dropdown - Clean Design */}
      <div 
        className={`
          mobile-menu fixed inset-x-0 top-20 z-40 md:hidden mx-5 mt-3 overflow-hidden
          transition-all duration-300 ease-out
          ${isOpen 
            ? 'max-h-[500px] opacity-100' 
            : 'max-h-0 opacity-0 pointer-events-none'
          }
        `}
      >
        <div className="bg-[#eeda03] border border-white/10 rounded-[12px]">
          <div className="flex flex-col items-center gap-y-6 px-6 py-8">
            <button
              onClick={handleMobileNavClick('/about')}
              className="text-black text-lg font-geist tracking-[-0.6px] hover:text-[#0a0e27] transition-all duration-300 font-medium w-full text-center"
            >
              About
            </button>
            <div className="w-16 h-px bg-black/10"></div>
            <button
              onClick={handleMobileNavClick('/services')}
              className="text-black text-lg font-geist tracking-[-0.6px] hover:text-[#0a0e27] transition-all duration-300 font-medium w-full text-center"
            >
              Services
            </button>
            <div className="w-16 h-px bg-black/10"></div>
            <button
              onClick={handleMobileNavClick('/contact')}
              className="text-black text-lg font-geist tracking-[-0.6px] hover:text-[#0a0e27] transition-all duration-300 font-medium w-full text-center"
            >
              Contact
            </button>
            <div className="mt-2 w-full">
              <ContactButton />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}