import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { Button, IconButton, Tooltip } from "@mui/material";
import { useNavigate } from "react-router";

import { AppRoutes } from "../../core/lib/AppRoutes";

export function RegisterButton({ iconButton = false }) {
  const navigate = useNavigate();

  const goToPage = () => {
    navigate(AppRoutes.registerPage);
  };

  const buttonLabel = "Regístrate";

  if (iconButton) {
    return (
      <Tooltip title={buttonLabel}>
        <IconButton color="primary" aria-label={buttonLabel} onClick={goToPage}>
          <PersonAddIcon />
        </IconButton>
      </Tooltip>
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
      {buttonLabel}
    </Button>
  );
}
