"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DashboardPreview from "./DashboardPreview";

interface HeroProps {
  onOpenChat: () => void;
}

const carouselSlides = [
  {
    id: 0,
    content: (
      <>
        What If Your Team Could Focus on Work That{" "}
        <em className="font-display italic">Actually Matters</em>?
      </>
    ),
  },
  {
    id: 1,
    content: (
      <>
        How Much Time Are You{" "}
        <em className="font-display italic">Losing</em> to{" "}
        <em className="font-display italic">Repetitive Work</em>?
      </>
    ),
  },
  {
    id: 2,
    content: (
      <>
        Ready to Give Your Team{" "}
        <em className="font-display italic">Their Time Back</em>?
      </>
    ),
  },
];

export default function Hero({ onOpenChat }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section className="relative flex flex-col items-center justify-start text-center overflow-hidden min-h-[calc(100vh-72px)] pb-12">
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
      >
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260319_015952_e1deeb12-8fb7-4071-a42a-60779fc64ab6.mp4"
          type="video/mp4"
        />
      </video>
      <div
        className="absolute inset-0 z-[1]"
        style={{ background: "rgba(255,255,255,0.84)" }}
      ></div>

      <div className="relative z-10 flex flex-col items-center w-full px-4 md:px-6 pt-6 md:pt-12">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
          className="inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-sm font-body mb-6 text-muted-foreground"
          style={{
            border: "1px solid hsl(var(--border))",
            background: "hsla(0,0%,100%,0.8)",
            backdropFilter: "blur(8px)",
          }}
        >
          Now powering intelligent business operations ✨
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
          className="relative min-h-[10rem] sm:min-h-[8rem] md:min-h-[11rem] lg:min-h-[12rem] w-full max-w-4xl mb-2 px-2"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <h1 className="font-display leading-[1.05] md:leading-[0.95] tracking-tight text-4xl md:text-6xl lg:text-[5rem] w-full text-foreground">
                {carouselSlides[currentSlide].content}
              </h1>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
          className="flex items-center gap-2 mb-6 mt-2"
        >
          {carouselSlides.map((slide, idx) => (
            <div
              key={slide.id}
              onClick={() => setCurrentSlide(idx)}
              className={`h-[6px] rounded-full transition-all duration-300 cursor-pointer ${
                currentSlide === idx
                  ? "w-[20px] bg-accent"
                  : "w-[6px] bg-border"
              }`}
            />
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="text-center text-base md:text-lg max-w-[720px] leading-relaxed font-body px-4 text-muted-foreground"
        >
          Credent embeds intelligent agents into your workflows to automate
          repetitive operations, unify fragmented systems, and help your team
          focus on strategic work.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55, ease: "easeOut" }}
          className="mt-6 flex flex-col sm:flex-row items-center gap-3"
        >
          <button
            onClick={onOpenChat}
            className="inline-flex items-center rounded-full px-6 py-3 text-sm font-medium font-body transition-all duration-200 bg-primary text-primary-foreground hover:opacity-90"
          >
            Launch Productivity Advisor
          </button>
        </motion.div>

        <DashboardPreview />
      </div>
    </section>
  );
}
