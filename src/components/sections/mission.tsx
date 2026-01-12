"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Container } from "@/components/ui/container";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const descriptionText =
  "Connecting the world to Japanese auctions, we enable our customers to buy & import JDMs cheaper, with more options and complete transparency.";

const headingWords = [
  { text: "Zervtek", highlight: true },
  { text: "is" },
  { text: "on" },
  { text: "a" },
  { text: "mission" },
  { text: "to" },
  { text: "change" },
  { text: "the" },
  { text: "way" },
  { text: "you" },
  { text: "think" },
  { text: "about" },
  { text: "buying" },
  { text: "vehicles." },
];

export function Mission() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const isInView = useInView(headingRef, { once: false, amount: 0.3 });

  return (
    <section className="w-full py-12 lg:py-20 bg-surface">
      <Container size="lg">
        <div className="w-full flex flex-col items-center justify-center text-center space-y-10">
          {/* Mission Statement with scroll animation */}
          <h2
            ref={headingRef}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight w-full text-on-surface"
          >
            {headingWords.map((word, idx) => (
              <motion.span
                key={idx}
                className={`inline-block mr-[0.2em] ${word.highlight ? "text-primary" : ""}`}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.08,
                  ease: "easeOut",
                }}
              >
                {word.text}
              </motion.span>
            ))}
          </h2>

          {/* Text Generate Effect for Description */}
          <TextGenerateEffect
            words={descriptionText}
            className="max-w-4xl"
            duration={0.4}
            filter={true}
            startDelay={1.6}
            triggerOnView={isInView}
          />
        </div>
      </Container>
    </section>
  );
}
