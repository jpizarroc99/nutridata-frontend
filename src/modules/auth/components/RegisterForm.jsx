import { Info, Visibility, VisibilityOff } from "@mui/icons-material";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LockOutlineIcon from "@mui/icons-material/LockOutline";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PersonIcon from "@mui/icons-material/Person";
import WorkIcon from "@mui/icons-material/Work";
import {
  Container,
  TextField,
  Button,
  Typography,
  Card,
  CardContent,
  Divider,
  InputAdornment,
  IconButton,
  MenuItem,
  Checkbox,
  FormControlLabel,
  Link
} from "@mui/material";
import React, { useState } from "react";

import { AppRoutes } from "../../core/lib/AppRoutes";

const initialState = {
  name: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  password: "",
  occupation: ""
};

export function RegisterForm({ onSubmit }) {
  const [form, setForm] = useState(initialState);
  const [_errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, _setShowConfirm] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [subscribe, setSubscribe] = useState(false);

  const validate = () => {
    let temp = {};
    temp.name = form.name ? "" : "Campo requerido";
    temp.lastName = form.lastName ? "" : "Campo requerido";
    temp.email = /\S+@\S+\.\S+/.test(form.email) ? "" : "Email inválido";
    temp.phoneNumber = form.phoneNumber ? "" : "Campo requerido";
    temp.password = form.password ? "" : "Campo requerido";
    temp.occupation = form.occupation ? "" : "Campo requerido";
    setErrors(temp);
    return Object.values(temp).every((x) => x === "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    if (validate()) {
      if (onSubmit) onSubmit(form);
    }
  };
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Card variant="outlined" sx={{ borderRadius: 3 }}>
        <CardContent>
          {/*Titulo*/}
          <Typography variant="h5" align="center" gutterBottom>
            Crear Cuenta
          </Typography>
          <Typography variant="body2" align="center" color="textSecondary" mb={3}>
            Únete a la comunidad de profesionales nutricionistas
          </Typography>

          <form style={{ display: "grid", gap: "1rem" }} onSubmit={handleSubmit}>
            <div style={{ display: "flex", gap: "1rem" }}>
              {/* Nombre */}
              <TextField
                required
                fullWidth
                label="Nombre"
                name="name"
                onChange={handleChange}
                placeholder="Tu Nombre"
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <PersonIcon />
                      </InputAdornment>
                    )
                  }
                }}
              />

              {/* Apellido */}
              <TextField
                required
                fullWidth
                label="Apellido"
                name="lastName"
                onChange={handleChange}
                placeholder="Tu Apellido"
                slotProps={{
                  input: {
                    startAdornment: <InputAdornment psition="start"> </InputAdornment>
                  }
                }}
              />
            </div>
            {/* Email */}
            <TextField
              required
              fullWidth
              placeholder=" tu@email.com"
              label="Email"
              name="email"
              type="email"
              onChange={handleChange}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment psition="start">
                      <MailOutlineIcon />
                    </InputAdornment>
                  )
                }
              }}
            />

            {/* Teléfono */}
            <TextField
              required
              fullWidth
              placeholder=" (+569) 1234-5678"
              label="Teléfono"
              name="phoneNumber"
              type="tel"
              onChange={handleChange}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment psition="start">
                      <LocalPhoneIcon />
                    </InputAdornment>
                  )
                }
              }}
            />

            {/*Sección de infromacón profesional*/}
            <Divider>
              <Info fontSize="samall" sx={{ mr: 1 }} />
              Información Profesional
            </Divider>

            {/* Ocupación */}
            <TextField
              required
              select
              fullWidth
              label="Ocupación"
              name="occupation"
              onChange={handleChange}
              defaultValue=""
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment psition="start">
                      <WorkIcon />
                    </InputAdornment>
                  )
                }
              }}
              sx={{ mb: 2 }}
            >
              <MenuItem value="nutricionista">Nutricionista</MenuItem>
              <MenuItem value="estudiante-nutricion">Médico Especialista</MenuItem>
              <MenuItem value="estudiante">Estudiante</MenuItem>
              <MenuItem value="otro">Otro</MenuItem>
            </TextField>
            {/* Contraseña */}
            <TextField
              required
              fullWidth
              label="Contraseña"
              name="password"
              onChange={handleChange}
              type={showPassword ? "text" : "password"}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment psition="start">
                      <LockOutlineIcon />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  )
                }
              }}
              sx={{ mb: 2 }}
            ></TextField>
            {/* Confirmar Contraseña */}
            <TextField
              required
              fullWidth
              label="Confirmar Contraseña"
              name="confirmPassword"
              onChange={handleChange}
              type={showConfirm ? "text" : "password"}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment psition="start">
                      <LockOutlineIcon />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  )
                }
              }}
              sx={{ mb: 1 }}
            />
            <Typography
              maxWidth="20rem"
              variant="caption"
              color="textSecondary"
              display="block"
              mb={2}
              marginInline="auto"
              textAlign={"center"}
            >
              La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula y un
              número.
            </Typography>

            {/* CheckBoxes */}
            <div style={{ display: "grid", gap: "0.3rem" }}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={acceptedTerms}
                    onChange={(e) => setAcceptedTerms(e.target.checked)}
                  />
                }
                label={
                  <Typography variant="body2">
                    Acepto los <Link href={AppRoutes.termsAndConditionsPage}>términos y condiciones</Link> y la{" "}
                    <Link href={AppRoutes.privacyPolicyPage}>política de privacidad</Link>. *
                  </Typography>
                }
              />
              <FormControlLabel
                control={
                  <Checkbox checked={subscribe} onChange={(e) => setSubscribe(e.target.checked)} />
                }
                label="Quiero recibir actualizaciones y noticias por correo electrónico."
              />
            </div>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 2, mb: 2, borderRadius: 2, textTransform: "unset" }}
              disabled={!acceptedTerms}
            >
              Crear Cuenta
            </Button>
          </form>
          {/* Link a la página de inicio de sesión */}
          <Typography variant="body2" align="center">
            ¿Ya tienes una cuenta?{" "}
            <Link href={AppRoutes.loginPage} underline="hover">
              Iniciar sesión aquí
            </Link>
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}
