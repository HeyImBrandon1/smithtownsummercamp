"use client";

import { useEffect, useState } from "react";
import { campConfig } from "@/config/camp";

export function CountdownTimer() {
  const [days, setDays] = useState<number | null>(null);

  useEffect(() => {
    function calculate() {
      const now = new Date();
      const camp = new Date(campConfig.startDate);
      const diff = camp.getTime() - now.getTime();
      setDays(Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24))));
    }

    calculate();
    const interval = setInterval(calculate, 60000);
    return () => clearInterval(interval);
  }, []);

  if (days === null) return null;

  return (
    <div className="text-center">
      <div className="text-6xl font-black tabular-nums md:text-8xl">{days}</div>
      <div className="mt-2 text-lg font-bold uppercase tracking-widest">Days Until Camp</div>
    </div>
  );
}
