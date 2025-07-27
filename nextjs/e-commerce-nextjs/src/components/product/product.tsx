"use client";
import React, { useState, useEffect, useContext } from "react";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import BasicCard from "@/components/mui/card/basic-card-nopic";
import ProductOrderContext from "@/context/productContext";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
}

export default function AllProductsComponent() {
  const { addProductToOrder } = useContext(ProductOrderContext);
  const [products, setProducts] = useState<Product[]>([]);
  // const products: Product[] = [
  //   { id: 1, name: "Product 1", description: "Description 1", price: 100 },
  //   { id: 2, name: "Product 2", description: "Description 2", price: 200 },
  //   { id: 3, name: "Product 3", description: "Description 3", price: 300 },
  // ];
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("http://localhost:3002/products");
      
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      const data = await response.json();
      console.log(data);
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h3">All Products</Typography>
      <Typography variant="subtitle1" gutterBottom>
        Here you can view all products available in the store.
      </Typography>
      <Grid container spacing={2}>
        {products.map((product) => (
          <Grid size={4} key={product.id}>
            <BasicCard
              backgroundColor="#ffe4e6"
              textColor="#be185d"
              id={product.id}
              title={product.name}
              subtitle={`$${product.price}`}
              description={product.description}
              buttonLabel="Buy Now"
              onButtonClick={() =>
                addProductToOrder({ ...product, quantity: 1 })
              }
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
