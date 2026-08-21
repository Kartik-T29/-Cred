"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatModal from "@/components/chatbot/ChatModal";
import BookingModal from "@/components/booking/BookingModal";
import { ArrowRight, Workflow, Database, ShieldCheck, Zap, GitBranch, Server } from "lucide-react";
import { motion } from "framer-motion";

export default function AIAutomationPage() {
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
            <span>Enterprise Service</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display leading-[1.05] tracking-tight text-4xl md:text-5xl lg:text-7xl w-full gradient-text mb-6"
          >
            AI Automation &amp; Business Systems
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center text-base md:text-xl max-w-[760px] leading-relaxed font-body text-muted-foreground mb-10"
          >
            Eliminate manual bottlenecks and unify fragmented tools. We build intelligent, autonomous middleware that connects your existing software, routing data and triggering actions without human intervention.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <button
              onClick={() => setIsChatOpen(true)}
              className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-medium font-body transition-all duration-200 bg-primary text-primary-foreground hover:opacity-90 glow-accent"
            >
              Talk to AI Advisor
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </section>

      <div className="section-divider mx-6 md:mx-12 lg:mx-20 opacity-60"></div>

      {/* Problem / Solution Section */}
      <section className="py-24 px-6 md:px-12 lg:px-20 font-body bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-8">
              <div>
                <h3 className="text-sm font-semibold tracking-widest uppercase mb-3 text-red-500/80">The Bottleneck</h3>
                <h2 className="font-display text-3xl md:text-4xl tracking-tight text-foreground mb-4">Manual Syncing Limits Scale</h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Teams waste countless billable hours manually migrating data between CRMs, ERPs, accounting software, and spreadsheets. This operational friction results in high error rates, delayed decision-making, and an inability to scale without constantly adding headcount.
                </p>
              </div>
            </div>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-sm font-semibold tracking-widest uppercase mb-3 text-accent">The Credent System</h3>
                <h2 className="font-display text-3xl md:text-4xl tracking-tight text-foreground mb-4">Autonomous Operational Flow</h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  We deploy customized, secure middleware that speaks to the APIs of your existing tech stack. By introducing deterministic AI logic, the system routes data dynamically, handles complex edge cases, and executes multi-step workflows instantly—turning operational overhead into a silent, reliable utility.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="py-24 px-6 md:px-12 lg:px-20 font-body bg-secondary/50 border-y border-border">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-5xl tracking-tight text-foreground mb-4">System Capabilities</h2>
            <p className="text-muted-foreground text-lg max-w-[600px] mx-auto">Engineered for enterprise reliability, high throughput, and strict compliance.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-background rounded-2xl p-8 border border-border hover:border-accent/50 transition-colors duration-300">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-secondary mb-6 text-accent">
                <GitBranch className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Multi-Node Routing</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Complex conditional logic that routes data payloads to different endpoints based on content, drastically reducing manual triaging.
              </p>
            </div>
            
            <div className="bg-background rounded-2xl p-8 border border-border hover:border-accent/50 transition-colors duration-300">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-secondary mb-6 text-accent">
                <Server className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">API &amp; Webhook Integration</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Native integrations with REST, GraphQL, and SOAP architectures. We connect legacy on-premise systems with modern cloud infrastructure.
              </p>
            </div>
            
            <div className="bg-background rounded-2xl p-8 border border-border hover:border-accent/50 transition-colors duration-300">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-secondary mb-6 text-accent">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Audit Trails &amp; Compliance</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Every automated action is logged immutably. Built-in compliance protocols ensure data residency and encryption standards are strictly met.
              </p>
            </div>
            
            <div className="bg-background rounded-2xl p-8 border border-border hover:border-accent/50 transition-colors duration-300">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-secondary mb-6 text-accent">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Sub-Second Execution</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Event-driven architecture ensures workflows trigger in real-time the moment a condition is met, eliminating batch-processing delays.
              </p>
            </div>
            
            <div className="bg-background rounded-2xl p-8 border border-border hover:border-accent/50 transition-colors duration-300">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-secondary mb-6 text-accent">
                <Database className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Intelligent Data Cleansing</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                AI agents intercept unstructured payloads, standardize formats, and correct anomalies before injecting data into your system of record.
              </p>
            </div>

            <div className="bg-background rounded-2xl p-8 border border-border hover:border-accent/50 transition-colors duration-300">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-secondary mb-6 text-accent">
                <Workflow className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Auto-Recovery Protocols</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Self-healing workflows that automatically retry failed API requests, notify admins of broken endpoints, and cache data to prevent loss.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 px-6 md:px-12 lg:px-20 font-body bg-background text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl tracking-tight text-foreground mb-6">Ready to Modernize Your Operations?</h2>
          <p className="text-muted-foreground text-lg mb-10">Stop paying your team to act like robots. Let us build the systems that return hours to your week and measurable ROI to your bottom line.</p>
          <button 
            onClick={() => setIsBookingOpen(true)} 
            className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-medium transition-all duration-200 shadow-lg hover:opacity-90 bg-accent text-accent-foreground glow-accent"
          >
            Request a Technical Consultation
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
