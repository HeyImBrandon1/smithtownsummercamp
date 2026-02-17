type PageHeaderProps = {
  title: string;
  subtitle?: string;
};

export function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <div className="bg-primary py-16 text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 text-center">
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">{title}</h1>
        {subtitle && (
          <p className="mt-4 text-lg opacity-90">{subtitle}</p>
        )}
      </div>
    </div>
  );
}
