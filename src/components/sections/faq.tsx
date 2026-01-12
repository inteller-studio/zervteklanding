"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/container";
import { IconChevronDown } from "@tabler/icons-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "Why choose ZervTek to import from Japan?",
    answer:
      "ZervTek offers over 10 years of experience in Japanese vehicle imports, access to 100+ auctions across Japan, transparent pricing with no hidden fees, and dedicated one-on-one customer service. We handle everything from bidding to shipping, making the import process seamless and stress-free.",
  },
  {
    question: "Why buy from the Japanese auto auctions?",
    answer:
      "Japanese auto auctions offer access to a massive selection of high-quality vehicles at competitive prices. Japan's strict vehicle inspection standards mean cars are well-maintained. You'll find rare JDM models, low-mileage vehicles, and excellent condition cars that aren't available in local markets.",
  },
  {
    question: "How do I get started?",
    answer:
      "Getting started is easy! Simply contact us via WhatsApp or our website to discuss your requirements. We'll help you understand the process, set up your account, and guide you through placing your first bid. A refundable security deposit activates your bidding power.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 md:py-28 bg-surface">
      <Container size="md">
        {/* MD3 Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            Frequently asked questions
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-on-surface">
            Everything you need to know about{" "}
            <span className="text-primary">our services</span>
          </h2>
          {/* MD3 Decorative accent */}
          <div className="flex items-center justify-center gap-2 mt-6">
            <div className="h-1 w-8 bg-primary/30 rounded-full" />
            <div className="h-1 w-16 bg-primary rounded-full" />
            <div className="h-1 w-8 bg-primary/30 rounded-full" />
          </div>
        </motion.div>

        {/* MD3 Accordion */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className={cn(
                  "rounded-2xl overflow-hidden transition-all duration-300 border",
                  isOpen
                    ? "bg-white border-primary/20 shadow-lg"
                    : "bg-white/80 border-black/5 hover:bg-white hover:shadow-md"
                )}
              >
                {/* MD3 List Item Header */}
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-6 md:p-7 text-left group"
                >
                  {/* Question Number + Text */}
                  <div className="flex items-start gap-4 pr-4">
                    <span
                      className={cn(
                        "flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors duration-300",
                        isOpen
                          ? "bg-primary text-primary-foreground"
                          : "bg-primary/10 text-primary"
                      )}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={cn(
                        "text-lg md:text-xl font-semibold transition-colors duration-300 leading-snug",
                        isOpen ? "text-primary" : "text-on-surface"
                      )}
                    >
                      {faq.question}
                    </span>
                  </div>

                  {/* MD3 Icon Button - Chevron with rotation */}
                  <div
                    className={cn(
                      "flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300",
                      isOpen
                        ? "bg-primary text-white"
                        : "bg-black/5 text-on-surface-variant group-hover:bg-primary/10 group-hover:text-primary"
                    )}
                  >
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <IconChevronDown className="w-6 h-6" />
                    </motion.div>
                  </div>
                </button>

                {/* MD3 Expandable Content */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 md:px-7 pb-7">
                        {/* Divider */}
                        <div className="h-px bg-black/10 mb-5 ml-12" />
                        {/* Answer with proper indentation */}
                        <div className="ml-12">
                          <p className="text-on-surface-variant text-base md:text-lg leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* CTA below FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-on-surface-variant mb-4">
            Still have questions?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-primary text-primary-foreground font-semibold shadow-md hover:shadow-lg hover:bg-primary/90 transition-all duration-300"
          >
            Contact Us
          </a>
        </motion.div>
      </Container>
    </section>
  );
}
