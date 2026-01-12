"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import DottedMap from "dotted-map";

interface MapProps {
  dots?: Array<{
    start: { lat: number; lng: number; label?: string };
    end: { lat: number; lng: number; label?: string };
  }>;
  lineColor?: string;
  dark?: boolean;
}

export default function WorldMap({
  dots = [],
  lineColor = "#FA7921",
  dark = false,
}: MapProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const [isInView, setIsInView] = useState(false);
  const map = new DottedMap({ height: 100, grid: "diagonal" });

  const svgMap = map.getSVG({
    radius: 0.22,
    color: dark ? "#FFFFFF40" : "#00000015",
    shape: "circle",
    backgroundColor: "transparent",
  });

  const projectPoint = (lat: number, lng: number) => {
    const x = (lng + 180) * (800 / 360);
    const y = (90 - lat) * (400 / 180);
    return { x, y };
  };

  const createCurvedPath = (
    start: { x: number; y: number },
    end: { x: number; y: number }
  ) => {
    const midX = (start.x + end.x) / 2;
    const midY = Math.min(start.y, end.y) - 50;
    return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.2 }
    );

    if (svgRef.current) {
      observer.observe(svgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full aspect-[2/1] rounded-lg relative font-sans">
      <img
        src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
        className="h-full w-full [mask-image:linear-gradient(to_bottom,transparent,white_10%,white_90%,transparent)] pointer-events-none select-none"
        alt="world map"
        height="495"
        width="1056"
        draggable={false}
      />
      <svg
        ref={svgRef}
        viewBox="0 0 800 400"
        className="w-full h-full absolute inset-0 pointer-events-none select-none"
      >
        <defs>
          <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={lineColor} stopOpacity="0" />
            <stop offset="5%" stopColor={lineColor} stopOpacity="0.6" />
            <stop offset="95%" stopColor={lineColor} stopOpacity="0.6" />
            <stop offset="100%" stopColor={lineColor} stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Animated paths - subtle draw effect */}
        {isInView && dots.map((dot, i) => {
          const startPoint = projectPoint(dot.start.lat, dot.start.lng);
          const endPoint = projectPoint(dot.end.lat, dot.end.lng);
          const pathD = createCurvedPath(startPoint, endPoint);

          return (
            <motion.path
              key={`path-${i}`}
              d={pathD}
              fill="none"
              stroke="url(#path-gradient)"
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.7 }}
              transition={{
                pathLength: {
                  duration: 2,
                  delay: i * 0.3,
                  ease: "easeOut",
                },
                opacity: {
                  duration: 0.5,
                  delay: i * 0.3,
                },
              }}
            />
          );
        })}

        {/* Origin point (Japan) */}
        {dots.length > 0 && (
          <g>
            <circle
              cx={projectPoint(dots[0].start.lat, dots[0].start.lng).x}
              cy={projectPoint(dots[0].start.lat, dots[0].start.lng).y}
              r="4"
              fill={lineColor}
              opacity="0.8"
            />
            <circle
              cx={projectPoint(dots[0].start.lat, dots[0].start.lng).x}
              cy={projectPoint(dots[0].start.lat, dots[0].start.lng).y}
              r="4"
              fill={lineColor}
              opacity="0.3"
            >
              <animate
                attributeName="r"
                from="4"
                to="12"
                dur="3s"
                begin="0s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                from="0.3"
                to="0"
                dur="3s"
                begin="0s"
                repeatCount="indefinite"
              />
            </circle>
          </g>
        )}

        {/* Destination points - simple dots */}
        {dots.map((dot, i) => (
          <motion.circle
            key={`end-${i}`}
            cx={projectPoint(dot.end.lat, dot.end.lng).x}
            cy={projectPoint(dot.end.lat, dot.end.lng).y}
            r="2.5"
            fill={lineColor}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{
              delay: 2 + i * 0.3,
              duration: 0.5,
            }}
          />
        ))}
      </svg>
    </div>
  );
}
