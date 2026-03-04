"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Our Method", href: "/#our-method" },
  { label: "Our scaffolds", href: "/#our-scaffolds" },
  { label: "Our Work", href: "/#case-studies" },
  { label: "Contact Us", href: "/#contact-us" },
];

interface HeaderProps {
  variant?: "dark" | "light";
}

function MenuToggle({
  open,
  className = "",
}: {
  open: boolean;
  className?: string;
}) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      {/* Stacked short + long bars → X */}
      <rect
        width="12"
        height="1.5"
        rx="0.75"
        fill="currentColor"
        className="transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{
          transformOrigin: "12px 12px",
          x: open ? 4 : 8,
          y: open ? 11.25 : 8,
          width: open ? 16 : 12,
          transform: open ? "rotate(45deg)" : "rotate(0)",
        }}
      />
      <rect
        width="16"
        height="1.5"
        rx="0.75"
        fill="currentColor"
        className="transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{
          transformOrigin: "12px 12px",
          x: 4,
          y: open ? 11.25 : 14.5,
          transform: open ? "rotate(-45deg)" : "rotate(0)",
        }}
      />
    </svg>
  );
}

export default function Header({ variant = "dark" }: HeaderProps) {
  const isLight = variant === "light";
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      {/* Default header */}
      <header
        className="fixed left-0 right-0 top-0 z-50 w-full px-6 md:px-12 lg:px-20 pt-8 pb-5 flex items-center justify-between gap-14 md:gap-20 transition-all duration-300 ease-out"
        style={{
          opacity: scrolled ? 0 : 1,
          pointerEvents: scrolled ? "none" : "auto",
        }}
      >
        <div className="flex items-center gap-12 md:gap-14">
          <Link href="/" className="shrink-0 animate-header-enter" style={{ animationDelay: "0ms" }}>
            <Image
              src={isLight ? "/images/logo white.svg" : "/images/logo.svg"}
              alt="sagentics.ai"
              width={160}
              height={32}
              priority
            />
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors animate-header-enter ${
                  isLight
                    ? "text-neutral-400 hover:text-white"
                    : "text-[#3E3E3E] hover:text-neutral-900"
                }`}
                style={{ animationDelay: `${100 + i * 80}ms` }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
          className={`md:hidden shrink-0 p-2 -mr-2 touch-manipulation animate-header-enter ${
            isLight ? "text-white" : "text-neutral-700"
          }`}
          style={{ animationDelay: "100ms" }}
        >
          <MenuToggle open={menuOpen} />
        </button>
      </header>

      {/* Floating pill */}
      <div
        className="fixed left-0 right-0 top-0 z-50 px-6 md:px-12 lg:px-20 pt-4 transition-all duration-500 ease-out"
        style={{
          opacity: scrolled ? 1 : 0,
          transform: scrolled ? "translateY(0)" : "translateY(-100%)",
          pointerEvents: scrolled ? "auto" : "none",
        }}
      >
        <div className="max-w-5xl mx-auto flex items-center justify-between bg-white/80 backdrop-blur-xl shadow-[0_4px_24px_rgba(0,0,0,0.06)] rounded-full px-8 py-4 md:py-5">
          <Link href="/" className="shrink-0">
            <Image
              src="/images/logo.svg"
              alt="sagentics.ai"
              width={130}
              height={32}
              priority
            />
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[#3E3E3E] hover:text-neutral-900 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
            className="md:hidden shrink-0 p-2 -mr-2 text-neutral-700 touch-manipulation"
          >
            <MenuToggle open={menuOpen} />
          </button>
        </div>
      </div>

      {/* Full-screen mobile menu */}
      <div
        className="fixed inset-0 z-[55] md:hidden transition-[visibility] duration-500"
        aria-hidden={!menuOpen}
        style={{
          pointerEvents: menuOpen ? "auto" : "none",
          visibility: menuOpen ? "visible" : "hidden",
        }}
      >
        {/* Dark overlay with blur */}
        <div
          className="absolute inset-0 bg-[#111111] transition-opacity duration-500"
          style={{ opacity: menuOpen ? 1 : 0 }}
        />
        {/* Subtle dot pattern */}
        <div
          className="absolute inset-0 opacity-[0.03] transition-opacity duration-500"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "32px 32px",
            opacity: menuOpen ? 0.03 : 0,
          }}
        />
        {/* Accent glow */}
        <div
          className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full transition-opacity duration-700"
          style={{
            background:
              "radial-gradient(circle, #0BAE7A 0%, transparent 70%)",
            opacity: menuOpen ? 0.12 : 0,
          }}
        />

        {/* Content - uses safe-area padding so text avoids the notch, but bg covers everything */}
        <div
          className="relative h-full flex flex-col transition-opacity duration-200 ease-out"
          style={{
            opacity: menuOpen ? 1 : 0,
            paddingLeft: "max(2rem, env(safe-area-inset-left))",
            paddingRight: "max(2rem, env(safe-area-inset-right))",
            paddingBottom: "max(2.5rem, env(safe-area-inset-bottom))",
          }}
        >
          {/* Top bar: logo + close */}
          <div
            className="flex items-center justify-between pb-5"
            style={{ paddingTop: "max(2rem, env(safe-area-inset-top))" }}
          >
            <Link href="/" onClick={() => setMenuOpen(false)} className="shrink-0">
              <Image
                src="/images/logo white.svg"
                alt="sagentics.ai"
                width={140}
                height={32}
                priority
              />
            </Link>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
              className="p-2 -mr-2 text-white touch-manipulation"
            >
              <MenuToggle open={menuOpen} />
            </button>
          </div>

          {/* Nav links */}
          <nav className="flex flex-col mt-12 flex-1">
            {navLinks.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="group py-5 border-b border-white/10 transition-all duration-500"
                style={{
                  opacity: menuOpen ? 1 : 0,
                  transform: menuOpen ? "translateX(0)" : "translateX(40px)",
                  transitionDelay: menuOpen ? `${150 + i * 80}ms` : "0ms",
                }}
              >
                <div className="flex items-center justify-between">
                  <span className="font-display font-medium text-2xl text-white group-hover:text-[#0BAE7A] transition-colors">
                    {link.label}
                  </span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="text-neutral-500 group-hover:text-[#0BAE7A] group-hover:translate-x-1 transition-all"
                  >
                    <path
                      d="M3 8h10m0 0L9 4m4 4l-4 4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </Link>
            ))}
          </nav>

          {/* Bottom CTA */}
          <div
            className="pb-10 transition-all duration-500"
            style={{
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? "translateY(0)" : "translateY(20px)",
              transitionDelay: menuOpen ? "500ms" : "0ms",
            }}
          >
            <a
              href="https://wa.me/27686260354"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full font-display font-medium text-sm text-white rounded-[6px] px-7 py-4 transition-colors hover:brightness-110"
              style={{ backgroundColor: "#20D362" }}
            >
              <Image
                src="/images/whatsapp icon.svg"
                alt=""
                width={16}
                height={16}
                className="h-4 w-4 brightness-0 invert"
              />
              Start a conversation
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
