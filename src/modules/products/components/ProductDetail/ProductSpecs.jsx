import React from "react";
import { Box, Typography, Paper, Grid, Divider } from "@mui/material";

export const ProductSpecs = ({ product }) => {
  // Datos de ejemplo para las especificaciones
  const specifications = [
    { label: "Categoría", value: product.category },
    { label: "Marca", value: "NutriPro" },
    { label: "Modelo", value: "NP-2024" },
    { label: "Material", value: "Acero inoxidable" },
    { label: "Garantía", value: "2 años" },
    { label: "Peso", value: "2.5 kg" },
    { label: "Dimensiones", value: "30 x 20 x 15 cm" },
    { label: "Origen", value: "Alemania" }
  ];

  const features = [
    "Precisión certificada ISO",
    "Display digital LCD",
    "Memoria para 100 mediciones",
    "Conexión Bluetooth",
    "Aplicación móvil incluida",
    "Batería recargable"
  ];

  return (
    <Box>
      {/* Descripción completa */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h5" gutterBottom>
          Descripción del Producto
        </Typography>
        <Typography variant="body1" paragraph>
          {product.description}
        </Typography>
        <Typography variant="body1">
          Este equipo profesional está diseñado específicamente para nutricionistas que requieren
          máxima precisión en sus mediciones. Fabricado con los más altos estándares de calidad,
          incluye certificación ISAK y garantía de por vida.
        </Typography>
      </Paper>

      {/* Especificaciones técnicas */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h5" gutterBottom>
          Especificaciones Técnicas
        </Typography>
        <Grid container spacing={2}>
          {specifications.map((spec, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography variant="body2" color="text.secondary">
                  {spec.label}:
                </Typography>
                <Typography variant="body2" fontWeight="medium">
                  {spec.value}
                </Typography>
              </Box>
              {index < specifications.length - 1 && <Divider sx={{ my: 1 }} />}
            </Grid>
          ))}
        </Grid>
      </Paper>

      {/* Características */}
      <Paper sx={{ p: 3 }}>
        <Typography variant="h5" gutterBottom>
          Características Principales
        </Typography>
        <Grid container spacing={2}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box
                  sx={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    backgroundColor: "primary.main",
                    mr: 2
                  }}
                />
                <Typography variant="body2">{feature}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Box>
  );
};
