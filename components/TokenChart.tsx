import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";

export default async function TokenChart() {
  return (
    <div className="flex h-screen flex-col">
      <header className="flex items-center justify-between bg-primary px-6 py-4 text-primary-foreground">
        <div className="text-2xl font-bold">Stock Dashboard</div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="rounded-full">
              <img
                src="/placeholder.svg"
                width={36}
                height={36}
                alt="User Avatar"
                className="rounded-full"
              />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>John Doe</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </header>
      <main className="grid flex-1 grid-cols-1 gap-6 p-6 md:grid-cols-[2fr_1fr]">
        <div className="rounded-lg bg-background shadow-md">
          {/* <TimeseriesChart className="aspect-[16/9]" /> */}
        </div>
        <div className="flex flex-col rounded-lg bg-background shadow-md">
          <div className="border-b p-6">
            <h2 className="text-xl font-bold">Comments</h2>
          </div>
          <div className="flex-1 space-y-4 overflow-auto p-6">
            <div className="flex items-start gap-4">
              <Avatar className="h-8 w-8 border">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="font-medium">John Doe</div>
                <p className="text-muted-foreground">
                  {` Great performance this quarter! I'm optimistic about the
                 company's future.`}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Avatar className="h-8 w-8 border">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>JA</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="font-medium">Jane Appleseed</div>
                <p className="text-muted-foreground">
                  {` I'm a bit concerned about the recent dip in stock price. Do
                 you think it's a temporary setback?`}
                </p>
              </div>
            </div>
          </div>
          <div className="border-t p-6">
            <Textarea
              placeholder="Leave a comment..."
              className="w-full rounded-lg bg-muted px-4 py-2 text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
              rows={3}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
