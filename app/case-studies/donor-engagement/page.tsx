import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CaseStudyLayout from "../../components/CaseStudyLayout";

export default function DonorEngagementCaseStudy() {
  return (
    <>
    <Header />
    <CaseStudyLayout
      tag="Nonprofit"
      title="Donor Engagement System"
      subtitle="A unified CRM connecting WhatsApp, agentic calls, email, and payment flows - ensuring no donor is forgotten."
      meta={[
        { label: "Sector", value: "Nonprofit" },
        { label: "Location", value: "South Africa" },
        { label: "Channels", value: "WhatsApp · Email · Voice · Payments" },
      ]}
      stats={[
        { value: "6876", label: "Interactions tracked" },
        { value: "1", prefix: "+£", suffix: "M", label: "Donations monitored", countUpIn100ks: true },
        { value: "200", prefix: "+£", suffix: "k", label: "Abandoned donations recovered in 3 weeks" },
        { value: "33", suffix: "%", label: "Abandoned donations recovered" },
      ]}
      overview="A leading nonprofit in South Africa relied on manual donor tracking across multiple channels. As donation volume grew, conversations, follow-ups, and payment outcomes became disconnected. Sagentics designed and shipped an integrated donor engagement system that connects every interaction into one CRM - from first donation through long-term support."
      sections={[
        {
          heading: "The Challenge",
          content: (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Donor conversations lived in silos - WhatsApp threads, inboxes, spreadsheets, and call notes",
                  "Payment outcomes were not consistently tied back to the person and the conversation",
                  "Abandoned donations were difficult to detect, and even harder to recover",
                  "Staff had no unified timeline of donor history, which slowed support and reduced personalisation",
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3 rounded-xl border border-neutral-100 bg-white p-5">
                    <span className="shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-red-400" />
                    <p className="text-sm">{point}</p>
                  </div>
                ))}
              </div>
              <p className="mt-4">
                The result: missed opportunities to re-engage donors at the right moment, slow responses after donations, and limited ability to run consistent donor journeys over time.
              </p>
            </>
          ),
        },
        {
          heading: "The Solution",
          content: (
            <>
              <p>A unified donor engagement operating system built around five pillars:</p>
              <div className="flex flex-col gap-3 mt-4">
                {[
                  { num: "01", title: "Identity and timeline unification", desc: "Every touchpoint maps to a single donor record - messages, calls, emails, donation events, and outcomes." },
                  { num: "02", title: "CRM as the source of truth", desc: "All interactions stored with deal tracking, statuses, and next actions so the team always knows what to do next." },
                  { num: "03", title: "Payment flow monitoring", desc: "Donation attempts and payments are monitored, matched to donors, and surfaced in dashboards." },
                  { num: "04", title: "Automation-driven engagement", desc: "High-value moments handled automatically, with human intervention when needed." },
                  { num: "05", title: "Multi-channel execution", desc: "WhatsApp, email, and agentic calls orchestrated as one journey with consistent context flowing back to the CRM." },
                ].map((pillar) => (
                  <div key={pillar.num} className="flex items-start gap-4 rounded-xl border border-neutral-100 bg-white p-6">
                    <span className="font-display font-bold text-lg text-[#1b9e4b] shrink-0">{pillar.num}</span>
                    <div>
                      <p className="font-display font-semibold text-neutral-900">{pillar.title}</p>
                      <p className="text-sm mt-1">{pillar.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ),
        },
        {
          heading: "Key Automations Delivered",
          content: (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { name: "Thank you messages", desc: "Personalised messages within 30 minutes of a donation. Triggered on successful payment, logged automatically in the CRM." },
                { name: "Impact updates", desc: "Scheduled messages at 40 days, 6 months, and 1 year. Each update recorded and linked to the donor timeline." },
                { name: "Abandoned donation recovery", desc: "Detects incomplete payment flows, creates a recovery opportunity in the CRM, then runs sequences across WhatsApp, email, and agentic calls." },
                { name: "Deal tracking", desc: "Donors and donation opportunities tracked with clear statuses, ownership, and next steps. Staff pick up any conversation with full context." },
              ].map((auto) => (
                <div key={auto.name} className="rounded-xl border border-neutral-100 bg-white p-6">
                  <p className="font-display font-semibold text-neutral-900 mb-2">{auto.name}</p>
                  <p className="text-sm">{auto.desc}</p>
                </div>
              ))}
            </div>
          ),
        },
        {
          heading: "What Changed",
          content: (
            <ul className="space-y-2">
              <li className="flex items-start gap-2"><span className="shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-neutral-400" />The team moved from manual chasing to a system that surfaces priorities automatically.</li>
              <li className="flex items-start gap-2"><span className="shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-neutral-400" />Donors received faster, more consistent communication.</li>
              <li className="flex items-start gap-2"><span className="shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-neutral-400" />Leadership gained visibility into engagement, recovery performance, and pipeline health.</li>
              <li className="flex items-start gap-2"><span className="shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-neutral-400" />Recovery became a repeatable process, not an occasional effort.</li>
              <li className="flex items-start gap-2"><span className="shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-neutral-400" /><strong className="text-neutral-900">17% increase</strong> in donor engagement across all channels.</li>
            </ul>
          ),
        },
        {
          heading: "Why It Worked",
          content: (
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-3">
                <span className="shrink-0 w-2 h-2 mt-2 rounded-full bg-emerald-400" />
                <p><strong className="text-neutral-900">Single timeline per donor</strong> removed confusion and reduced response time.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="shrink-0 w-2 h-2 mt-2 rounded-full bg-emerald-400" />
                <p><strong className="text-neutral-900">Automation at high-leverage moments</strong> improved consistency without increasing workload.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="shrink-0 w-2 h-2 mt-2 rounded-full bg-emerald-400" />
                <p><strong className="text-neutral-900">Clear ownership and next actions</strong> kept the team aligned across channels.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="shrink-0 w-2 h-2 mt-2 rounded-full bg-emerald-400" />
                <p><strong className="text-neutral-900">Measurement-driven iteration</strong> ensured each release improved real outcomes.</p>
              </div>
            </div>
          ),
        },
      ]}
      closingText="The organisation shifted from scattered manual processes to a unified, automated system that ensures no donor is forgotten. They now recover thousands in lost donations while building stronger, more engaged relationships with supporters. When every interaction matters, automation doesn't replace people - it enables them to connect better."
    />
    <Footer />
    </>
  );
}
