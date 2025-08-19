import LoginIcon from "@mui/icons-material/Login";
import { Button } from "@mui/material";
import { useNavigate } from "react-router";

import { AppRoutes } from "../../core/lib/AppRoutes";

export function LoginButton() {
  const navigate = useNavigate();

  return (
    <Button
      fullWidth
      variant="outlined"
      color="primary"
      onClick={() => navigate(AppRoutes.loginPage)}
      startIcon={<LoginIcon />}
    >
      Iniciar Sesión
    </Button>
  );
}
