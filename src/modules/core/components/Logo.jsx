import { Avatar, Button } from "@mui/material";
import { useNavigate } from "react-router";

import { AppRoutes } from "../lib/AppRoutes";

export function Logo() {
  const navigate = useNavigate();

  return (
    <Button
      sx={{ padding: 0, textTransform: "unset", color: "unset" }}
      variant="text"
      onClick={() => navigate(AppRoutes.homePage)}
    >
      <Avatar src="/nutridata-logo.png" alt="NutriData logo" />
      <h3>NutriData</h3>
    </Button>
  );
}
