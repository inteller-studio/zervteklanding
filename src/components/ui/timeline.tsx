"use client";

import {
  useScroll,
  useTransform,
  motion,
  useMotionValueEvent,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  description: string;
}

// Animated text - word by word
const AnimatedText = ({ text, isActive }: { text: string; isActive: boolean }) => {
  const words = text.split(" ");

  return (
    <p className="text-on-surface-variant text-base md:text-lg">
      {words.map((word, index) => (
        <motion.span
          key={index}
          className="inline-block mr-[0.25em]"
          initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
          animate={
            isActive
              ? { opacity: 1, y: 0, filter: "blur(0px)" }
              : { opacity: 0.3, y: 0, filter: "blur(0px)" }
          }
          transition={{
            duration: 0.3,
            delay: isActive ? index * 0.03 : 0,
            ease: "easeOut",
          }}
        >
          {word}
        </motion.span>
      ))}
    </p>
  );
};

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  // Update active index based on scroll progress
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const newIndex = Math.min(
      Math.floor(latest * data.length),
      data.length - 1
    );
    if (newIndex >= 0) {
      setActiveIndex(newIndex);
    }
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);

  return (
    <div className="w-full bg-surface font-sans" ref={containerRef}>
      <div className="relative max-w-7xl mx-auto px-4 md:px-10">
        {/* Sticky title on the left */}
        <div className="hidden md:block sticky top-[40vh] float-left w-56 lg:w-80 z-10 pr-8">
          <motion.h3
            key={activeIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="text-2xl lg:text-4xl font-bold text-primary"
          >
            {data[activeIndex]?.title}
          </motion.h3>
        </div>

        {/* Timeline items */}
        <div ref={contentRef} className="md:ml-64 lg:ml-96 relative pb-10">
          {/* Timeline line */}
          <div
            className="absolute left-0 top-0 w-[2px] bg-outline-variant/30"
            style={{ height: "100%" }}
          >
            <motion.div
              style={{ height: heightTransform }}
              className="w-[2px] bg-gradient-to-b from-primary to-primary-light rounded-full"
            />
          </div>

          {data.map((item, index) => (
            <div
              key={index}
              className="relative pl-8 pb-20 md:pb-32"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-1 -translate-x-1/2 h-4 w-4 rounded-full bg-surface border-2 border-primary z-10">
                <motion.div
                  className="absolute inset-1 rounded-full bg-primary"
                  animate={{ scale: activeIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.2 }}
                />
              </div>

              {/* Mobile title */}
              <h3 className="md:hidden text-xl mb-3 font-bold text-primary">
                {item.title}
              </h3>

              {/* Animated text content */}
              <AnimatedText text={item.description} isActive={activeIndex === index} />
            </div>
          ))}
        </div>

        {/* Clear float */}
        <div className="clear-both" />
      </div>
    </div>
  );
};
