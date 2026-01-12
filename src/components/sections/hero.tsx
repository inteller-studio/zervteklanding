"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { SparklesCore } from "@/components/ui/sparkles";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

// Icons
const Icons = {
  arrowRight: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
  ),
  play: (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M8 5v14l11-7z" />
    </svg>
  ),
};

// Carousel images
const carouselImages = [
  {
    src: "/images/hero/cars/car-1.jpeg",
    alt: "Nissan Skyline GT-R",
  },
  {
    src: "/images/hero/cars/car-2.jpeg",
    alt: "Toyota Supra MK4",
  },
  {
    src: "/images/hero/cars/car-3.jpeg",
    alt: "Mazda RX-7 FD",
  },
  {
    src: "/images/hero/cars/car-4.jpeg",
    alt: "Honda NSX",
  },
  {
    src: "/images/hero/cars/car-5.jpeg",
    alt: "Nissan 370Z",
  },
];

export function Hero() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Mobile: Full-screen hero background image */}
      <div className="absolute inset-0 lg:hidden">
        <img
          src="/images/hero/cars/car-1.jpeg"
          alt="JDM Hero"
          className="w-full h-full object-cover"
        />
        {/* Dark gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/40" />
      </div>

      {/* Desktop: Dotted glow background */}
      <div className="hidden lg:block absolute inset-0 bg-gradient-to-br from-white via-orange-50/30 to-orange-100/20" />

      {/* Desktop: Sparkles effect */}
      <div className="hidden lg:block absolute inset-0 z-[1]">
        <SparklesCore
          id="hero-sparkles"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={80}
          className="w-full h-full"
          particleColor="#FA7921"
          speed={0.5}
        />
      </div>

      {/* Desktop: Decorative blur shapes */}
      <div className="hidden lg:block absolute -top-40 -right-40 w-[800px] h-[800px] bg-gradient-to-bl from-orange-100/50 to-transparent rounded-full blur-3xl z-0" />
      <div className="hidden lg:block absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-gradient-to-tr from-primary/5 to-transparent rounded-full blur-3xl z-0" />

      {/* Text Content */}
      <div className="relative z-10 flex-1 flex items-end lg:items-center pt-14 pb-6 lg:pb-6">
        <Container>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 lg:gap-12"
          >
            {/* Left: Heading & Description */}
            <div className="lg:max-w-2xl">
              {/* Mobile badge */}
              <motion.div variants={fadeInUp} className="lg:hidden mb-4">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-md rounded-full text-xs font-medium text-white/90 border border-white/20">
                  <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  Japanese Vehicle Imports
                </span>
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="font-display text-[2rem] leading-[1.1] sm:text-[2.5rem] md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white lg:text-on-surface whitespace-nowrap"
              >
                Import Your Dream <span className="text-primary">JDM</span>
              </motion.h1>

              {/* Accent Line */}
              <motion.div variants={fadeInUp} className="mt-4 lg:mt-5 flex items-center gap-2">
                <div className="h-1 w-12 bg-primary rounded-full" />
                <div className="h-1 w-6 bg-primary/40 rounded-full" />
                <div className="h-1 w-3 bg-primary/20 rounded-full" />
              </motion.div>

              <motion.p
                variants={fadeInUp}
                className="mt-4 lg:mt-6 text-base lg:text-xl text-white/80 lg:text-on-surface-variant leading-relaxed max-w-xl"
              >
                With step-by-step guidance, we will help you to find and import the car of your choice from the Japanese domestic market and auto auctions.
              </motion.p>
            </div>

            {/* CTAs - Full width on mobile, right-aligned on desktop */}
            <motion.div variants={fadeInUp} className="flex flex-col gap-3 lg:gap-4 w-full lg:w-auto lg:items-end mt-2 lg:mt-0">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full lg:w-auto inline-flex items-center justify-center gap-2.5 h-14 px-8 text-base font-semibold text-white bg-primary rounded-full shadow-lg hover:shadow-xl hover:bg-primary/90 transition-all duration-300"
              >
                Start your journey
                {Icons.arrowRight}
              </motion.a>

              <motion.a
                href="#process"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full lg:w-auto inline-flex items-center justify-center gap-2.5 h-14 px-8 text-base font-semibold text-white lg:text-on-surface bg-white/10 lg:bg-surface border-2 border-white/30 lg:border-primary/20 rounded-full hover:border-white/50 lg:hover:border-primary/40 lg:hover:bg-primary/5 transition-all duration-300"
              >
                {Icons.play}
                See how it works
              </motion.a>
            </motion.div>
          </motion.div>
        </Container>
      </div>

      {/* Mobile: Swipe indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="lg:hidden relative z-10 pb-4 flex justify-center"
      >
        <div className="flex items-center gap-2 text-white/50 text-xs">
          <svg className="w-4 h-4 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
          <span>Scroll to explore</span>
        </div>
      </motion.div>

      {/* Desktop: Image Carousel - Bottom (Infinite scroll left to right) */}
      <div className="hidden lg:block relative z-10 pb-4 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Gradient fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

          {/* Scrolling track */}
          <div
            className={`flex gap-6 animate-scroll ${isPaused ? "pause-animation" : ""}`}
            style={{ width: "max-content" }}
          >
            {/* Double the images for seamless loop */}
            {[...carouselImages, ...carouselImages].map((image, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[360px] lg:w-[420px] group"
              >
                <div className="relative aspect-square overflow-hidden rounded-2xl shadow-lg ring-1 ring-black/5 hover:shadow-2xl transition-all duration-500">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {/* Label */}
                  <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    <span className="inline-block px-3 py-1.5 bg-white/95 backdrop-blur-sm rounded-lg text-xs font-medium text-gray-900 shadow-sm">
                      {image.alt}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
