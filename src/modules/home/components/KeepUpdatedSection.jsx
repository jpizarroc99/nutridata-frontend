import { Box, Container, Typography, TextField, Button, useTheme } from "@mui/material";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

export function KeepUpdatedSection() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        py: 6,
        px: 2,
        backgroundColor: theme.palette.primary.main,
        color: "white"
      }}
    >
      <Container maxWidth="sm" sx={{ textAlign: "center" }}>
        <Typography
          variant="h7"
          component="h2"
          gutterBottom
          sx={{
            fontWeight: 700,
            mb: 2
          }}
        >
          Mantente Actualizado
        </Typography>

        <Typography
          variant="body2"
          sx={{
            mb: 4,
            opacity: 0.9,
            lineHeight: 1.6
          }}
        >
          Recibe las últimas novedades en equipos nutricionales, nuevos cursos ISAK y recursos
          profesionales directamente en tu email.
        </Typography>

        <Box
          component="form"
          sx={{
            display: "flex",
            gap: 2,
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <TextField
            type="email"
            placeholder="Tu email profesional"
            variant="outlined"
            size="small"
            sx={{
              flexGrow: 1,
              maxWidth: "300px",
              backgroundColor: "white",
              borderRadius: 2,
              "& .MuiOutlinedInput-root": {
                borderRadius: 2
              }
            }}
            InputProps={{
              startAdornment: (
                <EmailOutlinedIcon
                  sx={{
                    color: theme.palette.primary.main,
                    mr: 1
                  }}
                />
              )
            }}
          />
          <Button
            type="submit"
            variant="contained"
            size="small"
            sx={{
              px: 2,
              py: 1,
              backgroundColor: "white",
              color: theme.palette.primary.main,
              fontWeight: 600,
              borderRadius: 2,
              "&:hover": {
                backgroundColor: "grey.100",
                transform: "translateY(-2px)"
              },
              transition: "all 0.2s ease-in-out"
            }}
          >
            Suscribirse
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
