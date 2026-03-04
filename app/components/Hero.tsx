"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

const pills = [
  "Strategy into systems",
  "Optimise",
  "Smart automation",
  "Design AI systems",
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const section = sectionRef.current;
      if (!section) return;

      const sectionHeight = section.offsetHeight;
      if (scrollY > sectionHeight) return;

      if (bgRef.current) {
        bgRef.current.style.transform = `translateY(${scrollY * 0.35}px)`;
      }
      if (contentRef.current) {
        contentRef.current.style.transform = `translateY(${scrollY * 0.12}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative">
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen overflow-hidden"
    >
      {/* Background layer – moves slower; mobile: focal point left and down */}
      <div
        ref={bgRef}
        className="absolute inset-0 bg-cover bg-no-repeat will-change-transform [background-position:62%_75%] md:bg-right animate-hero-scale-in"
        style={{ backgroundImage: "url('/images/bg.svg')" }}
      />

      {/* Content layer – moves slightly, fades out */}
      <div
        ref={contentRef}
        className="relative z-10 px-6 md:px-12 lg:px-20 pt-32 md:pt-40 lg:pt-48 will-change-transform"
      >
        <div className="max-w-4xl">
          {/* Pills – infinite rolling marquee */}
          <div
            className="relative max-w-xl mb-8 overflow-hidden py-4 animate-hero-enter"
            style={{
              animationDelay: "200ms",
              maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
              WebkitMaskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
            }}
          >
            <div className="flex gap-2.5 w-max animate-marquee">
              {[...pills, ...pills].map((pill, i) => (
                <span
                  key={`${pill}-${i}`}
                  className="font-display font-medium rounded-full bg-white/90 px-4 py-1.5 text-sm text-[#3E3E3E] shadow-[0_4px_16px_rgba(0,0,0,0.08)] shrink-0 whitespace-nowrap"
                >
                  {pill}
                </span>
              ))}
            </div>
          </div>

          {/* Heading */}
          <h1
            className="font-display text-[2.5rem] md:text-[3.5rem] lg:text-[4rem] leading-[1.1] font-medium tracking-tight bg-clip-text text-transparent animate-hero-enter"
            style={{
              animationDelay: "400ms",
              backgroundImage:
                "linear-gradient(to right, #111111 0%, #075656 75%, #01D2A5 99%)",
            }}
          >
            <span className="md:hidden">Move AI curiosity<br />to strategic<br />implementation<br />clarity</span>
            <span className="hidden md:inline">Move AI curiosity to strategic<br />implementation clarity</span>
          </h1>

          {/* Subtext */}
          <p className="mt-6 text-sm md:text-base max-w-4xl leading-relaxed text-[#3E3E3E] animate-hero-enter" style={{ animationDelay: "600ms" }}>
            We design AI systems that deliver the essence of your business at
            lower costs and increased productivity
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-4 animate-hero-enter" style={{ animationDelay: "750ms" }}>
            <Link
              href="/#case-studies"
              className="font-display font-medium inline-flex items-center justify-center rounded-[6px] px-7 py-3 text-sm text-white transition-colors hover:brightness-110"
              style={{ backgroundColor: "#20D362" }}
            >
              View our work
            </Link>

            <a
              href="https://wa.me/27686260354"
              target="_blank"
              rel="noopener noreferrer"
              className="font-display font-medium inline-flex items-center justify-center gap-2 rounded-[6px] border border-neutral-300 bg-white px-7 py-3 text-sm text-neutral-800 hover:bg-neutral-50 transition-colors"
            >
              <Image
                src="/images/whatsapp icon.svg"
                alt=""
                width={16}
                height={16}
                className="h-4 w-4"
              />
              Start a conversation
            </a>
          </div>
        </div>
      </div>

      {/* Inner fade at bottom of section (inside overflow-hidden) */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 md:h-52 pointer-events-none z-10"
        style={{
          background: "linear-gradient(to bottom, transparent 0%, rgba(249,251,250,0.5) 50%, #F9FBFA 100%)",
        }}
      />
    </section>

    {/* Outer glassy blur – straddles the section edge */}
    <div className="absolute bottom-0 left-0 right-0 translate-y-1/3 h-56 md:h-64 pointer-events-none z-20 backdrop-blur-xl bg-white/10"
      style={{
        maskImage: "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.2) 20%, rgba(0,0,0,0.6) 50%, black 80%)",
        WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.2) 20%, rgba(0,0,0,0.6) 50%, black 80%)",
      }}
    />

    {/* Outer fade to page background color */}
    <div
      className="absolute bottom-0 left-0 right-0 translate-y-1/3 h-44 md:h-52 pointer-events-none z-20"
      style={{
        background: "linear-gradient(to bottom, transparent 0%, rgba(249,251,250,0.6) 40%, #F9FBFA 100%)",
      }}
    />
    </div>
  );
}
