import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CaseStudyLayout from "../../components/CaseStudyLayout";

export default function AntistaticCaseStudy() {
  return (
    <>
    <Header />
    <CaseStudyLayout
      tag="SaaS"
      title="Antistatic"
      website="antistatic.ai"
      subtitle="The world's first reputation-as-a-service platform - built to sell painkillers, not vitamins."
      meta={[
        { label: "Client", value: "Sagentics" },
        { label: "Product", value: "Antistatic" },
        { label: "Stack", value: "Next.js · Supabase · Stripe · Google APIs · AI" },
      ]}
      overview='Sagentics designed and built Antistatic, a "pre-POS" engine for small and medium-sized businesses. It moves beyond passive dashboards by combining 24/7 AI monitoring with a transactional "fix-it-now" model and a marketplace of local creators - turning online reputation into revenue at the till.'
      sections={[
        {
          heading: "The Challenge",
          content: (
            <>
              <p>
                Small businesses have a point of sale to take money, but they lack a systematic way to build the credibility that drives customers through the door. A competitor a kilometre away at 4.6 stars can steal walk-ins from a business stuck at 3.9.
              </p>
              <p>
                Most tools offer charts and reports. Sagentics wanted a platform that sells outcomes: detect the problem, present a clear fix, and let the owner pay to execute it in one flow.
              </p>
            </>
          ),
        },
        {
          heading: "The Solution",
          content: (
            <>
              <p>Antistatic is built around two commercial pillars:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div className="rounded-xl border border-neutral-100 bg-white p-6">
                  <p className="font-display font-semibold text-neutral-900 mb-2">Cover charge</p>
                  <p className="text-sm">A low monthly subscription that unlocks an always-on early warning system monitoring reviews, social presence, and competitors.</p>
                </div>
                <div className="rounded-xl border border-neutral-100 bg-white p-6">
                  <p className="font-display font-semibold text-neutral-900 mb-2">Real spend</p>
                  <p className="text-sm">When a critical alert fires, the owner checks out a fix - the platform dispatches vetted local creators to create authentic content and leave honest reviews.</p>
                </div>
              </div>
              <p className="mt-4">The product triages all feedback into three signal types:</p>
              <div className="flex flex-col gap-3 mt-2">
                <div className="flex items-start gap-3">
                  <span className="shrink-0 w-2 h-2 mt-2 rounded-full bg-red-400" />
                  <p><strong className="text-neutral-900">Critical signal</strong> - e.g. &quot;You just got a 1-star review.&quot; The owner is prompted to address the cause and offered a one-off purchase to bury it with new, authentic positive reviews.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="shrink-0 w-2 h-2 mt-2 rounded-full bg-amber-400" />
                  <p><strong className="text-neutral-900">Opportunity signal</strong> - e.g. &quot;Your competitor just got a 1-star review.&quot; Real-time data turns into offensive strategy to capture market share.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="shrink-0 w-2 h-2 mt-2 rounded-full bg-emerald-400" />
                  <p><strong className="text-neutral-900">Victory signal</strong> - e.g. &quot;You just hit a 4.5-star average.&quot; These close the loop, prove ROI, and validate continued spend.</p>
                </div>
              </div>
            </>
          ),
        },
        {
          heading: "What We Built",
          content: (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { name: "Dashboard", desc: "A single pane for reviews, search impressions, direction requests, calls, website clicks, and social metrics across 7–30 day windows." },
                  { name: "Reputation Hub", desc: "Centralised Google reviews inbox with AI-suggested replies (tone and length options), bulk workflows, and SMS/WhatsApp/email review requests." },
                  { name: "Competitor Radar", desc: "Watchlist with threat scoring, alerts on competitor reviews and social activity, and an Opportunities tab for offensive plays." },
                  { name: "Social Studio", desc: "Unified social presence across Instagram, Facebook, X, LinkedIn, and TikTok. AI image enhancement, caption generation, content bank, and planner." },
                  { name: "Creator Hub", desc: "Four service tiers from R200 to R2,000: ratings and reviews, UGC, social media posts, and paid media promotion - all dispatched through partner webhooks." },
                  { name: "Reports", desc: "Shareable performance reports that push owners from insight to action, mapping each section to a product module." },
                ].map((mod) => (
                  <div key={mod.name} className="rounded-xl border border-neutral-100 bg-white p-6">
                    <p className="font-display font-semibold text-neutral-900 mb-2">{mod.name}</p>
                    <p className="text-sm">{mod.desc}</p>
                  </div>
                ))}
              </div>
            </>
          ),
        },
        {
          heading: "Integrations & Infrastructure",
          content: (
            <div className="flex flex-wrap gap-2">
              {[
                "Supabase (Auth · Postgres · RLS)",
                "Stripe (Subscriptions · One-off)",
                "Google Business Profile API",
                "Google Places API",
                "OpenAI",
                "Google Gemini",
                "Apify (Social scraping)",
                "Instagram Graph API",
                "AWS SES · SNS",
                "Vercel Cron",
                "WhatsApp Flows",
              ].map((tech) => (
                <span key={tech} className="inline-block rounded-full border border-neutral-200 bg-white px-4 py-1.5 text-xs font-display font-medium text-neutral-700">
                  {tech}
                </span>
              ))}
            </div>
          ),
        },
        {
          heading: "Security & Reliability",
          content: (
            <ul className="space-y-2">
              <li className="flex items-start gap-2"><span className="shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-neutral-400" />API routes protected with auth, location ownership checks, and cost guards.</li>
              <li className="flex items-start gap-2"><span className="shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-neutral-400" />Constant-time secret comparisons and scoped service-role usage for server-side writes.</li>
              <li className="flex items-start gap-2"><span className="shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-neutral-400" />Image and caption generation with retries, timeouts, and fallback models.</li>
            </ul>
          ),
        },
      ]}
      closingText="Sagentics shipped Antistatic from concept to production: multi-tenant auth, subscription and one-off billing, several third-party APIs, AI-driven copy and imagery, and a clear commercial story. If you're looking for a partner to design and build a product that combines dashboards with transactional outcomes, this is what we do."
    />
    <Footer />
    </>
  );
}
