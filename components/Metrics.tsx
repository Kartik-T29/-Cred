"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, animate, Variants } from "framer-motion";

function AnimatedCounter({ from, to, duration = 1.8 }: { from: number, to: number, duration?: number }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView) {
      const node = nodeRef.current;
      if (node) {
        const controls = animate(from, to, {
          duration,
          ease: [0.25, 0.1, 0.25, 1], // Equivalent to easing in original logic
          onUpdate(value) {
            node.textContent = Math.floor(value).toLocaleString();
          }
        });
        return () => controls.stop();
      }
    }
  }, [from, to, inView, duration]);

  return <span ref={nodeRef} />;
}

export default function Metrics() {
  const containerRef = useRef(null);
  const inView = useInView(containerRef, { once: true, margin: "-50px" });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };

  return (
    <section id="metrics" className="py-20 md:py-32 px-6 md:px-12 lg:px-20 font-body bg-background">
      <motion.div 
        ref={containerRef}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-6xl mx-auto"
      >
        <div className="text-center mb-16">
          <motion.p variants={itemVariants} className="text-sm font-medium tracking-widest uppercase mb-4 text-accent" style={{ letterSpacing: "0.1em" }}>
            Measured Impact
          </motion.p>
          <motion.h2 variants={itemVariants} className="font-display text-3xl md:text-5xl lg:text-[3.5rem] tracking-tight leading-[1.05] text-foreground">
            The Numbers Speak for <em className="font-display italic">Themselves</em>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <motion.div variants={itemVariants} className="text-center p-8 rounded-2xl bg-secondary border border-border hover:border-accent/30 transition-colors duration-300">
            <div className="font-display text-5xl md:text-6xl tracking-tight mb-2 text-foreground">
              <AnimatedCounter from={0} to={128} />
            </div>
            <p className="text-sm font-medium text-foreground">Hours Saved Monthly</p>
          </motion.div>

          <motion.div variants={itemVariants} className="text-center p-8 rounded-2xl bg-secondary border border-border hover:border-accent/30 transition-colors duration-300">
            <div className="font-display text-5xl md:text-6xl tracking-tight mb-2 text-foreground">
              <AnimatedCounter from={0} to={42} />%
            </div>
            <p className="text-sm font-medium text-foreground">Tasks Automated</p>
          </motion.div>

          <motion.div variants={itemVariants} className="text-center p-8 rounded-2xl bg-secondary border border-border hover:border-accent/30 transition-colors duration-300">
            <div className="font-display text-5xl md:text-6xl tracking-tight mb-2 text-foreground">
              <AnimatedCounter from={0} to={2400} />+
            </div>
            <p className="text-sm font-medium text-foreground">Teams Onboarded</p>
          </motion.div>

          <motion.div variants={itemVariants} className="text-center p-8 rounded-2xl bg-secondary border border-border hover:border-accent/30 transition-colors duration-300">
            <div className="font-display text-5xl md:text-6xl tracking-tight mb-2 text-foreground">
              <AnimatedCounter from={0} to={68} />%
            </div>
            <p className="text-sm font-medium text-foreground">Faster Responses</p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
