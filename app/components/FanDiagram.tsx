"use client";

import { useEffect, useRef, useState } from "react";

const LINE_COUNT = 14;
const START_COLOR = "#0BAE7A";
const END_COLOR = "#EE5A3D";
const GRAY = "#D4D4D4";

const W = 560;
const H = 700;
const ORIGIN_X = 10;
const ORIGIN_Y = H * 0.45;

const PATH_LEN = 1200;
const CYCLE_DURATION = 6400;

function lerpColor(a: string, b: string, t: number): string {
  const ah = parseInt(a.slice(1), 16);
  const bh = parseInt(b.slice(1), 16);
  const ar = (ah >> 16) & 0xff, ag = (ah >> 8) & 0xff, ab = ah & 0xff;
  const br = (bh >> 16) & 0xff, bg = (bh >> 8) & 0xff, bb = bh & 0xff;
  const rr = Math.round(ar + (br - ar) * t);
  const rg = Math.round(ag + (bg - ag) * t);
  const rb = Math.round(ab + (bb - ab) * t);
  return `#${((rr << 16) | (rg << 8) | rb).toString(16).padStart(6, "0")}`;
}

interface CurveConfig {
  endY: number;
  color: string;
}

function buildCurves(): CurveConfig[] {
  const curves: CurveConfig[] = [];
  const topY = H * 0.0;
  const bottomY = H * 1.0;
  const spread = bottomY - topY;

  for (let i = 0; i < LINE_COUNT; i++) {
    const t = i / (LINE_COUNT - 1);
    curves.push({
      endY: topY + t * spread,
      color: lerpColor(START_COLOR, END_COLOR, t),
    });
  }
  return curves;
}

function curvePath(endY: number): string {
  const endX = W;
  const dy = endY - ORIGIN_Y;

  const cp1x = ORIGIN_X + (W - ORIGIN_X) * 0.48;
  const cp1y = ORIGIN_Y + dy * 0.01;
  const cp2x = ORIGIN_X + (W - ORIGIN_X) * 0.72;
  const cp2y = ORIGIN_Y + dy * 0.42;

  return `M ${ORIGIN_X} ${ORIGIN_Y} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${endX} ${endY}`;
}

const curves = buildCurves();

export default function FanDiagram() {
  const svgRef = useRef<SVGSVGElement>(null);
  const [offset, setOffset] = useState(PATH_LEN);
  const rafRef = useRef<number>(0);
  const startedRef = useRef(false);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !startedRef.current) {
          startedRef.current = true;
          observer.disconnect();

          const startTime = performance.now();

          const tick = (now: number) => {
            const elapsed = now - startTime;
            const t = (elapsed % CYCLE_DURATION) / CYCLE_DURATION;
            setOffset(PATH_LEN - t * 2 * PATH_LEN);
            rafRef.current = requestAnimationFrame(tick);
          };

          rafRef.current = requestAnimationFrame(tick);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(svg);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <svg
      ref={svgRef}
      viewBox={`0 0 ${W} ${H}`}
      className="w-full h-auto"
      preserveAspectRatio="xMinYMid meet"
    >
      <defs>
        {curves.map((curve, i) => {
          const id = `fan-grad-${i}`;
          return (
            <linearGradient key={id} id={id} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={START_COLOR} />
              <stop offset="40%" stopColor={lerpColor(START_COLOR, curve.color, 0.5)} />
              <stop offset="100%" stopColor={curve.color} />
            </linearGradient>
          );
        })}
      </defs>

      {/* Gray base lines (always visible) */}
      {curves.map((curve, i) => (
        <path
          key={`gray-${i}`}
          d={curvePath(curve.endY)}
          fill="none"
          stroke={GRAY}
          strokeWidth={1.8}
          strokeLinecap="round"
          opacity={0.5}
        />
      ))}

      {/* Colored overlay lines (animated) */}
      {curves.map((curve, i) => {
        const d = curvePath(curve.endY);

        return (
          <path
            key={`color-${i}`}
            d={d}
            fill="none"
            stroke={`url(#fan-grad-${i})`}
            strokeWidth={1.8}
            strokeLinecap="round"
            strokeDasharray={PATH_LEN}
            strokeDashoffset={offset}
          />
        );
      })}
    </svg>
  );
}
