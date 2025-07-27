"use client";
import React, {useEffect, useState, useContext} from "react";
import { Box, Button, Typography } from "@mui/material";
import ProductOrderContext from "@/context/productContext";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
}

export default function ProductDetailComponent({productId}: {productId: string}) {
    const [productDetail, setProductDetail] = useState<Product>({
        id: 0,
        name: "",
        description: "",
        price: 0,
    })
    const { addProductToOrder } = useContext(ProductOrderContext);
    useEffect(() => {
        const fetchProductDetails = async () => {
            const response = await fetch(`http://localhost:3002/products/${productId}`);
            if (!response.ok) {
                throw new Error("Failed to fetch product details");
            }
            const productDetails = await response.json();
            setProductDetail(productDetails);
        };
        fetchProductDetails();
    }, [productId]);
  return (
   <Box sx={{ padding: 2}}>
    <Typography variant="h4" component="h1" gutterBottom>
      Product Detail
    </Typography>
    <Typography variant="body1" gutterBottom>
      This is where the product details will be displayed.
    </Typography>
    <Typography variant="h5" component="h2">
      {productDetail.name}
    </Typography>
    <Typography variant="body2" color="textSecondary">
      {productDetail.description}
    </Typography>
    <Typography variant="h6" component="h3">
      Price: ${productDetail.price.toFixed(2)}
    </Typography>
    <Button
        variant="contained"
        color="primary"
        sx={{ mt: 2 }}
        onClick={() => addProductToOrder({ ...productDetail, quantity: 1 })}
      >
        Add to Cart
      </Button>
   </Box>
  );
}