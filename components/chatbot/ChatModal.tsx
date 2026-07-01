"use client";

import { useState, useRef, useEffect } from "react";
import { X } from "lucide-react";

interface Message {
  role: "user" | "advisor";
  content: string;
}

interface ChatModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBooking: () => void;
}

export default function ChatModal({ isOpen, onClose, onOpenBooking }: ChatModalProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "advisor",
      content: "Hello! I'm your Credent Advisor. I can help map your operational bottlenecks. How can I help you today?",
    }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatHistoryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatHistoryRef.current) {
      chatHistoryRef.current.scrollTop = chatHistoryRef.current.scrollHeight;
    }
  }, [messages, isTyping, isOpen]);

  if (!isOpen) return null;

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = input.trim();
    setMessages((prev) => [...prev, { role: "user", content: userMsg }]);
    setInput("");
    setIsTyping(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMsg, history: messages }),
      });

      if (!response.ok) throw new Error("Failed to fetch response");

      const data = await response.json();
      let rawReply = data.reply as string;

      if (rawReply.includes("[OPEN_FORM]")) {
        rawReply = rawReply.replace("[OPEN_FORM]", "").trim();
        setTimeout(() => {
          onClose();
          onOpenBooking();
        }, 1500);
      }

      setMessages((prev) => [...prev, { role: "advisor", content: rawReply }]);
    } catch (error) {
      console.error(error);
      setMessages((prev) => [
        ...prev,
        {
          role: "advisor",
          content: "Connection failed. Please ensure the backend is running.",
        }
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-0 right-0 sm:bottom-6 sm:right-6 w-full sm:w-[380px] h-[100dvh] sm:h-[550px] rounded-none sm:rounded-2xl shadow-2xl flex flex-col z-50 transition-all duration-300 border-0 sm:border bg-background border-border">
      <div className="p-4 flex justify-between items-center bg-secondary border-b border-border sm:rounded-t-2xl">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#22c55e]" style={{ boxShadow: "0 0 8px #22c55e" }}></div>
          <h3 className="font-semibold text-sm font-body text-foreground">Credent Advisor</h3>
        </div>
        <button
          onClick={onClose}
          className="text-xs font-body font-medium transition-colors p-2 text-muted-foreground hover:text-foreground flex items-center gap-1"
        >
          <X className="w-3 h-3" /> Close
        </button>
      </div>

      <div
        ref={chatHistoryRef}
        className="flex-1 p-4 overflow-y-auto flex flex-col gap-3 text-sm font-body bg-[#f5f5f5]/30"
      >
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`p-3 rounded-xl leading-relaxed shadow-sm max-w-[85%] ${
              msg.role === "advisor"
                ? "rounded-tl-sm self-start bg-secondary text-foreground border border-border"
                : "rounded-tr-sm self-end bg-foreground text-background"
            }`}
            dangerouslySetInnerHTML={{ __html: msg.content.replace(/\n/g, "<br>") }}
          />
        ))}

        {isTyping && (
          <div className="p-3 rounded-xl rounded-tl-sm self-start max-w-[85%] leading-relaxed shadow-sm bg-secondary text-muted-foreground border border-border">
            Advisor is typing...
          </div>
        )}
      </div>

      <div className="p-4 flex gap-2 border-t border-border bg-background sm:rounded-b-2xl">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          placeholder="Type your message..."
          className="flex-1 rounded-full px-4 py-2 text-sm font-body focus:outline-none transition-colors bg-secondary border border-border text-foreground"
        />
        <button
          onClick={sendMessage}
          disabled={!input.trim() || isTyping}
          className="px-5 py-2 rounded-full text-sm font-medium font-body transition-all hover:opacity-90 bg-primary text-primary-foreground disabled:opacity-50"
        >
          Send
        </button>
      </div>
    </div>
  );
}
