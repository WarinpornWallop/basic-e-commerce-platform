import BasicBars from "@/components/mui/chart/basic-barchart";
import StackBars from "@/components/mui/chart/stack-barchart";
import BasicLineChart from "@/components/mui/chart/basic-linechart";
import LineDataset from "@/components/mui/chart/stack-linechart";
import BasicLineChartWithPartialData from "@/components/mui/chart/basic-linechart-partial-date";
import BasicPie from "@/components/mui/chart/basic-piechart";
import DonutChart from "@/components/mui/chart/basic-donutchart";
import PieColor from "@/components/mui/chart/basic-piechart-color";
import BasicScatter from "@/components/mui/chart/basic-scatter";
import BasicGauges from "@/components/mui/chart/basic-guage";
import BasicRadar from "@/components/mui/chart/basic-radar";
import MultiSeriesRadar from "@/components/mui/chart/basic-radar-multiseries";
import { Box, Typography, Grid } from "@mui/material";

export default function WhatIsChartPage() {
  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h3">What is Chart?</Typography>
      <Typography variant="h4">
        Charts are graphical representations of data that help in visualizing
        trends, patterns, and comparisons. They are widely used in various
        fields such as business, science, and education to present complex data
        in an easily understandable format.
      </Typography>
      <Typography>Basic Bar Chart</Typography>
      <BasicBars />
      <Grid container spacing={4}>
        <Grid size={6}>
          <Typography variant="h4">Stacked Bar Chart</Typography>
          <StackBars />
        </Grid>
        <Grid size={6}>
          <Typography variant="h4">Basic Line Chart</Typography>
          <BasicLineChart />
        </Grid>
        <Grid size={6}>
          <Typography variant="h4">
            Line Chart with Multiple Datasets
          </Typography>
          <LineDataset />
        </Grid>
       <Grid size={6}>
          <Typography variant="h4">
            Basic Line Chart with Partial Data
          </Typography>
          <BasicLineChartWithPartialData />
        </Grid>
         <Grid size={4}>
          <Typography variant="h4">Basic Pie Chart</Typography>
          <BasicPie />
        </Grid>
          <Grid size={4}>
          <Typography variant="h4">Pie Chart with Color Variations</Typography>
          <PieColor />
        </Grid>
      <Grid size={4}>
          <Typography variant="h4">Donut Chart</Typography>
          <DonutChart />
        </Grid>
        <Grid size={6}>
          <Typography variant="h4">Basic Scatter Chart</Typography>
          <BasicScatter />
        </Grid>
        <Grid size={6}>
          <Typography variant="h4">Basic Gauges</Typography>
          <BasicGauges />
        </Grid>
        <Grid size={6}>
          <Typography variant="h4">Basic Radar Chart</Typography>
          <BasicRadar />
        </Grid>
        <Grid size={6}>
          <Typography variant="h4">Multi-Series Radar Chart</Typography>
          <MultiSeriesRadar />
        </Grid>
      </Grid>
    </Box>
  );
}
