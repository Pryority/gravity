import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Info } from "lucide-react";
import { Badge } from "../ui/badge";

export default function RoyaltyTooltip() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <Badge className="relative h-3 w-3 overflow-clip rounded-full bg-secondary p-0">
            <Info className="absolute left-1/2 top-1/2 h-fit w-fit -translate-x-1/2 -translate-y-1/2 scale-50 overflow-clip text-secondary-foreground" />
          </Badge>
        </TooltipTrigger>
        <TooltipContent className="bg-popover/75 backdrop-blur-lg">
          <p className="flex max-w-xl flex-col gap-2 p-2">
            <strong>What are Royalties?</strong>
            Royalties are typically a percentage of each transaction, which
            means that with every buy or sell, an additional fee is incurred.
            This can reduce the liquidity of the token, discourage frequent
            trading, and potentially lower the overall market value. Investors
            should be aware of these potential drawbacks and consider the
            long-term impact of such fees on their investment strategy.
          </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
