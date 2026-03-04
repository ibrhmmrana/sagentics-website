import type { Metadata, Viewport } from "next";
import { Host_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "./components/SmoothScroll";

const hostGrotesk = Host_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-host-grotesk",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const siteName = "Sagentics";
const tagline =
  "We design AI systems that deliver the essence of your business at lower costs and increased productivity.";
const defaultTitle = `${siteName} | AI system design and implementation`;
const defaultDescription =
  "Sagentics turns AI curiosity into strategic implementation. We design and build AI systems for donor engagement, ecommerce, and SaaS: conversational automation, integration architecture, and continuous optimisation.";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://sagentics.ai"),
  title: {
    default: defaultTitle,
    template: `%s | ${siteName}`,
  },
  description: defaultDescription,
  keywords: [
    "AI system design",
    "conversational AI",
    "donor engagement",
    "ecommerce AI",
    "WhatsApp automation",
    "chatbots",
    "agent-based systems",
    "AI implementation",
  ],
  authors: [{ name: siteName }],
  creator: siteName,
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName,
    title: defaultTitle,
    description: defaultDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/images/sagentics favicon.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#F9FBFA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${hostGrotesk.variable} ${inter.variable} antialiased`}
    >
      <body className="min-h-screen font-sans">
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
