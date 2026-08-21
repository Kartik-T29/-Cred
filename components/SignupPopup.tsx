"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles } from "lucide-react";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";

interface SignupPopupProps {
  /** Delay in seconds before showing the popup (default: 45) */
  delaySeconds?: number;
}

export default function SignupPopup({ delaySeconds = 45 }: SignupPopupProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Don't show if already dismissed this session
    if (sessionStorage.getItem("credent_popup_dismissed")) {
      setIsDismissed(true);
      return;
    }

    let timer: ReturnType<typeof setTimeout> | null = null;
    let cancelled = false;

    // Check if user is already logged in
    const supabase = createClient();
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (cancelled) return;

      if (user) {
        // User is logged in, don't show popup
        setIsDismissed(true);
        return;
      }

      // Show popup after delay
      timer = setTimeout(() => {
        setIsVisible(true);
      }, delaySeconds * 1000);
    });

    return () => {
      cancelled = true;
      if (timer) clearTimeout(timer);
    };
  }, [delaySeconds]);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
    sessionStorage.setItem("credent_popup_dismissed", "true");
  };

  if (isDismissed) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[90] bg-black/40 backdrop-blur-sm"
            onClick={handleDismiss}
          />

          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[95] flex items-center justify-center px-4 pointer-events-none"
          >
            <div className="w-full max-w-[440px] rounded-2xl border border-border bg-secondary p-8 shadow-2xl relative pointer-events-auto glow-accent">
              {/* Close button */}
              <button
                onClick={handleDismiss}
                className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Icon */}
              <div className="flex justify-center mb-5">
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center">
                  <Sparkles className="w-7 h-7 text-accent" />
                </div>
              </div>

              {/* Content */}
              <div className="text-center mb-6">
                <h2 className="font-display text-2xl md:text-3xl tracking-tight text-foreground mb-3">
                  Unlock{" "}
                  <em className="font-display italic">Smarter Operations</em>
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-[340px] mx-auto">
                  Join forward-thinking teams using Credent to automate
                  workflows, reduce costs, and scale intelligently.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-3">
                <Link
                  href="/signup"
                  onClick={handleDismiss}
                  className="flex items-center justify-center w-full rounded-xl px-6 py-3.5 text-sm font-medium bg-primary text-primary-foreground hover:opacity-90 transition-all duration-200"
                >
                  Create Free Account
                </Link>

                <Link
                  href="/login"
                  onClick={handleDismiss}
                  className="flex items-center justify-center w-full rounded-xl px-6 py-3.5 text-sm font-medium border border-border text-foreground hover:bg-secondary transition-all duration-200"
                >
                  Sign In
                </Link>
              </div>

              {/* Subtle note */}
              <p className="text-center text-xs text-muted-foreground mt-4">
                No credit card required • Free forever to start
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
