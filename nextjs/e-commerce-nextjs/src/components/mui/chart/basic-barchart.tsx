"use client";
import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";

export default function BasicBars() {
  return (
    <BarChart
      xAxis={[
        {
          data: ["group A", "group B", "group C"],
          categoryGapRatio: 0.3,
          barGapRatio: 0.2,
        },
      ]}
      series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
      height={300}
    />
  );
}
