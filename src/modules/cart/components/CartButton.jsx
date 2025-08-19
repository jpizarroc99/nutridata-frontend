import { ShoppingCart } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router";
import { useCart } from "../../cart/hooks/useCart";
import { AppRoutes } from "../../core/lib/AppRoutes";

export function CartButton() {
  const navigate = useNavigate();
  const { cart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <IconButton color="primary" onClick={() => navigate(AppRoutes.cartPage)}>
      <Badage badageContent={totalItems} color="error">
      <ShoppingCart />
      </Badage>
    </IconButton>
  );
}