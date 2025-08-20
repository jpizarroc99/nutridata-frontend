import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import {
  TextField,
  Button,
  Typography,
  CircularProgress,
  InputAdornment,
  Container,
  Card,
  CardContent
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router";

import { AppRoutes } from "../../core/lib/AppRoutes";
import { useAuth } from "../hook/useAuth";

export function LoginForm() {
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = Object.fromEntries(new FormData(event.currentTarget));

    setLoading(true);
    setError(null);

    // Aquí va la llamada a tu API de autenticación
    try {
      const loginResult = await login(formData);

      console.log(loginResult);
    } catch (err) {
      // Si hay un error
      console.error(err.message);
      setError("Usuario o contraseña inválidos.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Card variant="outlined" sx={{ borderRadius: 3 }}>
        <CardContent>
          <Typography variant="h5" align="center" gutterBottom>
            Iniciar Sesión
          </Typography>
          <Typography variant="body2" align="center" color="textSecondary" mb={3}>
            Accede a tu cuenta para continuar
          </Typography>
          <form onSubmit={handleSubmit} style={{ display: "grid", gap: "1rem" }}>
            <TextField
              label="Correo Electrónico"
              name="email"
              variant="outlined"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              fullWidth
              placeholder="Tu@email.com"
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon />
                    </InputAdornment>
                  )
                }
              }}
            />

            <TextField
              label="Contraseña"
              name="password"
              variant="outlined"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              fullWidth
              placeholder="Tu contraseña"
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockIcon />
                    </InputAdornment>
                  )
                }
              }}
            />

            {error && (
              <Typography color="error" align="center">
                {error}
              </Typography>
            )}

            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={loading}
              fullWidth
              sx={{ mt: 1, textTransform: "unset" }}
            >
              {loading ? <CircularProgress size={20} /> : "Iniciar Sesión"}
            </Button>
            <Typography variant="body2" align="center">
              ¿No tienes una cuenta? <Link to={AppRoutes.registerPage}>Registrate aquí</Link>
            </Typography>
          </form>
        </CardContent>
      </Card>
    </Container>
  );
}
