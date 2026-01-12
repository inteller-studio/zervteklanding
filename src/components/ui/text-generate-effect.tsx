"use client";

import { useEffect, useRef } from "react";
import { motion, stagger, useAnimate, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
  startDelay = 0,
  triggerOnView,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
  startDelay?: number;
  triggerOnView?: boolean;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const internalIsInView = useInView(ref, { once: false, amount: 0.3 });
  const isInView = triggerOnView !== undefined ? triggerOnView : internalIsInView;
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");

  useEffect(() => {
    if (isInView) {
      const timeout = setTimeout(() => {
        animate(
          "span",
          {
            opacity: 1,
            filter: filter ? "blur(0px)" : "none",
          },
          {
            duration: duration,
            delay: stagger(0.05),
            ease: "easeOut",
          }
        );
      }, startDelay * 1000);
      return () => clearTimeout(timeout);
    } else {
      // Reset when out of view
      animate(
        "span",
        {
          opacity: 0,
          filter: filter ? "blur(10px)" : "none",
        },
        {
          duration: 0.2,
        }
      );
    }
  }, [isInView, animate, filter, duration, startDelay]);

  return (
    <div ref={ref} className={cn("", className)}>
      <motion.div
        ref={scope}
        className="text-on-surface-variant text-lg md:text-xl lg:text-2xl leading-relaxed text-center"
      >
        {wordsArray.map((word, idx) => (
          <motion.span
            key={word + idx}
            className="inline-block mr-[0.25em]"
            style={{ opacity: 0, filter: filter ? "blur(10px)" : "none" }}
          >
            {word}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
};
