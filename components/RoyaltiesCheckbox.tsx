"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "./ui/label";

export function RoyaltiesCheckbox() {
  return (
    <div className="items-top flex space-x-2">
      <Checkbox id="change-royalties" />
      <div className="grid gap-1.5 leading-none">
        <Label
          htmlFor="change-royalties"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Change default royalties for minting and burning
        </Label>
      </div>
    </div>
  );
}
