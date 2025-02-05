"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import HeroSection from "@/components/section/hero-section";
import FeatureSection from "@/components/section/feature-section";
import ExploreSection from "@/components/section/explore-section";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <ExploreSection />
      <Footer />
    </>
  );
}
