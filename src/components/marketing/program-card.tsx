import Image from "next/image";
import Link from "next/link";
import type { ProgramLevel } from "@/types";

type ProgramCardProps = ProgramLevel & {
  image: string;
};

export function ProgramCard({ name, ages, grades, image }: ProgramCardProps) {
  return (
    <div className="group overflow-hidden rounded-xl bg-white shadow-md transition hover:shadow-lg">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-4 text-center">
        <h3 className="text-lg font-bold text-foreground">{name}</h3>
        <p className="text-sm text-muted-foreground">{grades}</p>
        <p className="text-sm font-medium text-primary">{ages}</p>
      </div>
    </div>
  );
}
