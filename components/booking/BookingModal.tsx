"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { X } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number is too short"),
  company: z.string().min(1, "Company name is required"),
});

type FormValues = z.infer<typeof formSchema>;

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  if (!isOpen) return null;

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) throw new Error(result.error || "Failed to save");

      setSubmitStatus("success");
      setTimeout(() => {
        onClose();
        reset();
        setSubmitStatus("idle");
      }, 2000);
    } catch (error) {
      console.error(error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 transition-opacity">
      <div className="w-full max-w-md rounded-2xl p-6 md:p-8 shadow-2xl relative bg-background border border-border">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted-foreground hover:opacity-75 transition-opacity"
        >
          <X className="w-5 h-5" />
        </button>

        <h3 className="font-display text-3xl tracking-tight mb-2 text-foreground">
          Book a Consultation
        </h3>
        <p className="text-sm mb-6 text-muted-foreground">
          Leave your details, Our Team will contact you shortly.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider mb-1 text-muted-foreground">
              Full Name
            </label>
            <input
              {...register("name")}
              type="text"
              className="w-full rounded-lg px-4 py-3 text-sm focus:outline-none transition-colors bg-secondary border border-border text-foreground"
            />
            {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>}
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider mb-1 text-muted-foreground">
              Email Address
            </label>
            <input
              {...register("email")}
              type="email"
              className="w-full rounded-lg px-4 py-3 text-sm focus:outline-none transition-colors bg-secondary border border-border text-foreground"
            />
            {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>}
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider mb-1 text-muted-foreground">
              Phone Number
            </label>
            <input
              {...register("phone")}
              type="tel"
              className="w-full rounded-lg px-4 py-3 text-sm focus:outline-none transition-colors bg-secondary border border-border text-foreground"
            />
            {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone.message}</p>}
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider mb-1 text-muted-foreground">
              Company Name
            </label>
            <input
              {...register("company")}
              type="text"
              className="w-full rounded-lg px-4 py-3 text-sm focus:outline-none transition-colors bg-secondary border border-border text-foreground"
            />
            {errors.company && <p className="text-xs text-red-500 mt-1">{errors.company.message}</p>}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-lg px-6 py-3 text-sm font-medium transition-all duration-200 mt-2 hover:opacity-90 bg-primary text-primary-foreground disabled:opacity-50"
          >
            {isSubmitting ? "Saving..." : submitStatus === "success" ? "Booked!" : "Confirm Booking"}
          </button>

          {submitStatus === "error" && (
            <p className="text-xs text-center text-red-500 mt-2">Error saving details. Please try again.</p>
          )}
          {submitStatus === "success" && (
            <p className="text-xs text-center text-green-500 mt-2">Success! We will contact you shortly.</p>
          )}
        </form>
      </div>
    </div>
  );
}
