import { HealthAndSafety, Lightbulb, Diversity3 } from "@mui/icons-material";
import {
  Container,
  Typography,
  Box,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@mui/material";

const AboutUsPage = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        mt: 4,
        mb: 8,
        py: 4
      }}
    >
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: "bold" }}>
          Sobre Nosotros
        </Typography>
      </Box>

      <Box sx={{ mb: 6 }}>
        <Typography variant="body1" sx={{ fontSize: "1.1rem", lineHeight: 1.6 }}>
          En NutriD, somos un emprendimiento dedicado a la venta de productos nutricionales. Nuestro
          objetivo es ser tu aliado en el camino hacia un estilo de vida más saludable, ofreciendo
          productos de alta calidad que se adapten a tus necesidades.
        </Typography>
      </Box>

      <Grid container spacing={4} sx={{ mb: 6 }}>
        <Grid item xs={12} md={6}>
          <Box>
            <Typography
              variant="h4"
              component="h2"
              gutterBottom
              sx={{ fontWeight: "bold", color: "primary.main" }}
            >
              Misión
            </Typography>
            <Typography variant="body1">
              Ser la plataforma líder en el mercado de productos nutricionales, brindando acceso a
              un catálogo diverso y de alta calidad. Buscamos empoderar a nuestros clientes a través
              de la nutrición, y a la vez, ser una plataforma donde los nutricionistas puedan
              crecer, compartir su conocimiento y generar contenido de valor para la comunidad.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box>
            <Typography
              variant="h4"
              component="h2"
              gutterBottom
              sx={{ fontWeight: "bold", color: "primary.main" }}
            >
              Visión
            </Typography>
            <Typography variant="body1">
              Convertirnos en la empresa de referencia en el sector de la nutrición, reconocida no
              solo por la calidad de nuestros productos, sino también por nuestra comunidad
              innovadora. Aspiramos a ser el punto de encuentro donde profesionales de la nutrición
              y personas que buscan mejorar su salud, colaboren y se beneficien mutuamente.
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          sx={{ fontWeight: "bold", textAlign: "center" }}
        >
          Nuestros Valores
        </Typography>
        <List
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "center",
            gap: { xs: 2, md: 4 }
          }}
        >
          <ListItem sx={{ textAlign: "center", flexDirection: "column", alignItems: "center" }}>
            <ListItemIcon sx={{ minWidth: 0, mb: 1 }}>
              <Lightbulb sx={{ fontSize: 40, color: "info.main" }} />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Innovación
                </Typography>
              }
              secondary="Buscamos constantemente nuevas formas de mejorar y ofrecer lo mejor."
              sx={{ textAlign: "center" }}
            />
          </ListItem>
          <ListItem sx={{ textAlign: "center", flexDirection: "column", alignItems: "center" }}>
            <ListItemIcon sx={{ minWidth: 0, mb: 1 }}>
              <HealthAndSafety sx={{ fontSize: 40, color: "success.main" }} />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Calidad
                </Typography>
              }
              secondary="Nos comprometemos a ofrecer solo productos de la más alta calidad."
              sx={{ textAlign: "center" }}
            />
          </ListItem>
          <ListItem sx={{ textAlign: "center", flexDirection: "column", alignItems: "center" }}>
            <ListItemIcon sx={{ minWidth: 0, mb: 1 }}>
              <Diversity3 sx={{ fontSize: 40, color: "warning.main" }} />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Comunidad
                </Typography>
              }
              secondary="Fomentamos un espacio de crecimiento y apoyo mutuo."
              sx={{ textAlign: "center" }}
            />
          </ListItem>
        </List>
      </Box>
    </Container>
  );
};

export default AboutUsPage;
