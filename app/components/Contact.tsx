"use client";

import { useState } from "react";
import Image from "next/image";
import AnimatedHeading from "./AnimatedHeading";
import AnimatedCard from "./AnimatedCard";

const WEBHOOK_URL = "https://ai.intakt.co.za/webhook/sagentics-contact-us";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    const form = e.currentTarget;
    const name = (form.querySelector("#name") as HTMLInputElement).value.trim();
    const email = (form.querySelector("#email") as HTMLInputElement).value.trim();
    const message = (form.querySelector("#message") as HTMLTextAreaElement).value.trim();

    if (!name || !email || !message) {
      setError("Please fill in all fields.");
      setIsSubmitting(false);
      return;
    }

    try {
      const res = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (!res.ok) {
        throw new Error("Something went wrong. Please try again.");
      }
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact-us" className="w-full pt-12 md:pt-16 pb-0 pr-0 md:pr-12 lg:pr-20 overflow-hidden md:overflow-visible">
      <div className="flex flex-col md:flex-row items-stretch overflow-hidden min-h-[400px] md:min-h-[800px]">
        {/* Form – first on mobile (top), right column on desktop */}
        <div
          className="order-1 md:order-2 md:w-1/2 flex flex-col justify-center px-10 md:px-14 lg:px-20 py-14 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/right column dotted bg.svg')" }}
        >
          {submitted ? (
            <>
              <h2
                className="font-display text-[1.75rem] md:text-[2.25rem] lg:text-[2.75rem] font-medium leading-[1.15] tracking-tight bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #111111 0%, #075656 50%, #01D2A5 70%)",
                }}
              >
                Thanks for reaching out
              </h2>
              <p className="mt-4 text-sm text-[#3E3E3E]">
                We&apos;ll be in touch soon.
              </p>
            </>
          ) : (
            <>
          <AnimatedHeading
            text={"Have questions?\nSend Us a Message"}
            className="font-display text-[2.125rem] md:text-[2.25rem] lg:text-[2.75rem] font-medium leading-[1.15] tracking-tight bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(to right, #111111 0%, #075656 50%, #01D2A5 70%)",
            }}
          />

          <AnimatedHeading
            as="p"
            text="Fill out the form below, and we'll get back to you as soon as possible."
            className="mt-4 text-sm text-[#3E3E3E]"
          />

          <form className="mt-8 flex flex-col gap-5" onSubmit={handleSubmit}>
            <AnimatedCard delay={0}>
              <label htmlFor="name" className="block text-sm font-medium text-neutral-800 mb-1.5">
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="John Smith"
                className="w-full rounded-[6px] border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 outline-none focus:border-[#1b9e4b] transition-colors"
              />
            </AnimatedCard>

            <AnimatedCard delay={120}>
              <label htmlFor="email" className="block text-sm font-medium text-neutral-800 mb-1.5">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-[6px] border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 outline-none focus:border-[#1b9e4b] transition-colors"
              />
            </AnimatedCard>

            <AnimatedCard delay={240}>
              <label htmlFor="message" className="block text-sm font-medium text-neutral-800 mb-1.5">
                How can we help?
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Type your message"
                className="w-full rounded-[6px] border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 outline-none focus:border-[#1b9e4b] transition-colors resize-none"
              />
            </AnimatedCard>

            <AnimatedCard delay={360}>
              <div className="flex flex-col gap-3 mt-2">
                {error && (
                  <p className="text-sm text-red-600">{error}</p>
                )}
                <div className="flex items-center gap-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="font-display font-medium inline-flex items-center justify-center rounded-[6px] px-7 py-3 text-sm text-white transition-colors hover:brightness-110 disabled:opacity-70 disabled:cursor-not-allowed"
                  style={{ backgroundColor: "#20D362" }}
                >
                  {isSubmitting ? "Sending…" : "Submit"}
                </button>

                <span className="text-sm text-[#3E3E3E]">or</span>

                <a
                  href="https://wa.me/27686260354"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-display font-medium inline-flex items-center justify-center gap-2 rounded-[6px] border border-neutral-300 bg-white px-4 py-2.5 md:px-7 md:py-3 text-sm text-neutral-800 hover:bg-neutral-50 transition-colors"
                >
                  <Image
                    src="/images/whatsapp icon.svg"
                    alt=""
                    width={16}
                    height={16}
                    className="h-4 w-4"
                  />
                  Chat to book a call
                </a>
                </div>
              </div>
            </AnimatedCard>
          </form>
            </>
          )}
        </div>

        {/* Image – below form on mobile (full width), left column on desktop */}
        <div className="order-2 md:order-1 relative md:w-1/2 min-h-[420px] md:min-h-0">
          <Image
            src="/images/left side.png"
            alt="Contact us"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
