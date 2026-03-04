import AnimatedHeading from "./AnimatedHeading";
import FanDiagram from "./FanDiagram";

const capabilities = [
  {
    number: "01.",
    title: "AI system design",
    items: ["Business process mapping", "Model selection", "Integration architecture"],
  },
  {
    number: "02.",
    title: "Conversational automation",
    items: ["WhatsApp", "Chatbots", "Agent-based systems"],
  },
  {
    number: "03.",
    title: "Implementation and optimisation",
    items: ["Deployment", "Training", "Continuous improvement"],
  },
];

export default function CoreCapabilities() {
  return (
    <section id="core-capabilities" className="w-full pt-12 md:pt-16 pb-12 md:pb-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-16">
        {/* Left – diagram with heading overlaid */}
        <div className="md:w-1/2 relative">
          <div className="mt-2 w-full">
            <FanDiagram />
          </div>

          <AnimatedHeading
            text={"Three core\ncapabilities"}
            className="absolute top-12 left-0 z-10 font-display text-[2rem] md:text-[2.75rem] lg:text-[3.25rem] font-medium leading-[1.15] tracking-tight bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(to left, #111111 0%, #075656 40%, #01D2A5 100%)",
            }}
          />
        </div>

          {/* Right – numbered list */}
          <div className="md:w-1/2 flex flex-col gap-12">
            {capabilities.map((cap) => (
              <div key={cap.number}>
                <span className="font-display font-bold text-2xl text-[#1b9e4b]">
                  {cap.number}
                </span>
                <h3 className="font-display font-semibold text-2xl md:text-3xl text-neutral-900 mt-2">
                  {cap.title}
                </h3>
                <ul className="mt-4 flex flex-col gap-2">
                  {cap.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-base text-[#3E3E3E]">
                      <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
      </div>
    </section>
  );
}
