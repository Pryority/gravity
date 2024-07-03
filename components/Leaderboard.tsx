import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Leaderboard() {
  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle>Zero Gravity Ranking</CardTitle>
        <CardDescription>
          View the top performing liquinauts on our platform.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid grid-cols-6 items-center gap-4 rounded-lg bg-muted p-4">
            <div className="col-span-2 flex items-center gap-4">
              <img
                src="/placeholder.svg"
                width={40}
                height={40}
                alt="Token Logo"
                className="rounded-full"
              />
              <div>
                <div className="font-medium">Bitcoin</div>
                <div className="text-sm text-muted-foreground">BTC</div>
              </div>
            </div>
            <div className="text-right">$50,000</div>
            <div className="text-right">+10%</div>
            <div className="text-right">
              <Badge variant="default">Top Gainer</Badge>
            </div>
            <div className="text-right">
              <Button variant="ghost" size="icon">
                <MoveHorizontalIcon className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-6 items-center gap-4 rounded-lg bg-muted p-4">
            <div className="col-span-2 flex items-center gap-4">
              <img
                src="/placeholder.svg"
                width={40}
                height={40}
                alt="Token Logo"
                className="rounded-full"
              />
              <div>
                <div className="font-medium">Ethereum</div>
                <div className="text-sm text-muted-foreground">ETH</div>
              </div>
            </div>
            <div className="text-right">$2,000</div>
            <div className="text-right">+5%</div>
            <div className="text-right">
              <Badge variant="secondary">Stable</Badge>
            </div>
            <div className="text-right">
              <Button variant="ghost" size="icon">
                <MoveHorizontalIcon className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-6 items-center gap-4 rounded-lg bg-muted p-4">
            <div className="col-span-2 flex items-center gap-4">
              <img
                src="/placeholder.svg"
                width={40}
                height={40}
                alt="Token Logo"
                className="rounded-full"
              />
              <div>
                <div className="font-medium">Solana</div>
                <div className="text-sm text-muted-foreground">SOL</div>
              </div>
            </div>
            <div className="text-right">$30</div>
            <div className="text-right">-2%</div>
            <div className="text-right">
              <Badge variant="destructive">Top Loser</Badge>
            </div>
            <div className="text-right">
              <Button variant="ghost" size="icon">
                <MoveHorizontalIcon className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function MoveHorizontalIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="18 8 22 12 18 16" />
      <polyline points="6 8 2 12 6 16" />
      <line x1="2" x2="22" y1="12" y2="12" />
    </svg>
  );
}
