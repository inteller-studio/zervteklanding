import { cn } from "@/lib/utils";
import { type HTMLAttributes } from "react";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "elevated" | "filled" | "outlined";
  interactive?: boolean;
}

export function Card({
  className,
  variant = "elevated",
  interactive = false,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        // MD3 Card base
        "rounded-xl p-6 transition-all duration-200",
        // Variants
        variant === "elevated" && [
          "bg-surface-container-low shadow-md",
          interactive && "hover:shadow-lg hover:bg-surface-container",
        ],
        variant === "filled" && [
          "bg-surface-container-highest",
          interactive && "hover:bg-surface-container-high",
        ],
        variant === "outlined" && [
          "border border-outline-variant bg-surface",
          interactive && "hover:bg-surface-container-low",
        ],
        // Interactive state layer
        interactive && [
          "cursor-pointer relative overflow-hidden",
          "before:absolute before:inset-0 before:bg-primary before:opacity-0 before:transition-opacity",
          "hover:before:opacity-[0.08] active:before:opacity-[0.12]",
        ],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("mb-4 flex items-start gap-4", className)} {...props}>
      {children}
    </div>
  );
}

export function CardMedia({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("-mx-6 -mt-6 mb-4 overflow-hidden rounded-t-xl", className)} {...props}>
      {children}
    </div>
  );
}

export function CardTitle({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn("text-xl font-medium text-on-surface", className)}
      {...props}
    >
      {children}
    </h3>
  );
}

export function CardSubtitle({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn("text-sm text-on-surface-variant mt-1", className)}
      {...props}
    >
      {children}
    </p>
  );
}

export function CardDescription({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn("text-on-surface-variant leading-relaxed", className)}
      {...props}
    >
      {children}
    </p>
  );
}

export function CardContent({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("", className)} {...props}>
      {children}
    </div>
  );
}

export function CardActions({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("flex items-center gap-2 mt-6 pt-4", className)} {...props}>
      {children}
    </div>
  );
}

// MD3 Chip component
export interface ChipProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "assist" | "filter" | "input" | "suggestion";
  selected?: boolean;
  icon?: React.ReactNode;
  onClose?: () => void;
}

export function Chip({
  className,
  variant = "assist",
  selected = false,
  icon,
  onClose,
  children,
  ...props
}: ChipProps) {
  return (
    <div
      className={cn(
        // MD3 Chip base
        "inline-flex items-center gap-2 h-8 px-4 rounded-lg text-sm font-medium transition-all duration-200",
        "cursor-pointer relative overflow-hidden",
        "before:absolute before:inset-0 before:bg-current before:opacity-0 before:transition-opacity",
        "hover:before:opacity-[0.08] active:before:opacity-[0.12]",
        // Variants
        variant === "assist" && [
          "border border-outline bg-transparent text-on-surface",
          selected && "bg-secondary-container border-transparent",
        ],
        variant === "filter" && [
          "border border-outline bg-transparent text-on-surface-variant",
          selected && "bg-secondary-container text-on-secondary-container border-transparent",
        ],
        variant === "suggestion" && [
          "border border-outline-variant bg-transparent text-on-surface-variant",
        ],
        variant === "input" && [
          "bg-surface-container text-on-surface-variant",
        ],
        icon && "pl-2",
        className
      )}
      {...props}
    >
      {icon && <span className="shrink-0 [&>svg]:w-4 [&>svg]:h-4">{icon}</span>}
      <span>{children}</span>
      {onClose && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          className="shrink-0 -mr-1 p-0.5 rounded-full hover:bg-on-surface/10"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}
    </div>
  );
}
