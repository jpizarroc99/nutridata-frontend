import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Button,
    Chip,
    Stack,
  } from "@mui/material";

import React from "react";
import { NavLink } from "react-router";
import { useCart } from "../../cart/hooks/useCart"
  
export function ProductCard({ id, title, category, price, image, tag }) {
  const { addToCart } = useCart();
console.log(Number(price))
    const getChipColor = () => {
      switch (tag) {
        case "Nuevo":
          return "primary";
        case "Oferta":
          return "error";
        case "Más Vendido":
          return "warning";
        default:
          return "default";
      }
    };
    const handleAddToCart = () => {
      addToCart({ id, title, category, price: Number(price), image });
    };
  
    return (
    /*<NavLink
      to={AppRoutes.loginPage}
      style={{ textDecoration: "none", color: "unset", flex: 1 }}
    >*/
      <Card sx={{ maxWidth: 280, borderRadius: 3, boxShadow: 3, minHeight: "100%" }}>
        {tag && (
          <Stack direction="row" justifyContent="flex-start" sx={{ p: 1 }}>
            <Chip label={tag} color={getChipColor()} size="small" />
          </Stack>
        )}
        <CardMedia component="img" height="180" image={image} alt={title} />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {category}
          </Typography>
          <Typography variant="h6" fontWeight="bold">
            {title}
          </Typography>
          <Typography variant="h6" color="primary" gutterBottom>
            ${price}
          </Typography>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            sx={{ borderRadius: 2, textTransform: "none" }}
            onClick={handleAddToCart}
          >
            Agregar al Carrito
          </Button>
        </CardContent>
      </Card>
      /*</NavLink>*/
    );
  }
  