"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export function HowItWorksSection() {
  return (
    <section className="py-28 relative border-t border-border/40 px-14" id="how-it-works">
        {/* Section Header */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl lg:text-5xl font-medium text-white mb-4 tracking-tight">
            Sell credits globally in 3 steps
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            From local app to global revenue with zero tax complexity
          </p>
        </motion.div>

        {/* Steps */}
        <div className="space-y-24">
          {/* Step 1 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 font-medium">
                  1
                </div>
                <h3 className="text-xl font-medium text-white">
                  Install the SDK
                </h3>
              </div>

              <h4 className="text-2xl lg:text-3xl font-medium text-white leading-tight">
                Add credit systems to your app in{" "}
                <span className="text-purple-400">5 minutes</span>
              </h4>

              <p className="text-gray-400 leading-relaxed">
                Install our SDK and start adding credit-based features to your app. 
                Works with any JavaScript framework. TypeScript support included.
              </p>

              <div className="flex items-center space-x-2 text-sm text-purple-300">
                <div className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                <span>Ready for production immediately</span>
              </div>
            </div>

            <div className="bg-black/20 border border-white/10 overflow-hidden">
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-white/[0.01]">
                <span className="text-xs text-gray-500 font-mono">
                  terminal
                </span>
                <div className="flex items-center space-x-1">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                  <span className="text-xs text-green-400">Active</span>
                </div>
              </div>
              <div className="p-4">
                <pre className="text-sm font-mono leading-relaxed">
                  <code>
                    <span className="text-gray-500">$</span>{" "}
                    <span className="text-cyan-400">npm</span>{" "}
                    <span className="text-white">install</span>{" "}
                    <span className="text-green-400">@vibepay/sdk</span>
                    {"\n"}
                    <span className="text-gray-400">
                      ✓ Installed successfully
                    </span>
                    {"\n"}
                    <span className="text-gray-400">
                      ✓ TypeScript definitions included
                    </span>
                  </code>
                </pre>
              </div>
            </div>
          </motion.div>

          {/* Step 2 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <div className="lg:order-2 space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-400 font-medium">
                  2
                </div>
                <h3 className="text-xl font-medium text-white">
                  Set up credit packages
                </h3>
              </div>

              <h4 className="text-2xl lg:text-3xl font-medium text-white leading-tight">
                <span className="text-green-400">Configure once</span>, sell 
                everywhere with automatic tax compliance
              </h4>

              <p className="text-gray-400 leading-relaxed">
                Set your credit prices and packages. As your Merchant of Record, 
                we automatically handle all global tax calculations, registrations, 
                and compliance across 180+ countries.
              </p>

              <div className="flex items-center space-x-2 text-sm text-green-300">
                <div className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                <span>Global tax compliance included</span>
              </div>
            </div>

            <div className="lg:order-1 bg-black/20 border border-white/10 p-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-xs text-gray-400">
                    Credit Packages
                  </label>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-2 bg-white/5 border border-white/10">
                      <span className="text-sm text-white">Starter Pack</span>
                      <span className="text-sm text-green-400">$9.99 • 100 credits</span>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-white/5 border border-white/10">
                      <span className="text-sm text-white">Pro Pack</span>
                      <span className="text-sm text-green-400">$29.99 • 500 credits</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs text-gray-400">
                    Global Tax Status
                  </label>
                  <div className="flex items-center space-x-2 p-2 bg-green-500/10 border border-green-500/20">
                    <div className="w-2 h-2 bg-green-400 rounded-full" />
                    <span className="text-xs text-green-300">Auto-configured for 180+ countries</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs text-gray-400">
                    Pricing Preview
                  </label>
                  <div className="p-2 bg-white/5 border border-white/10 text-xs">
                    <div className="text-gray-300">🇺🇸 US: $29.99 (sales tax auto-added)</div>
                    <div className="text-gray-300">🇩🇪 Germany: €27.50 (VAT included)</div>
                    <div className="text-gray-300">🇬🇧 UK: £24.99 (VAT included)</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Step 3 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 font-medium">
                  3
                </div>
                <h3 className="text-xl font-medium text-white">
                  Sell credits globally
                </h3>
              </div>

              <h4 className="text-2xl lg:text-3xl font-medium text-white leading-tight">
                <span className="text-cyan-400">Launch</span> and watch 
                global revenue flow in
              </h4>

              <p className="text-gray-400 leading-relaxed">
                Your customers can buy credits from anywhere in the world. 
                We automatically calculate and collect the right taxes, 
                handle currency conversion, and ensure full compliance.
              </p>

              <div className="flex items-center space-x-2 text-sm text-cyan-300">
                <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                <span>Live in production instantly</span>
              </div>
            </div>

            <div className="bg-black/20 border border-white/10 p-6">
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="space-y-1">
                  <div className="text-xs text-gray-400">Revenue Today</div>
                  <div className="text-lg font-medium text-white">
                    $1,247.80
                  </div>
                  <div className="text-xs text-green-400">+24.3%</div>
                </div>
                <div className="space-y-1">
                  <div className="text-xs text-gray-400">Active Users</div>
                  <div className="text-lg font-medium text-white">1,892</div>
                  <div className="text-xs text-cyan-400">+15.7%</div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="text-xs text-gray-400 mb-2">
                  Global Sales (Live)
                </div>
                {[
                  {
                    location: "🇩🇪 Germany",
                    action: "Pro Pack purchased",
                    amount: "€27.50",
                    tax: "VAT included",
                    time: "2s ago",
                  },
                  {
                    location: "🇺🇸 California",
                    action: "Starter Pack purchased", 
                    amount: "$9.99",
                    tax: "Sales tax added",
                    time: "8s ago",
                  },
                  {
                    location: "🇬🇧 United Kingdom",
                    action: "Pro Pack purchased",
                    amount: "£24.99",
                    tax: "VAT included", 
                    time: "15s ago",
                  },
                ].map((sale, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between text-xs bg-white/5 p-2"
                  >
                    <div className="space-y-1">
                      <div className="text-gray-300">{sale.location} • {sale.action}</div>
                      <div className="text-gray-500">{sale.tax}</div>
                    </div>
                    <div className="text-right space-y-1">
                      <div className="text-green-400">{sale.amount}</div>
                      <div className="text-gray-500">{sale.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-20 space-y-6"
        >
          <div className="max-w-xl mx-auto space-y-6">
            <p className="text-gray-400">
              Ready to sell credits globally without tax headaches?
            </p>
            <Button className="bg-white text-black hover:bg-gray-100 font-medium h-12 px-8">
              Request Beta Access
            </Button>
          </div>
        </motion.div>
    </section>
  );
} 