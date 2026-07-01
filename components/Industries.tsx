"use client";

import { useState, useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import { Calculator, ShoppingBag, Megaphone, CreditCard, PieChart, ChevronDown } from "lucide-react";

const industries = [
  {
    id: "ca-firms",
    title: "CA Firms & Accounting",
    icon: <Calculator className="w-5 h-5" />,
    content: "Stop chasing clients for documents. Credent deploys AI agents that automatically follow up for missing paperwork, read and extract data from invoices and bank statements, and seamlessly pre-fill compliance and tax platforms with zero manual data entry."
  },
  {
    id: "ecommerce",
    title: "E-Commerce",
    icon: <ShoppingBag className="w-5 h-5" />,
    content: "Unify your fragmented operations. We connect your storefronts directly to your inventory and ERP systems. Our AI handles routine customer queries (WISMO), processes returns autonomously, and flags low-stock alerts before you run out of inventory."
  },
  {
    id: "digital-agencies",
    title: "Digital Agencies",
    icon: <Megaphone className="w-5 h-5" />,
    content: "Reclaim billable hours lost to reporting. Credent aggregates data across Meta, Google, and CRM platforms into automated, client-ready performance dashboards. We automate the entire client onboarding process from proposal signature to project creation."
  },
  {
    id: "fintech",
    title: "FinTech & Lending",
    icon: <CreditCard className="w-5 h-5" />,
    content: "Accelerate loan origination and customer onboarding. Our systems parse identity documents, automate KYC checks, and cross-reference data against risk models instantly. Reduce approval timelines from days to minutes while maintaining absolute compliance."
  },
  {
    id: "asset-management",
    title: "Asset Management",
    icon: <PieChart className="w-5 h-5" />,
    content: "Replace spreadsheets with unified intelligence. We automate real-time portfolio data aggregation, generate customized periodic client reports instantly, and build secure, automated workflows for compliance auditing and transaction verification."
  }
];

export default function Industries() {
  const containerRef = useRef(null);
  const inView = useInView(containerRef, { once: true, margin: "-50px" });

  const [activeCard, setActiveCard] = useState<string | null>(null);

  const toggleCard = (id: string) => {
    setActiveCard(activeCard === id ? null : id);
  };

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
    <section id="industries" className="py-20 md:py-32 px-6 md:px-12 lg:px-20 font-body bg-background">
      <motion.div 
        ref={containerRef}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-4xl mx-auto"
      >
        <div className="text-center mb-16">
          <motion.p variants={itemVariants} className="text-sm font-medium tracking-widest uppercase mb-4 text-accent" style={{ letterSpacing: "0.1em" }}>
            Tailored Solutions
          </motion.p>
          <motion.h2 variants={itemVariants} className="font-display text-3xl md:text-5xl lg:text-[3.5rem] tracking-tight leading-[1.05] text-foreground">
            Systems Built for <em className="font-display italic">Your Industry</em>
          </motion.h2>
          <motion.p variants={itemVariants} className="mt-4 text-base md:text-lg max-w-[600px] mx-auto leading-relaxed text-muted-foreground">
            Click to see how our intelligent agents eliminate industry-specific bottlenecks and return hours to your week.
          </motion.p>
        </div>

        <motion.div variants={itemVariants} className="space-y-4">
          {industries.map((industry) => (
            <div 
              key={industry.id}
              onClick={() => toggleCard(industry.id)}
              className="bg-background rounded-2xl p-5 md:p-6 cursor-pointer transition-all duration-300 border border-border hover:border-foreground"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[hsla(239,84%,67%,0.1)] text-accent">
                    {industry.icon}
                  </div>
                  <h3 className="font-display text-2xl tracking-tight text-foreground">
                    {industry.title}
                  </h3>
                </div>
                <div 
                  className="text-muted-foreground transition-transform duration-300"
                  style={{ transform: activeCard === industry.id ? "rotate(180deg)" : "rotate(0deg)" }}
                >
                  <ChevronDown className="w-5 h-5" />
                </div>
              </div>
              <motion.div 
                initial={false}
                animate={{ 
                  height: activeCard === industry.id ? "auto" : 0, 
                  opacity: activeCard === industry.id ? 1 : 0,
                  marginTop: activeCard === industry.id ? 16 : 0
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                style={{ overflow: "hidden" }}
              >
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {industry.content}
                </p>
              </motion.div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
