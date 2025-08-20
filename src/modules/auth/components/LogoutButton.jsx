import LogoutIcon from "@mui/icons-material/Logout";
import { Button, IconButton } from "@mui/material";

import { useAuth } from "../hook/useAuth";

export function LogoutButton({ iconButton = false }) {
  const { logout } = useAuth();

  if (iconButton) {
    return (
      <IconButton color="error" aria-label="Cerrar sesión" onClick={logout}>
        <LogoutIcon />
      </IconButton>
    );
  }

  return (
    <Button fullWidth variant="contained" color="error" onClick={logout} startIcon={<LogoutIcon />}>
      Cerrar sesión
    </Button>
  );
}
