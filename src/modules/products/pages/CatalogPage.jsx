import CloseIcon from '@mui/icons-material/Close';
import FilterListIcon from '@mui/icons-material/FilterList';
import {
  Container,
  Grid,
  Typography,
  Box,
  Drawer,
  IconButton,
  useMediaQuery,
  useTheme,
  Button
} from '@mui/material';
import React from 'react';

import CatalogFilters from '../components/CatalogFilters';
import ProductGrid from '../components/ProductGrid';
import { useProducts } from '../hook/useProducts';

const CatalogPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileFiltersOpen, setMobileFiltersOpen] = React.useState(false);
  
  // Cargar productos y estado
  useProducts();

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom align="center" sx={{ fontWeight: 700, mb: 4 }}>
        Catálogo de Productos
      </Typography>
      
      <Typography variant="h6" align="center" color="text.secondary" sx={{ mb: 6 }}>
        Descubre todo lo que necesitas para tu práctica profesional
      </Typography>

      {/* Filtros móviles */}
      {isMobile && (
        <Box sx={{ mb: 3, display: 'flex', justifyContent: 'flex-end' }}>
          <Button
            variant="outlined"
            startIcon={<FilterListIcon />}
            onClick={() => setMobileFiltersOpen(true)}
          >
            Filtros
          </Button>
          <Drawer
            anchor="right"
            open={mobileFiltersOpen}
            onClose={() => setMobileFiltersOpen(false)}
          >
            <Box sx={{ width: 280, p: 2 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                <Typography variant="h6">Filtros</Typography>
                <IconButton onClick={() => setMobileFiltersOpen(false)}>
                  <CloseIcon />
                </IconButton>
              </Box>
              <CatalogFilters />
            </Box>
          </Drawer>
        </Box>
      )}

      {/* LAYOUT PRINCIPAL - Solución definitiva */}
      <Box sx={{ 
        display: 'flex', 
        flexDirection: { xs: 'column', md: 'row' },
        gap: 4 
      }}>
        {/* Filtros - 30% en desktop */}
        {!isMobile && (
          <Box sx={{ 
            width: { md: '30%' }, 
            maxWidth: { md: '350px' },
            flexShrink: 0 
          }}>
            <Box sx={{ 
              position: 'sticky', 
              top: 100,
              borderRight: `1px solid ${theme.palette.divider}`,
              pr: 3,
              py: 1
            }}>
              <CatalogFilters />
            </Box>
          </Box>
        )}

        {/* Productos - 70% en desktop */}
        <Box sx={{ 
          width: { md: '70%' }, 
          flexGrow: 1 
        }}>
          <ProductGrid />
        </Box>
      </Box>
    </Container>
  );
};

export default CatalogPage;