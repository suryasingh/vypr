"use client";

import { BetaAccessModal } from "@/components/BetaAccessModal";
import { Button } from "@/components/ui/button";

export function PricingSection() {
  return (
    <section
      className="py-16 sm:py-20 lg:py-28 relative border-t border-border/40 px-4 sm:px-8 lg:px-14"
      id="pricing"
    >
      {/* Section Header */}
      <div className="text-left lg:text-center mb-12 lg:mb-20">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-white mb-4 tracking-tight">
          Global pricing. Zero tax complexity.
        </h2>
        <p className="text-base sm:text-lg text-gray-400 max-w-2xl lg:mx-auto">
          Pay only when you earn. As your Merchant of Record, we handle all
          global taxes, compliance, and regulations automatically.
        </p>
      </div>

      {/* Main Pricing Card */}
      <div className="max-w-2xl mx-auto mb-12 lg:mb-16">
        <div className="bg-white/[0.01] border border-white/5 p-6 lg:p-8 text-center">
          <div className="mb-8">
            <div className="text-4xl sm:text-5xl font-medium text-white mb-2">
              2.9<span className="text-xl sm:text-2xl text-gray-400">%</span>
              <span className="text-base sm:text-lg text-gray-400 ml-2">+ 30¢</span>
            </div>
            <div className="text-gray-400">Per transaction</div>
          </div>

          <p className="text-sm sm:text-base text-gray-300 mb-8 leading-relaxed">
            Only pay when your customers buy credits - from anywhere in the
            world. No setup fees, no VAT headaches, no compliance risk. We
            handle global tax collection as your Merchant of Record.
          </p>

          <BetaAccessModal>
            <Button className="bg-white text-black hover:bg-gray-100 font-medium h-12 px-8">
              Request Beta Access
            </Button>
          </BetaAccessModal>
        </div>
      </div>

      {/* Pricing Examples */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 lg:mb-16">
        {[
          {
            scenario: "🇺🇸 US Sale",
            amount: "$19.99",
            fee: "$0.88",
            youEarn: "$19.11",
            description: "500 credits for AI features • Sales tax handled",
          },
          {
            scenario: "🇩🇪 German Sale",
            amount: "€29.99",
            fee: "€1.17",
            youEarn: "€28.82",
            description: "1000 credits for AI generation • VAT included",
          },
          {
            scenario: "🇬🇧 UK Sale",
            amount: "£9.99",
            fee: "£0.59",
            youEarn: "£9.40",
            description: "250 credits for AI chat • Full VAT compliance",
          },
        ].map((example, index) => (
          <div
            key={index}
            className="bg-white/[0.01] border border-white/5 p-4 sm:p-6"
          >
            <div className="space-y-4">
              <div>
                <div className="text-lg font-medium text-white mb-1">
                  {example.scenario}
                </div>
                <div className="text-sm text-gray-500">
                  {example.description}
                </div>
              </div>

              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Customer pays</span>
                  <span className="text-white font-medium">
                    {example.amount}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">VibePay fee</span>
                  <span className="text-gray-400">{example.fee}</span>
                </div>
                <div className="flex justify-between border-t border-white/10 pt-2">
                  <span className="text-white font-medium">You earn</span>
                  <span className="text-green-400 font-medium">
                    {example.youEarn}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
