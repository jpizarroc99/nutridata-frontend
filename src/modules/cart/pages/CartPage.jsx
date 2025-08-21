import { Container, Typography } from "@mui/material";
import React from "react";

import { CartSummary } from "../components/CartSummary";

export const CartPage = () => {
  return (
    <>
      <Container sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Mi Carrito
        </Typography>
        <CartSummary />
      </Container>
    </>
  );
};
