"use client";

import { useEffect, useRef, useState } from "react";

interface AnimatedHeadingProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  as?: "h1" | "h2" | "h3" | "p";
}

interface WordMeasurement {
  offsetX: number;
}

export default function AnimatedHeading({
  text,
  className = "",
  style,
  as: Tag = "h2",
}: AnimatedHeadingProps) {
  const headingRef = useRef<HTMLElement>(null);
  const wordRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const [totalWidth, setTotalWidth] = useState(0);
  const [wordOffsets, setWordOffsets] = useState<WordMeasurement[]>([]);

  useEffect(() => {
    const measure = () => {
      const heading = headingRef.current;
      if (!heading) return;

      const headingRect = heading.getBoundingClientRect();
      setTotalWidth(headingRect.width);

      const offsets = wordRefs.current.map((el) => {
        if (!el) return { offsetX: 0 };
        const wordRect = el.getBoundingClientRect();
        return { offsetX: wordRect.left - headingRect.left };
      });
      setWordOffsets(offsets);
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [text]);

  useEffect(() => {
    const el = headingRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const gradientBg = style?.backgroundImage;
  const cleanedClassName = className
    .replace(/bg-clip-text/g, "")
    .replace(/text-transparent/g, "")
    .trim();

  const lines = text.split("\n");
  let wordIndex = 0;

  return (
    <Tag
      ref={headingRef as React.Ref<HTMLHeadingElement>}
      className={cleanedClassName}
      style={{ ...style, backgroundImage: undefined }}
    >
      {lines.map((line, lineIdx) => (
        <span key={lineIdx}>
          {lineIdx > 0 && <br />}
          {line.split(" ").map((word) => {
            const i = wordIndex++;
            const capturedIndex = i;
            const hasGradient = !!gradientBg;
            return (
              <span
                key={`${word}-${i}`}
                ref={(el) => {
                  wordRefs.current[capturedIndex] = el;
                }}
                className={`inline-block transition-[filter,transform] duration-700 ease-out ${
                  hasGradient ? "bg-clip-text text-transparent" : ""
                }`}
                style={{
                  ...(hasGradient && {
                    backgroundImage: gradientBg,
                    backgroundSize:
                      totalWidth > 0 ? `${totalWidth}px 1em` : undefined,
                    backgroundPosition: wordOffsets[capturedIndex]
                      ? `-${wordOffsets[capturedIndex].offsetX}px 0`
                      : undefined,
                  }),
                  filter: isVisible ? "blur(0px)" : "blur(20px)",
                  transform: isVisible ? "translateY(0)" : "translateY(6px)",
                  transitionDelay: `${capturedIndex * 100}ms`,
                }}
              >
                {word}&nbsp;
              </span>
            );
          })}
        </span>
      ))}
    </Tag>
  );
}
