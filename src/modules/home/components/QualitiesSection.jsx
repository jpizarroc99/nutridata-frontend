import { Box, Grid, Typography, IconButton } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import ImportContactsOutlinedIcon from "@mui/icons-material/ImportContactsOutlined";

export function QualitiesSection() {
  return (
    <Box sx={{ py: 2, px: 2 }}>
      <Grid container spacing={4} justifyContent="space-evenly">
        {/* Item 1 */}
        <Grid item xs={12} md={4} sx={{ textAlign: "center" }}>
          <IconButton
            sx={{
              backgroundColor: "primary.light",
              color: "primary.contrastText",
              padding: "16px",
              mb: 2,
              "&:hover": {
                backgroundColor: "primary.main",
                transform: "scale(1.1)"
              },
              transition: "all 0.2s ease-in-out"
            }}
          >
            <ShoppingCartOutlinedIcon fontSize="large" />
          </IconButton>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Envío Gratuito
          </Typography>
          <Typography variant="body2" color="text.secondary">
            En compras superiores a $100
          </Typography>
        </Grid>

        {/* Item 2 */}
        <Grid item xs={12} md={4} sx={{ textAlign: "center" }}>
          <IconButton
            sx={{
              backgroundColor: "secondary.light",
              color: "secondary.contrastText",
              padding: "16px",
              mb: 2,
              "&:hover": {
                backgroundColor: "secondary.main",
                transform: "scale(1.1)"
              },
              transition: "all 0.2s ease-in-out"
            }}
          >
            <PeopleAltIcon fontSize="large" />
          </IconButton>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Soporte Especializado
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Asesoría de nutricionistas expertos
          </Typography>
        </Grid>

        {/* Item 3 */}
        <Grid item xs={12} md={4} sx={{ textAlign: "center" }}>
          <IconButton
            sx={{
              backgroundColor: "success.light",
              color: "success.contrastText",
              padding: "16px",
              mb: 2,
              "&:hover": {
                backgroundColor: "success.main",
                transform: "scale(1.1)"
              },
              transition: "all 0.2s ease-in-out"
            }}
          >
            <ImportContactsOutlinedIcon fontSize="large" />
          </IconButton>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Recursos Actualizados
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Contenido basado en evidencia científica
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
