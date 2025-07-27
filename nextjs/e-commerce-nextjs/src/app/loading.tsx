"use client";
import CircularWithValueLabel from "@/components/mui/progress/loading";
export default function Loading() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <CircularWithValueLabel />
    </div>
  );
}