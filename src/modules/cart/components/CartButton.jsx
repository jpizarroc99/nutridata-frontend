import { ShoppingCart } from "@mui/icons-material";
import { Badge, IconButton } from "@mui/material";
import { useNavigate } from "react-router";

import { AppRoutes } from "../../core/lib/AppRoutes";
import { useCart } from "../hooks/useCart";

export function CartButton() {
  const navigate = useNavigate();
  const { cart } = useCart();

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <IconButton color="primary" onClick={() => navigate(AppRoutes.cartPage)}>
      <Badge badgeContent={totalItems} color="error">
      <ShoppingCart />
      </Badge>
    </IconButton>
  );
}