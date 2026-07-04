"use client";

import { useState, useEffect } from "react";
import { Menu, LogOut, User } from "lucide-react";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";
import { signOut } from "@/app/actions/auth";
import type { User as SupabaseUser } from "@supabase/supabase-js";

interface NavbarProps {
  onOpenChat: () => void;
}

export default function Navbar({ onOpenChat }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [user, setUser] = useState<SupabaseUser | null>(null);
  const [showUserMenu, setShowUserMenu] = useState(false);

  useEffect(() => {
    const supabase = createClient();

    // Get initial session
    supabase.auth.getUser().then(({ data: { user } }) => {
      setUser(user);
    });

    // Listen for auth state changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleSignOut = async () => {
    setShowUserMenu(false);
    await signOut();
  };

  // Get user display info
  const userName =
    user?.user_metadata?.full_name ||
    user?.user_metadata?.name ||
    user?.email?.split("@")[0] ||
    "User";
  const userAvatar = user?.user_metadata?.avatar_url;
  const userInitial = userName.charAt(0).toUpperCase();

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

        <div className="flex items-center gap-3 w-full lg:w-auto">
          <button
            onClick={onOpenChat}
            className="inline-flex items-center rounded-full px-5 py-2.5 text-sm font-medium font-body transition-all duration-200 w-full lg:w-auto justify-center bg-primary text-primary-foreground hover:opacity-90"
          >
            Talk to Advisor
          </button>

          {user ? (
            /* Logged in — show avatar + dropdown */
            <div className="relative">
              <button
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="flex items-center gap-2 rounded-full border border-border px-3 py-2 text-sm transition-all duration-200 hover:bg-secondary"
              >
                {userAvatar ? (
                  <img
                    src={userAvatar}
                    alt={userName}
                    className="w-7 h-7 rounded-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="w-7 h-7 rounded-full bg-accent flex items-center justify-center text-xs font-semibold text-accent-foreground">
                    {userInitial}
                  </div>
                )}
                <span className="hidden sm:inline text-sm font-medium text-foreground max-w-[120px] truncate">
                  {userName}
                </span>
              </button>

              {showUserMenu && (
                <>
                  {/* Backdrop to close menu */}
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setShowUserMenu(false)}
                  />
                  <div className="absolute right-0 top-full mt-2 w-56 rounded-xl border border-border bg-background shadow-xl z-50 overflow-hidden">
                    <div className="px-4 py-3 border-b border-border">
                      <p className="text-sm font-medium text-foreground truncate">
                        {userName}
                      </p>
                      <p className="text-xs text-muted-foreground truncate">
                        {user.email}
                      </p>
                    </div>
                    <button
                      onClick={handleSignOut}
                      className="flex items-center gap-2.5 w-full px-4 py-3 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
                    >
                      <LogOut className="w-4 h-4" />
                      Sign Out
                    </button>
                  </div>
                </>
              )}
            </div>
          ) : (
            /* Not logged in — show Sign In link */
            <Link
              href="/login"
              className="inline-flex items-center gap-1.5 rounded-full border border-border px-5 py-2.5 text-sm font-medium font-body transition-all duration-200 text-foreground hover:bg-secondary w-full lg:w-auto justify-center"
            >
              <User className="w-4 h-4" />
              Sign In
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
