"use client";

import { useState } from "react";
import { Menu } from "lucide-react";

interface NavbarProps {
  onOpenChat: () => void;
}

export default function Navbar({ onOpenChat }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="flex flex-col lg:flex-row lg:items-center justify-between px-6 md:px-12 lg:px-20 py-5 font-body relative z-40 bg-background">
      <div className="flex items-center justify-between w-full lg:w-auto">
        <div className="flex items-center gap-2">
          <span
            className="text-xl font-semibold tracking-tight cursor-pointer text-foreground"
            onClick={() => window.scrollTo(0, 0)}
          >
            ✦ Credent
          </span>
        </div>
        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      <div
        className={`${
          isMobileMenuOpen ? "flex" : "hidden"
        } lg:flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-8 mt-6 lg:mt-0 w-full lg:w-auto pb-4 lg:pb-0`}
      >
        <a
          href="#metrics"
          className="text-sm font-body transition-colors duration-200 text-muted-foreground hover:text-primary"
        >
          Platform
        </a>
        <a
          href="#industries"
          className="text-sm font-body transition-colors duration-200 text-muted-foreground hover:text-primary"
        >
          Industries
        </a>
        <a
          href="#pricing"
          className="text-sm font-body transition-colors duration-200 text-muted-foreground hover:text-primary"
        >
          Pricing
        </a>
        <div className="flex lg:hidden w-full h-[1px] bg-border my-2"></div>
        <button
          onClick={onOpenChat}
          className="inline-flex items-center rounded-full px-5 py-2.5 text-sm font-medium font-body transition-all duration-200 w-full lg:w-auto justify-center bg-primary text-primary-foreground hover:opacity-90"
        >
          Talk to Advisor
        </button>
      </div>
    </nav>
  );
}
