"use client";

import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll, motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  const linearGradients = [
    "linear-gradient(to bottom right, var(--primary), var(--primary-light))",
    "linear-gradient(to bottom right, var(--primary-dark), var(--primary))",
    "linear-gradient(to bottom right, var(--primary-light), var(--primary))",
    "linear-gradient(to bottom right, var(--primary), var(--primary-dark))",
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0]
  );

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  return (
    <div
      ref={ref}
      className="relative w-full px-4 sm:px-6 lg:px-8"
    >
      <div className="flex justify-between">
        {/* Left content - scrolling text */}
        <div className="w-full lg:w-1/2 lg:pr-10">
          {content.map((item, index) => (
            <div key={item.title + index} className="min-h-[60vh] flex flex-col justify-center py-10">
              <motion.h2
                initial={{ opacity: 0.3 }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                transition={{ duration: 0.3 }}
                className="text-2xl md:text-3xl font-bold text-on-surface"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0.3 }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                transition={{ duration: 0.3 }}
                className="text-lg mt-6 text-on-surface-variant"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
        </div>

        {/* Right content - sticky visual */}
        <div className="hidden lg:block lg:w-1/2">
          <div className="sticky top-32 flex items-center justify-center h-[60vh]">
            <div
              style={{ background: backgroundGradient }}
              className={cn(
                "h-72 w-full max-w-md overflow-hidden rounded-2xl transition-all duration-300",
                contentClassName
              )}
            >
              {content[activeCard].content ?? null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
