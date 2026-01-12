"use client";

import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

// Register GSAP plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface TimelineStep {
  title: string;
  description: string;
}

interface HorizontalTimelineProps {
  steps: TimelineStep[];
  className?: string;
}

export function HorizontalTimeline({ steps, className }: HorizontalTimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const trackProgressRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const nodesRef = useRef<(HTMLDivElement | null)[]>([]);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Desktop: Horizontal pinned scroll animation
      mm.add("(min-width: 1024px)", () => {
        const cards = cardsContainerRef.current;
        const section = sectionRef.current;
        if (!cards || !section) return;

        // Calculate scroll distance
        const totalWidth = cards.scrollWidth;
        const viewportWidth = window.innerWidth;
        const scrollDistance = totalWidth - viewportWidth + 200;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: `+=${scrollDistance * 1.5}`,
            pin: true,
            scrub: 1,
            anticipatePin: 1,
            onUpdate: (self) => {
              const progress = self.progress;
              const newIndex = Math.min(
                Math.floor(progress * steps.length),
                steps.length - 1
              );
              setActiveIndex(newIndex);
            },
          },
        });

        // Animate progress track
        tl.to(
          trackProgressRef.current,
          {
            width: "100%",
            ease: "none",
            duration: 1,
          },
          0
        );

        // Animate cards container sliding left
        tl.to(
          cards,
          {
            x: -scrollDistance,
            ease: "none",
            duration: 1,
          },
          0
        );

        // Animate nodes
        nodesRef.current.forEach((node, i) => {
          if (node) {
            const progress = i / (steps.length - 1);
            tl.to(
              node,
              {
                scale: 1.3,
                duration: 0.1,
              },
              progress
            );
            tl.to(
              node,
              {
                scale: 1,
                duration: 0.1,
              },
              progress + 0.15
            );
          }
        });

        // Animate cards
        cardsRef.current.forEach((card, i) => {
          if (card) {
            gsap.fromTo(
              card,
              { y: 30, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 0.5,
                delay: i * 0.1,
                scrollTrigger: {
                  trigger: section,
                  start: "top 80%",
                  toggleActions: "play none none none",
                },
              }
            );
          }
        });

        return () => {
          tl.kill();
          ScrollTrigger.getAll().forEach((st) => st.kill());
        };
      });

      // Mobile/Tablet: Vertical stagger animation
      mm.add("(max-width: 1023px)", () => {
        cardsRef.current.forEach((card, i) => {
          if (card) {
            gsap.fromTo(
              card,
              { y: 40, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 0.6,
                delay: i * 0.1,
                scrollTrigger: {
                  trigger: card,
                  start: "top 85%",
                  toggleActions: "play none none none",
                },
              }
            );
          }
        });
      });

      return () => mm.revert();
    }, containerRef);

    return () => ctx.revert();
  }, [steps.length]);

  return (
    <div ref={containerRef} className={cn("relative", className)}>
      {/* Desktop Layout */}
      <section
        ref={sectionRef}
        className="hidden lg:flex flex-col justify-center min-h-screen overflow-hidden"
      >
        {/* Timeline Track */}
        <div className="relative w-full px-16 mb-8">
          {/* Background track */}
          <div className="absolute left-16 right-16 h-1 bg-outline-variant rounded-full top-1/2 -translate-y-1/2" />

          {/* Progress track */}
          <div
            ref={trackProgressRef}
            className="absolute left-16 h-1 bg-primary rounded-full top-1/2 -translate-y-1/2 shadow-[0_0_20px_rgba(250,121,33,0.4)]"
            style={{ width: "0%" }}
          />

          {/* Timeline Nodes */}
          <div className="relative flex justify-between items-center py-4">
            {steps.map((_, index) => (
              <div
                key={index}
                ref={(el) => {
                  nodesRef.current[index] = el;
                }}
                className={cn(
                  "relative z-10 w-5 h-5 rounded-full transition-all duration-300",
                  "border-2",
                  index <= activeIndex
                    ? "bg-primary border-primary shadow-[0_0_0_4px_rgba(250,121,33,0.2),0_0_20px_rgba(250,121,33,0.4)]"
                    : "bg-surface-container-high border-outline-variant"
                )}
              >
                {/* Pulse animation for active node */}
                {index === activeIndex && (
                  <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-30" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Cards Container */}
        <div className="relative overflow-visible px-16">
          <div
            ref={cardsContainerRef}
            className="flex gap-8"
          >
            {steps.map((step, index) => (
              <div
                key={index}
                ref={(el) => {
                  cardsRef.current[index] = el;
                }}
                className={cn(
                  "flex-shrink-0 w-[320px] p-6",
                  "rounded-xl",
                  "bg-gradient-to-br from-surface-container-low to-surface-container",
                  "shadow-[0_1px_2px_0_rgb(0_0_0/0.3),0_2px_6px_2px_rgb(0_0_0/0.15)]",
                  "hover:shadow-[0_2px_3px_0_rgb(0_0_0/0.3),0_6px_10px_4px_rgb(0_0_0/0.15)]",
                  "transition-all duration-300",
                  "hover:-translate-y-2",
                  "group",
                  index <= activeIndex && "ring-1 ring-primary/20"
                )}
              >
                {/* Step number badge */}
                <div
                  className={cn(
                    "w-12 h-12 rounded-lg flex items-center justify-center mb-5",
                    "transition-all duration-300",
                    index <= activeIndex
                      ? "bg-primary text-primary-foreground"
                      : "bg-primary-container text-on-primary-container"
                  )}
                >
                  <span className="font-display font-bold text-lg">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-bold text-on-surface mb-3 group-hover:text-primary transition-colors">
                  {step.title}
                </h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  {step.description}
                </p>

                {/* Decorative corner accent */}
                <div
                  className={cn(
                    "absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                    "bg-gradient-to-bl from-primary/10 to-transparent rounded-tr-xl"
                  )}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Progress indicator dots */}
        <div className="flex justify-center gap-2 mt-12">
          {steps.map((_, index) => (
            <div
              key={index}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                index <= activeIndex
                  ? "w-8 bg-primary"
                  : "w-2 bg-outline-variant"
              )}
            />
          ))}
        </div>
      </section>

      {/* Mobile/Tablet Layout */}
      <div className="lg:hidden px-6 py-12">
        <div className="relative max-w-lg mx-auto">
          {/* Vertical connecting line */}
          <div className="absolute left-[22px] top-8 bottom-8 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-outline-variant" />

          {/* Steps */}
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div
                key={index}
                ref={(el) => {
                  cardsRef.current[index] = el;
                }}
                className="relative flex gap-6"
              >
                {/* Node */}
                <div className="relative z-10 flex-shrink-0">
                  <div
                    className={cn(
                      "w-11 h-11 rounded-full flex items-center justify-center",
                      "border-2 transition-all duration-300",
                      "bg-primary border-primary text-primary-foreground",
                      "shadow-[0_0_0_4px_var(--surface),0_0_20px_rgba(250,121,33,0.3)]"
                    )}
                  >
                    <span className="font-display font-bold text-sm">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>

                {/* Card */}
                <div
                  className={cn(
                    "flex-1 p-5 rounded-xl",
                    "bg-gradient-to-br from-surface-container-low to-surface-container",
                    "shadow-[0_1px_2px_0_rgb(0_0_0/0.3),0_1px_3px_1px_rgb(0_0_0/0.15)]"
                  )}
                >
                  <h3 className="font-display text-lg font-bold text-on-surface mb-2">
                    {step.title}
                  </h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
