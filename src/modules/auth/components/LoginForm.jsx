import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import {
  TextField,
  Button,
  Box,
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
// Puedes usar un hook de autenticación real aquí
// import useAuth from '../hook/useAuth';

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    // Aquí va la llamada a tu API de autenticación
    try {
      // Simulación de una llamada a la API
      const response = await new Promise((resolve, reject) => {
        setTimeout(() => {
          if (email === "test@example.com" && password === "password123") {
            resolve({ success: true, token: "fake-token-123" });
          } else {
            reject(new Error("Credenciales inválidas"));
          }
        }, 1500);
      });

      // Si la autenticación es exitosa
      console.log("Login exitoso:", response);
      // Guarda el token, redirige, etc.
    } catch (err) {
      // Si hay un error
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Card variant="outlined" sx={{ borderRadius: 3 }}>
        <CardContent>
          <Typography variant="h5" align="center" gutterBottom>
            Inciar Sesión
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

export default LoginForm;
