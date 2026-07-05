"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Metrics from "@/components/Metrics";
import Industries from "@/components/Industries";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";
import ChatModal from "@/components/chatbot/ChatModal";
import BookingModal from "@/components/booking/BookingModal";
import SignupPopup from "@/components/SignupPopup";

export default function Home() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <main className="min-h-screen bg-background">
      <Navbar onOpenChat={() => setIsChatOpen(true)} />
      <Hero onOpenChat={() => setIsChatOpen(true)} />
      
      <Metrics />
      
      <div className="section-divider mx-6 md:mx-12 lg:mx-20"></div>
      
      <Industries />
      
      <div className="section-divider mx-6 md:mx-12 lg:mx-20"></div>
      
      <Pricing onOpenBooking={() => setIsBookingOpen(true)} />
      
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

      {/* Timed signup popup — shows after 15s for non-authenticated visitors */}
      <SignupPopup delaySeconds={15} />
    </main>
  );
}
