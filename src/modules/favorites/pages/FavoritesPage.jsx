// La ruta de importación del contexto es ahora relativa a su nueva ubicación.
import { Container, Typography, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import { ProductCard } from "../../home/components/ProductCardHomePage";
import { useFavorite } from "../hook/useFavorite";

export const FavoritesPage = () => {
  const { favorites } = useFavorite();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Mis Favoritos
      </Typography>
      {favorites.length === 0 ? (
        <Typography variant="h6" color="text.secondary">
          No tienes productos favoritos aún. ¡Explora la tienda y agrega algunos!
        </Typography>
      ) : (
        <Grid container spacing={isSmallScreen ? 2 : 4}>
          {favorites.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
              <ProductCard {...product} />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};
