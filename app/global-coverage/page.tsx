"use client";

import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { Globe } from "@/components/magicui/globe";
import { CTASection } from "@/components/sections/CTASection";
import { Footer } from "@/components/sections/Footer";
import { Navigation } from "@/components/sections/Navigation";
import { Card } from "@/components/ui/card";
import {
  IconBolt,
  IconChartBar,
  IconCheck,
  IconGlobe,
  IconMapPin,
  IconShield,
  IconWorld,
} from "@tabler/icons-react";

export default function GlobalCoveragePage() {
  return (
    <div className="min-h-screen overflow-x-hidden relative">
      {/* Background Grid */}
      <div
        className="fixed inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: "32px 32px",
        }}
      />

      <Navigation />

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto border-l border-r border-border/80 min-h-screen pt-16">
        {/* Hero Section */}
        <section className="pt-28 pb-64 relative px-6 sm:px-14 overflow-hidden">
          <FlickeringGrid
            className="absolute inset-0 z-0 [mask-image:radial-gradient(600px_circle_at_center,white,transparent)]"
            squareSize={4}
            gridGap={6}
            color="#FFFFFF"
            maxOpacity={0.04}
            flickerChance={0.1}
            height={800}
            width={1400}
          />
          <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 translate-y-1/2 h-160 w-160 flex items-center justify-center opacity-20">
            <Globe
              config={{
                devicePixelRatio: 2,
                width: 600 * 2,
                height: 600 * 2,
                phi: 0,
                theta: 0,
                dark: 1,
                diffuse: 1.2,
                mapSamples: 16000,
                mapBrightness: 6,
                baseColor: [0.3, 0.3, 0.3],
                markerColor: [0.1, 0.8, 1],
                glowColor: [1, 1, 1],
                markers: [
                  // longitude latitude
                  { location: [37.7595, -122.4367], size: 0.03 },
                  { location: [40.7128, -74.006], size: 0.1 },
                ],
                onRender: () => {},
              }}
            />
          </div>

          <div className="relative z-10 text-center space-y-8">
            {/* Status indicator */}
            <div className="inline-flex items-center px-4 py-2 bg-white/5 border border-white/10">
              <div className="w-2 h-2 bg-cyan-400 mr-3" />
              <span className="text-sm text-gray-300 font-medium">
                Global Coverage • 180+ Countries
              </span>
            </div>

            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-medium text-white leading-[0.9] tracking-tight">
                <span>Sell Globally</span>{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                  From Day One
                </span>
                <br />
                <span className="text-gray-400">No Setup Required</span>
              </h1>

              <p className="text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
                Launch in 180+ countries instantly with full tax compliance,
                regulatory protection, and localized payment processing. We
                handle the complexity, you focus on growth.
              </p>
            </div>
          </div>
        </section>

        {/* Coverage Stats */}
        <section className="pb-0 relative border-t border-white/5">
          <div className="grid md:grid-cols-4 gap-8 py-20 px-6 sm:px-14">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-cyan-400 mb-2">
                180+
              </div>
              <div className="text-lg text-white font-medium mb-2">
                Countries
              </div>
              <div className="text-sm text-gray-400">
                Full tax compliance coverage
              </div>
            </div>

            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-green-400 mb-2">
                200+
              </div>
              <div className="text-lg text-white font-medium mb-2">
                Tax Jurisdictions
              </div>
              <div className="text-sm text-gray-400">
                Automated filing and reporting
              </div>
            </div>

            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-purple-400 mb-2">
                50+
              </div>
              <div className="text-lg text-white font-medium mb-2">
                Currencies
              </div>
              <div className="text-sm text-gray-400">
                Local payment processing
              </div>
            </div>

            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-orange-400 mb-2">
                99.9%
              </div>
              <div className="text-lg text-white font-medium mb-2">
                Uptime SLA
              </div>
              <div className="text-sm text-gray-400">
                Enterprise-grade reliability
              </div>
            </div>
          </div>
        </section>

        {/* Regional Coverage */}
        <section className="pb-0 relative border-t border-white/5">
          <div className="text-center pt-20 pb-16 px-6 sm:px-14">
            <h2 className="text-4xl lg:text-5xl font-medium text-white mb-4 tracking-tight">
              Complete Regional Coverage
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              From Silicon Valley to Singapore, we handle compliance in every
              major market where your customers want to buy.
            </p>
          </div>

          <div className="grid lg:grid-cols-2">
            {/* North America */}
            <div className="bg-white/[0.01] border border-l-0 border-b-0 border-r-0 border-white/5 p-8 group transition-all duration-300 hover:bg-white/[0.02]">
              <div className="flex items-center space-x-3 mb-6">
                <IconMapPin className="w-5 h-5 text-blue-400" />
                <h3 className="text-lg font-medium text-white">
                  North America
                </h3>
              </div>

              <h4 className="text-2xl lg:text-3xl font-medium text-white mb-4 leading-tight">
                <span className="text-blue-400">Complete US & Canada</span>{" "}
                coverage with state-level compliance.
              </h4>

              <p className="text-gray-400 mb-8 leading-relaxed">
                Handle complex US state tax requirements, Canadian provincial
                taxes, and cross-border transactions with full regulatory
                compliance.
              </p>

              {/* Coverage Details */}
              <div className="relative bg-black/20 border border-white/10 p-6 mb-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs text-gray-500 font-mono">
                    north-america.coverage
                  </span>
                  <div className="flex items-center space-x-1">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                    <span className="text-xs text-blue-400">100% Coverage</span>
                  </div>
                </div>
                <div className="space-y-2 text-xs font-mono text-gray-400">
                  <div>
                    🇺🇸 United States:{" "}
                    <span className="text-green-400">All 50 states + DC</span>
                  </div>
                  <div>
                    🇨🇦 Canada:{" "}
                    <span className="text-green-400">All provinces</span>
                  </div>
                  <div>
                    🇲🇽 Mexico:{" "}
                    <span className="text-green-400">Federal + state tax</span>
                  </div>
                  <div>
                    📊 Sales Tax:{" "}
                    <span className="text-green-400">Auto-calculated</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center text-sm text-blue-300">
                <IconCheck className="w-4 h-4 mr-2" />
                50 US states + 13 Canadian provinces
              </div>
            </div>

            {/* Europe */}
            <div className="bg-white/[0.01] border border-r-0 border-b-0 border-white/5 p-8 group transition-all duration-300 hover:bg-white/[0.02]">
              <div className="flex items-center space-x-3 mb-6">
                <IconGlobe className="w-5 h-5 text-purple-400" />
                <h3 className="text-lg font-medium text-white">Europe</h3>
              </div>

              <h4 className="text-2xl lg:text-3xl font-medium text-white mb-4 leading-tight">
                <span className="text-purple-400">Complete EU compliance</span>{" "}
                plus UK, Switzerland, and Norway.
              </h4>

              <p className="text-gray-400 mb-8 leading-relaxed">
                Navigate complex EU VAT rules, GDPR compliance, and
                country-specific requirements across all 27 EU member states
                plus key European markets.
              </p>

              {/* VAT Coverage */}
              <div className="space-y-3 mb-6">
                {[
                  {
                    region: "🇪🇺 European Union",
                    detail: "OSS VAT compliance",
                    status: "27 countries",
                  },
                  {
                    region: "🇬🇧 United Kingdom",
                    detail: "UK VAT + digital services",
                    status: "Full coverage",
                  },
                  {
                    region: "🇨🇭 Switzerland",
                    detail: "Swiss VAT compliance",
                    status: "Automated",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center space-x-3 p-2 bg-black/20 rounded text-xs"
                  >
                    <div className="text-sm">{item.region}</div>
                    <div className="flex-1">
                      <div className="text-xs text-purple-300">
                        {item.detail}
                      </div>
                    </div>
                    <div className="text-xs text-purple-400">{item.status}</div>
                  </div>
                ))}
              </div>

              <div className="flex items-center text-sm text-purple-300">
                <IconShield className="w-4 h-4 mr-2" />
                GDPR compliant + OSS VAT handling
              </div>
            </div>
          </div>

          {/* Asia Pacific & Rest of World */}
          <div className="grid md:grid-cols-2">
            {/* Asia Pacific */}
            <div className="bg-white/[0.01] border border-r-0 border-b-0 border-l-0 border-white/5 p-6 transition-all duration-300">
              <div className="flex items-center space-x-3 mb-6">
                <IconWorld className="w-5 h-5 text-green-400" />
                <h4 className="text-lg font-medium text-white">Asia Pacific</h4>
              </div>

              <h5 className="text-xl font-medium text-white mb-3">
                <span className="text-green-400">Major APAC markets</span> with
                local payment methods.
              </h5>

              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Support for Japan&apos;s consumption tax, Australia&apos;s GST,
                Singapore&apos;s GST, and other key Asian markets with localized
                compliance.
              </p>

              {/* APAC Markets */}
              <div className="bg-black/20 border border-white/10 p-4 mb-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-gray-400">Key Markets</span>
                  <span className="text-xs text-green-400">Active</span>
                </div>
                <div className="space-y-1 text-xs">
                  <div className="flex justify-between">
                    <span className="text-gray-400">🇯🇵 Japan</span>
                    <span className="text-green-400">Consumption Tax</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">🇦🇺 Australia</span>
                    <span className="text-green-400">GST Compliant</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">🇸🇬 Singapore</span>
                    <span className="text-green-400">
                      GST + Digital Services
                    </span>
                  </div>
                </div>
              </div>

              <div className="text-xs text-green-400">
                Local payment methods supported
              </div>
            </div>

            {/* Rest of World */}
            <div className="bg-white/[0.01] border border-r-0 border-b-0 border-white/5 p-6 transition-all duration-300">
              <div className="flex items-center space-x-3 mb-6">
                <IconGlobe className="w-5 h-5 text-orange-400" />
                <h4 className="text-lg font-medium text-white">
                  Rest of World
                </h4>
              </div>

              <h5 className="text-xl font-medium text-white mb-3">
                <span className="text-orange-400">Emerging markets</span> and
                global expansion ready.
              </h5>

              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Brazil, India, South Africa, and other high-growth markets with
                localized tax handling and payment processing.
              </p>

              {/* Emerging Markets */}
              <div className="bg-black/20 border border-white/10 p-3 mb-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-gray-500">
                    Emerging Markets
                  </span>
                  <span className="text-xs text-orange-400">Expanding</span>
                </div>
                <div className="space-y-1 text-xs">
                  <div className="flex justify-between">
                    <span className="text-gray-400">🇧🇷 Brazil</span>
                    <span className="text-green-400">Tax Compliant</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">🇮🇳 India</span>
                    <span className="text-green-400">GST Ready</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">🇿🇦 South Africa</span>
                    <span className="text-green-400">VAT Compliant</span>
                  </div>
                </div>
              </div>

              <div className="text-xs text-orange-400">
                40+ additional countries supported
              </div>
            </div>
          </div>
        </section>

        {/* Tax Complexity Made Simple */}
        <section className="py-20 relative border-t border-white/5 px-6 sm:px-14">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-medium text-white mb-4 tracking-tight">
              Tax Complexity Made Simple
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Every country has different rules. We handle them all
              automatically, so you can focus on building instead of compliance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Real-time Calculation */}
            <div>
              <Card className="p-8 bg-card/50 border-border/40 h-full">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-6">
                  <IconBolt className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  Real-time Tax Calculation
                </h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  Instant tax calculation for every transaction based on buyer
                  location, product type, and local regulations. Updated
                  automatically as laws change.
                </p>
                <div className="text-sm text-cyan-400">
                  Sub-second response times globally
                </div>
              </Card>
            </div>

            {/* Automated Filing */}
            <div>
              <Card className="p-8 bg-card/50 border-border/40 h-full">
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-6">
                  <IconChartBar className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  Automated Filing
                </h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  We file all tax returns on your behalf across every
                  jurisdiction. Monthly, quarterly, and annual filings handled
                  automatically.
                </p>
                <div className="text-sm text-green-400">
                  Never miss a deadline again
                </div>
              </Card>
            </div>

            {/* Compliance Monitoring */}
            <div>
              <Card className="p-8 bg-card/50 border-border/40 h-full">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-6">
                  <IconShield className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  Compliance Monitoring
                </h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  Continuous monitoring of regulatory changes across all
                  markets. Automatic updates ensure you&apos;re always
                  compliant.
                </p>
                <div className="text-sm text-purple-400">
                  Proactive compliance updates
                </div>
              </Card>
            </div>
          </div>
        </section>

        <CTASection />
        <Footer />
      </div>
    </div>
  );
}
