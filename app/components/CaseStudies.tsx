"use client";

import Link from "next/link";
import AnimatedHeading from "./AnimatedHeading";
import AnimatedCard from "./AnimatedCard";

const caseStudies = [
  {
    slug: "antistatic",
    tag: "SaaS",
    title: "Antistatic",
    subtitle: "Reputation-as-a-Service Platform for SMBs",
    description:
      "A full-stack SaaS product that combines 24/7 AI monitoring, competitor intelligence, and a creator marketplace to turn online reputation into real revenue.",
  },
  {
    slug: "merchlab",
    tag: "E-commerce",
    title: "MerchLab",
    subtitle: "Agentic eCommerce and 24/7 AI Support",
    description:
      "An agentic eCommerce platform with unified AI support across WhatsApp, email, and voice - plus order automation, artwork handling, and human-in-the-loop escalation.",
  },
  {
    slug: "donor-engagement",
    tag: "Nonprofit",
    title: "Donor Engagement System",
    subtitle: "Unified CRM for a South African Nonprofit",
    description:
      "An integrated donor engagement system connecting WhatsApp, agentic calls, email, and payment flows into one CRM - recovering R582k in abandoned donations.",
  },
];

const highlights = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-[#1b9e4b]">
        <path d="M10 1v18M1 10h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    text: "Full product delivery",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-[#1b9e4b]">
        <path d="M3 10l5 5L17 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    text: "AI with human oversight",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-[#1b9e4b]">
        <rect x="2" y="6" width="5" height="12" rx="1" stroke="currentColor" strokeWidth="1.5" />
        <rect x="8" y="3" width="5" height="15" rx="1" stroke="currentColor" strokeWidth="1.5" />
        <rect x="14" y="1" width="5" height="17" rx="1" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    text: "Measurable outcomes",
  },
];

const MOBILE_STICKY_TOP_START = 140;
const MOBILE_STICKY_INCREMENT = 20;

export default function CaseStudies() {
  return (
    <section
      id="case-studies"
      className="w-full pt-12 md:pt-16 pb-12 md:pb-16 px-6 md:px-12 lg:px-20"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 md:gap-16">
        {/* Left column - sticky on desktop */}
        <div className="md:w-2/5 md:self-start md:sticky md:top-28">
          {/* Heading */}
          <div className="text-center md:text-left">
            <AnimatedHeading
              text={"Real projects.\nReal outcomes."}
              className="font-display text-[2rem] md:text-[2.75rem] lg:text-[3.25rem] font-medium leading-[1.15] tracking-tight bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #111111 0%, #075656 50%, #01D2A5 70%)",
              }}
            />

            <p className="mt-3 font-display font-medium text-sm text-[#1b9e4b] tracking-wide uppercase">
              Case Studies
            </p>
          </div>

          {/* Description + pills - hidden on mobile, shown on desktop */}
          <div className="hidden md:block">
            <AnimatedHeading
              as="p"
              text="From concept to production, we design and build AI systems that combine automation with clear human oversight."
              className="mt-6 text-sm md:text-base text-[#3E3E3E] leading-relaxed max-w-md"
            />

            <div className="mt-8 flex flex-col gap-3">
              {highlights.map((h) => (
                <div
                  key={h.text}
                  className="inline-flex items-center gap-3 rounded-full border border-neutral-100 bg-white shadow-sm px-5 py-2.5 w-fit"
                >
                  {h.icon}
                  <span className="font-display font-medium text-sm text-neutral-900">
                    {h.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: stacking cards */}
        <div className="flex flex-col gap-4 md:hidden">
          {caseStudies.map((cs, idx) => (
            <div
              key={cs.slug}
              className="sticky"
              style={{
                top: `${MOBILE_STICKY_TOP_START + idx * MOBILE_STICKY_INCREMENT}px`,
                zIndex: idx + 1,
              }}
            >
              <Link
                href={`/case-studies/${cs.slug}`}
                className="group flex flex-col rounded-xl bg-white border border-neutral-100 shadow-lg overflow-hidden transition-shadow active:shadow-md"
              >
                <div className="px-6 py-6">
                  <div className="flex items-center justify-between gap-3 mb-1">
                    <h3 className="font-display font-semibold text-lg text-neutral-900">
                      {cs.title}
                    </h3>
                    <span className="shrink-0 font-display font-medium text-xs tracking-wide text-[#1b9e4b] bg-[#1b9e4b]/10 rounded-full px-3 py-1">
                      {cs.tag}
                    </span>
                  </div>
                  <p className="mt-1 font-display font-medium text-sm text-[#3E3E3E]">
                    {cs.subtitle}
                  </p>
                  <p className="mt-3 text-sm text-[#3E3E3E] leading-relaxed">
                    {cs.description}
                  </p>
                  <span className="inline-flex items-center gap-1.5 font-display font-medium text-sm text-[#1b9e4b] mt-5">
                    Read case study
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M1 7h12m0 0L8.5 2.5M13 7l-4.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Right column - desktop only, scrolls naturally */}
        <div className="hidden md:flex md:w-3/5 flex-col gap-5">
          {caseStudies.map((cs, idx) => (
            <AnimatedCard key={cs.slug} delay={idx * 150}>
              <Link
                href={`/case-studies/${cs.slug}`}
                className="group flex flex-col rounded-xl bg-white border border-neutral-100 shadow-sm overflow-hidden transition-shadow hover:shadow-md"
              >
                <div className="px-8 py-8">
                  <div className="flex items-center justify-between gap-4 mb-1">
                    <h3 className="font-display font-semibold text-xl md:text-2xl text-neutral-900 group-hover:text-[#075656] transition-colors">
                      {cs.title}
                    </h3>
                    <span className="shrink-0 font-display font-medium text-xs tracking-wide text-[#1b9e4b] bg-[#1b9e4b]/10 rounded-full px-3 py-1">
                      {cs.tag}
                    </span>
                  </div>
                  <p className="mt-1 font-display font-medium text-sm text-[#3E3E3E]">
                    {cs.subtitle}
                  </p>
                  <p className="mt-3 text-sm text-[#3E3E3E] leading-relaxed">
                    {cs.description}
                  </p>

                  <span className="inline-flex items-center gap-1.5 font-display font-medium text-sm text-[#1b9e4b] mt-5 group-hover:gap-2.5 transition-all">
                    Read case study
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      className="transition-transform group-hover:translate-x-0.5"
                    >
                      <path
                        d="M1 7h12m0 0L8.5 2.5M13 7l-4.5 4.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              </Link>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}
