"use client";

import { BetaAccessModal } from "@/components/BetaAccessModal";
import { Button } from "@/components/ui/button";
import { FlickeringGrid } from "../magicui/flickering-grid";

export function HeroSection() {
  return (
    <section className="pt-20 pb-20 sm:pt-28 sm:pb-32 relative px-4 sm:px-8 lg:px-14">
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
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center relative z-10">
        {/* Left side - Main content */}
        <div className="space-y-6 lg:space-y-8">
          {/* Status indicator */}
          <div className="inline-flex items-center px-4 py-2 bg-white/5 border border-white/10">
            <div className="w-2 h-2 bg-orange-400 mr-3" />
            <span className="text-sm text-gray-300 font-medium">
              Closed Beta • Built for AI Apps
            </span>
          </div>

          {/* Main headline */}
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-medium text-white leading-[0.9] tracking-tight">
              Credits + growth
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                for AI apps.
              </span>
              <br />
              <span className="text-gray-400">Global by default.</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-400 leading-relaxed max-w-lg">
              Handle variable AI costs with credits, accelerate user growth with
              built-in retention features, and sell globally—all with a single
              API. We&apos;re your Merchant of Record.
            </p>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <BetaAccessModal>
              <Button className="cursor-pointer font-medium h-12 px-8 text-base">
                Request Beta Access
              </Button>
            </BetaAccessModal>
            <a
              href="https://cal.com/vypr.sh"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="ghost"
                className="cursor-pointer w-[220px] text-gray-300 hover:text-white hover:bg-white/10 font-medium h-12 px-8 text-base border border-white/20"
              >
                Book a Demo
              </Button>
            </a>
          </div>

          {/* Social proof */}
          <div className="text-sm text-gray-500">
            Powering AI apps serving users in 180+ countries
          </div>
        </div>

        {/* Right side - Clean product showcase */}
        <div className="relative mt-8 lg:mt-0">
          {/* Main dashboard mockup */}
          <div className="bg-white/[0.02] backdrop-blur border border-border/60 rounded-lg overflow-hidden shadow-2xl">
            {/* Window chrome */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-border/60 bg-white/[0.01]">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500/70 rounded-full" />
                <div className="w-3 h-3 bg-yellow-500/70 rounded-full" />
                <div className="w-3 h-3 bg-green-500/70 rounded-full" />
              </div>
              <div className="text-xs text-gray-500 font-mono">
                dashboard.vibepay.com
              </div>
              <div className="w-16" />
            </div>

            {/* Dashboard content */}
            <div className="p-4 sm:p-6 lg:p-8 space-y-6 lg:space-y-8">
              {/* Header with AI + gamification focus */}
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <h3 className="text-lg font-medium text-white">Dashboard</h3>
                  <p className="text-sm text-gray-400">
                    AI usage • Engagement rewards
                  </p>
                </div>
                <div className="text-right space-y-1">
                  <div className="text-2xl font-medium text-white">847K</div>
                  <div className="text-sm text-green-400 font-medium">
                    Total transactions
                  </div>
                </div>
              </div>

              {/* AI + gamification metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6">
                <div className="space-y-2">
                  <div className="text-xs text-gray-500 uppercase tracking-wide">
                    Active Users
                  </div>
                  <div className="text-xl font-medium text-white">2,847</div>
                  <div className="text-xs text-cyan-400">+18% this week</div>
                </div>
                <div className="space-y-2">
                  <div className="text-xs text-gray-500 uppercase tracking-wide">
                    Avg. Credits/User
                  </div>
                  <div className="text-xl font-medium text-white">127</div>
                  <div className="text-xs text-purple-400">Per session</div>
                </div>
                <div className="space-y-2">
                  <div className="text-xs text-gray-500 uppercase tracking-wide">
                    Monthly Revenue
                  </div>
                  <div className="text-xl font-medium text-white">$24.2K</div>
                  <div className="text-xs text-green-400">+32% growth</div>
                </div>
              </div>

              {/* Recent activity showing both AI usage and gamification */}
              <div className="space-y-4">
                <div className="text-sm font-medium text-gray-300">
                  Live Activity
                </div>
                <div className="space-y-3">
                  {[
                    {
                      user: "alex_dev",
                      action: "🎨 AI Image Generation",
                      credits: "-25 credits",
                      time: "2m ago",
                    },
                    {
                      user: "sarah_pm",
                      action: "🏆 Daily Streak Bonus",
                      credits: "+50 credits",
                      time: "5m ago",
                    },
                    {
                      user: "mike_design",
                      action: "💬 GPT-4 Chat Session",
                      credits: "-15 credits",
                      time: "8m ago",
                    },
                  ].map((activity, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between py-3 px-4 bg-white/[0.02] rounded-lg border border-white/5"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-2 h-2 bg-green-400 rounded-full" />
                        <div className="space-y-1">
                          <div className="text-sm text-white font-medium">
                            {activity.action}
                          </div>
                          <div className="text-xs text-gray-500 font-mono">
                            {activity.user}
                          </div>
                        </div>
                      </div>
                      <div className="text-right space-y-1">
                        <div
                          className={`text-sm font-medium ${
                            activity.credits.startsWith("+")
                              ? "text-green-400"
                              : "text-orange-400"
                          }`}
                        >
                          {activity.credits}
                        </div>
                        <div className="text-xs text-gray-500">
                          {activity.time}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Floating code snippet - more refined */}
          <div className="hidden lg:block absolute -bottom-8 -left-8 bg-background/80 border rounded-lg p-5 shadow-2xl max-w-xs backdrop-blur">
            <div className="flex items-center justify-between mb-3">
              <div className="text-xs text-gray-400 font-medium">
                Integration
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                <span className="text-xs text-green-400">Live</span>
              </div>
            </div>
            <pre className="text-xs text-gray-300 font-mono leading-relaxed">
              {`await credits.charge({
  userId: req.user.id,
  amount: 25,
  description: 'AI generation'
})

// ✅ Payments processed
// ✅ Growth active
// ✅ Analytics tracked`}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
