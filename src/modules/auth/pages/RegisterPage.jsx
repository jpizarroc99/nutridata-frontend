import { Container } from "@mui/material";

import { RegisterForm } from "../components/RegisterForm.jsx";

export function RegisterPage() {
  return (
    <Container sx={{ mt: 6 }}>
      <RegisterForm />
    </Container>
  );
}
