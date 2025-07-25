"use client";

import { Button } from "@/components/ui/button";
import {
  IconArrowRight,
  IconBolt,
  IconRocket,
  IconUsers,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import { BetaAccessModal } from "@/components/BetaAccessModal";
import { cn } from "@/lib/utils";
import { Ripple } from "../magicui/ripple";

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

export function CTASection({ className }: { className?: string }) {
  return (
    <section
      className={cn(
        "py-28 relative border-t border-border/40 px-14",
        className
      )}
    >
      <Ripple
        className="absolute inset-0 z-0"
        mainCircleOpacity={0.15}
        mainCircleSize={420}
        numCircles={10}
      />
      <motion.div
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="text-center mb-16 z-20 relative"
      >
        <h2 className="text-5xl lg:text-6xl font-medium text-white mb-6 tracking-tight">
          Ready to monetize your AI app?
        </h2>

        <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Join developers who chose credit systems with built-in growth
          features. Global compliance included when your users span multiple
          countries.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mt-12">
          <BetaAccessModal>
            <Button className="bg-white cursor-pointer text-black hover:bg-gray-100 font-medium h-12 px-8 text-base">
              Request Beta Access
            </Button>
          </BetaAccessModal>
          <a
            href="https://cal.com/vibepay"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="ghost"
              className="text-gray-300 cursor-pointer w-[220px] hover:text-white hover:bg-white/10 font-medium h-12 px-8 text-base border border-white/20 group"
            >
              Book a Demo
              <IconArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>
        </div>
      </motion.div>

      {/* Benefits Grid */}
      <motion.div
        variants={stagger}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="grid md:grid-cols-3 gap-8 mb-16"
      >
        <motion.div variants={fadeInUp} className="text-center space-y-4">
          <div className="w-12 h-12 bg-green-500/10 border border-green-500/20 mx-auto flex items-center justify-center">
            <IconBolt className="w-6 h-6 text-green-400" />
          </div>
          <h3 className="font-medium text-white">Perfect for AI features</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            Handle variable AI costs elegantly with credits. Serve users in 180+
            countries with automatic tax compliance as your Merchant of Record.
          </p>
        </motion.div>

        <motion.div variants={fadeInUp} className="text-center space-y-4">
          <div className="w-12 h-12 bg-purple-500/10 border border-purple-500/20 mx-auto flex items-center justify-center">
            <IconRocket className="w-6 h-6 text-purple-400" />
          </div>
          <h3 className="font-medium text-white">Built-in growth features</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            Boost revenue with automated rewards, streaks, and incentives that
            increase repeat purchases.
          </p>
        </motion.div>

        <motion.div variants={fadeInUp} className="text-center space-y-4">
          <div className="w-12 h-12 bg-cyan-500/10 border border-cyan-500/20 mx-auto flex items-center justify-center">
            <IconUsers className="w-6 h-6 text-cyan-400" />
          </div>
          <h3 className="font-medium text-white">Zero compliance risk</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            We handle VAT, sales tax, and all legal liability across every
            country where you sell.
          </p>
        </motion.div>
      </motion.div>

      {/* Final Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-center"
      >
        <div className="inline-flex items-center space-x-8 text-sm text-gray-500">
          <div>
            <span className="text-white font-medium">180+</span> countries
          </div>
          <div>
            <span className="text-white font-medium">$1.2M+</span> global sales
          </div>
          <div>
            <span className="text-white font-medium">100%</span> tax compliant
          </div>
        </div>
      </motion.div>
    </section>
  );
}
