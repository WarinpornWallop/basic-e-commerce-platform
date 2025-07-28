"use client";
import * as React from "react";
import Typography from "@mui/material/Typography";
import { BarChart, BarChartProps } from "@mui/x-charts/BarChart";

function addLabels(series: any[]) {
  
  const labels: Record<string, string> = {
    currAss: "Current Assets",
    nCurrAss: "Non-Current Assets",
    curLia: "Current Liabilities",
    nCurLia: "Non-Current Liabilities",
    capStock: "Capital Stock",
    retEarn: "Retained Earnings",
    treas: "Treasury Stock",
  };
  return series.map((s) => ({ ...s, label: labels[s.dataKey] }));
}

const valueFormatter = (value: number) => value.toLocaleString();

export default function StackBars() {
    const balanceSheet = [
    {
      year: "2021",
      currAss: 100,
      nCurrAss: 80,
      curLia: 60,
      nCurLia: 40,
      capStock: 50,
      retEarn: 30,
      treas: 20,
    },
    {
      year: "2022",
      currAss: 120,
      nCurrAss: 90,
      curLia: 70,
      nCurLia: 50,
      capStock: 60,
      retEarn: 40,
      treas: 25,
    },
    {
      year: "2023",
      currAss: 140,
      nCurrAss: 100,
      curLia: 80,
      nCurLia: 60,
      capStock: 70,
      retEarn: 50,
      treas: 30,
    },
  ];
  return (
    <div style={{ width: "100%" }}>
      <Typography>Sample Balance Sheet</Typography>
      <BarChart
        dataset={balanceSheet}
        series={addLabels([
          { dataKey: "currAss", stack: "assets" },
          { dataKey: "nCurrAss", stack: "assets" },
          { dataKey: "curLia", stack: "liability" },
          { dataKey: "nCurLia", stack: "liability" },
          { dataKey: "capStock", stack: "equity" },
          { dataKey: "retEarn", stack: "equity" },
          { dataKey: "treas", stack: "equity" },
        ])}
        xAxis={[{ dataKey: "year" }]}
        {...config}
      />
    </div>
  );
}

const config: Partial<BarChartProps> = {
  height: 350,
  margin: { left: 0 },
  yAxis: [{ width: 50, valueFormatter }],
  hideLegend: true,
};
