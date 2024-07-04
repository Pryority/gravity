"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import useFloat, { CurveType } from "@/lib/hooks/use-float";
import { Label } from "./ui/label";
import { Badge } from "./ui/badge";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { useEffect, useState } from "react";
function generateChartData(
  curveType: CurveType,
  startPrice: number,
  endPrice: number,
  totalSupply: number,
  rangeNum: number,
) {
  const data = [];
  const stepSize = totalSupply / rangeNum;

  for (let i = 0; i <= rangeNum; i++) {
    const x = stepSize * i;
    let y;

    switch (curveType) {
      case "linear":
        y = startPrice + ((endPrice - startPrice) / rangeNum) * i;
        break;
      case "exponential":
        y = startPrice * Math.pow(endPrice / startPrice, i / rangeNum);
        break;
      case "logarithmic":
        y =
          startPrice +
          ((endPrice - startPrice) * Math.log1p(i)) / Math.log1p(rangeNum);
        break;
      case "flat price":
        y = startPrice;
        break;
    }

    data.push({ x, y });
  }

  return data;
}
export default function CurvePreview() {
  const [float, setFloat] = useFloat();
  const [chartData, setChartData] = useState<any[] | undefined>();
  useEffect(() => {
    if (
      !float.curve ||
      !float.startPrice ||
      !float.endPrice ||
      !float.totalSupply ||
      !float.curve?.rangeNum
    )
      return;
    const newChartData = generateChartData(
      float.curve?.type as CurveType,
      float.startPrice,
      float.endPrice,
      float.totalSupply,
      float.curve?.rangeNum,
    );
    setChartData(newChartData);
  }, [float]);
  return (
    <Card className="h-fit w-full max-w-2xl">
      <CardHeader>
        <div className="flex w-full items-center justify-between">
          <div className="flex flex-col gap-1">
            <CardTitle>Curve Preview</CardTitle>
            {/* <CardDescription>Bonding Curved {float.erc}</CardDescription> */}
          </div>
          <div className="flex flex-col items-center gap-1">
            <Badge variant={"outline"} className="capitalize">
              {float.curve?.type}
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex w-full flex-col items-center gap-4">
          <div className="relative min-h-40 w-full rounded-sm bg-secondary sm:hidden">
            <LineChart
              id="curve"
              width={280}
              height={200}
              data={chartData}
              margin={{ top: 16, right: 0, left: 0, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <XAxis name="x" />
              <YAxis name="y" />
              <Line type="monotone" dataKey="y" stroke="#8884d8" />
            </LineChart>
          </div>
          <div className="relative hidden min-h-64 w-full rounded-sm bg-secondary md:flex">
            <LineChart
              id="curve"
              width={500}
              height={250}
              data={chartData}
              margin={{ top: 16, right: 0, left: 0, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <XAxis name="x" />
              <YAxis name="y" />
              <Line type="monotone" dataKey="y" stroke="#8884d8" />
            </LineChart>
          </div>
          <div className="flex w-full items-center gap-4">
            <Label className="text-xl">
              {float.name} {float.symbol && `(${float.symbol})`}
            </Label>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
