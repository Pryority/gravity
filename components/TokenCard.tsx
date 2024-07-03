import { Card } from "@/components/ui/card";
import Link from "next/link";
import { Progress } from "@/components/ui/progress";

export default async function TokenCard() {
  return (
    <Card className="grid w-full max-w-sm gap-6 p-6">
      <img
        src="https://dd.dexscreener.com/ds-data/tokens/base/0x4ed4e862860bed51a9570b96d89af5e1b0efefed.png?size=lg&key=e17c44"
        alt="Product Image"
        className="aspect-square w-full rounded-lg object-cover"
      />
      <div className="space-y-2">
        <h3 className="text-xl font-semibold">Product Name</h3>
        <p className="text-muted-foreground">1.5 ETH / 5.00 ETH</p>
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between gap-2">
            <Link
              href="#"
              className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-6 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              View
            </Link>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <GaugeIcon className="h-5 w-5" />
              <ActivityIcon className="h-5 w-5" />
              <GalleryHorizontalEndIcon className="h-5 w-5" />
            </div>
          </div>
          <div className="flex w-full items-center gap-2 text-sm text-muted-foreground">
            <Progress value={75} className="w-full" />
          </div>
        </div>
      </div>
    </Card>
  );
}

function ActivityIcon(props: any) {
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
      <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" />
    </svg>
  );
}

function GalleryHorizontalEndIcon(props: any) {
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
      <path d="M2 7v10" />
      <path d="M6 5v14" />
      <rect width="12" height="18" x="10" y="3" rx="2" />
    </svg>
  );
}

function GaugeIcon(props: any) {
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
      <path d="m12 14 4-4" />
      <path d="M3.34 19a10 10 0 1 1 17.32 0" />
    </svg>
  );
}
