"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import useFloat from "@/lib/hooks/use-float";
import { Label } from "./ui/label";
import { Badge } from "./ui/badge";
import { CircleSlash, Globe, Power } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function FloatPreview() {
  const [float, setFloat] = useFloat();
  return (
    <Card className="h-fit w-full max-w-2xl">
      <CardHeader>
        <div className="flex w-full items-center justify-between">
          <div className="flex flex-col gap-1">
            <CardTitle>Float Preview</CardTitle>
            {/* <CardDescription>Bonding Curved {float.erc}</CardDescription> */}
          </div>
          <div className="flex flex-col items-center gap-1">
            <Badge variant={"outline"}>{float.erc}</Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex w-full flex-col items-center gap-4">
          <div className="relative min-h-64 w-full bg-secondary">
            <p className="absolute left-1/2 top-1/2 -translate-x-1/2">
              Image Placeholder
            </p>
          </div>
          <div className="flex w-full items-center gap-4">
            <Label className="text-xl">
              {float.name} {float.symbol && `(${float.symbol})`}
            </Label>
          </div>

          <div className="flex w-full flex-col gap-2">
            <div className={"flex items-center gap-2"}>
              <Badge
                variant={"secondary"}
                className={cn(
                  "relative h-5 w-5 rounded-full",
                  float.isRoyalties ? "text-amber-500" : "text-primary",
                )}
              >
                {float.isRoyalties ? (
                  <Power className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2" />
                ) : (
                  <CircleSlash className="absolute left-1/2 h-4 w-4 -translate-x-1/2 text-primary" />
                )}
              </Badge>
              <Label
                className={cn(
                  float.isRoyalties ? "text-amber-500" : "text-primary",
                )}
              >
                {float.isRoyalties ? "" : "No"} Creator Royalties{" "}
                {float.isRoyalties ? "On" : ""}
              </Label>
            </div>
            <div className="grid w-full grid-cols-3">
              {float.website !== "" &&
              float.website !== undefined &&
              float.website !== null ? (
                <Link
                  href={`${float.website}`}
                  className="flex items-center gap-2"
                >
                  <Badge variant={"secondary"} className="relative h-5 w-5">
                    <Globe className="absolute left-1/2 h-4 w-4 -translate-x-1/2 text-primary" />
                  </Badge>
                  <Label>Website</Label>
                </Link>
              ) : (
                <></>
              )}
              {float.x !== "" && float.x !== undefined && float.x !== null ? (
                <Link
                  href={`https://x.com/${float.x}`}
                  className="flex items-center gap-2"
                >
                  <Badge variant={"secondary"} className="relative h-5 w-5">
                    <div className="absolute left-1/2 h-4 w-4 -translate-x-1/2 scale-75 text-primary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100%"
                        height="100%"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                      </svg>
                    </div>
                  </Badge>
                  <Label>X</Label>
                </Link>
              ) : (
                <></>
              )}
              {float.telegram !== "" &&
              float.telegram !== undefined &&
              float.telegram !== null ? (
                <Link
                  href={`https://t.me/${float.telegram}`}
                  className="flex items-center gap-2"
                >
                  <Badge variant={"secondary"} className="relative h-5 w-5">
                    <div className="absolute left-1/2 h-4 w-4 -translate-x-1/2 scale-75 text-primary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="100%"
                        height="100%"
                        viewBox="0,0,256,256"
                      >
                        <g
                          fill="currentColor"
                          fillRule="inherit"
                          stroke="none"
                          strokeWidth="1"
                          strokeLinecap="butt"
                          strokeLinejoin="miter"
                          strokeMiterlimit="10"
                          strokeDasharray=""
                          strokeDashoffset="0"
                          fontFamily="none"
                          fontWeight="none"
                          fontSize="none"
                          textAnchor="none"
                        >
                          <g transform="scale(5.12,5.12)">
                            <path d="M46.137,6.552c-0.75,-0.636 -1.928,-0.727 -3.146,-0.238h-0.002c-1.281,0.514 -36.261,15.518 -37.685,16.131c-0.259,0.09 -2.521,0.934 -2.288,2.814c0.208,1.695 2.026,2.397 2.248,2.478l8.893,3.045c0.59,1.964 2.765,9.21 3.246,10.758c0.3,0.965 0.789,2.233 1.646,2.494c0.752,0.29 1.5,0.025 1.984,-0.355l5.437,-5.043l8.777,6.845l0.209,0.125c0.596,0.264 1.167,0.396 1.712,0.396c0.421,0 0.825,-0.079 1.211,-0.237c1.315,-0.54 1.841,-1.793 1.896,-1.935l6.556,-34.077c0.4,-1.82 -0.156,-2.746 -0.694,-3.201zM22,32l-3,8l-3,-10l23,-17z"></path>
                          </g>
                        </g>
                      </svg>
                    </div>
                  </Badge>
                  <Label>Telegram</Label>
                </Link>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
