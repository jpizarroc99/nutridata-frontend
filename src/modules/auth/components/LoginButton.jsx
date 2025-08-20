import LoginIcon from "@mui/icons-material/Login";
import { Button, IconButton } from "@mui/material";
import { useNavigate } from "react-router";

import { AppRoutes } from "../../core/lib/AppRoutes";

export function LoginButton({ iconButton }) {
  const navigate = useNavigate();

  function goToPage() {
    navigate(AppRoutes.loginPage);
  }

  if (iconButton) {
    return (
      <IconButton color="primary" aria-label="Iniciar sesión" onClick={goToPage}>
        <LoginIcon />
      </IconButton>
    );
  }

  return (
    <Button
      fullWidth
      variant="outlined"
      color="primary"
      onClick={goToPage}
      startIcon={<LoginIcon />}
    >
      Iniciar Sesión
    </Button>
  );
}
