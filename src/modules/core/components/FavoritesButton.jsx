import { Favorite } from "@mui/icons-material";
import { IconButton, Tooltip } from "@mui/material";
import { useNavigate } from "react-router";

import { AppRoutes } from "../lib/AppRoutes";

export function FavoritesButton() {
  const navigate = useNavigate();

  return (
    <Tooltip title="Favoritos">
      <IconButton color="primary" onClick={() => navigate(AppRoutes.favoritesPage)}>
        <Favorite />
      </IconButton>
    </Tooltip>
  );
}
