"use client";
import React, { useState } from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import BasicTextFields from "../mui/textfield/textinput-basic";
interface Product {
  id?: number;
  name: string;
  description: string;
  price: number;
}
export default function AddProductComponent() {
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [price, setPrice] = useState<number>(0);

  const submitHandler = async () => {
    if (!name || !description || price <= 0) {
      alert("Please fill in all fields correctly.");
      return;
    }
    const newProduct: Product = {
      name,
      description,
      price,
    };
    const response = await fetch("http://localhost:3002/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    });
    if (!response.ok) {
      throw new Error("Failed to add product");
    }
    alert("Product added successfully!");
  };
  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Add Product Page
      </Typography>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 6 }}>
          <BasicTextFields
            value={name}
            variant="standard"
            label="Name"
            id="name-input"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setName(e.target.value)
            }
          />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <BasicTextFields
          value={description}
          variant="standard"
          label="Description"
          id="description-input"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setDescription(e.target.value)
          }
        />
      </Grid>
      <Grid container spacing={2}>
        <BasicTextFields
          value={price.toString()}
          variant="standard"
          label="Price"
          id="price-input"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPrice(Number(e.target.value))
          }
        />
      </Grid>
      <Button
        color="primary"
        variant="contained"
        sx={{ mt: 2 }}
        onClick={submitHandler}
      >
        Add Product
      </Button>
    </Box>
  );
}
