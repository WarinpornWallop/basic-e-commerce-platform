"use client";
import React, { useState, useEffect } from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import BasicTextFields from "../mui/textfield/textinput-basic";

interface Product {
  id?: number;
  name: string;
  description: string;
  price: number;
}

export default function EditProductComponent({ productId }: { productId: string }) {
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [price, setPrice] = useState<number>(0);

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(`http://localhost:3002/products/${productId}`);
      if (!response.ok) {
        alert("Failed to fetch product");
        return;
      }
      const data: Product = await response.json();
      setName(data.name);
      setDescription(data.description);
      setPrice(data.price);
    };
    fetchProduct();
  }, [productId]);

  const submitHandler = async () => {
    if (!name || !description || price <= 0) {
      alert("Please fill in all fields correctly.");
      return;
    }
    const updatedProduct: Product = {
      id: Number(productId),
      name,
      description,
      price,
    };
    const response = await fetch(`http://localhost:3002/products/${productId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    });
    if (!response.ok) {
      throw new Error("Failed to update product");
    }
    alert("Product updated successfully!");
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Edit Product Page
      </Typography>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12 }}>
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
        <Grid size={{ xs: 12 }}>
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
        <Grid size={{ xs: 12 }}>
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
      </Grid>
      <Button
        color="primary"
        variant="contained"
        sx={{ mt: 2 }}
        onClick={submitHandler}
      >
        Update Product
      </Button>
    </Box>
  );
}