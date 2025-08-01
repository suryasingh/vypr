"use client";

import { Navigation } from "@/components/sections/Navigation";
import { HeroSection } from "@/components/sections/HeroSection";
import { DemoSection } from "@/components/sections/DemoSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { SocialProofSection } from "@/components/sections/SocialProofSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { CTASection } from "@/components/sections/CTASection";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden relative">
      <Navigation />

      {/* Main Content Container */}
      <div className="w-full sm:max-w-7xl sm:mx-auto sm:border-l sm:border-r border-border/80 min-h-screen pt-16">
        <HeroSection />
        <DemoSection />
        <FeaturesSection />
        <HowItWorksSection />
        <SocialProofSection />
        <PricingSection />
        <CTASection />
        <Footer />
      </div>
    </div>
  );
}
