"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function FloatStepDots() {
  const pathName = usePathname();
  return (
    <div className="mb-4 mt-2 flex items-center justify-between">
      <div className="flex items-center gap-2">
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
        <Link
          href={"/float/review"}
          className={cn(
            "h-3 w-3 rounded-full",
            pathName === "/float/review" ? "bg-primary" : "bg-secondary",
          )}
        />
      </div>
    </div>
  );
}
