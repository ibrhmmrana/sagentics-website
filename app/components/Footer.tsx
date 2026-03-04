import Image from "next/image";
import Link from "next/link";
import AnimatedCard from "./AnimatedCard";

const navLinks = [
  { label: "Our Method", href: "/#our-method" },
  { label: "Our scaffolds", href: "/#our-scaffolds" },
  { label: "Core Capabilities", href: "/#core-capabilities" },
  { label: "Contact Us", href: "/#contact-us" },
];

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#111111] overflow-hidden">
      {/* Footer content */}
      <div className="relative z-10 w-full px-6 md:px-12 lg:px-20 pt-10 pb-8 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* White logo – left */}
        <AnimatedCard delay={0}>
          <Link href="/" className="shrink-0 block">
            <Image
              src="/images/logo white.svg"
              alt="sagentics.ai"
              width={160}
              height={32}
            />
          </Link>
        </AnimatedCard>

        {/* Nav links – center */}
        <AnimatedCard delay={100}>
          <nav className="flex items-center gap-6 md:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs font-medium text-neutral-400 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </AnimatedCard>

        {/* Copyright – right */}
        <AnimatedCard delay={200}>
          <p className="text-xs text-neutral-500 shrink-0">
            Copyright © 2026. All Rights Reserved
          </p>
        </AnimatedCard>
      </div>

      {/* Massive logo */}
      <AnimatedCard delay={300}>
        <div className="relative w-full px-6 md:px-12 lg:px-20 mt-6 md:mt-8 flex justify-center pointer-events-none select-none">
          <div
            className="absolute inset-0 z-10"
            style={{
              background: "linear-gradient(to top, #111111 0%, transparent 35%)",
            }}
          />
          <Image
            src="/images/logo big dark.svg"
            alt=""
            width={1800}
            height={400}
            className="w-full h-auto object-contain"
          />
        </div>
      </AnimatedCard>
    </footer>
  );
}
