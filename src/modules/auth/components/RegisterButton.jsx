import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { Button, IconButton } from "@mui/material";
import { useNavigate } from "react-router";

import { AppRoutes } from "../../core/lib/AppRoutes";

export function RegisterButton({ iconButton = false }) {
  const navigate = useNavigate();
  const goToPage = () => {
    navigate(AppRoutes.registerPage);
  };

  if (iconButton) {
    return (
      <IconButton color="primary" aria-label="Iniciar sesión" onClick={goToPage}>
        <PersonAddIcon />
      </IconButton>
    );
  }
  return (
    <Button
      fullWidth
      variant="contained"
      color="primary"
      onClick={goToPage}
      startIcon={<PersonAddIcon />}
    >
      Regístrate
    </Button>
  );
}
