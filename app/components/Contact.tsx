"use client";

import Image from "next/image";
import AnimatedHeading from "./AnimatedHeading";
import AnimatedCard from "./AnimatedCard";

export default function Contact() {
  return (
    <section id="contact-us" className="w-full pt-12 md:pt-16 pb-0 pr-6 md:pr-12 lg:pr-20">
      <div className="flex flex-col md:flex-row items-stretch overflow-hidden min-h-[700px] md:min-h-[800px]">
        {/* Left – image flush to canvas edge */}
        <div className="md:w-1/2 relative min-h-[400px] md:min-h-0">
          <Image
            src="/images/left side.png"
            alt="Contact us"
            fill
            className="object-cover"
          />
        </div>

        {/* Right – form with dotted background */}
        <div
          className="md:w-1/2 flex flex-col justify-center px-10 md:px-14 lg:px-20 py-14 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/right column dotted bg.svg')" }}
        >
          <AnimatedHeading
            text={"Have questions?\nSend Us a Message"}
            className="font-display text-[1.75rem] md:text-[2.25rem] lg:text-[2.75rem] font-medium leading-[1.15] tracking-tight bg-clip-text text-transparent"
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

          <form className="mt-8 flex flex-col gap-5">
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
              <div className="flex items-center gap-4 mt-2">
                <button
                  type="submit"
                  className="font-display font-medium inline-flex items-center justify-center rounded-[6px] px-7 py-3 text-sm text-white transition-colors hover:brightness-110"
                  style={{ backgroundColor: "#20D362" }}
                >
                  Submit
                </button>

                <span className="text-sm text-[#3E3E3E]">or</span>

                <a
                  href="#"
                  className="font-display font-medium inline-flex items-center justify-center gap-2 rounded-[6px] border border-neutral-300 bg-white px-7 py-3 text-sm text-neutral-800 hover:bg-neutral-50 transition-colors"
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
            </AnimatedCard>
          </form>
        </div>
      </div>
    </section>
  );
}
