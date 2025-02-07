"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import {
  Diamond,
  Fingerprint,
  LockKeyholeOpen,
  Menu,
  PackagePlus,
  ScanFace,
  Wallet,
} from "lucide-react";
import { ConnectSelect } from "./ConnectSelect";
import { useAccount } from "wagmi";
import { useEffect, useState } from "react";
import { Badge } from "./ui/badge";
import { APP } from "@/lib/constants";

export default function Header() {
  const { address, isConnecting, isConnected } = useAccount();
  const [sheetOpen, setSheetOpen] = useState<boolean>(false);

  const sheetOnOpenChange = () => {
    setSheetOpen(!sheetOpen);
  };

  useEffect(() => {
    console.log("Account details:", { address, isConnecting, isConnected });
  }, [address, isConnecting, isConnected]);

  return (
    <header className="sticky top-0 z-50 flex h-16 w-full items-center justify-between gap-2 border-b bg-background/10 px-4 backdrop-blur-[1px] md:px-6">
      <nav className="hidden w-full flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:justify-between md:gap-5 md:text-sm lg:gap-6">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-semibold md:text-base"
        >
          <Wallet className="h-8 w-8 text-indigo-700" />
          <h1 className="text-xl leading-3 tracking-tighter text-blue-600">
            {APP.name}
          </h1>
          <span className="sr-only">
            Coinbase Smart Wallet with React Native
          </span>
        </Link>
        <div className="mr-4 flex items-center gap-1">
          <Link href="/connect" className="text-lg font-semibold md:text-base">
            <Badge
              variant={"secondary"}
              className="gap-1 rounded-lg border-2 border-transparent hover:border-2 hover:border-primary hover:shadow-md"
            >
              Connect <ScanFace className="h-3 w-3" />
            </Badge>
          </Link>
          <Link href="/siwe" className="text-lg font-semibold md:text-base">
            <Badge
              variant={"secondary"}
              className="gap-1 rounded-lg border-2 border-transparent hover:border-2 hover:border-primary hover:shadow-md"
            >
              SIWE <Diamond className="h-3 w-3" />
            </Badge>
          </Link>
          <Link href="/sign" className="text-lg font-semibold md:text-base">
            <Badge
              variant={"secondary"}
              className="gap-1 rounded-lg border-2 border-transparent hover:border-2 hover:border-primary hover:shadow-md"
            >
              Sign <Fingerprint className="h-3 w-3" />
            </Badge>
          </Link>
          <Link
            prefetch
            href="/batch"
            className="text-lg font-semibold md:text-base"
          >
            <Badge
              variant={"secondary"}
              className="gap-1 rounded-lg border-2 border-transparent hover:border-2 hover:border-primary hover:shadow-md"
            >
              Batch <PackagePlus className="h-3 w-3" />
            </Badge>
          </Link>
          <Link
            href="#"
            className="cursor-not-allowed text-lg font-semibold md:text-base"
          >
            <Badge
              variant={"secondary"}
              className="gap-1 rounded-lg border-2 border-transparent opacity-25 hover:border-2 hover:border-primary hover:shadow-md"
            >
              Permit <LockKeyholeOpen className="h-3 w-3" />
            </Badge>
          </Link>
        </div>
      </nav>
      {/* MOBILE */}
      <Link
        href="/"
        className="flex items-center gap-2 text-lg font-semibold md:hidden md:text-base"
      >
        <Wallet className="h-6 w-6 text-indigo-700" />
        <p className="max-w-[150px] text-xs leading-3 tracking-tighter text-primary">
          {APP.name}
        </p>
      </Link>
      <div className="flex gap-1">
        <Sheet open={sheetOpen} onOpenChange={sheetOnOpenChange}>
          <SheetTrigger asChild>
            <Button
              size="icon"
              variant={"outline"}
              className="h-9 w-9 shrink-0 border-2 border-accent bg-background hover:bg-secondary md:hidden"
              onClick={sheetOnOpenChange}
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="grid gap-6 text-lg font-medium">
              <div className="flex w-full flex-col items-start gap-2">
                <Link
                  href="/"
                  className="flex w-full items-center gap-2 text-lg font-semibold text-primary"
                  onClick={sheetOnOpenChange}
                >
                  <Wallet className="h-6 w-6 text-indigo-700" />
                  <h1>{APP.name}</h1>
                  <span className="sr-only">
                    Coinbase Smart Wallet with React Native
                  </span>
                </Link>
                <Link
                  href="/connect"
                  className="flex w-full text-lg font-semibold md:text-base"
                  onClick={sheetOnOpenChange}
                >
                  <Badge
                    variant={"outline"}
                    className="flex w-1/2 gap-1 rounded-lg border-2 border-transparent text-center text-base hover:border-2 hover:border-primary hover:shadow-md"
                  >
                    Connect <ScanFace className="h-4 w-4" />
                  </Badge>
                </Link>
                <Link
                  href="/siwe"
                  className="flex w-full text-lg font-semibold md:text-base"
                  onClick={sheetOnOpenChange}
                >
                  <Badge
                    variant={"outline"}
                    className="flex w-1/2 gap-1 rounded-lg border-2 border-transparent text-center text-base hover:border-2 hover:border-primary hover:shadow-md"
                  >
                    SIWE <Diamond className="h-4 w-4" />
                  </Badge>
                </Link>
                <Link
                  href="/sign"
                  className="flex w-full text-lg font-semibold md:text-base"
                  onClick={sheetOnOpenChange}
                >
                  <Badge
                    variant={"outline"}
                    className="flex w-1/2 gap-1 rounded-lg border-2 border-transparent text-center text-base hover:border-2 hover:border-primary hover:shadow-md"
                  >
                    Sign <Fingerprint className="h-4 w-4" />
                  </Badge>
                </Link>
                <Link
                  href="/batch"
                  className="flex w-full text-lg font-semibold md:text-base"
                  onClick={sheetOnOpenChange}
                >
                  <Badge
                    variant={"outline"}
                    className="flex w-1/2 gap-1 rounded-lg border-2 border-transparent text-center text-base hover:border-2 hover:border-primary hover:shadow-md"
                  >
                    Batch <PackagePlus className="h-4 w-4" />
                  </Badge>
                </Link>
                <Link
                  href="#"
                  className="flex w-full text-lg font-semibold opacity-50 md:text-base"
                  onClick={sheetOnOpenChange}
                >
                  <Badge
                    variant={"outline"}
                    className="flex w-1/2 cursor-not-allowed gap-1 rounded-lg border-2 border-transparent text-center text-base hover:border-2 hover:border-primary hover:shadow-md"
                  >
                    Permit <LockKeyholeOpen className="h-4 w-4" />
                  </Badge>
                </Link>
              </div>
              {/* <ThemeToggleMobile /> */}
            </nav>
          </SheetContent>
        </Sheet>
        <ConnectSelect />
      </div>
    </header>
  );
}
