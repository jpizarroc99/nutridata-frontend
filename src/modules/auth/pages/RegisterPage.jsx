import { Container } from "@mui/material";

import { RegisterForm } from "../components/RegisterForm.jsx";

export function RegisterPage() {
  return (
    <Container sx={{ my: 6 }}>
      <RegisterForm />
    </Container>
  );
}
