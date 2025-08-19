import React from "react";
import { useCart } from "../hooks/useCart";
import { Button, List, ListItem, ListItemText, Divider, Typography } from "@mui/material";

export const CartSummary = () => {
  const { cart, getTotal, removeFromCart } = useCart();

  if (cart.length === 0) {
    return <Typography variant="h6">El carrito está vacío</Typography>;
  }

  return (
    <List>
      {cart.map((item) => (
        <div key={item.id}>
          <ListItem
            secondaryAction={
              <Button
                variant="outlined"
                color="error"
                onClick={() => removeFromCart(item.id)}
              >
                Eliminar
              </Button>
            }
          >
            <ListItemText
              primary={item.name}
              secondary={`Cantidad: ${item.quantity} x $${item.price}`}
            />
          </ListItem>
          <Divider />
        </div>
      ))}
      <Typography variant="h6" sx={{ mt: 2 }}>
        Total: ${getTotal()}
      </Typography>
    </List>
  );
};