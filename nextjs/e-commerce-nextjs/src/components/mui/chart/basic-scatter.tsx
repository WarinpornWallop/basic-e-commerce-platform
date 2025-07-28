"use client";
import * as React from "react";
import { ScatterChart } from "@mui/x-charts/ScatterChart";

export default function BasicScatter() {
  const data = [
    { id: 1, x1: 10, y1: 20, y2: 25 },
    { id: 2, x1: 20, y1: 35, y2: 30 },
    { id: 3, x1: 30, y1: 40, y2: 45 },
    { id: 4, x1: 40, y1: 55, y2: 50 },
    { id: 5, x1: 50, y1: 60, y2: 65 },
  ];

  return (
    <ScatterChart
      height={300}
      series={[
        {
          label: "Series A",
          data: data.map((v) => ({ x: v.x1, y: v.y1, id: v.id })),
        },
        {
          label: "Series B",
          data: data.map((v) => ({ x: v.x1, y: v.y2, id: v.id })),
        },
      ]}
    />
  );
}
