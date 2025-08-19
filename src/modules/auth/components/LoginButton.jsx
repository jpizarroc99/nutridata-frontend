import { ShoppingCart } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router";

import { AppRoutes } from "../../core/lib/AppRoutes";

export function LoginButton() {
  const navigate = useNavigate();

  return (
    <IconButton color="primary" onClick={() => navigate(AppRoutes.loginPage)}>
      <ShoppingCart />
    </IconButton>
  );
}
