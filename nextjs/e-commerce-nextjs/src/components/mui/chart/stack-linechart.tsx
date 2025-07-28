"use client";
import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

const worldElectricityProduction = [
  { year: 2018, coal: 100, gas: 80, hydro: 60, nuclear: 40, solar: 20, wind: 10 },
  { year: 2019, coal: 95, gas: 85, hydro: 65, nuclear: 45, solar: 30, wind: 15 },
  { year: 2020, coal: 90, gas: 90, hydro: 70, nuclear: 50, solar: 40, wind: 20 },
  { year: 2021, coal: 85, gas: 95, hydro: 75, nuclear: 55, solar: 50, wind: 25 },
  { year: 2022, coal: 80, gas: 100, hydro: 80, nuclear: 60, solar: 60, wind: 30 },
];
const keyToLabel: Record<string, string> = {
  coal: "Coal",
  gas: "Gas",
  hydro: "Hydro",
  nuclear: "Nuclear",
  solar: "Solar",
  wind: "Wind",
};

const colors: Record<string, string> = {
  coal: "#333333",
  gas: "#ff9800",
  hydro: "#2196f3",
  nuclear: "#9c27b0",
  solar: "#ffd600",
  wind: "#00bcd4",
};

const stackStrategy = {
  stack: 'total',
  area: true,
  stackOffset: 'none', // To stack 0 on top of others
} as const;

const customize = {
  height: 350,
  hideLegend: true,
};

export default function LineDataset() {
  return (
    <LineChart
      xAxis={[
        {
          dataKey: 'year',
          valueFormatter: (value: number) => value.toString(),
          min: 2018,
          max: 2022,
        },
      ]}
      yAxis={[{ width: 50 }]}
      series={Object.keys(keyToLabel).map((key) => ({
        dataKey: key,
        label: keyToLabel[key],
        color: colors[key],
        showMark: false,
        ...stackStrategy,
      }))}
      dataset={worldElectricityProduction}
      {...customize}
    />
  );
}
