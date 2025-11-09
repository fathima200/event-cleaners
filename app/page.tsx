// app/page.tsx
"use client";
import Navbar from "@/components/header";
import Hero from "@/components/UI/hero"; // Adjust the path according to your project structure
import HowItWorksSection from "@/components/UI/HowItWorks";
import ServiceSection from "@/components/UI/ServiceSection";

export default function Page() {
  return (
    <>
      <Navbar />
      <Hero /> {/* Place the Hero component here */}
      <ServiceSection/>
      <HowItWorksSection/>
    </>
  );
}