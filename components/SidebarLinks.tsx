"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { HomeIcon, LineChart, SquarePlus, Trophy } from "lucide-react";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const links = [
  {
    name: "Dashboard",
    href: "",
    icon: <HomeIcon className="h-4 w-4" />,
  },
  {
    name: "Float",
    href: "float",
    icon: <SquarePlus className="h-4 w-4" />,
  },
  {
    name: "0G Ranking",
    href: "rank",
    icon: <Trophy className="h-4 w-4" />,
  },
  {
    name: "Analytics",
    href: "stats",
    icon: <LineChart className="h-4 w-4" />,
  },
];

export default function SidebarLinks() {
  const [active, setActive] = useState("");
  const pathName = usePathname();

  const isActiveLink = (href: string) => {
    return active === `/${href}` ? "text-primary" : "text-muted-foreground";
  };

  useEffect(() => {
    setActive(pathName);
  }, [pathName]);

  return (
    <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
      {links.map((link, i) => (
        <Link
          key={i}
          href={`/${link.href}`}
          className={cn(
            "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary",
            isActiveLink(link.href),
          )}
        >
          {link.icon}
          {link.name}
          {/* <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
            6
          </Badge> */}
        </Link>
      ))}
    </nav>
  );
}
