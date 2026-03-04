import Image from "next/image";
import AnimatedHeading from "./AnimatedHeading";
import AnimatedCard from "./AnimatedCard";

const cards = [
  {
    graphic: "/images/design graphic.svg",
    title: "Design",
    description:
      "We translate business complexity into clear, implementable AI systems.",
  },
  {
    graphic: "/images/automation graphic.svg",
    title: "Automation",
    description:
      "We integrate AI into real workflows, not isolated tools.",
  },
  {
    graphic: "/images/communication graphic.svg",
    title: "Communication",
    description:
      "We build conversational systems that operate as natural extensions of your business.",
  },
];

export default function TechStack() {
  return (
    <section id="our-method" className="w-full pt-24 md:pt-32 pb-12 md:pb-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <AnimatedHeading
          text={"Reimagining your technology\nstack with AI"}
          className="font-display text-[2rem] md:text-[2.75rem] lg:text-[3.25rem] font-medium leading-[1.15] tracking-tight bg-clip-text text-transparent"
          style={{
            backgroundImage:
              "linear-gradient(to left, #111111 0%, #075656 60%, #01D2A5 85%)",
          }}
        />

        {/* Subtitle */}
        <AnimatedHeading
          as="p"
          text="How Sagentics Studio approaches it differently"
          className="mt-5 text-sm md:text-base text-[#3E3E3E]"
        />

        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4">
          {cards.map((card, idx) => (
            <AnimatedCard
              key={card.title}
              className="flex flex-col rounded-xl bg-white border border-neutral-100 shadow-sm overflow-hidden"
              delay={idx * 150}
            >
              <div className="p-4">
                <Image
                  src={card.graphic}
                  alt={card.title}
                  width={320}
                  height={240}
                  className="w-full h-auto object-contain"
                />
              </div>

              <div
                className={`text-center ${
                  card.title === "Communication"
                    ? "px-10 py-4 pt-3"
                    : "px-16 py-6 pt-4"
                }`}
              >
                <h3 className="font-display font-semibold text-3xl text-neutral-900">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm text-[#3E3E3E] leading-relaxed">
                  {card.description}
                </p>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}
