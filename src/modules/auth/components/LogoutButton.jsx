import LogoutIcon from "@mui/icons-material/Logout";
import { Button, IconButton, Tooltip } from "@mui/material";

import { useAuth } from "../hook/useAuth";

export function LogoutButton({ iconButton = false }) {
  const { logout } = useAuth();

  const buttonLabel = "Cerrar sesión";

  if (iconButton) {
    return (
      <Tooltip title={buttonLabel}>
        <IconButton color="error" aria-label={buttonLabel} onClick={logout}>
          <LogoutIcon />
        </IconButton>
      </Tooltip>
    );
  }

  return (
    <Button fullWidth variant="contained" color="error" onClick={logout} startIcon={<LogoutIcon />}>
      {buttonLabel}
    </Button>
  );
}
