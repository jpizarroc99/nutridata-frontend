import { IconButton, List, ListItem, ListItemText, Divider, Typography, Button, Box } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import React from "react";

import { useCart } from "../hooks/useCart";

export const CartSummary = () => {
  const { cart, getTotal, removeFromCart, updateQuantity } = useCart();
  

  if (cart.length === 0) {
    return <Typography variant="h6">El carrito está vacío</Typography>;
  }

  return (
    <List>
      {cart.map((item) => (
        <div key={item.id}>
          <ListItem
            secondaryAction={
              <IconButton variant="outlined" color="error" onClick={() => removeFromCart(item.id)}>
              <DeleteIcon/>
              </IconButton>
            }
          >
            <ListItemText
              primary={item.title}
              secondary={`Cantidad: ${item.quantity} x $${item.price.toLocaleString("es-CL")}`}
            />
    
            {/* regulador de cantidad */}
            <Box className="removeQuantity" display="flex" alignItems="center" m1={2}>
              <Button
              className="quantityButton" onClick={() => updateQuantity(item.id, item.quantity - 1)}
              disabled={item.quantity <= 1}
              style={{
                border: "1px solid #ccc",
                borderRadius:"4px 0 0 4px",
                padding:"2px 6px",
                cursor:"pointer",
                background:"#fff",
                fontSize:"0.9rem",
                minWidth:"24px",
                height:"24px"
              }}
              >
                -
              </Button>
              <span
              className="showQuantityCart"
              style={{padding:"0 8px",
              border: "1px solid #ccc",
              background:"#fff",
              padding:" 0.8px 6px",
              fontSize:"0.9rem"
            }}
              >
              {item.quantity}
              </span>
              <Button
              className="addQuantity" 
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
              style={{
                border:"1px solid #ccc",
                borderRadius:"0 4px 4px 0",
                padding:" 2px 6px",
                cursor:"pointer",
                background:"#fff",
                fontSize:"0.9rem",
                minWidth:"24px",
                height:"24px"
              }}
              >
                +
              </Button>
            </Box>
          </ListItem>
          <Divider />
        </div>
      ))}
      <Box
      display="flex"
      alignContent="center"
      justifyContent="space-between"
      mt={2}
      px={1}
      >
      <Typography variant="h6" sx={{ mt: 2 }}>
        <strong>Total: ${getTotal().toLocaleString("es-CL")}</strong>
      </Typography>
      <Button variant="contained" color="primary">
      Ir a pagar
      </Button>
      </Box>
    </List>
  );
};
