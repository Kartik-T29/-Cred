"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatModal from "@/components/chatbot/ChatModal";
import BookingModal from "@/components/booking/BookingModal";
import { ArrowRight, Workflow, BarChart3, Settings2, ShieldCheck, Activity, BrainCircuit } from "lucide-react";
import { motion } from "framer-motion";

export default function AIOptimizationPage() {
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
            <Activity className="w-4 h-4 text-accent" />
            <span>The Subscription Phase</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display leading-[1.05] tracking-tight text-4xl md:text-5xl lg:text-7xl w-full gradient-text mb-6"
          >
            AI Optimization
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
            Deploying AI is only the beginning. We provide the orchestration, governance, and continuous workflow analytics required to run a reliable, autonomous AI workforce at scale.
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
              Start Optimizing
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
          <h2 className="font-display text-3xl md:text-5xl tracking-tight text-foreground mb-6">Post-Deployment Chaos</h2>
          <p className="text-muted-foreground text-lg max-w-[800px] mx-auto leading-relaxed">
            Many businesses launch an AI initiative only to abandon it months later. Models drift, underlying APIs break, and employee prompts become stale. Scaling AI without a centralized governance layer turns an asset into a massive operational liability.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-secondary/30 rounded-2xl p-6 border border-border text-center">
            <div className="w-12 h-12 rounded-full bg-red-500/10 text-red-500 flex items-center justify-center mx-auto mb-4">
              <Activity className="w-6 h-6" />
            </div>
            <h4 className="text-foreground font-semibold mb-2">Model Drift & Decay</h4>
            <p className="text-sm text-muted-foreground">AI responses degrade over time as business logic changes and prompt libraries become outdated.</p>
          </div>
          <div className="bg-secondary/30 rounded-2xl p-6 border border-border text-center">
            <div className="w-12 h-12 rounded-full bg-red-500/10 text-red-500 flex items-center justify-center mx-auto mb-4">
              <BarChart3 className="w-6 h-6" />
            </div>
            <h4 className="text-foreground font-semibold mb-2">Zero Visibility</h4>
            <p className="text-sm text-muted-foreground">Inability to track the actual ROI of AI operations, token usage, or latency bottlenecks.</p>
          </div>
          <div className="bg-secondary/30 rounded-2xl p-6 border border-border text-center">
            <div className="w-12 h-12 rounded-full bg-red-500/10 text-red-500 flex items-center justify-center mx-auto mb-4">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h4 className="text-foreground font-semibold mb-2">Governance Failures</h4>
            <p className="text-sm text-muted-foreground">Lack of standardized security checks leading to unauthorized data access and compliance violations.</p>
          </div>
        </div>
      </section>

      {/* The Solution Section */}
      <section className="py-24 px-6 md:px-12 lg:px-20 font-body bg-secondary/50 border-y border-border">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-sm font-semibold tracking-widest uppercase mb-3 text-accent">The Solution</h3>
            <h2 className="font-display text-3xl md:text-5xl tracking-tight text-foreground mb-6">Continuous Orchestration</h2>
            <p className="text-muted-foreground text-lg max-w-[700px] mx-auto">
              Our Subscription Phase manages the complete lifecycle of your AI agents. We act as your command center—monitoring, maintaining, and continuously optimizing your operational workflows.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-background rounded-2xl p-8 border border-border hover:border-accent/50 transition-colors duration-300">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-secondary mb-6 text-accent">
                <BrainCircuit className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Model Management</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Automatic A/B testing of prompts and seamless upgrading to the latest, most efficient foundation models without rewriting integration code.
              </p>
            </div>
            
            <div className="bg-background rounded-2xl p-8 border border-border hover:border-accent/50 transition-colors duration-300">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-secondary mb-6 text-accent">
                <Settings2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Workflow Engine</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Real-time monitoring of all autonomous agent tasks, featuring self-healing protocols that auto-retry failed API calls to maintain 99.9% uptime.
              </p>
            </div>
            
            <div className="bg-background rounded-2xl p-8 border border-border hover:border-accent/50 transition-colors duration-300">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-secondary mb-6 text-accent">
                <BarChart3 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">ROI Analytics</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                A centralized operational dashboard providing granular visibility into token costs, hours saved per workflow, and overall business impact.
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
              <div className="font-display text-4xl md:text-5xl tracking-tight mb-2 text-foreground">99.9%</div>
              <p className="text-sm font-medium text-muted-foreground">Agent and Workflow Uptime</p>
            </div>
            <div className="p-8 rounded-2xl bg-secondary border border-border flex flex-col justify-center text-center glass-surface">
              <div className="font-display text-4xl md:text-5xl tracking-tight mb-2 text-foreground">100%</div>
              <p className="text-sm font-medium text-muted-foreground">Visibility into token spend &amp; ROI</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 px-6 md:px-12 lg:px-20 font-body bg-background text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl tracking-tight text-foreground mb-6">Ready to Optimize Your Systems?</h2>
          <p className="text-muted-foreground text-lg mb-10">Stop worrying about model decay and broken APIs. Let our orchestration layer run your intelligent workforce.</p>
          <button 
            onClick={() => setIsBookingOpen(true)} 
            className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-medium transition-all duration-200 shadow-lg hover:opacity-90 bg-accent text-accent-foreground glow-accent"
          >
            Review Subscription Plans
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
