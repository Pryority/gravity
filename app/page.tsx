import Page from "@/components/Page";
import TokenCard from "@/components/TokenCard";
import { Crown, Hourglass } from "lucide-react";

export default async function Home() {
  return (
    <Page>
      <div className="flex flex-col items-center gap-8">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col items-center gap-1">
            <div className="flex items-center gap-1">
              <h2 className="text-2xl font-semibold">Top Token</h2>
              <Crown className="h-6 w-6" />
            </div>
            <TokenCard />
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="flex items-center gap-1">
              <h2 className="text-2xl font-semibold">Latest Float</h2>
              <Hourglass className="h-6 w-6" />
            </div>
            <TokenCard />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <TokenCard />
          <TokenCard />
          <TokenCard />
          <TokenCard />
        </div>
      </div>
    </Page>
  );
}
