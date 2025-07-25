"use client";

import { CTASection } from "@/components/sections/CTASection";
import { Footer } from "@/components/sections/Footer";
import { Navigation } from "@/components/sections/Navigation";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import {
  IconShield,
  IconBolt,
  IconGlobe,
  IconChartBar,
  IconCoin,
  IconLock,
} from "@tabler/icons-react";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function MoRBenefitsPage() {
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

      {/* Radial gradient overlay for depth */}
      <div className="fixed inset-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at center, transparent 0%, transparent 60%, rgba(0, 0, 0, 0.5) 100%)",
          }}
        />
      </div>

      <Navigation />

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto border-l border-r border-border/80 min-h-screen pt-16">
        {/* Hero Section */}
        <section className="pt-28 pb-32 relative px-6 sm:px-14">
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

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative z-10 text-center space-y-8"
          >
            {/* Status indicator */}
            <div className="inline-flex items-center px-4 py-2 bg-white/5 border border-white/10">
              <div className="w-2 h-2 bg-green-400 mr-3" />
              <span className="text-sm text-gray-300 font-medium">
                Merchant of Record • Global Coverage
              </span>
            </div>

            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-medium text-white leading-[0.9] tracking-tight">
                We Handle the{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                  Complex Stuff
                </span>
                <br />
                <span className="text-gray-400">You Focus on Building</span>
              </h1>

              <p className="text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
                As your Merchant of Record, VibePay takes full responsibility
                for global tax compliance, regulatory obligations, and financial
                liability across 180+ countries.
              </p>
            </div>

            {/* Social proof */}
            <div className="text-sm text-gray-500">
              Protecting developers in 180+ countries with zero compliance risk
            </div>
          </motion.div>
        </section>

        {/* Main Benefits Grid */}
        <section className="pb-0 relative border-t border-white/5">
          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid lg:grid-cols-2"
          >
            {/* Tax Compliance */}
            <motion.div
              variants={fadeInUp}
              className="bg-white/[0.01] border border-l-0 border-b-0 border-r-0 border-white/5 p-8 group transition-all duration-300 hover:bg-white/[0.02]"
            >
              <div className="flex items-center space-x-3 mb-6">
                <IconShield className="w-5 h-5 text-green-400" />
                <h3 className="text-lg font-medium text-white">
                  Tax Compliance
                </h3>
              </div>

              <h4 className="text-2xl lg:text-3xl font-medium text-white mb-4 leading-tight">
                <span className="text-green-400">100% tax coverage</span> across
                every jurisdiction where you sell.
              </h4>

              <p className="text-gray-400 mb-8 leading-relaxed">
                We handle VAT, GST, sales tax, and all other tax obligations.
                Automatic filings, real-time calculations, and zero penalty
                exposure.
              </p>

              {/* Tax Coverage Visualization */}
              <div className="relative bg-black/20 border border-white/10 p-6 mb-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs text-gray-500 font-mono">
                    tax-compliance.live
                  </span>
                  <div className="flex items-center space-x-1">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                    <span className="text-xs text-green-400">
                      100% Compliant
                    </span>
                  </div>
                </div>
                <div className="space-y-2 text-xs font-mono text-gray-400">
                  <div>
                    🇺🇸 US Sales Tax:{" "}
                    <span className="text-green-400">✓ Filed</span>
                  </div>
                  <div>
                    🇪🇺 EU VAT: <span className="text-green-400">✓ Filed</span>
                  </div>
                  <div>
                    🇬🇧 UK VAT: <span className="text-green-400">✓ Filed</span>
                  </div>
                  <div>
                    🇯🇵 Japan Consumption Tax:{" "}
                    <span className="text-green-400">✓ Filed</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center text-sm text-green-300">
                <IconBolt className="w-4 h-4 mr-2" />
                Zero penalty risk, 180+ countries
              </div>
            </motion.div>

            {/* Regulatory Shield */}
            <motion.div
              variants={fadeInUp}
              className="bg-white/[0.01] border border-r-0 border-b-0 border-white/5 p-8 group transition-all duration-300 hover:bg-white/[0.02]"
            >
              <div className="flex items-center space-x-3 mb-6">
                <IconLock className="w-5 h-5 text-blue-400" />
                <h3 className="text-lg font-medium text-white">
                  Regulatory Shield
                </h3>
              </div>

              <h4 className="text-2xl lg:text-3xl font-medium text-white mb-4 leading-tight">
                <span className="text-blue-400">Complete protection</span> from
                regulatory and financial liability.
              </h4>

              <p className="text-gray-400 mb-8 leading-relaxed">
                We become the legal entity of record for all transactions. All
                audit risks, compliance failures, and financial liability rest
                with us.
              </p>

              {/* Protection Flow */}
              <div className="space-y-3 mb-6">
                {[
                  {
                    icon: "🛡️",
                    action: "Transaction processed",
                    desc: "VibePay is legal seller",
                    status: "Protected",
                  },
                  {
                    icon: "⚖️",
                    action: "Regulatory inquiry",
                    desc: "VibePay handles response",
                    status: "Shielded",
                  },
                  {
                    icon: "🔐",
                    action: "Audit request",
                    desc: "Zero risk to your business",
                    status: "Covered",
                  },
                ].map((step, i) => (
                  <div
                    key={i}
                    className="flex items-center space-x-3 p-2 bg-black/20 rounded text-xs"
                  >
                    <div className="text-lg">{step.icon}</div>
                    <div className="flex-1">
                      <div className="text-sm text-white font-medium">
                        {step.action}
                      </div>
                      <div className="text-xs text-blue-300">{step.desc}</div>
                    </div>
                    <div className="text-xs text-blue-400">{step.status}</div>
                  </div>
                ))}
              </div>

              <div className="flex items-center text-sm text-blue-300">
                <IconShield className="w-4 h-4 mr-2" />
                Full regulatory and financial liability transfer
              </div>
            </motion.div>
          </motion.div>

          {/* Secondary Benefits */}
          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3"
          >
            {/* Instant Global Reach */}
            <motion.div
              variants={fadeInUp}
              className="bg-white/[0.01] border border-r-0 border-b-0 border-l-0 border-white/5 p-6 transition-all duration-300"
            >
              <div className="flex items-center space-x-3 mb-6">
                <IconGlobe className="w-5 h-5 text-purple-400" />
                <h4 className="text-lg font-medium text-white">
                  Instant Global Reach
                </h4>
              </div>

              <h5 className="text-xl font-medium text-white mb-3">
                <span className="text-purple-400">Launch globally</span> on day
                one. No entity setup required.
              </h5>

              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Sell in 180+ countries immediately without setting up local
                entities or tax registrations. We handle all jurisdictional
                requirements.
              </p>

              {/* Global Coverage */}
              <div className="bg-black/20 border border-white/10 p-4 mb-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-gray-400">Coverage Status</span>
                  <span className="text-xs text-purple-400">
                    180+ Countries
                  </span>
                </div>
                <div className="space-y-1 text-xs">
                  <div className="flex justify-between">
                    <span className="text-gray-400">North America</span>
                    <span className="text-green-400">✓ Ready</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Europe</span>
                    <span className="text-green-400">✓ Ready</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Asia Pacific</span>
                    <span className="text-green-400">✓ Ready</span>
                  </div>
                </div>
              </div>

              <div className="text-xs text-purple-400">
                Same-day global launch capability
              </div>
            </motion.div>

            {/* Automated Reporting */}
            <motion.div
              variants={fadeInUp}
              className="bg-white/[0.01] border border-r-0 border-b-0 border-white/5 p-6 transition-all duration-300"
            >
              <div className="flex items-center space-x-3 mb-6">
                <IconChartBar className="w-5 h-5 text-orange-400" />
                <h4 className="text-lg font-medium text-white">
                  Automated Reporting
                </h4>
              </div>

              <h5 className="text-xl font-medium text-white mb-3">
                <span className="text-orange-400">Zero manual work</span>. All
                filings automated.
              </h5>

              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Automatic tax filings, compliance reports, and regulatory
                submissions across all jurisdictions. Never miss a deadline
                again.
              </p>

              {/* Automation Status */}
              <div className="bg-black/20 border border-white/10 p-4 mb-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-gray-400">Filing Status</span>
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
                    <span className="text-xs text-orange-400">Auto-Filing</span>
                  </div>
                </div>
                <div className="space-y-1 text-xs">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Q4 2024 VAT</span>
                    <span className="text-green-400">Filed</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Dec Sales Tax</span>
                    <span className="text-green-400">Filed</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Q1 2025</span>
                    <span className="text-orange-400">Scheduled</span>
                  </div>
                </div>
              </div>

              <div className="text-xs text-orange-400">
                100% automation, zero manual intervention
              </div>
            </motion.div>

            {/* Revenue Optimization */}
            <motion.div
              variants={fadeInUp}
              className="bg-white/[0.01] border border-r-0 border-b-0 border-white/5 p-6 transition-all duration-300"
            >
              <div className="flex items-center space-x-3 mb-6">
                <IconCoin className="w-5 h-5 text-red-400" />
                <h4 className="text-lg font-medium text-white">
                  Revenue Optimization
                </h4>
              </div>

              <h5 className="text-xl font-medium text-white mb-3">
                <span className="text-red-400">Maximize revenue</span> with
                strategic tax planning.
              </h5>

              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Our compliance experts optimize your tax structure to minimize
                global tax burden while maintaining full compliance.
              </p>

              {/* Optimization Results */}
              <div className="bg-black/20 border border-white/10 p-3 mb-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-gray-500">
                    Tax Optimization
                  </span>
                  <span className="text-xs text-red-400">Active Strategy</span>
                </div>
                <div className="space-y-1 text-xs">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Effective Tax Rate</span>
                    <span className="text-green-400">-12.3%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Annual Savings</span>
                    <span className="text-green-400">$127K</span>
                  </div>
                </div>
              </div>

              <div className="text-xs text-red-400">
                Strategic optimization included
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Comparison Table Section */}
        <section className="pb-0 relative border-t border-white/5">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center pt-20 pb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-medium text-white mb-4 tracking-tight">
              MoR vs. DIY Compliance
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              See why developers choose VibePay's Merchant of Record service
              over building compliance infrastructure themselves.
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="w-full"
          >
            <div className="overflow-hidden border-t border-white/5">
              <table className="w-full">
                <thead className="bg-white/[0.02] border-b border-white/5">
                  <tr>
                    <th className="px-8 py-4 text-left text-lg font-medium text-white border-r border-white/5">
                      Feature
                    </th>
                    <th className="px-8 py-4 text-center text-lg font-medium text-green-400 border-r border-white/5">
                      VibePay MoR
                    </th>
                    <th className="px-8 py-4 text-center text-lg font-medium text-red-400">
                      DIY Compliance
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/5 hover:bg-white/[0.01] transition-colors">
                    <td className="px-8 py-4 text-gray-300 font-medium border-r border-white/5">
                      Setup Time
                    </td>
                                          <td className="px-8 py-4 text-center border-r border-white/5">
                        <span className="text-green-400 font-medium">
                          Same day
                        </span>
                      </td>
                      <td className="px-8 py-4 text-center">
                        <span className="text-red-400 font-medium">
                          6-12 months
                        </span>
                      </td>
                    </tr>
                    <tr className="border-b border-white/5 hover:bg-white/[0.01] transition-colors bg-white/[0.005]">
                      <td className="px-8 py-4 text-gray-300 font-medium border-r border-white/5">
                        Legal Liability
                      </td>
                      <td className="px-8 py-4 text-center border-r border-white/5">
                        <span className="text-green-400 font-medium">
                          VibePay handles it
                        </span>
                      </td>
                      <td className="px-8 py-4 text-center">
                        <span className="text-red-400 font-medium">
                          You're responsible
                        </span>
                      </td>
                    </tr>
                    <tr className="border-b border-white/5 hover:bg-white/[0.01] transition-colors">
                      <td className="px-8 py-4 text-gray-300 font-medium border-r border-white/5">
                        Tax Filing
                      </td>
                      <td className="px-8 py-4 text-center border-r border-white/5">
                        <span className="text-green-400 font-medium">
                          100% Automated
                        </span>
                      </td>
                      <td className="px-8 py-4 text-center">
                        <span className="text-red-400 font-medium">
                          Manual work
                        </span>
                      </td>
                    </tr>
                    <tr className="border-b border-white/5 hover:bg-white/[0.01] transition-colors bg-white/[0.005]">
                      <td className="px-8 py-4 text-gray-300 font-medium border-r border-white/5">
                        Compliance Updates
                      </td>
                      <td className="px-8 py-4 text-center border-r border-white/5">
                        <span className="text-green-400 font-medium">
                          Auto-updated
                        </span>
                      </td>
                      <td className="px-8 py-4 text-center">
                        <span className="text-red-400 font-medium">
                          Manual tracking
                        </span>
                      </td>
                    </tr>
                    <tr className="border-b border-white/5 hover:bg-white/[0.01] transition-colors">
                      <td className="px-8 py-4 text-gray-300 font-medium border-r border-white/5">
                        Audit Support
                      </td>
                      <td className="px-8 py-4 text-center border-r border-white/5">
                        <span className="text-green-400 font-medium">
                          Full protection
                        </span>
                      </td>
                      <td className="px-8 py-4 text-center">
                        <span className="text-red-400 font-medium">
                          Your risk
                        </span>
                      </td>
                    </tr>
                    <tr className="border-b border-white/5 hover:bg-white/[0.01] transition-colors bg-white/[0.005]">
                      <td className="px-8 py-4 text-gray-300 font-medium border-r border-white/5">
                        Global Coverage
                      </td>
                      <td className="px-8 py-4 text-center border-r border-white/5">
                        <span className="text-green-400 font-medium">
                          180+ countries
                        </span>
                      </td>
                      <td className="px-8 py-4 text-center">
                        <span className="text-red-400 font-medium">
                          Very limited
                        </span>
                      </td>
                    </tr>
                    <tr className="hover:bg-white/[0.01] transition-colors">
                      <td className="px-8 py-4 text-gray-300 font-medium border-r border-white/5">
                        Average Cost
                      </td>
                      <td className="px-8 py-4 text-center border-r border-white/5">
                        <span className="text-green-400 font-medium">
                          3% transaction fee
                        </span>
                      </td>
                      <td className="px-8 py-4 text-center">
                        <span className="text-red-400 font-medium">
                          $250K+ setup cost
                        </span>
                      </td>
                    </tr>
                </tbody>
              </table>
            </div>
          </motion.div>
        </section>

        <CTASection />
        <Footer />
      </div>
    </div>
  );
}
