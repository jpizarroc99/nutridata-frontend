import {
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  Email,
  Phone,
  LocationOn,
  Security,
  Analytics,
  Favorite
} from "@mui/icons-material";
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  TextField,
  Button,
  IconButton,
  Avatar
} from "@mui/material";

import { AppRoutes } from "../lib/AppRoutes";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        background: "linear-gradient(135deg, #4c1d95 0%, #7c3aed 50%, #3730a3 100%)",
        color: "white",
        mt: "auto",
        pt: 6,
        pb: 0
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} sx={{ mb: 4 }}>
          {/* Company Info */}
          <Grid item xs={12} md={3}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <Typography
                variant="h5"
                component="h3"
                sx={{
                  fontWeight: "bold",
                  background: "linear-gradient(45deg, #e879f9, #f9a8d4)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  display: "flex",
                  alignItems: "center"
                }}
              >
                <Avatar
                  src="/nutridata-logo.png"
                  alt="NutriData logo"
                  sx={{
                    mr: 1,
                    width: 60, // <-- Valor ajustado para un logo más grande
                    height: 60 // <-- Valor ajustado para un logo más grande
                  }}
                />
                NutriData
              </Typography>
            </Box>

            <Typography variant="body2" sx={{ color: "white", mb: 2, lineHeight: 1.6 }}>
              Plataforma profesional diseñada para nutricionistas y profesionales de la salud.
              Gestiona productos, ventas y usuarios de manera eficiente.
            </Typography>

            <Box sx={{ display: "flex", gap: 1 }}>
              {[
                { icon: <Facebook />, href: "#" },
                { icon: <Twitter />, href: "#" },
                { icon: <Instagram />, href: "#" },
                { icon: <LinkedIn />, href: "#" }
              ].map((social, index) => (
                <IconButton
                  key={index}
                  href={social.href}
                  sx={{
                    backgroundColor: "rgba(255,255,255,0.1)",
                    color: "white",
                    "&:hover": {
                      backgroundColor: "rgba(255,255,255,0.2)",
                      transform: "scale(1.1)"
                    },
                    transition: "all 0.3s"
                  }}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Box>
          </Grid>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              flexWrap: "wrap",
              gap: "1rem"
            }}
          >
            {/* Services */}
            <Grid item xs={12} md={2}>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Analytics sx={{ mr: 1, color: "white" }} />
                <Typography variant="h6" sx={{ color: "white", fontWeight: 600 }}>
                  Servicios
                </Typography>
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                {[
                  "Gestión de Productos",
                  "Sistema de Ventas",
                  "Administración de Usuarios",
                  "Reportes Nutricionales"
                ].map((service, index) => (
                  <Link
                    key={index}
                    href="#"
                    sx={{
                      color: "white",
                      textDecoration: "none",
                      fontSize: "0.875rem",
                      "&:hover": {
                        color: "white",
                        pl: 1
                      },
                      transition: "all 0.3s"
                    }}
                  >
                    {service}
                  </Link>
                ))}
              </Box>
            </Grid>

            {/* Quick Links */}
            <Grid item xs={12} md={2}>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Typography variant="h6" sx={{ color: "white", fontWeight: 600 }}>
                  👥 Enlaces Rápidos
                </Typography>
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                {[
                  {
                    linkName: "Inicio",
                    linkUrl: AppRoutes.homePage
                  },
                  {
                    linkName: "Sobre Nosotros",
                    linkUrl: AppRoutes.aboutUsPage
                  },
                  {
                    linkName: "Soporte",
                    linkUrl: "#"
                  },
                  {
                    linkName: "Blog",
                    linkUrl: "#"
                  }
                ].map((link, index) => (
                  <Link
                    key={index}
                    href={link.linkUrl}
                    sx={{
                      color: "white",
                      textDecoration: "none",
                      fontSize: "0.875rem",
                      "&:hover": {
                        color: "white",
                        pl: 1
                      },
                      transition: "all 0.3s"
                    }}
                  >
                    {link.linkName}
                  </Link>
                ))}
              </Box>
            </Grid>

            {/* Contact Info */}
            <Grid item xs={12} md={5}>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Email sx={{ mr: 1, color: "white" }} />
                <Typography variant="h6" sx={{ color: "white", fontWeight: 600 }}>
                  Contacto
                </Typography>
              </Box>

              <Box sx={{ mb: 3 }}>
                <Box sx={{ display: "flex", alignItems: "center", mb: 1.5, color: "white" }}>
                  <Phone sx={{ mr: 2, fontSize: "1rem" }} />
                  <Typography variant="body2">+56 9 1234 5678</Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", mb: 1.5, color: "white" }}>
                  <Email sx={{ mr: 2, fontSize: "1rem" }} />
                  <Typography variant="body2">info@nutridata.com</Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "flex-start", color: "white" }}>
                  <LocationOn sx={{ mr: 2, fontSize: "1rem", mt: 0.2 }} />
                  <Typography variant="body2">
                    Santiago, Chile
                    <br />
                    Región Metropolitana
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </div>
        </Grid>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            flexWrap: "wrap",
            gap: "1rem",
            borderTop: "1px solid rgba(255,255,255,0.1)",
            alignItems: "center"
          }}
        >
          {/* Features Banner */}
          <Box sx={{ pt: 3, mb: 4 }}>
            <Grid container spacing={3}>
              {[
                {
                  icon: <Favorite />,
                  title: "Para Profesionales",
                  desc: "Diseñado para nutricionistas"
                }
              ].map((feature, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <Box sx={{ display: "flex", alignItems: "center", color: "white" }}>
                    <Box
                      sx={{
                        backgroundColor: "rgba(255,255,255,0.1)",
                        p: 1,
                        borderRadius: 1,
                        mr: 2,
                        display: "flex"
                      }}
                    >
                      {feature.icon}
                    </Box>
                    <Box>
                      <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 0.5 }}>
                        {feature.title}
                      </Typography>
                      <Typography variant="caption" sx={{ color: "white" }}>
                        {feature.desc}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
          {/* Newsletter */}
          <Box>
            <Typography variant="subtitle2" sx={{ color: "white", mb: 1, fontWeight: 600 }}>
              Newsletter
            </Typography>
            <Box sx={{ display: "flex" }}>
              <TextField
                size="small"
                placeholder="Tu email"
                variant="outlined"
                sx={{
                  flex: 1,
                  "& .MuiOutlinedInput-root": {
                    backgroundColor: "rgba(255,255,255,0.1)",
                    color: "white",
                    borderRadius: "4px 0 0 4px",
                    "& fieldset": {
                      borderColor: "rgba(255,255,255,0.2)"
                    },
                    "&:hover fieldset": {
                      borderColor: "rgba(255,255,255,0.3)"
                    }
                  },
                  "& .MuiOutlinedInput-input::placeholder": {
                    color: "white",
                    opacity: 1
                  }
                }}
              />
              <Button
                variant="contained"
                sx={{
                  background: "linear-gradient(45deg, #7c3aed, #ec4899)",
                  borderRadius: "0 4px 4px 0",
                  minWidth: "auto",
                  px: 2,
                  "&:hover": {
                    background: "linear-gradient(45deg, #6d28d9, #db2777)"
                  }
                }}
              >
                <Email fontSize="small" />
              </Button>
            </Box>
          </Box>
        </div>
      </Container>

      {/* Bottom Bar */}
      <Box
        sx={{
          backgroundColor: "rgba(0,0,0,0.2)",
          borderTop: "1px solid rgba(255,255,255,0.1)",
          py: 2
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 2
            }}
          >
            <Typography variant="body2" sx={{ color: "white" }}>
              © {currentYear} Nutridata. Todos los derechos reservados.
            </Typography>
            <Box sx={{ display: "flex", gap: 3 }}>
              {["Términos de Servicio", "Política de Privacidad", "Cookies"].map((link, index) => (
                <Link
                  key={index}
                  href="#"
                  sx={{
                    color: "white",
                    textDecoration: "none",
                    fontSize: "0.875rem",
                    "&:hover": {
                      color: "white"
                    }
                  }}
                >
                  {link}
                </Link>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
