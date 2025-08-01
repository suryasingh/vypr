"use client";

import { BetaAccessModal } from "@/components/BetaAccessModal";
import { Button } from "@/components/ui/button";

export function DemoSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-28 relative border-t border-border/40 px-4 sm:px-8 lg:px-14">
      {/* Section Header */}
      <div className="text-left lg:text-center mb-12 lg:mb-20">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-white mb-4 tracking-tight">
          Credits + growth for AI apps. Without the complexity.
        </h2>
        <p className="text-base sm:text-lg text-gray-400 max-w-2xl lg:mx-auto">
          Building credit systems and growth features is hard. Adding global
          compliance makes it impossible.
        </p>
      </div>

      {/* Comparison Grid */}
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        {/* Left side - Traditional approach */}
        <div className="space-y-6">
          <div className="space-y-3">
            <div className="w-12 h-12 bg-red-500/10 border border-red-500/20 flex items-center justify-center">
              <span className="text-red-400 text-xl">⚠️</span>
            </div>
            <div>
              <h3 className="text-lg font-medium text-white">
                Building in-house + global sales
              </h3>
              <p className="text-sm text-gray-500">The compliance nightmare</p>
            </div>
          </div>

          {/* Development phases */}
          <div className="bg-white/[0.02] border border-white/10 p-4 sm:p-6 space-y-4">
            <h4 className="font-medium text-white text-sm mb-7">
              What you need to build:
            </h4>
            {[
              { task: "Payment system + credit logic", time: "8-12 weeks" },
              { task: "Global tax calculation", time: "10-16 weeks" },
              { task: "Legal compliance setup", time: "12+ weeks" },
              { task: "User growth & retention features", time: "6-8 weeks" },
              { task: "Multi-currency & reporting", time: "4-6 weeks" },
              { task: "Analytics & dashboards", time: "3-4 weeks" },
              { task: "Testing & QA across regions", time: "4-6 weeks" },
              { task: "Security & fraud prevention", time: "3-5 weeks" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start sm:items-center justify-between py-2 sm:py-1.5 border-b border-white/5 last:border-0 gap-3"
              >
                <span className="text-sm text-gray-300 flex-1">{item.task}</span>
                <span className="text-xs text-gray-500 font-mono shrink-0">
                  {item.time}
                </span>
              </div>
            ))}
          </div>

          {/* What you handle */}
          <div className="space-y-3">
            <h4 className="font-medium text-white text-sm">
              Ongoing compliance burden:
            </h4>
            <div className="space-y-2">
              {[
                "Tax registration in multiple countries",
                "Monthly tax filings & returns",
                "Legal liability for mistakes",
                "Currency & banking complexity",
                "Constant regulation changes",
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-3 text-sm">
                  <div className="w-1.5 h-1.5 bg-red-400 rounded-full shrink-0" />
                  <span className="text-gray-400">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Total cost */}
          <div className="bg-red-500/5 border border-red-500/10 p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium text-white text-sm">
                  Total timeline + cost
                </div>
                <div className="text-xs text-gray-400">
                  Plus ongoing legal risk
                </div>
              </div>
              <div className="text-right">
                <div className="text-lg font-medium text-red-400">
                  12+ months
                </div>
                <div className="text-xs text-gray-500">$300K+ investment</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - With VibePay */}
        <div className="space-y-6">
          <div className="space-y-3">
            <div className="w-12 h-12 bg-green-500/10 border border-green-500/20 flex items-center justify-center">
              <span className="text-green-400 text-xl">⚡</span>
            </div>
            <div>
              <h3 className="text-lg font-medium text-white">
                With VibePay (MoR)
              </h3>
              <p className="text-sm text-gray-500">
                Build your app. Serve users globally.
              </p>
            </div>
          </div>

          {/* Simple implementation */}
          <div className="bg-white/[0.02] border border-white/10 p-4 sm:p-6 space-y-4">
            <h4 className="font-medium text-white text-sm mb-4">
              Your implementation:
            </h4>
            <div className="space-y-4">
              <div className="overflow-x-auto">
                <pre className="text-xs sm:text-sm font-mono leading-relaxed whitespace-pre-wrap sm:whitespace-pre">
                <code>
                  <span className="text-purple-400">import</span>{" "}
                  <span className="text-white">&#123;</span>{" "}
                  <span className="text-cyan-400">VibePay</span>{" "}
                  <span className="text-white">&#125;</span>{" "}
                  <span className="text-purple-400">from</span>{" "}
                  <span className="text-green-400">
                    &apos;@vibepay/sdk&apos;
                  </span>
                  {"\n\n"}
                  <span className="text-gray-500">{`// Charge credits for AI usage`}</span>
                  {"\n"}
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-cyan-400">result</span>{" "}
                  <span className="text-white">=</span>{" "}
                  <span className="text-purple-400">await</span>{" "}
                  <span className="text-cyan-400">VibePay</span>
                  <span className="text-white">.</span>
                  <span className="text-yellow-400">charge</span>
                  <span className="text-white">(&#123;</span>
                  {"\n  "}
                  <span className="text-cyan-400">userId</span>
                  <span className="text-white">:</span>{" "}
                  <span className="text-white">user</span>
                  <span className="text-white">.</span>
                  <span className="text-cyan-400">id</span>
                  <span className="text-white">,</span>
                  {"\n  "}
                  <span className="text-cyan-400">amount</span>
                  <span className="text-white">:</span>{" "}
                  <span className="text-orange-400">25</span>
                  <span className="text-white">,</span>
                  {"\n  "}
                  <span className="text-cyan-400">description</span>
                  <span className="text-white">:</span>{" "}
                  <span className="text-green-400">
                    &apos;AI image generation&apos;
                  </span>
                  {"\n"}
                  <span className="text-white">&#125;)</span>
                  {"\n\n"}
                  <span className="text-gray-500">
                    {`// Reward user engagement`}
                  </span>
                  {"\n"}
                  <span className="text-purple-400">await</span>{" "}
                  <span className="text-cyan-400">VibePay</span>
                  <span className="text-white">.</span>
                  <span className="text-yellow-400">reward</span>
                  <span className="text-white">(&#123;</span>
                  {"\n  "}
                  <span className="text-cyan-400">userId</span>
                  <span className="text-white">:</span>{" "}
                  <span className="text-white">user</span>
                  <span className="text-white">.</span>
                  <span className="text-cyan-400">id</span>
                  <span className="text-white">,</span>
                  {"\n  "}
                  <span className="text-cyan-400">type</span>
                  <span className="text-white">:</span>{" "}
                  <span className="text-green-400">
                    &apos;daily_streak&apos;
                  </span>
                  <span className="text-white">,</span>
                  {"\n  "}
                  <span className="text-cyan-400">amount</span>
                  <span className="text-white">:</span>{" "}
                  <span className="text-orange-400">50</span>
                  {"\n"}
                  <span className="text-white">&#125;)</span>
                  {"\n\n"}
                  <span className="text-gray-500">
                    {`// ✅ Credits, growth & global taxes`}
                  </span>
                </code>
                </pre>
              </div>
            </div>
          </div>

          {/* What's included */}
          <div className="space-y-3">
            <h4 className="font-medium text-white text-sm">
              Complete AI app infrastructure:
            </h4>
            <div className="space-y-2">
              {[
                "Credit systems for variable AI costs",
                "Built-in growth & retention features",
                "Global tax calculation & collection",
                "Real-time analytics & reporting",
                "Currency conversion & payments",
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-3 text-sm">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full shrink-0" />
                  <span className="text-gray-400">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Total implementation time */}
          <div className="bg-green-500/5 border border-green-500/10 p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium text-white text-sm">
                  Total implementation
                </div>
                <div className="text-xs text-gray-400">
                  Sell globally from day one
                </div>
              </div>
              <div className="text-right">
                <div className="text-lg font-medium text-green-400">
                  5 minutes
                </div>
                <div className="text-xs text-gray-500">Revenue share only</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="text-center mt-12 lg:mt-16">
        <p className="text-gray-400 mb-6">
          Ready to skip months of development?
        </p>
        <div className="flex items-center justify-center">
          <BetaAccessModal>
            <Button className="bg-white text-black hover:bg-gray-100 font-medium h-11 px-8">
              Request Beta Access
            </Button>
          </BetaAccessModal>
        </div>
      </div>
    </section>
  );
}
