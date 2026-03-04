import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CaseStudyLayout from "../../components/CaseStudyLayout";

export default function MerchLabCaseStudy() {
  return (
    <>
    <Header />
    <CaseStudyLayout
      tag="E-commerce"
      title="MerchLab"
      website="merchlab.io"
      subtitle="An agentic eCommerce platform with 24/7 AI support across WhatsApp, email, and voice - built to scale without adding headcount."
      meta={[
        { label: "Client", value: "MerchLab" },
        { label: "Type", value: "Agentic eCommerce Platform" },
        { label: "Channels", value: "WhatsApp · Email · Voice" },
      ]}
      overview="MerchLab is a B2B merchandise and branding company serving small and medium-sized businesses. As order volume grew, they needed enterprise-grade automation and always-on customer support without a proportional budget for support staff. Sagentics built a fully agentic platform that puts intelligent autonomous agents at the centre of key workflows."
      sections={[
        {
          heading: "The Challenge",
          content: (
            <>
              <p>
                More orders, more customer questions, and more touchpoints - WhatsApp, email, phone - without a proportional budget for support staff. Manual processes and reactive support were limiting growth.
              </p>
              <p>
                MerchLab wanted enterprise-grade automation and always-on customer support, delivered in a way that felt human when it mattered.
              </p>
            </>
          ),
        },
        {
          heading: "Unified AI Support Across Three Channels",
          content: (
            <>
              <p>
                Sagentics designed and implemented a unified AI support system that handles customer conversations on WhatsApp, email, and voice from a single shared AI engine.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
                <div className="rounded-xl border border-neutral-100 bg-white p-6">
                  <p className="font-display font-semibold text-neutral-900 mb-2">WhatsApp</p>
                  <p className="text-sm">24/7 instant replies. The AI persona &quot;Mia&quot; looks up order status, sends quotes and invoices as PDFs, tracks delivery, answers policy questions, and escalates to a human when needed.</p>
                </div>
                <div className="rounded-xl border border-neutral-100 bg-white p-6">
                  <p className="font-display font-semibold text-neutral-900 mb-2">Email</p>
                  <p className="text-sm">Incoming emails are polled, filtered, and categorised automatically. The AI drafts professional replies and sends them - including PDF attachments - with escalation as the only handover point.</p>
                </div>
                <div className="rounded-xl border border-neutral-100 bg-white p-6">
                  <p className="font-display font-semibold text-neutral-900 mb-2">Voice</p>
                  <p className="text-sm">Outbound and inbound calls handled by voice AI with the same capabilities. During a call, the system can send WhatsApp messages and documents to the customer.</p>
                </div>
              </div>
              <p className="mt-4">
                All three channels share one conversation memory and one set of capabilities: order status, quote and invoice lookup, customer account info, delivery tracking, knowledge base search, and escalate to human.
              </p>
            </>
          ),
        },
        {
          heading: "Human-in-the-Loop Where It Matters",
          content: (
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-3">
                <span className="shrink-0 w-2 h-2 mt-2 rounded-full bg-blue-400" />
                <p><strong className="text-neutral-900">Take Over</strong> - From the dashboard, staff can pause the AI and reply to the customer directly. All messages stream in real time.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="shrink-0 w-2 h-2 mt-2 rounded-full bg-emerald-400" />
                <p><strong className="text-neutral-900">Hand Back</strong> - When the issue is resolved, staff hand the conversation back to the AI, which resumes automatically.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="shrink-0 w-2 h-2 mt-2 rounded-full bg-amber-400" />
                <p><strong className="text-neutral-900">Escalation</strong> - When the AI detects it cannot help, it triggers an email to staff with conversation context for personal follow-up.</p>
              </div>
            </div>
          ),
        },
        {
          heading: "Automation Beyond Support",
          content: (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { name: "Order management", desc: "Fulfilment orchestration so orders flow through the right steps without manual triage." },
                { name: "Branding & artwork", desc: "Customers upload artwork, get auto-vectorisation, and complete branded orders in one flow." },
                { name: "Lead enrichment", desc: "Intelligent sales generation to help convert interest into orders." },
                { name: "Reporting & TAT", desc: "Performance and bottleneck visibility from conversion to delivery in one place." },
              ].map((item) => (
                <div key={item.name} className="rounded-xl border border-neutral-100 bg-white p-6">
                  <p className="font-display font-semibold text-neutral-900 mb-2">{item.name}</p>
                  <p className="text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          ),
        },
        {
          heading: "The Outcome",
          content: (
            <ul className="space-y-2">
              <li className="flex items-start gap-2"><span className="shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-neutral-400" /><strong className="text-neutral-900">24/7 support</strong> without increasing headcount.</li>
              <li className="flex items-start gap-2"><span className="shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-neutral-400" /><strong className="text-neutral-900">Single AI engine</strong> powering WhatsApp, email, and voice.</li>
              <li className="flex items-start gap-2"><span className="shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-neutral-400" /><strong className="text-neutral-900">Human control</strong> via take-over, hand-back, and escalation.</li>
              <li className="flex items-start gap-2"><span className="shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-neutral-400" /><strong className="text-neutral-900">Scalable operations</strong> - grow without adding cost at the same rate.</li>
            </ul>
          ),
        },
      ]}
      closingText="For MerchLab, Sagentics didn't just add a chatbot - we designed an agentic eCommerce platform where intelligent agents manage key workflows and support teams step in when it matters. The result is a new standard for how digital commerce can run: always on, cost-efficient, and built to scale."
    />
    <Footer />
    </>
  );
}
