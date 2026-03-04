"use client";

import Image from "next/image";
import AnimatedHeading from "./AnimatedHeading";

const scaffolds = [
  {
    icon: "/images/communications agent icon.svg",
    image: "/images/communications agent image.png",
    title: "Communication agents",
    description:
      "Deploy engagement agents to triage and engage 24/7 across email, phone and messaging to support your inbound requests",
  },
  {
    icon: "/images/ai ecommerce stack icon.svg",
    image: "/images/ai ecommerce stack image.png",
    title: "AI E-commerce stack",
    description:
      "Re-imagine an ecommerce experience that happens across a website, and communications channels like phone and WhatsApp",
  },
  {
    icon: "/images/fundraising stack icon.svg",
    image: "/images/fundraising stack image.png",
    title: "Fundraising stack",
    description:
      "Enable automated outbound, conversation, nudging and payment acceptance to raise money for a cause",
  },
];

const STICKY_TOP_START = 100;
const STICKY_TOP_INCREMENT = 30;

export default function Scaffolds() {
  return (
    <section id="our-scaffolds" className="w-full pt-12 md:pt-16 pb-12 md:pb-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <AnimatedHeading
          text="Our scaffolds"
          className="font-display text-[2rem] md:text-[2.75rem] lg:text-[3.25rem] font-medium leading-[1.15] tracking-tight text-center bg-clip-text text-transparent"
          style={{
            backgroundImage:
              "linear-gradient(to right, #111111 0%, #075656 50%, #01D2A5 70%)",
          }}
        />

        <AnimatedHeading
          as="p"
          text="Modular building blocks for the modern digital enterprise"
          className="mt-5 text-sm md:text-base text-[#3E3E3E] text-center"
        />

        <div className="mt-16 flex flex-col gap-6">
          {scaffolds.map((scaffold, idx) => (
            <div
              key={scaffold.title}
              className="sticky"
              style={{
                top: `${STICKY_TOP_START + idx * STICKY_TOP_INCREMENT}px`,
                zIndex: idx + 1,
              }}
            >
              <div
                className="flex flex-col md:flex-row items-stretch rounded-2xl bg-white border border-neutral-100 shadow-lg overflow-hidden"
              >
                <div className="flex flex-col justify-center p-10 md:p-14 lg:p-16 md:w-1/2">
                  <Image
                    src={scaffold.icon}
                    alt=""
                    width={56}
                    height={56}
                    className="w-14 h-14 mb-6"
                  />
                  <h3 className="font-display font-semibold text-2xl md:text-3xl text-neutral-900">
                    {scaffold.title}
                  </h3>
                  <p className="mt-4 text-sm md:text-base text-[#3E3E3E] leading-relaxed max-w-md">
                    {scaffold.description}
                  </p>
                </div>

                <div className="md:w-1/2 flex items-center justify-center p-6 md:p-8">
                  <div className="w-full h-full min-h-[240px] rounded-xl overflow-hidden relative">
                    <Image
                      src={scaffold.image}
                      alt={scaffold.title}
                      width={560}
                      height={400}
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
