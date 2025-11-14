// app/page.tsx
"use client";
import Navbar from "@/components/header";
import Hero from "@/components/UI/hero";
import HowItWorksSection from "@/components/UI/HowItWorks";
import ServiceSection from "@/components/UI/ServiceSection";
import WhyChooseUs from "@/components/UI/WhyChooseUs";
import OurExperience from "@/components/UI/OurExperience";
import Testimonials from "@/components/UI/Testimonials";
import ServiceAreas from "@/components/UI/ServiceAreas";
import FinalCTA from "@/components/UI/FinalCTA";
import Footer from "@/components/footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <Hero />
      <ServiceSection />
      <OurExperience />
      <WhyChooseUs />
      <HowItWorksSection />
      <Testimonials />
      <ServiceAreas />
      <FinalCTA />
      <Footer />
    </>
  );
}