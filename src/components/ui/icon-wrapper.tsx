import { cn } from "@/lib/utils";

interface IconWrapperProps {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "filled" | "tonal" | "outlined" | "standard";
  className?: string;
}

const sizeClasses = {
  sm: "w-10 h-10 [&>svg]:w-5 [&>svg]:h-5",
  md: "w-12 h-12 [&>svg]:w-6 [&>svg]:h-6",
  lg: "w-14 h-14 [&>svg]:w-7 [&>svg]:h-7",
  xl: "w-20 h-20 [&>svg]:w-10 [&>svg]:h-10",
};

export function IconWrapper({
  children,
  size = "lg",
  variant = "tonal",
  className,
}: IconWrapperProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-xl transition-colors duration-200",
        sizeClasses[size],
        // MD3 variants
        variant === "filled" && "bg-primary text-primary-foreground",
        variant === "tonal" && "bg-primary-container text-on-primary-container",
        variant === "outlined" && "border-2 border-outline text-on-surface-variant",
        variant === "standard" && "text-primary",
        className
      )}
    >
      {children}
    </div>
  );
}
