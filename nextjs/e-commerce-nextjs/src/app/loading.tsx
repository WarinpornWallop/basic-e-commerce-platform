"use client";
import CircularWithValueLabel from "@/components/mui/progress/loading";
import { Box } from "@mui/material";
export default function Loading() {
  return (
    <Box style={{ display: 'flex', justifyItems: 'center', alignItems: 'center', height: '100vh' }}>
      <CircularWithValueLabel />
    </Box>
  );
}