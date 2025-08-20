import { Grid, Box, Pagination, Typography } from '@mui/material';
import React from 'react';

import {ProductCard} from '../../home/components/ProductCardHomePage';// AAAAAAA
import { useProductContext } from '../context/ProductContext';

const ProductGrid = () => {
  const { filteredProducts, filters, setFilter, loading } = useProductContext();
  const productsPerPage = 8;

  const handlePageChange = (event, value) => {
    setFilter({ currentPage: value });
    window.scrollTo(0, 0);
  };

  // Calcular productos para la página actual
  const indexOfLastProduct = filters.currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  if (loading) {
    return <Typography>Cargando productos...</Typography>;
  }

  return (
    <Box>
      <Typography variant="subtitle1" sx={{ mb: 2 }}>
        {filteredProducts.length} producto{filteredProducts.length !== 1 ? 's' : ''} encontrado{filteredProducts.length !== 1 ? 's' : ''}
      </Typography>
      
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)', // 1 columna en móvil
            sm: 'repeat(2, 1fr)', // 2 columnas en tablet
            md: 'repeat(2, 1fr)', // 2 columnas en desktop pequeño
            lg: 'repeat(3, 1fr)', // 3 columnas en desktop
            xl: 'repeat(4, 1fr)', // 4 columnas en desktop grande
          },
          gap: 3,
          width: '100%',
        }}
      >
        {currentProducts.map(product => (
          <Box 
            key={product.id}
            sx={{ 
              width: '100%',
              minHeight: '400px',
            }}
          >
            <ProductCard
              title={product.name}
              category={product.category}
              price={`$${product.price.toFixed(2)}`}
              image={product.image}
              tag={product.tag}
            />
          </Box>
        ))}
      </Box>

      {totalPages > 1 && (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 6 }}>
          <Pagination
            count={totalPages}
            page={filters.currentPage}
            onChange={handlePageChange}
            color="primary"
          />
        </Box>
      )}
    </Box>
  );
};

export default ProductGrid;