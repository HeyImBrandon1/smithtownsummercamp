import { cn } from "@/lib/utils";

type SectionProps = {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
};

export function Section({ title, subtitle, children, className, containerClassName }: SectionProps) {
  return (
    <section className={cn("py-16", className)}>
      <div className={cn("mx-auto max-w-7xl px-4", containerClassName)}>
        {title && (
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              {title}
            </h2>
            {subtitle && (
              <p className="mt-3 text-lg text-muted-foreground">{subtitle}</p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
