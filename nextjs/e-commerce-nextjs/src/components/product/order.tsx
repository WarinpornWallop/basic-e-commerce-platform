"use client";
import React, { useState, useEffect, useContext } from "react";
import ProductOrderContext from "@/context/productContext";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import CustomPaginationTable from "@/components/mui/table/table-pagination";

interface Order {
  id: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
  total: number;
}

export default function OrdersComponent() {
  const { productsInOrder } = useContext(ProductOrderContext);
  const [totalPrice, setTotalPrice] = useState<number>(0.0);
  const calculateTotalPrice = () => {
    let total: number = 0.0;
    productsInOrder.forEach((product) => {
      total += product.price * product.quantity;
    });
    setTotalPrice(total);
  };
  useEffect(() => {
    calculateTotalPrice();
  }, [productsInOrder]);
  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h3">Order List</Typography>
      <Typography variant="subtitle1" gutterBottom>
        Here you can view all products available in the store.
      </Typography>
      <CustomPaginationTable
        columns={[
          { key: "id", label: "ID" },
          { key: "name", label: "Name" },
          { key: "description", label: "Description" },
          { key: "price", label: "Price", align: "right" },
          { key: "quantity", label: "Quantity", align: "right" },
          { key: "total", label: "Total", align: "right" },
        ]}
        rows={productsInOrder.map((product) => ({
          id: product.id,
          name: product.name,
          description: product.description,
          price: `$${product.price.toFixed(2)}`,
          quantity: product.quantity,
          total: `$${(product.price * product.quantity).toFixed(2)}`,
        }))}
        rowsPerPageOptions={[5, 10, 20]}
        tableLabel="Order List Table"
      />
      <Typography variant="subtitle2" sx={{ mt: 2 }}>
        Total Orders: {productsInOrder.length}
      </Typography>
      <Typography variant="subtitle2" sx={{ mt: 1 }}>
        Total Price: ${totalPrice.toFixed(2)}
      </Typography>
    </Box>
  );
}
