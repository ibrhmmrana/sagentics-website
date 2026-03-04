"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

interface StatItem {
  value: string;
  label: string;
  prefix?: string;
  suffix?: string;
  /** When true, count up from 100k through 200k, 300k, … to 1M (for value "1" + suffix "M"). */
  countUpIn100ks?: boolean;
}

interface SectionBlock {
  heading: string;
  content: React.ReactNode;
}

interface CaseStudyLayoutProps {
  tag: string;
  title: string;
  subtitle: string;
  overview: string;
  meta: { label: string; value: string }[];
  stats?: StatItem[];
  sections: SectionBlock[];
  closingText?: string;
  website?: string;
}

function AnimatedSection({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.8s ease-out ${delay}ms, transform 0.8s ease-out ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

function CountUp({
  target,
  suffix = "",
  prefix: prefixProp = "",
  countUpIn100ks = false,
}: {
  target: string;
  suffix?: string;
  prefix?: string;
  countUpIn100ks?: boolean;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(countUpIn100ks ? "100" : "0");
  const [suffixDisplay, setSuffixDisplay] = useState(countUpIn100ks ? "k" : suffix);
  const [started, setStarted] = useState(false);

  const numericPart = target.replace(/[^0-9.]/g, "");
  const prefixFromTarget = target.replace(/[0-9.,]+.*/, "");
  const prefix = prefixProp !== "" ? prefixProp : prefixFromTarget;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !started) {
          setStarted(true);
          obs.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    if (countUpIn100ks) {
      // Animate 100 → 200 → … → 1000, display as 100k, 200k, … 1M
      const duration = 2400;
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - t, 3);
        const current = 100 + eased * 900; // 100 to 1000
        const step = Math.min(Math.floor(current / 100) * 100, 1000);
        if (step >= 1000) {
          setDisplay("1");
          setSuffixDisplay("M");
        } else {
          setDisplay(step.toLocaleString());
          setSuffixDisplay("k");
        }
        if (t < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      return;
    }
    const end = parseFloat(numericPart);
    if (isNaN(end)) {
      setDisplay(target);
      setSuffixDisplay(suffix);
      return;
    }
    const duration = 1600;
    const start = performance.now();
    const isDecimal = numericPart.includes(".");

    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      const current = eased * end;
      setDisplay(isDecimal ? current.toFixed(1) : Math.floor(current).toLocaleString());
      setSuffixDisplay(suffix);
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [started, numericPart, target, countUpIn100ks, suffix]);

  return (
    <span ref={ref}>
      {prefix}{display}{countUpIn100ks ? suffixDisplay : suffix}
    </span>
  );
}

export default function CaseStudyLayout({
  tag,
  title,
  subtitle,
  overview,
  meta,
  stats,
  sections,
  closingText,
  website,
}: CaseStudyLayoutProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollToTop = () => window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    scrollToTop();
    requestAnimationFrame(scrollToTop);
  }, []);

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
    <main className="min-h-screen bg-[#F9FBFA]">
      {/* Hero */}
      <div className="relative">
        <section
          ref={sectionRef}
          className="relative w-full min-h-[70vh] overflow-hidden"
        >
          {/* Background layer - parallax */}
          <div
            ref={bgRef}
            className="absolute inset-0 bg-cover bg-no-repeat will-change-transform [background-position:62%_75%] md:bg-right"
            style={{ backgroundImage: "url('/images/bg.svg')" }}
          />

          {/* Content layer - parallax */}
          <div
            ref={contentRef}
            className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-28 pb-24 md:pt-36 md:pb-32 will-change-transform"
          >
            <Link
              href="/#case-studies"
              className="inline-flex items-center gap-2 text-sm text-[#3E3E3E] font-display font-medium mb-10 hover:text-neutral-900 transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M13 7H1m0 0l4.5-4.5M1 7l4.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Back to home
            </Link>

            <h1
              className="font-display text-[2.25rem] md:text-[3rem] lg:text-[3.75rem] font-medium leading-[1.1] tracking-tight bg-clip-text text-transparent mb-2"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #111111 0%, #075656 75%, #01D2A5 99%)",
              }}
            >
              {title}
            </h1>

            <p className="mt-4 text-lg md:text-xl text-[#3E3E3E] max-w-2xl leading-relaxed">
              {subtitle}
            </p>

            {/* Meta pills */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              {meta.map((m) => (
                <div key={m.label} className="flex items-center gap-2 rounded-full bg-white/90 shadow-[0_4px_16px_rgba(0,0,0,0.08)] px-4 py-2">
                  <span className="text-xs text-[#3E3E3E] font-medium">{m.label}</span>
                  <span className="text-xs text-neutral-900 font-display font-medium">{m.value}</span>
                </div>
              ))}
              {website && (
                <a
                  href={`https://${website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#111111] shadow-[0_4px_16px_rgba(0,0,0,0.08)] px-5 py-2 text-xs font-display font-medium text-white transition-colors hover:bg-neutral-800"
                >
                  {website}
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2.5 9.5l7-7M4 2.5h5.5V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              )}
            </div>
          </div>

          {/* Inner fade at bottom of section */}
          <div
            className="absolute bottom-0 left-0 right-0 h-40 md:h-52 pointer-events-none z-10"
            style={{
              background: "linear-gradient(to bottom, transparent 0%, rgba(249,251,250,0.5) 50%, #F9FBFA 100%)",
            }}
          />
        </section>

        {/* Outer glassy blur - straddles the section edge */}
        <div
          className="absolute bottom-0 left-0 right-0 translate-y-1/3 h-56 md:h-64 pointer-events-none z-20 backdrop-blur-xl bg-white/10"
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

      {/* Stats bar */}
      {stats && stats.length > 0 && (
        <div className="relative -mt-8 z-30 px-6 md:px-12 lg:px-20">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 items-stretch">
            {stats.map((stat, i) => (
              <AnimatedSection key={stat.label} delay={i * 100}>
                <div className="h-full rounded-xl bg-white border border-neutral-100 shadow-sm px-6 py-5 text-center flex flex-col justify-center min-h-[100px]">
                  <p className="font-display font-bold text-2xl md:text-3xl text-neutral-900">
                    <CountUp
                      target={stat.value}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                      countUpIn100ks={stat.countUpIn100ks}
                    />
                  </p>
                  <p className="mt-1 text-xs text-[#3E3E3E] font-medium">{stat.label}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      )}

      {/* Overview – extra top on mobile when no stats so first paragraph clears hero blur */}
      <div className={`max-w-7xl mx-auto px-6 md:px-12 lg:px-20 ${stats?.length ? "mt-16" : "mt-24"} md:mt-20`}>
        <AnimatedSection>
          <p className="text-base md:text-lg text-[#3E3E3E] leading-relaxed">{overview}</p>
        </AnimatedSection>
      </div>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 mt-12">
        <div className="h-px bg-neutral-200" />
      </div>

      {/* Content sections */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 mt-12 md:mt-16 flex flex-col gap-16 md:gap-20">
        {sections.map((section, i) => (
          <AnimatedSection key={section.heading} delay={i * 60}>
            <h2 className="font-display font-semibold text-xl md:text-2xl text-neutral-900 mb-6">
              {section.heading}
            </h2>
            <div className="text-sm md:text-base text-[#3E3E3E] leading-relaxed space-y-4">
              {section.content}
            </div>
          </AnimatedSection>
        ))}
      </div>

      {/* Closing */}
      {closingText && (
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 mt-16 md:mt-20 mb-4">
          <AnimatedSection>
            <div className="relative rounded-2xl overflow-hidden">
              {/* Gradient top border */}
              <div
                className="absolute top-0 left-0 right-0 h-1 z-10"
                style={{
                  background: "linear-gradient(to right, #01D2A5 0%, #075656 50%, #111111 100%)",
                }}
              />
              {/* Gradient glow beneath the border */}
              <div
                className="absolute top-0 left-0 right-0 h-24 z-[1] opacity-20"
                style={{
                  background: "linear-gradient(to bottom, #01D2A5 0%, transparent 100%)",
                }}
              />
              {/* Background with dot pattern */}
              <div className="absolute inset-0 bg-[#111111]" />
              <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
                  backgroundSize: "24px 24px",
                }}
              />
              {/* Accent glow */}
              <div
                className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full opacity-[0.08]"
                style={{
                  background: "radial-gradient(circle, #0BAE7A 0%, transparent 70%)",
                }}
              />

              <div className="relative px-10 md:px-14 py-12 md:py-16 flex flex-col md:flex-row md:items-center gap-8 md:gap-12">
                <div className="flex-1">
                  <p className="font-display font-medium text-lg md:text-xl text-white leading-relaxed">
                    {closingText}
                  </p>
                </div>
                <div className="shrink-0 flex flex-col gap-3">
                  <Link
                    href="/#contact-us"
                    className="inline-flex items-center justify-center gap-2 font-display font-medium text-sm text-white rounded-[6px] px-8 py-3.5 transition-all hover:brightness-110 hover:scale-[1.02]"
                    style={{ backgroundColor: "#20D362" }}
                  >
                    Start a conversation
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M1 7h12m0 0L8.5 2.5M13 7l-4.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                  <Link
                    href="/#case-studies"
                    className="inline-flex items-center justify-center gap-2 font-display font-medium text-sm text-neutral-400 rounded-[6px] border border-neutral-700 px-8 py-3.5 transition-colors hover:text-white hover:border-neutral-500"
                  >
                    View more case studies
                  </Link>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      )}

      {/* Bottom padding */}
      <div className="h-16 md:h-24" />
    </main>
  );
}
