import { cn } from "@/lib/utils";
import { type HTMLAttributes } from "react";

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  variant?: "surface" | "surface-container" | "surface-variant" | "primary" | "secondary";
}

export function Section({
  className,
  variant = "surface",
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        "py-16 md:py-24 lg:py-32",
        // MD3 Surface variants
        variant === "surface" && "bg-surface text-on-surface",
        variant === "surface-container" && "bg-surface-container text-on-surface",
        variant === "surface-variant" && "bg-surface-variant text-on-surface",
        variant === "primary" && "bg-primary text-primary-foreground",
        variant === "secondary" && "bg-secondary text-secondary-foreground",
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}
