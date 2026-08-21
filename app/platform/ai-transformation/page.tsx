"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatModal from "@/components/chatbot/ChatModal";
import BookingModal from "@/components/booking/BookingModal";
import { ArrowRight, Workflow, Layers, ShieldAlert, Cpu, Network, Users } from "lucide-react";
import { motion } from "framer-motion";

export default function AITransformationPage() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <main className="min-h-screen bg-background">
      <Navbar onOpenChat={() => setIsChatOpen(true)} />
      
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center overflow-hidden min-h-[70vh] py-20 px-4 md:px-6">
        <div className="absolute inset-0 z-0 bg-background">
          <div className="absolute inset-0 opacity-30 dark:opacity-20" style={{ background: "radial-gradient(circle at center, var(--accent) 0%, transparent 70%)" }}></div>
        </div>
        
        <div className="relative z-10 flex flex-col items-center w-full max-w-5xl mt-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-sm font-body mb-6 text-muted-foreground glass-surface border border-border"
          >
            <Workflow className="w-4 h-4 text-accent" />
            <span>The Build Phase</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display leading-[1.05] tracking-tight text-4xl md:text-5xl lg:text-7xl w-full gradient-text mb-6"
          >
            AI Transformation
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center text-xl md:text-2xl font-display font-medium text-foreground mb-4"
          >
            Optimize AI. Orchestrate Agents. Automate Work.
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center text-base md:text-lg max-w-[760px] leading-relaxed font-body text-muted-foreground mb-10"
          >
            We are not a traditional consulting firm handing you a slide deck, nor a standalone AI tool adding to your subscriptions. We build end-to-end, connected AI operations directly into your business.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <button
              onClick={() => setIsBookingOpen(true)}
              className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-medium font-body transition-all duration-200 bg-primary text-primary-foreground hover:opacity-90 glow-accent"
            >
              Start Your Build Phase
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </section>

      <div className="section-divider mx-6 md:mx-12 lg:mx-20 opacity-60"></div>

      {/* The Problem Section */}
      <section className="py-24 px-6 md:px-12 lg:px-20 font-body bg-background">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h3 className="text-sm font-semibold tracking-widest uppercase mb-3 text-red-500/80">The Problem</h3>
          <h2 className="font-display text-3xl md:text-5xl tracking-tight text-foreground mb-6">Everyone has AI. Nobody has an AI system.</h2>
          <p className="text-muted-foreground text-lg max-w-[800px] mx-auto leading-relaxed">
            Your employees suffer from severe tool sprawl. They spend hours copy-pasting sensitive data between ChatGPT, Claude, Copilot, and internal CRMs. The result? Skyrocketing shadow IT costs, massive security vulnerabilities, and minimal actual productivity gains.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-secondary/30 rounded-2xl p-6 border border-border text-center">
            <div className="w-12 h-12 rounded-full bg-red-500/10 text-red-500 flex items-center justify-center mx-auto mb-4">
              <Layers className="w-6 h-6" />
            </div>
            <h4 className="text-foreground font-semibold mb-2">Subscription Sprawl</h4>
            <p className="text-sm text-muted-foreground">Paying for duplicate AI tools across different departments with no centralized ROI.</p>
          </div>
          <div className="bg-secondary/30 rounded-2xl p-6 border border-border text-center">
            <div className="w-12 h-12 rounded-full bg-red-500/10 text-red-500 flex items-center justify-center mx-auto mb-4">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <h4 className="text-foreground font-semibold mb-2">Data Silos & Risk</h4>
            <p className="text-sm text-muted-foreground">Sensitive company data leaking into public LLMs through unmonitored employee usage.</p>
          </div>
          <div className="bg-secondary/30 rounded-2xl p-6 border border-border text-center">
            <div className="w-12 h-12 rounded-full bg-red-500/10 text-red-500 flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6" />
            </div>
            <h4 className="text-foreground font-semibold mb-2">Manual Bottlenecks</h4>
            <p className="text-sm text-muted-foreground">Humans acting as APIs—manually moving data between tools instead of doing strategic work.</p>
          </div>
        </div>
      </section>

      {/* The Solution Section */}
      <section className="py-24 px-6 md:px-12 lg:px-20 font-body bg-secondary/50 border-y border-border">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-sm font-semibold tracking-widest uppercase mb-3 text-accent">The Solution</h3>
            <h2 className="font-display text-3xl md:text-5xl tracking-tight text-foreground mb-6">The AI Operating Layer</h2>
            <p className="text-muted-foreground text-lg max-w-[700px] mx-auto">
              Credent provides the missing hub-and-spoke orchestration infrastructure. We design the strategy, build the custom agents, and deploy the workflow engine directly into your environment.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-background rounded-2xl p-8 border border-border hover:border-accent/50 transition-colors duration-300">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-secondary mb-6 text-accent">
                <Network className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">AI Router</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Intelligently routes prompts and tasks to the most cost-effective and capable underlying model (OpenAI, Anthropic, Google) while maintaining a unified interface for your team.
              </p>
            </div>
            
            <div className="bg-background rounded-2xl p-8 border border-border hover:border-accent/50 transition-colors duration-300">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-secondary mb-6 text-accent">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Agent Orchestrator</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Deploys purpose-built, role-specific autonomous agents (e.g., an automated SDR, an accounting assistant) that communicate with each other to complete complex multi-step objectives.
              </p>
            </div>
            
            <div className="bg-background rounded-2xl p-8 border border-border hover:border-accent/50 transition-colors duration-300">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-secondary mb-6 text-accent">
                <Workflow className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Workflow Engine</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                The nervous system that connects these agents directly to your existing legacy software, CRMs, and databases, executing actions autonomously securely.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Business Outcomes Section */}
      <section className="py-24 px-6 md:px-12 lg:px-20 font-body bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-sm font-semibold tracking-widest uppercase mb-3 text-accent">Business Outcomes</h3>
            <h2 className="font-display text-3xl md:text-5xl tracking-tight text-foreground mb-6">Employees + AI Agents = <br/><em className="italic text-accent">One Intelligent Workforce</em></h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="p-8 rounded-2xl bg-secondary border border-border flex flex-col justify-center text-center glass-surface">
              <div className="font-display text-4xl md:text-5xl tracking-tight mb-2 text-foreground">60%</div>
              <p className="text-sm font-medium text-muted-foreground">Reduction in disjointed software spend</p>
            </div>
            <div className="p-8 rounded-2xl bg-secondary border border-border flex flex-col justify-center text-center glass-surface">
              <div className="font-display text-4xl md:text-5xl tracking-tight mb-2 text-foreground">Zero</div>
              <p className="text-sm font-medium text-muted-foreground">Manual data entry across systems</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 px-6 md:px-12 lg:px-20 font-body bg-background text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl tracking-tight text-foreground mb-6">Ready to Build Your AI System?</h2>
          <p className="text-muted-foreground text-lg mb-10">Stop buying tools. Start building an intelligent operation. Schedule a readiness assessment with our architects today.</p>
          <button 
            onClick={() => setIsBookingOpen(true)} 
            className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-medium transition-all duration-200 shadow-lg hover:opacity-90 bg-accent text-accent-foreground glow-accent"
          >
            Request a Platform Audit
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      <Footer />

      <ChatModal 
        isOpen={isChatOpen} 
        onClose={() => setIsChatOpen(false)} 
        onOpenBooking={() => setIsBookingOpen(true)}
      />
      
      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
      />
    </main>
  );
}
