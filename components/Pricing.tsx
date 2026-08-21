"use client";

import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import { User, Phone, Mail } from "lucide-react";

interface PricingProps {
  onOpenBooking: () => void;
}

export default function Pricing({ onOpenBooking }: PricingProps) {
  const containerRef = useRef(null);
  const inView = useInView(containerRef, { once: true, margin: "-50px" });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };

  return (
    <section id="pricing" className="py-20 md:py-32 px-6 md:px-12 lg:px-20 font-body bg-background">
      <motion.div 
        ref={containerRef}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-5xl mx-auto"
      >
        <div className="text-center mb-16">
          <motion.p variants={itemVariants} className="text-sm font-medium tracking-widest uppercase mb-4 text-accent" style={{ letterSpacing: "0.1em" }}>
            Fair & Flexible
          </motion.p>
          <motion.h2 variants={itemVariants} className="font-display text-3xl md:text-5xl lg:text-[3.5rem] tracking-tight leading-[1.05] text-foreground">
            Bespoke Pricing for <em className="font-display italic">Unique Workflows</em>
          </motion.h2>
          <motion.p variants={itemVariants} className="mt-4 text-base md:text-lg max-w-[600px] mx-auto leading-relaxed text-muted-foreground">
            Off-the-shelf software forces you to pay for features you don&apos;t use. We build exactly what you need, and you only pay for the value generated.
          </motion.p>
        </div>

        <motion.div 
          variants={itemVariants} 
          className="flex flex-col md:flex-row items-stretch rounded-3xl overflow-hidden border border-border"
          style={{ boxShadow: "0 20px 40px rgba(0,0,0,0.04)" }}
        >
          {/* Value Proposition Side */}
          <div className="flex-1 p-8 md:p-12 bg-secondary">
            <h3 className="text-xs font-semibold uppercase tracking-widest mb-6 text-muted-foreground">
              The Credent Model
            </h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="mt-1 w-6 h-6 rounded-full flex items-center justify-center bg-background border border-border text-accent">
                  ✓
                </div>
                <div>
                  <h4 className="text-base font-semibold text-foreground">Pay As You Go</h4>
                  <p className="text-sm mt-1 leading-relaxed text-muted-foreground">
                    Pricing scales transparently with your usage, automation volume, and compute. No arbitrary tier jumps.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 w-6 h-6 rounded-full flex items-center justify-center bg-background border border-border text-accent">
                  ✓
                </div>
                <div>
                  <h4 className="text-base font-semibold text-foreground">Custom Implementation</h4>
                  <p className="text-sm mt-1 leading-relaxed text-muted-foreground">
                    Pricing is scoped after a deep audit of your current operations. We align our cost to your ROI.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 w-6 h-6 rounded-full flex items-center justify-center bg-background border border-border text-accent">
                  ✓
                </div>
                <div>
                  <h4 className="text-base font-semibold text-foreground">Zero Hidden Fees</h4>
                  <p className="text-sm mt-1 leading-relaxed text-muted-foreground">
                    Transparent infrastructure costs, clear maintenance SLAs, and no per-seat licensing traps.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Side */}
          <div className="flex-1 p-8 md:p-12 flex flex-col justify-center cta-gradient">
            <h3 className="font-display text-4xl tracking-tight mb-2 text-foreground">
              Let&apos;s map it out.
            </h3>
            <p className="text-sm mb-8 text-muted-foreground">
              Schedule a free discovery call to analyze your bottlenecks and get a tailored pricing proposal.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-secondary border border-border text-foreground">
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Direct Contact</p>
                  <p className="text-sm font-medium text-foreground">Mr. Kartik Tripathi</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-secondary border border-border text-foreground">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Phone / WhatsApp</p>
                  <a href="tel:+918989172980" className="text-sm font-medium hover:underline text-foreground">+91 89891 72980</a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-secondary border border-border text-foreground">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Email Support</p>
                  <a href="mailto:contact@credent.in" className="text-sm font-medium hover:underline text-foreground">contact@credent.in</a>
                </div>
              </div>
            </div>

            <button 
              onClick={onOpenBooking} 
              className="w-full rounded-full px-6 py-4 text-sm font-medium transition-all duration-200 shadow-lg hover:opacity-90 bg-accent text-accent-foreground glow-accent"
            >
              Request a Consultation
            </button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
