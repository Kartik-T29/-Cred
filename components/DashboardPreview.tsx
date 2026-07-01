"use client";

import { motion } from "framer-motion";
import { Search } from "lucide-react";

export default function DashboardPreview() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.75, ease: "easeOut" }}
      className="mt-10 w-full max-w-6xl px-4"
    >
      <div
        className="rounded-2xl overflow-hidden p-2 md:p-4 backdrop-blur-[20px]"
        style={{
          background: "rgba(255,255,255,0.45)",
          border: "1px solid rgba(255,255,255,0.55)",
          boxShadow: "var(--shadow-dashboard)",
        }}
      >
        <div
          className="rounded-xl overflow-hidden select-none pointer-events-none font-body bg-background border border-border"
        >
          <div className="flex items-center justify-between px-3 py-2 border-b border-border">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md flex items-center justify-center text-[9px] font-semibold bg-primary text-primary-foreground">
                C
              </div>
              <span className="text-[11px] font-semibold text-foreground">
                Credent
              </span>
            </div>
            <div className="hidden md:flex items-center gap-2 rounded-lg px-3 py-1.5 bg-secondary border border-border min-w-[280px]">
              <Search className="w-[10px] h-[10px] text-muted-foreground" />
              <span className="text-[10px] text-muted-foreground">
                Search workflows...
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full flex items-center justify-center text-[8px] font-semibold bg-accent text-accent-foreground">
                AK
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row min-h-[280px]">
            <div className="flex-1 p-4 md:p-6 bg-[#f5f5f5]/30">
              <div className="mb-4">
                <div className="text-sm font-semibold text-foreground">
                  Welcome back, Aditya
                </div>
                <div className="text-xs mt-1 text-muted-foreground">
                  Your automated agents have saved you 14 hours today.
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1 rounded-lg p-4 bg-background border border-border">
                  <div className="text-[11px] font-semibold mb-1 text-foreground">
                    Operational Efficiency
                  </div>
                  <div className="text-2xl font-semibold tracking-tight text-foreground">
                    128 hrs saved
                  </div>
                </div>
                <div className="flex-1 rounded-lg p-4 bg-background border border-border">
                  <div className="text-[11px] font-semibold mb-1 text-foreground">
                    Active Agents
                  </div>
                  <div className="text-2xl font-semibold tracking-tight text-[#22c55e]">
                    3 Running
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
