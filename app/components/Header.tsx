import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Our Method", href: "#our-method" },
  { label: "Our scaffolds", href: "#our-scaffolds" },
  { label: "Core Capabilities", href: "#core-capabilities" },
  { label: "Contact Us", href: "#contact-us" },
];

export default function Header() {
  return (
    <header className="absolute left-0 right-0 top-0 z-50 w-full px-6 md:px-12 lg:px-20 pt-8 pb-5 flex items-center gap-14 md:gap-20 bg-transparent">
      <Link href="/" className="shrink-0">
        <Image
          src="/images/logo.svg"
          alt="sagentics.ai"
          width={160}
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
    </header>
  );
}
