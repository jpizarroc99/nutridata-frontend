import { Box, Grid, Pagination, Typography } from "@mui/material";

import { ProductCard } from "../../home/components/ProductCardHomePage"; // AAAAAAA
import { useProductContext } from "../../products/context/ProductContext";

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
    <>
      {/* Texto arriba del grid */}
      <Typography 
        variant="subtitle1" 
        sx={{ 
          mb: 3,
          textAlign: 'center',
          width: '100%'
        }}
      >
        {filteredProducts.length} producto{filteredProducts.length !== 1 ? 's' : ''} encontrado{filteredProducts.length !== 1 ? 's' : ''}
      </Typography>
  
      {/* Grid centrado */}
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'center', 
        width: '100%',
        px: { xs: 2, sm: 3 } 
      }}>
        <Grid 
          container 
          spacing={3} 
          sx={{ 
            alignItems: 'stretch',
            justifyContent: 'center',
            maxWidth: '1400px',
            width: '100%'
          }}
        >
          {currentProducts.map((product, index) => (
            <Grid 
              item 
              xs={12} 
              sm={6} 
              md={4} 
              lg={3}
              key={product.id || `product-${index}`}
              sx={{ 
                display: 'flex',
                justifyContent: 'center',
                width: {
                  xs: '100%',
                  sm: 'calc(50% - 1px)',
                  md: 'calc(33.333% - 16px)', 
                  lg: 'calc(25% - 18px)'
                },
                minWidth: '240px', // Ancho mínimo uniforme
                maxWidth: '340px', // Ancho máximo uniforme
                flex: '0 0 auto' // No crece ni se encoge
              }}
            >
              {/* Contenedor para forzar ancho consistente */}
              <Box sx={{ width: '100%', height: '100%' }}>
                <ProductCard
                  id={product.id}
                  title={product.title || product.name}
                  category={product.category}
                  price={product.price}
                  image={product.image}
                  tag={product.tag}
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
  
      {/* Paginación */}
      {totalPages > 1 && (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 6, width: '100%' }}>
          <Pagination
            count={totalPages}
            page={filters.currentPage}
            onChange={handlePageChange}
            color="primary"
          />
        </Box>
      )}
    </>
  );
};

export default ProductGrid;
