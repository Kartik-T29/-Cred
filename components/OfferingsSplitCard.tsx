"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function OfferingsSplitCard() {
  return (
    <section className="relative w-full py-24 bg-[#040914] overflow-hidden flex justify-center">
      <div className="max-w-7xl w-full mx-6 md:mx-12 lg:mx-20">
        <div className="grid grid-cols-1 md:grid-cols-2 rounded-2xl border border-[#2a52d8]/30 overflow-hidden relative">
          
          {/* subtle divider line for desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#2a52d8]/30 to-transparent"></div>
          
          {/* Left Half — AI Transformation */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative bg-[#0B1638] p-10 md:p-14 flex flex-col justify-between transition-colors duration-500 hover:bg-[#0B1638]/80 border-b md:border-b-0 md:border-r border-[#2a52d8]/10"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#2a52d8]/0 to-[#00F0FF]/0 group-hover:from-[#2a52d8]/5 group-hover:to-[#00F0FF]/5 transition-all duration-500 rounded-tl-2xl md:rounded-bl-2xl"></div>
            
            <div className="relative z-10">
              <span className="inline-block py-1.5 px-3 rounded-full bg-[#2a52d8]/20 border border-[#2a52d8]/40 text-[#00F0FF] text-xs font-semibold uppercase tracking-widest mb-6">
                Build AI Services
              </span>
              
              <h3 className="text-3xl font-display text-white mb-2 tracking-tight">AI Transformation</h3>
              <p className="text-[#00F0FF] font-medium mb-6 text-lg">One-Time Engagement</p>
              
              <p className="text-gray-400 text-sm leading-relaxed mb-8">
                End-to-end design, custom agent development, and enterprise integration.
              </p>
              
              <div className="text-2xl font-semibold text-white mb-8">
                Starting from <span className="text-[#00F0FF]">₹2,99,999+</span>
              </div>
            </div>

            <div className="relative z-10">
              <Link href="https://www.credentai.qzz.io/platform/ai-transformation">
                <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-transparent border border-[#2a52d8] text-white hover:bg-[#2a52d8]/20 transition-all duration-300 font-medium text-sm group-hover:shadow-[0_0_15px_rgba(42,82,216,0.3)]">
                  Learn More
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </Link>
            </div>
          </motion.div>

          {/* Right Half — AI Optimization Platform */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group relative bg-[#0B1638] p-10 md:p-14 flex flex-col justify-between transition-colors duration-500 hover:bg-[#0B1638]/80"
          >
            <div className="absolute inset-0 bg-gradient-to-bl from-[#00F0FF]/0 to-[#2a52d8]/0 group-hover:from-[#00F0FF]/5 group-hover:to-[#2a52d8]/5 transition-all duration-500 rounded-br-2xl md:rounded-tr-2xl"></div>

            <div className="relative z-10">
              <span className="inline-block py-1.5 px-3 rounded-full bg-[#00F0FF]/10 border border-[#00F0FF]/30 text-[#00F0FF] text-xs font-semibold uppercase tracking-widest mb-6">
                Optimize AI Operations
              </span>
              
              <h3 className="text-3xl font-display text-white mb-2 tracking-tight">AI Optimization Platform</h3>
              <p className="text-[#00F0FF] font-medium mb-6 text-lg">Monthly Subscription</p>
              
              <p className="text-gray-400 text-sm leading-relaxed mb-8">
                Unified operating layer that orchestrates hybrid workforce, intelligent routing, governance, and live ROI tracking.
              </p>
              
              <div className="text-2xl font-semibold text-white mb-8">
                Starting from <span className="text-[#00F0FF]">₹49,999/mo+</span>
              </div>
            </div>

            <div className="relative z-10">
              <Link href="https://www.credentai.qzz.io/platform/ai-optimization">
                <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[#2a52d8] text-white hover:bg-[#2a52d8]/80 hover:shadow-[0_0_20px_rgba(42,82,216,0.4)] transition-all duration-300 font-medium text-sm border border-[#2a52d8]">
                  Learn More
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
