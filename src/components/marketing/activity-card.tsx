import Image from "next/image";
import type { Activity } from "@/types";

type ActivityCardProps = Activity;

export function ActivityCard({ name, description, items, image }: ActivityCardProps) {
  return (
    <div className="overflow-hidden rounded-xl bg-white shadow-md">
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </div>
      <div className="p-6">
        <h3 className="mb-2 text-xl font-bold text-foreground">{name}</h3>
        <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
        {items && items.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {items.map((item) => (
              <span
                key={item}
                className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
              >
                {item}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
