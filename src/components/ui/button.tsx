import { cn } from "@/lib/utils";
import { forwardRef, type ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "filled" | "tonal" | "outlined" | "text" | "elevated";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  iconPosition?: "start" | "end";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "filled", size = "md", icon, iconPosition = "start", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          // MD3 Base styles
          "inline-flex items-center justify-center gap-2 font-medium transition-all duration-200",
          "rounded-full", // MD3 uses full rounded for buttons
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
          "disabled:pointer-events-none disabled:opacity-38",
          // State layer effect
          "relative overflow-hidden",
          "before:absolute before:inset-0 before:bg-current before:opacity-0 before:transition-opacity",
          "hover:before:opacity-[0.08] active:before:opacity-[0.12]",
          // MD3 Variants
          variant === "filled" && [
            "bg-primary text-primary-foreground",
            "shadow-sm hover:shadow-md",
          ],
          variant === "tonal" && [
            "bg-primary-container text-on-primary-container",
            "hover:shadow-sm",
          ],
          variant === "elevated" && [
            "bg-surface-container-low text-primary shadow-md",
            "hover:shadow-lg",
          ],
          variant === "outlined" && [
            "border border-outline bg-transparent text-primary",
            "hover:bg-primary/[0.08]",
          ],
          variant === "text" && [
            "bg-transparent text-primary",
            "hover:bg-primary/[0.08]",
          ],
          // MD3 Sizes
          size === "sm" && "h-10 px-4 text-sm",
          size === "md" && "h-12 px-6 text-sm",
          size === "lg" && "h-14 px-8 text-base",
          className
        )}
        {...props}
      >
        {icon && iconPosition === "start" && (
          <span className="shrink-0 -ml-1">{icon}</span>
        )}
        <span>{children}</span>
        {icon && iconPosition === "end" && (
          <span className="shrink-0 -mr-1">{icon}</span>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

// MD3 Icon Button
export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "filled" | "tonal" | "outlined" | "standard";
  size?: "sm" | "md" | "lg";
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ className, variant = "standard", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          // MD3 Icon Button base
          "inline-flex items-center justify-center rounded-full transition-all duration-200",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
          "disabled:pointer-events-none disabled:opacity-38",
          // State layer
          "relative overflow-hidden",
          "before:absolute before:inset-0 before:rounded-full before:bg-current before:opacity-0 before:transition-opacity",
          "hover:before:opacity-[0.08] active:before:opacity-[0.12]",
          // Variants
          variant === "filled" && "bg-primary text-primary-foreground",
          variant === "tonal" && "bg-primary-container text-on-primary-container",
          variant === "outlined" && "border border-outline text-on-surface-variant",
          variant === "standard" && "text-on-surface-variant",
          // Sizes
          size === "sm" && "w-10 h-10 [&>svg]:w-5 [&>svg]:h-5",
          size === "md" && "w-12 h-12 [&>svg]:w-6 [&>svg]:h-6",
          size === "lg" && "w-14 h-14 [&>svg]:w-7 [&>svg]:h-7",
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

IconButton.displayName = "IconButton";

// MD3 FAB (Floating Action Button)
export interface FABProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "tertiary" | "surface";
  size?: "sm" | "md" | "lg";
  extended?: boolean;
  icon: React.ReactNode;
}

export const FAB = forwardRef<HTMLButtonElement, FABProps>(
  ({ className, variant = "primary", size = "md", extended = false, icon, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          // MD3 FAB base
          "inline-flex items-center justify-center gap-3 font-medium transition-all duration-200",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
          "disabled:pointer-events-none disabled:opacity-38",
          // State layer
          "relative overflow-hidden",
          "before:absolute before:inset-0 before:bg-current before:opacity-0 before:transition-opacity",
          "hover:before:opacity-[0.08] active:before:opacity-[0.12]",
          // Elevation
          "shadow-lg hover:shadow-xl",
          // Variants
          variant === "primary" && "bg-primary-container text-on-primary-container",
          variant === "secondary" && "bg-secondary-container text-secondary-container-foreground",
          variant === "tertiary" && "bg-tertiary-container text-tertiary",
          variant === "surface" && "bg-surface-container-high text-primary",
          // Sizes
          size === "sm" && (extended ? "h-10 px-4 rounded-xl" : "w-10 h-10 rounded-xl"),
          size === "md" && (extended ? "h-14 px-4 rounded-2xl" : "w-14 h-14 rounded-2xl"),
          size === "lg" && (extended ? "h-24 px-7 rounded-[28px]" : "w-24 h-24 rounded-[28px]"),
          className
        )}
        {...props}
      >
        <span className={cn(
          "shrink-0",
          size === "sm" && "[&>svg]:w-5 [&>svg]:h-5",
          size === "md" && "[&>svg]:w-6 [&>svg]:h-6",
          size === "lg" && "[&>svg]:w-9 [&>svg]:h-9",
        )}>
          {icon}
        </span>
        {extended && children && <span>{children}</span>}
      </button>
    );
  }
);

FAB.displayName = "FAB";
