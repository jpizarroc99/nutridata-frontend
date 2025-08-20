import { Container } from "@mui/material";

import { LoginForm } from "../components/LoginForm";

export function LoginPage() {
  return (
    <Container sx={{ my: 6 }}>
      <LoginForm />
    </Container>
  );
}
