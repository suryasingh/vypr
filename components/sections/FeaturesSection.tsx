"use client";

import {
  IconBolt,
  IconChartBar,
  IconCode,
  IconCoin,
  IconShield,
  IconTrophy,
} from "@tabler/icons-react";
import { FlickeringGrid } from "../magicui/flickering-grid";

export function FeaturesSection() {
  return (
    <section className="pb-0 relative border-t border-white/5" id="features">
      {/* Section Header */}
      <div className="relative z-10 pt-28 pb-20">
        <FlickeringGrid
          className="absolute inset-0 z-0 [mask-image:radial-gradient(600px_circle_at_center,white,transparent)]"
          squareSize={4}
          gridGap={6}
          color="#FFFFFF"
          maxOpacity={0.04}
          flickerChance={0.1}
          height={1000}
          width={1400}
        />
        <div className="text-center relative z-10">
          <h2 className="text-4xl lg:text-5xl font-medium text-white mb-4 tracking-tight">
            Built for scale. Designed for speed.
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Complete infrastructure for AI apps. Handle variable costs with
            credits, accelerate user growth with retention features—all while
            serving users globally.
          </p>
        </div>
      </div>

      {/* Main Features Grid */}
      <div className="grid lg:grid-cols-2">
        {/* Credit Infrastructure */}
        <div className="bg-white/[0.01] border border-l-0 border-b-0 border-r-0 border-white/5 p-8 group transition-all duration-300 hover:bg-white/[0.02]">
          <div className="flex items-center space-x-3 mb-6">
            <IconCoin className="w-5 h-5 text-purple-400" />
            <h3 className="text-lg font-medium text-white">
              Credit Infrastructure
            </h3>
          </div>

          <h4 className="text-2xl lg:text-3xl font-medium text-white mb-4 leading-tight">
            <span className="text-purple-400">Process millions</span> in
            payments with enterprise-grade infrastructure.
          </h4>

          <p className="text-gray-400 mb-8 leading-relaxed">
            Handle everything from microtransactions to large purchases.
            Automatic charging, real-time balance updates, and fraud protection
            that scales with your business.
          </p>

          {/* Visual Diagram */}
          <div className="relative bg-black/20 border border-white/10 p-6 mb-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs text-gray-500 font-mono">
                integration.js
              </span>
              <div className="flex items-center space-x-1">
                <div className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                <span className="text-xs text-green-400">Active</span>
              </div>
            </div>
            <div className="space-y-2 text-xs font-mono text-gray-400">
              <div>User Balance: 1,250 credits</div>
              <div className="text-orange-400">→ Charge: 25 credits</div>
              <div className="text-green-400">✓ Balance: 1,225 credits</div>
              <div className="text-blue-400">✓ Analytics tracked</div>
            </div>
          </div>

          <div className="flex items-center text-sm text-purple-300">
            <IconBolt className="w-4 h-4 mr-2" />
            Sub-second response times
          </div>
        </div>

        {/* Growth Engine */}
        <div className="bg-white/[0.01] border border-r-0 border-b-0 border-white/5 p-8 group transition-all duration-300 hover:bg-white/[0.02]">
          <div className="flex items-center space-x-3 mb-6">
            <IconTrophy className="w-5 h-5 text-green-400" />
            <h3 className="text-lg font-medium text-white">Growth Engine</h3>
          </div>

          <h4 className="text-2xl lg:text-3xl font-medium text-white mb-4 leading-tight">
            Turn users into power users with
            <span className="text-green-400"> proven growth patterns</span> that
            work.
          </h4>

          <p className="text-gray-400 mb-8 leading-relaxed">
            Proven retention strategies used by top apps. Automated rewards,
            streak bonuses, and referral systems that increase user lifetime
            value by 85% without any additional development.
          </p>

          {/* Achievement Flow */}
          <div className="space-y-3 mb-6">
            {[
              {
                icon: "🎯",
                action: "User completes action",
                desc: "AI image generation",
                reward: "+25 XP",
              },
              {
                icon: "🏆",
                action: "Achievement Unlocked!",
                desc: "First AI Creation",
                reward: "+500 credits",
              },
              {
                icon: "🔥",
                action: "7-day streak bonus",
                desc: "Daily usage reward",
                reward: "+100 credits",
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
                  <div className="text-xs text-green-300">{step.desc}</div>
                </div>
                <div className="text-xs text-green-400">{step.reward}</div>
              </div>
            ))}
          </div>

          <div className="flex items-center text-sm text-green-300">
            <IconBolt className="w-4 h-4 mr-2" />
            Proven 85% revenue growth boost
          </div>
        </div>
      </div>

      {/* Secondary Features */}
      <div className="grid md:grid-cols-3">
        {/* Analytics Dashboard */}
        <div className="bg-white/[0.01] border border-r-0 border-b-0 border-l-0 border-white/5 p-6  transition-all duration-300">
          <div className="flex items-center space-x-3 mb-6">
            <IconChartBar className="w-5 h-5 text-cyan-400" />
            <h4 className="text-lg font-medium text-white">
              Analytics Dashboard
            </h4>
          </div>

          <h5 className="text-xl font-medium text-white mb-3">
            <span className="text-cyan-400">Real-time intelligence</span> that
            drives revenue decisions, not just pretty charts.
          </h5>

          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            Monitor user behavior, track conversion funnels, and optimize
            pricing with actionable insights that actually move the needle.
          </p>

          {/* Live Metrics Dashboard */}
          <div className="bg-black/20 border border-white/10 p-4 mb-4">
            {/* Header */}
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs text-gray-400">Live metrics</span>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-xs text-green-400">Real-time</span>
              </div>
            </div>

            {/* Key Metrics */}
            <div className="space-y-3">
              {/* AI Requests Today */}
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-400">AI requests today</span>
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-mono text-cyan-400">
                    12,847
                  </span>
                  <span className="text-xs text-green-400">+23%</span>
                </div>
              </div>

              {/* Credits Earned */}
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-400">Credits earned</span>
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-mono text-purple-400">
                    8,470
                  </span>
                  <span className="text-xs text-green-400">+15%</span>
                </div>
              </div>

              {/* Retention Rate */}
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-400">Retention rate</span>
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-mono text-orange-400">
                    87.2%
                  </span>
                  <span className="text-xs text-green-400">+4.1%</span>
                </div>
              </div>

              {/* Separator */}
              <div className="border-t border-white/5 pt-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">
                    Last AI generation
                  </span>
                  <span className="text-xs text-gray-400 font-mono">
                    2 min ago
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-xs text-cyan-400">
            Live data • Updates every 30 seconds
          </div>
        </div>

        {/* Developer Experience */}
        <div className="bg-white/[0.01] border border-r-0 border-b-0 border-white/5 p-6 transition-all duration-300">
          <div className="flex items-center space-x-3 mb-6">
            <IconCode className="w-5 h-5 text-orange-400" />
            <h4 className="text-lg font-medium text-white">
              Developer Experience
            </h4>
          </div>

          <h5 className="text-xl font-medium text-white mb-3">
            <span className="text-orange-400">Ship in minutes</span>, not
            months. APIs that don&apos;t fight you.
          </h5>

          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            Documentation that makes sense. SDKs that work out of the box. Error
            handling that actually helps you debug. Built by developers who hate
            bad APIs.
          </p>

          {/* API Example */}
          <div className="bg-black/20 border border-white/10 p-4 mb-4">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs text-gray-500 font-mono">
                API Response
              </span>
              <div className="flex items-center space-x-1">
                <div className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                <span className="text-xs text-green-400">200</span>
              </div>
            </div>
            <pre className="text-xs font-mono text-gray-400">
              <div className="text-gray-400">&#123;</div>
              <div className="text-gray-400 pl-2">
                <span className="text-orange-300">&quot;success&quot;</span>:{" "}
                <span className="text-green-400">true</span>,
              </div>
              <div className="text-gray-400 pl-2">
                <span className="text-orange-300">&quot;balance&quot;</span>:{" "}
                <span className="text-blue-400">2425</span>,
              </div>
              <div className="text-gray-400 pl-2">
                <span className="text-orange-300">
                  &quot;transaction_id&quot;
                </span>
                : <span className="text-green-400">&quot;tx_abc123&quot;</span>
              </div>
              <div className="text-gray-400">&#125;</div>
            </pre>
          </div>

          <div className="text-xs text-orange-400">
            Production ready in 5 minutes
          </div>
        </div>

        {/* Enterprise Security */}
        <div className="bg-white/[0.01] border border-r-0 border-b-0 border-white/5 p-6 transition-all duration-300">
          <div className="flex items-center space-x-3 mb-6">
            <IconShield className="w-5 h-5 text-red-400" />
            <h4 className="text-lg font-medium text-white">Enterprise Ready</h4>
          </div>

          <h5 className="text-xl font-medium text-white mb-3">
            <span className="text-red-400">Enterprise-grade</span> security
            without the enterprise hassle.
          </h5>

          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            Bank-level security, SOC 2 compliance, and dedicated support. All
            the enterprise features you need, with the simplicity you want.
          </p>

          {/* Security Status */}
          <div className="bg-black/20 border border-white/10 p-3 mb-4">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs text-gray-500">Security Status</span>
              <span className="text-xs text-green-400">
                All Systems Operational
              </span>
            </div>
            <div className="space-y-1 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-400">Encryption</span>
                <span className="text-green-400">256-bit SSL</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Compliance</span>
                <span className="text-green-400">SOC 2 Type II</span>
              </div>
            </div>
          </div>

          <div className="text-xs text-red-400">99.9% uptime SLA</div>
        </div>
      </div>
    </section>
  );
}
