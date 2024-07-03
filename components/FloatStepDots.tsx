"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function FloatStepDots() {
  const pathName = usePathname();
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2 pb-8">
        <Link
          href={"/float"}
          className={cn(
            "h-3 w-3 rounded-full",
            pathName === "/float" ? "bg-primary" : "bg-secondary",
          )}
        />
        <Link
          href={"/float/curve"}
          className={cn(
            "h-3 w-3 rounded-full",
            pathName === "/float/curve" ? "bg-primary" : "bg-secondary",
          )}
        />
        <div className="h-3 w-3 rounded-full bg-secondary" />
        <div className="h-3 w-3 rounded-full bg-secondary" />
      </div>
    </div>
  );
}
