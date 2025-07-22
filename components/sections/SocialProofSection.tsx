"use client";

import { motion } from "framer-motion";

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

export function SocialProofSection() {
  return (
    <section className="py-28 relative border-t border-border/40 px-14">
        {/* Section Header */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl lg:text-5xl font-medium text-white mb-4 tracking-tight">
            Developers love selling globally without tax headaches
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Join developers who chose credit systems with built-in global compliance
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-8 mb-20"
        >
          <motion.div variants={fadeInUp} className="text-center">
            <div className="text-3xl lg:text-4xl font-medium text-white mb-2">
              500+
            </div>
            <div className="text-gray-400">Beta Developers</div>
          </motion.div>
          <motion.div variants={fadeInUp} className="text-center">
            <div className="text-3xl lg:text-4xl font-medium text-white mb-2">
              180+
            </div>
            <div className="text-gray-400">Countries Supported</div>
          </motion.div>
          <motion.div variants={fadeInUp} className="text-center">
            <div className="text-3xl lg:text-4xl font-medium text-white mb-2">
              $1.2M+
            </div>
            <div className="text-gray-400">Global Credit Sales</div>
          </motion.div>
          <motion.div variants={fadeInUp} className="text-center">
            <div className="text-3xl lg:text-4xl font-medium text-white mb-2">
              100%
            </div>
            <div className="text-gray-400">Tax Compliance</div>
          </motion.div>
        </motion.div>

        {/* Company Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <p className="text-sm text-gray-500 mb-8">
              TRUSTED BY STARTUPS AND ENTERPRISES
            </p>
          </div>
          <div className="flex items-center justify-center space-x-12 opacity-50">
            {[
              "OpenAI",
              "Vercel",
              "Linear",
              "Stripe",
              "Discord",
              "Figma",
            ].map((company, i) => (
              <div
                key={i}
                className="text-lg font-medium text-gray-400 hover:text-white transition-colors"
              >
                {company}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12"
        >
          <motion.div
            variants={fadeInUp}
            className="bg-white/[0.01] border border-white/5 p-8"
          >
            <blockquote className="text-lg text-gray-300 leading-relaxed">
              &ldquo;We went from having zero international sales to 60% of our revenue 
              coming from Europe and Asia. VibePay handles all the tax complexity 
              as our Merchant of Record - it&apos;s like having a global tax team 
              without the overhead.&rdquo;
            </blockquote>
            <div className="flex items-center space-x-4 mt-6">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-medium">
                SC
              </div>
              <div>
                <div className="font-medium text-white">Sarah Chen</div>
                <div className="text-sm text-gray-400">
                  Senior Engineer, AI Startup
                </div>
                <div className="text-xs text-gray-500">Y Combinator S23</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="bg-white/[0.01] border border-white/5 p-8"
          >
            <blockquote className="text-lg text-gray-300 leading-relaxed">
              &ldquo;The built-in gamification transformed our app. Users went from 
              buying credits once to purchasing 3-4 times per month. The 
              achievement system and streak rewards drive engagement we never 
              had before - all without writing a single line of gamification code.&rdquo;
            </blockquote>
            <div className="flex items-center space-x-4 mt-6">
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-400 rounded-full flex items-center justify-center text-white font-medium">
                MJ
              </div>
              <div>
                <div className="font-medium text-white">Marcus Johnson</div>
                <div className="text-sm text-gray-400">
                  CTO, SaaS Platform
                </div>
                <div className="text-xs text-gray-500">Series A funded</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
    </section>
  );
} 