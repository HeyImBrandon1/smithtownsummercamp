import Link from "next/link";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";

type CtaButtonProps = {
  label?: string;
  href?: string;
  external?: boolean;
  variant?: "primary" | "accent";
  size?: "default" | "lg";
  className?: string;
};

export function CtaButton({
  label = siteConfig.enrollment.label,
  href = siteConfig.enrollment.url,
  external = true,
  variant = "accent",
  size = "default",
  className,
}: CtaButtonProps) {
  const classes = cn(
    "inline-block rounded-md font-bold transition",
    variant === "accent" && "bg-accent text-accent-foreground hover:bg-accent/90",
    variant === "primary" && "bg-primary text-primary-foreground hover:bg-primary/90",
    size === "default" && "px-6 py-3 text-base",
    size === "lg" && "px-8 py-4 text-lg",
    className
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {label}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {label}
    </Link>
  );
}
