"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { content } from "@/config/content";
import { IconLanguage, IconSearch, IconArrowRight } from "@tabler/icons-react";

const iconMap = {
  translate: IconLanguage,
  search: IconSearch,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

export function ServicesDetail() {
  const { servicesDetail } = content;

  return (
    <section id="why-us" className="py-16 md:py-24 bg-gradient-to-b from-surface to-surface-container">
      <Container>
        {/* Enhanced Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-4">
              {servicesDetail.title}
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-on-surface mb-4">
              {servicesDetail.subtitle.split(" ").map((word, i) => (
                <span key={i}>
                  {word === "Confidence" ? (
                    <span className="text-primary">{word}</span>
                  ) : (
                    word
                  )}{" "}
                </span>
              ))}
            </h2>
            {/* Decorative accent line */}
            <div className="flex items-center justify-center gap-2 mt-6">
              <div className="h-1 w-8 bg-primary/30 rounded-full" />
              <div className="h-1 w-16 bg-primary rounded-full" />
              <div className="h-1 w-8 bg-primary/30 rounded-full" />
            </div>
          </motion.div>
        </div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          {servicesDetail.items.map((item, index) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap];

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative"
              >
                {/* Card with enhanced styling */}
                <div className="relative h-full p-8 md:p-10 rounded-3xl bg-white/80 backdrop-blur-sm border border-black/5 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-12px_rgba(250,121,33,0.25)] overflow-hidden">
                  {/* Background gradient accent */}
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-primary/10 via-primary/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative flex flex-col h-full">
                    {/* Icon with glow effect */}
                    <div className="relative mb-8">
                      <div className="absolute inset-0 w-20 h-20 bg-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                        <Icon className="w-10 h-10 text-white" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl md:text-3xl font-bold text-on-surface mb-4 group-hover:text-primary transition-colors duration-300">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-on-surface-variant text-base md:text-lg leading-relaxed mb-4">
                      {item.description}
                    </p>

                    {/* Details */}
                    <p className="text-on-surface-variant/70 text-sm md:text-base leading-relaxed mb-8 flex-grow">
                      {item.details}
                    </p>

                    {/* Learn More Button with enhanced animation */}
                    <Link
                      href={item.href}
                      className="inline-flex items-center gap-2 text-primary font-semibold group/link transition-all hover:gap-3"
                    >
                      <span className="relative">
                        Learn more
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover/link:w-full" />
                      </span>
                      <IconArrowRight className="w-5 h-5 transition-transform duration-300 group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
