"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

// MD3 Icons
const Icons = {
  menu: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
  ),
  close: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
    </svg>
  ),
};

const navItems = [
  { label: "Browse Cars", href: "#services" },
  { label: "Purchase Price", href: "#pricing" },
  { label: "Shipping", href: "#shipping" },
  { label: "Help", href: "#help" },
  { label: "Company", href: "#about" },
];

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Main Header - MD3 Surface */}
      <header
        className={cn(
          "fixed top-2 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-white/80 backdrop-blur-xl shadow-sm border-b border-black/5"
            : "bg-transparent"
        )}
      >
        <Container>
          <nav className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a href="/" className="flex items-center shrink-0">
              <img
                src="/images/logo.svg"
                alt="Zervtek"
                className="h-8 md:h-10 w-auto"
              />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1 ml-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="px-4 py-2.5 text-sm font-medium rounded-full transition-all duration-200 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high"
                >
                  {item.label}
                </a>
              ))}
            </div>


            {/* Mobile Menu Button - MD3 Icon Button */}
            <button
              className={cn(
                "md:hidden w-12 h-12 rounded-full flex items-center justify-center",
                "text-on-surface-variant hover:bg-surface-container-high transition-colors",
                "relative overflow-hidden"
              )}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? Icons.close : Icons.menu}
            </button>
          </nav>
        </Container>

        {/* Mobile Menu - MD3 Navigation Drawer Style */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden overflow-hidden bg-surface-container border-t border-outline-variant"
            >
              <Container>
                <div className="py-4 space-y-1">
                  {navItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="flex items-center px-4 py-3.5 text-base font-medium text-on-surface hover:bg-surface-container-high rounded-xl transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  ))}

                </div>
              </Container>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
