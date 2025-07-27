"use client";
import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { useRouter } from "next/navigation";

export default function Error() {
  const router = useRouter();
  return (
    <Box style={{ display: 'flex', justifyItems: 'center', alignItems: 'center', height: '100vh' }}>
      <Container maxWidth="md">
        <Grid container spacing={2}>
          <Grid size={12} sx={{ textAlign: "center" }}>
            <img
              src="https://cdn.pixabay.com/photo/2017/03/09/12/31/error-2129569__340.jpg"
              alt=""
              width={500}
              height={250}
                style={{ margin: "0 auto", display: "block" }}
            />
            <Typography variant="h6">
              The page you’re looking for doesn’t exist.
            </Typography>
            <Button variant="contained" onClick={() => router.push("/")}>
              Back Home
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
