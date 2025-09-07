"use client";

import { Navigation } from "@/components/sections/Navigation";
import { Button } from "@/components/ui/button";
import { BetaAccessModal } from "@/components/BetaAccessModal";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden relative">
      <Navigation />

      {/* Minimal Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative px-4 sm:px-8">
        <FlickeringGrid
          className="absolute inset-0 z-0 [mask-image:radial-gradient(600px_circle_at_center,white,transparent)]"
          squareSize={4}
          gridGap={6}
          color="#FFFFFF"
          maxOpacity={0.08}
          flickerChance={0.1}
          height={1000}
          width={1400}
        />
        
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-8">
          {/* Status indicator */}
          <div className="inline-flex items-center px-4 py-2 bg-white/5 border border-white/10 rounded-full">
            <div className="w-2 h-2 bg-orange-400 mr-3 rounded-full" />
            <span className="text-sm text-gray-300 font-medium">
              Infrastructure for Agentic Commerce
            </span>
          </div>

          {/* Main headline */}
          <h1 className="text-6xl lg:text-7xl xl:text-8xl font-medium text-white leading-[0.9] tracking-tight">
            The infrastructure
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              for agentic commerce.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
            Build, deploy, and scale AI agents that can transact, negotiate, and execute commerce autonomously.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <BetaAccessModal>
              <Button className="cursor-pointer font-medium h-14 px-8 text-lg">
                Get Early Access
              </Button>
            </BetaAccessModal>
            <a
              href="https://cal.com/vibepay"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="ghost"
                className="cursor-pointer text-gray-300 hover:text-white hover:bg-white/10 font-medium h-14 px-8 text-lg border border-white/20"
              >
                Learn More
              </Button>
            </a>
          </div>

          {/* Simple tagline */}
          <div className="text-sm text-gray-500 pt-8">
            Empowering the future of autonomous commerce
          </div>
        </div>
      </section>
    </div>
  );
}
