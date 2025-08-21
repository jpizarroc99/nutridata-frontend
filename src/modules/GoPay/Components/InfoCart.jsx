import React from "react";
import { Button, Box, List, ListItem,ListItemText,Typography } from "@mui/material";
import { useCart } from "../hooks/useCart";

export default function CartInfo() {
  const { cart, getTotal } = useCart();

  return (
    <React.Fragment>
      {/* Total y botón ir a pagar */}
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Box>
          <Typography variant="subtitle2" sx={{ color: "text.secondary" }}>
            Total
          </Typography>
          <Typography variant="h5">{`$${getTotal().toLocaleString("es-CL")}`}</Typography>
        </Box>
        <Button
          variant="contained"
          color="primary"
          onClick={() => console.log("Ir a pagar")}
        >
          Ir a pagar
        </Button>
      </Box>

      {/* Lista de productos */}
      <List disablePadding>
        {cart.map((item) => (
          <ListItem key={item.id} sx={{ py: 1, px: 0 }}>
            <ListItemText
              sx={{ mr: 2 }}
              primary={`${item.title} x ${item.quantity}`}         
            />
            <Typography variant="body1" sx={{ fontWeight: "medium" }}>
              {`$${(item.price * item.quantity).toLocaleString("es-CL")}`} 
            </Typography>
          </ListItem>
        ))}
      </List>
    </React.Fragment>
  );
}