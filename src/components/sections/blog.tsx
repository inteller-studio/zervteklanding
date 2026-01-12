"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { IconArrowRight, IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

const blogPosts = [
  {
    image: "/images/blog/how-to-import-jdm-australia-japan.jpg",
    category: "Countries",
    title: "How to Import a JDM to Australia from Japan",
    author: "Avishka Chandeepa",
    date: "21 November 2025",
    slug: "how-to-import-jdm-australia-japan",
  },
  {
    image: "/images/blog/top-10-economical-japanese-cars-australia.jpg",
    category: "Vehicles",
    title: "Top 10 Economical Japanese Cars to Import to Australia",
    author: "Diren Mendis",
    date: "05 April 2025",
    slug: "top-10-economical-japanese-cars-australia",
  },
  {
    image: "/images/blog/european-cars-import-from-japan.jpg",
    category: "Vehicles",
    title: "Top 10 European Cars to Import from Japan",
    author: "Kisal Walpola",
    date: "02 April 2025",
    slug: "european-cars-import-from-japan",
  },
  {
    image: "/images/blog/japanese-calendar-converter.jpg",
    category: "Getting Started",
    title: "Easy Japanese Calendar Conversion Guide!",
    author: "Avishka Chandeepa",
    date: "06 March 2025",
    slug: "japanese-calendar-converter",
  },
  {
    image: "/images/blog/5-reasons-japanese-kei-cars.jpg",
    category: "Vehicles",
    title: "5 Reasons Why Japanese Kei Cars Are Perfect for Urban Commuters",
    author: "Kisal Walpola",
    date: "26 February 2025",
    slug: "5-reasons-japanese-kei-cars-perfect-urban-commuters",
  },
];

export function Blog() {
  return (
    <section className="py-16 md:py-20 bg-surface">
      <Container>
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-primary text-sm font-medium tracking-[0.2em] uppercase mb-3">
            Our Blog
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-on-surface">
            Everything you need to know about importing a JDM
          </h2>
        </div>

        {/* Blog Cards Carousel */}
        <div className="relative">
          <div className="overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide">
            <div className="flex gap-6" style={{ width: "max-content" }}>
              {blogPosts.map((post, index) => (
                <motion.article
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="w-[300px] md:w-[340px] flex-shrink-0 group"
                >
                  <a href={`/blog/${post.slug}`} className="block">
                    {/* Image */}
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4 bg-surface-container">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        onError={(e) => {
                          e.currentTarget.src = "/images/placeholder-blog.jpg";
                        }}
                      />
                      {/* Category Badge */}
                      <div className="absolute top-3 left-3">
                        <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-on-surface">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-lg font-bold text-on-surface mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    <div className="flex items-center gap-2 text-sm text-on-surface-variant mb-3">
                      <span>{post.author}</span>
                      <span>•</span>
                      <span>{post.date}</span>
                    </div>

                    <span className="inline-flex items-center gap-1 text-primary font-medium text-sm group-hover:gap-2 transition-all">
                      Read More
                      <IconArrowRight className="w-4 h-4" />
                    </span>
                  </a>
                </motion.article>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="hidden md:flex justify-center gap-2 mt-6">
            <button className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high transition-colors">
              <IconChevronLeft className="w-5 h-5" />
            </button>
            <button className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high transition-colors">
              <IconChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Explore Button */}
        <div className="text-center mt-8">
          <a
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-primary text-primary font-medium hover:bg-primary hover:text-white transition-all"
          >
            Explore Our Resources
            <IconArrowRight className="w-4 h-4" />
          </a>
        </div>
      </Container>
    </section>
  );
}
