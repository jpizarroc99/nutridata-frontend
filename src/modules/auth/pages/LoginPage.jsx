import { Container, Box } from "@mui/material";

import LoginForm from "../components/LoginForm"; // Asegúrate de que la ruta sea correcta

export function LoginPage() {
  return (
    <Container
      sx={{
        mt: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      <LoginForm />
    </Container>
  );
}
