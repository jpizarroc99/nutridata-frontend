import { useNavigate } from "react-router-dom";

import { AppRoutes } from "../../core/lib/AppRoutes";

export function RegisterButton() {
  const navigate = useNavigate();

  return (
    <IconButton color="primary" onClick={() => navigate(AppRoutes.registerpage)}>
      <span>Registrarse</span>
    </IconButton>
  );
}
