"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import ChatModal from "@/components/chatbot/ChatModal";
import BookingModal from "@/components/booking/BookingModal";

export default function AboutUs() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#040914] text-white selection:bg-[#2a52d8]/30">
      <Navbar onOpenChat={() => setIsChatOpen(true)} />

      {/* Section 1: Hero */}
      <section className="relative pt-32 pb-20 px-6 md:px-12 lg:px-20 overflow-hidden flex flex-col items-center text-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#2a52d8]/20 via-[#040914] to-[#040914] -z-10"></div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-4xl mx-auto">
          <span className="inline-block py-1.5 px-3 rounded-full bg-[#2a52d8]/10 border border-[#2a52d8]/30 text-[#00F0FF] text-xs font-semibold uppercase tracking-widest mb-6">
            ABOUT CREDENT
          </span>
          <h1 className="text-4xl md:text-6xl font-display font-bold tracking-tight mb-6 leading-tight">
            Building the Operating Layer for the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2a52d8] to-[#00F0FF]">Hybrid Workforce</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-4 max-w-3xl mx-auto leading-relaxed">
            Credent bridges the gap between raw AI capabilities and real-world enterprise operations. We transform fragmented AI tools into connected, autonomous business systems that optimize performance and drive measurable ROI.
          </p>
          <p className="text-[#00F0FF] font-medium text-xl mb-10">Build Smarter. Spend Less. Scale Faster.</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => setIsBookingOpen(true)} className="px-8 py-3.5 rounded-full bg-[#2a52d8] text-white hover:bg-[#2a52d8]/80 hover:shadow-[0_0_20px_rgba(42,82,216,0.4)] transition-all font-medium">
              Talk to AI Advisor
            </button>
            <Link href="/platform/ai-optimization">
              <button className="px-8 py-3.5 rounded-full bg-[#0B1638] border border-[#2a52d8]/30 text-white hover:bg-[#0B1638]/80 transition-all font-medium">
                View Platform Architecture
              </button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Section 2: The Core Problem & Origin Story */}
      <section className="py-24 px-6 md:px-12 lg:px-20 bg-[#0B1638]/30 border-y border-[#2a52d8]/10">
        <div className="max-w-4xl mx-auto">
          <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-display font-bold mb-8 text-center">
            Everyone Has AI. Nobody Has an AI System.
          </motion.h2>
          <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
            <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              Over the past few years, enterprises aggressively adopted artificial intelligence. Organizations purchased licenses for ChatGPT, Claude, Gemini, Copilot, Perplexity, and specialized SaaS tools. Yet, operational friction remains largely unchanged. Employees still spend hours copy-pasting data across disconnected tabs, re-prompting models, switching between apps, and manually verifying outputs.
            </motion.p>
            <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              This fragmented adoption has created a new enterprise bottleneck: higher AI spending with lower overall productivity. Individual tools solve isolated tasks, but without governance, shared memory, or workflow orchestration, they fail to deliver organization-wide leverage.
            </motion.p>
            <motion.blockquote initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="mt-10 p-6 md:p-8 rounded-2xl bg-[#040914] border border-[#00F0FF]/20 border-l-4 border-l-[#00F0FF] text-xl font-medium text-white italic">
              &quot;The real opportunity in enterprise software isn&apos;t deploying more AI tools—it&apos;s making the AI already in place work seamlessly together.together.&quot;quot;
            </motion.blockquote>
          </div>
        </div>
      </section>

      {/* Section 3: The AI Maturity Curve */}
      <section className="py-24 px-6 md:px-12 lg:px-20 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">The Progression to Operational AI Maturity</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">Most businesses get stuck between Adoption and Integration. Credent takes you all the way to Optimization.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "Stage 1", name: "Adoption", status: "Employees use disconnected personal AI tools.", result: "Siloed usage, duplicate work, and security risks." },
              { step: "Stage 2", name: "Integration", status: "Basic API connections between individual tools and databases.", result: "Simple automation, but fragile logic and no central control." },
              { step: "Stage 3", name: "Automation", status: "Multi-step workflows executing repetitive manual tasks.", result: "Time saved, but lacks intelligent decision-making or adaptivity." },
              { step: "Stage 4", name: "Optimization", active: true, status: "Full agent orchestration, central governance, smart model routing, and live ROI tracking.", result: "A unified, scalable hybrid workforce of employees and digital workers." }
            ].map((stage, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className={`relative p-6 rounded-2xl border ${stage.active ? 'bg-[#0B1638] border-[#00F0FF]/50 shadow-[0_0_30px_rgba(0,240,255,0.1)]' : 'bg-[#0B1638]/40 border-[#2a52d8]/20'} flex flex-col h-full`}>
                <div className={`text-xs font-bold tracking-wider uppercase mb-2 ${stage.active ? 'text-[#00F0FF]' : 'text-[#2a52d8]'}`}>{stage.step}</div>
                <h3 className="text-xl font-semibold mb-4 text-white">{stage.name}</h3>
                <div className="space-y-4 text-sm flex-grow">
                  <div>
                    <span className="block text-gray-500 mb-1 uppercase text-[10px] font-bold tracking-wider">Status</span>
                    <p className="text-gray-300">{stage.status}</p>
                  </div>
                  <div>
                    <span className="block text-gray-500 mb-1 uppercase text-[10px] font-bold tracking-wider">Result</span>
                    <p className="text-gray-300">{stage.result}</p>
                  </div>
                </div>
                {stage.active && <div className="absolute -top-3 -right-3 bg-[#00F0FF] text-[#040914] text-xs font-bold px-3 py-1 rounded-full shadow-[0_0_10px_#00F0FF]">Credent&apos;s Domain</div>}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: What We Build */}
      <section className="py-24 px-6 md:px-12 lg:px-20 bg-[#0B1638]/20 border-y border-[#2a52d8]/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-16 text-center">Two Paths to Enterprise AI Excellence</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-[#0B1638] to-[#040914] border border-[#2a52d8]/30 relative overflow-hidden group">
              <div className="absolute inset-0 bg-[#2a52d8]/5 group-hover:bg-[#2a52d8]/10 transition-colors"></div>
              <h3 className="text-2xl font-bold text-white mb-2 relative z-10">AI Transformation (Build AI)</h3>
              <p className="text-[#00F0FF] text-sm font-semibold uppercase tracking-wider mb-6 relative z-10">One-Time Architectural Engagement</p>
              <p className="text-gray-400 leading-relaxed relative z-10">We conduct comprehensive AI readiness assessments, design custom workflow architectures, engineer specialized AI agents, and integrate them deep into your legacy enterprise software (CRMs, ERPs, databases, and communication channels).</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="p-8 md:p-12 rounded-3xl bg-gradient-to-bl from-[#0B1638] to-[#040914] border border-[#2a52d8]/30 relative overflow-hidden group">
              <div className="absolute inset-0 bg-[#00F0FF]/5 group-hover:bg-[#00F0FF]/10 transition-colors"></div>
              <h3 className="text-2xl font-bold text-white mb-2 relative z-10">AI Optimization Platform (Optimize AI)</h3>
              <p className="text-[#00F0FF] text-sm font-semibold uppercase tracking-wider mb-6 relative z-10">Continuous Subscription & Managed Operations</p>
              <p className="text-gray-400 leading-relaxed relative z-10">The operating environment that manages your AI infrastructure. Features include intelligent model routing (directing prompts to the cheapest, fastest model), agent orchestration, enterprise governance, security guardrails, and real-time financial tracking.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 5: Our Core Philosophy */}
      <section className="py-24 px-6 md:px-12 lg:px-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-16 text-center">How We Approach Enterprise Automation</h2>
          
          <div className="space-y-12">
            {[
              { title: "Augmentation Over Replacement", desc: "We don't replace human talent—we eliminate repetitive administrative burden. By delegating high-volume, predictable tasks to autonomous AI agents, your teams focus exclusively on high-value strategy and decision-making." },
              { title: "Practical Systems Over Hype", desc: "We are an AI systems and automation company, not a generic agency. We don't deliver slide decks or abstract advice. We build end-to-end operational software tailored to the exact way your business already operates." },
              { title: "Continuous Optimization", desc: "AI models, business processes, and market requirements evolve daily. Our platform actively monitors performance, cost, and output accuracy to ensure your system improves automatically over time." }
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex flex-col md:flex-row gap-6 items-start">
                <div className="w-12 h-12 shrink-0 rounded-full bg-[#2a52d8]/20 border border-[#2a52d8]/50 flex items-center justify-center text-[#00F0FF] font-bold text-lg">{i + 1}</div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-400 text-lg leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Leadership */}
      <section className="py-24 px-6 md:px-12 lg:px-20 bg-[#0B1638]/40 border-y border-[#2a52d8]/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-center">Engineering Meets Operational Intelligence</h2>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="flex flex-col md:flex-row gap-10 items-center p-8 md:p-12 rounded-3xl bg-[#040914] border border-[#2a52d8]/30">
            <div className="w-48 h-48 rounded-full bg-gradient-to-br from-[#2a52d8] to-[#00F0FF] shrink-0 p-1">
              <div className="w-full h-full rounded-full bg-[#0B1638] flex items-center justify-center overflow-hidden">
                <span className="text-5xl text-white font-bold opacity-30">KT</span>
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-white mb-2">Kartik Tripathi</h3>
              <p className="text-[#00F0FF] font-medium mb-6">Founder / AI Systems & Automation</p>
              <div className="space-y-4 text-gray-400 text-sm leading-relaxed">
                <p><strong className="text-gray-200">Role & Focus:</strong> Kartik leads Credent&apos;s engineering architecture, cloud infrastructure, AI agent development, and enterprise integration frameworks.</p>
                <p><strong className="text-gray-200">Background & Vision:</strong> With deep technical expertise across AI engineering and system automation, Kartik founded Credent to solve the growing gap between raw LLM technology and practical business execution. His focus is building robust, secure, and cost-effective digital infrastructure that delivers verifiable balance-sheet impact for growing enterprises.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 7: Who We Serve */}
      <section className="py-24 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Purpose-Built for Operations-Heavy Businesses</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">Whether you are an MSME looking for affordable transformation or a large enterprise needing strict compliance and governance, Credent provides tailored systems for:</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Chartered Accountancy & Finance", desc: "Automating client document intake, tax reconciliation, audit support, and compliance reporting." },
              { title: "Hospitals & Healthcare", desc: "Streamlining patient record workflows, insurance claim processing, and appointment orchestration." },
              { title: "Banks & NBFCs", desc: "Accelerating KYC verification, fraud risk reviews, customer onboarding, and credit analysis." },
              { title: "Law Firms & Professional Services", desc: "Automating contract analysis, precedent research, document extraction, and billing workflows." },
              { title: "Manufacturing & Real Estate", desc: "Optimizing vendor communication, inventory tracking, lead qualification, and property management inquiries." }
            ].map((ind, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-6 rounded-2xl bg-[#0B1638]/30 border border-[#2a52d8]/10 hover:border-[#2a52d8]/40 transition-colors">
                <h3 className="text-xl font-semibold text-white mb-3">{ind.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{ind.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8: Comparison */}
      <section className="py-24 px-6 md:px-12 lg:px-20 bg-[#0B1638]/40 border-y border-[#2a52d8]/10 overflow-x-auto">
        <div className="max-w-5xl mx-auto min-w-[800px]">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-center">Credent vs. Traditional Options</h2>
          
          <div className="rounded-2xl border border-[#2a52d8]/30 overflow-hidden bg-[#040914]">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-[#0B1638] border-b border-[#2a52d8]/30">
                  <th className="p-6 text-white font-semibold w-1/4">Feature / Dimension</th>
                  <th className="p-6 text-gray-400 font-semibold w-1/4">Traditional Consulting</th>
                  <th className="p-6 text-gray-400 font-semibold w-1/4">Standalone AI Tools</th>
                  <th className="p-6 text-[#00F0FF] font-semibold w-1/4">Credent AI Platform</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#2a52d8]/10">
                <tr className="hover:bg-[#0B1638]/20 transition-colors">
                  <td className="p-6 font-medium text-white">Deliverable</td>
                  <td className="p-6 text-gray-400">Static reports & strategy decks</td>
                  <td className="p-6 text-gray-400">Isolated single-task apps</td>
                  <td className="p-6 text-[#00F0FF]">End-to-end automated systems</td>
                </tr>
                <tr className="hover:bg-[#0B1638]/20 transition-colors">
                  <td className="p-6 font-medium text-white">Time to Value</td>
                  <td className="p-6 text-gray-400">6–12 Months</td>
                  <td className="p-6 text-gray-400">Immediate (but limited scope)</td>
                  <td className="p-6 text-[#00F0FF]">Rapid rollout with continuous iteration</td>
                </tr>
                <tr className="hover:bg-[#0B1638]/20 transition-colors">
                  <td className="p-6 font-medium text-white">Integration</td>
                  <td className="p-6 text-gray-400">Requires internal dev team</td>
                  <td className="p-6 text-gray-400">Zero or basic Zapier hooks</td>
                  <td className="p-6 text-[#00F0FF]">Native enterprise systems & API connection</td>
                </tr>
                <tr className="hover:bg-[#0B1638]/20 transition-colors">
                  <td className="p-6 font-medium text-white">Ongoing Operations</td>
                  <td className="p-6 text-gray-400">Hands off post-delivery</td>
                  <td className="p-6 text-gray-400">Managed individually by users</td>
                  <td className="p-6 text-[#00F0FF]">Orchestrated, governed & optimized</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Section 9: Closing Vision & CTA */}
      <section className="py-32 px-6 md:px-12 lg:px-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#2a52d8]/10 via-[#040914] to-[#040914] -z-10"></div>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Employees + AI Agents = One Intelligent Workforce</h2>
          <p className="text-xl text-gray-400 mb-12 leading-relaxed">
            The future of enterprise productivity isn&apos;t human vs. machine—it&apos;s seamlessly integrated hybrid teams. Partner with Credent to deploy, govern, and optimize the digital operating layer your business needs to scale.
          </p>
          <div className="p-8 rounded-3xl bg-gradient-to-r from-[#0B1638] to-[#2a52d8]/20 border border-[#2a52d8]/50 inline-block mb-12 shadow-[0_0_40px_rgba(42,82,216,0.15)]">
            <h3 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-[#00F0FF]">Build Smarter. Spend Less. Scale Faster.</h3>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => setIsBookingOpen(true)} className="px-8 py-4 rounded-full bg-white text-[#040914] hover:bg-gray-200 shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all font-bold text-lg">
              Book an AI Readiness Assessment
            </button>
            <Link href="/platform/ai-optimization">
              <button className="px-8 py-4 rounded-full bg-transparent border-2 border-[#00F0FF] text-[#00F0FF] hover:bg-[#00F0FF]/10 transition-all font-bold text-lg">
                Explore the Platform
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />

      <ChatModal isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} onOpenBooking={() => setIsBookingOpen(true)} />
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </main>
  );
}
