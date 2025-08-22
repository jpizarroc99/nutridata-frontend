// La ruta de importación del contexto es ahora relativa a su nueva ubicación.
// import { Container, Typography, Grid } from "@mui/material";
// import { useTheme } from "@mui/material/styles";
// import useMediaQuery from "@mui/material/useMediaQuery";

// import { ProductCard } from "../../home/components/ProductCardHomePage";
// import { useFavorite } from "../contexts/FavoriteContext";

// export const FavoritesPage = () => {
//   const { favorites } = useFavorite();
//   const theme = useTheme();
//   const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

//   return (
//     <Container sx={{ mt: 4 }}>
//       <Typography variant="h4" component="h1" gutterBottom>
//         Mis Favoritos
//       </Typography>
//       {favorites.length === 0 ? (
//         <Typography variant="h6" color="text.secondary">
//           No tienes productos favoritos aún. ¡Explora la tienda y agrega algunos!
//         </Typography>
//       ) : (
//         <Grid container spacing={isSmallScreen ? 2 : 4}>
//           {favorites.map((product) => (
//             <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
//               <ProductCard {...product} />
//             </Grid>
//           ))}
//         </Grid>
//       )}
//     </Container>
//   );
// };

import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Box,
  Button
} from '@mui/material';
import { useFavorites } from '../hook/useFavoriteLogic';
import { ProductCard } from '../../home/components/ProductCardHomePage';

export function FavoritesPage() {
  const { items, clearFavorites } = useFavorites();

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Typography variant="h3" component="h1">
          Mis Favoritos
        </Typography>
        
        {items && items.length > 0 && (
          <Button variant="outlined" color="error" onClick={clearFavorites}>
            Limpiar Favoritos
          </Button>
        )}
      </Box>
      
      {!items || items.length === 0 ? (
        <Typography variant="h6" color="text.secondary" align="center">
          No tienes productos favoritos aún.
        </Typography>
      ) : (
        <>
          {/* Texto de cantidad */}
          <Typography 
            variant="subtitle1" 
            sx={{ mb: 3, textAlign: 'center', width: '100%' }}
          >
            {items.length} producto{items.length !== 1 ? 's' : ''} favorito{items.length !== 1 ? 's' : ''}
          </Typography>

          {/* CSS Grid para máxima consistencia con ProductGrid */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: 'repeat(1, minmax(280px, 1fr))',
                sm: 'repeat(2, minmax(280px, 1fr))',
                md: 'repeat(3, minmax(280px, 1fr))',
                lg: 'repeat(4, minmax(280px, 1fr))',
              },
              gap: 3,
              width: '100%',
              justifyItems: 'center',
              alignItems: 'stretch',
              px: { xs: 2, sm: 3, md: 4 }
            }}
          >
            {items.map((product, index) => (
              <Box 
                key={product.id || `favorite-${index}`}
                sx={{ 
                  width: '100%',
                  maxWidth: '320px',
                  height: '100%'
                }}
              >
                <ProductCard
                  id={product.id}
                  title={product.title || product.name}
                  category={product.category}
                  price={product.price}
                  image={product.image}
                  tag={product.tag}
                />
              </Box>
            ))}
          </Box>
        </>
      )}
    </Container>
  );
}
