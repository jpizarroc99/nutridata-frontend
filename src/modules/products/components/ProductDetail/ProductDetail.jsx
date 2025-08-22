import React from "react";
import { Grid, Box, Breadcrumbs, Link, Typography } from "@mui/material";
import { NavigateNext } from "@mui/icons-material";

import { ProductGallery } from "../ProductDetail/ProductGallery";
import { ProductInfo } from "../ProductDetail/ProductInfo";
import { ProductSpecs } from "../ProductDetail/ProductSpecs";

export const ProductDetail = ({ product }) => {
  return (
    <Box>
      {/* Migas de pan */}
      <Breadcrumbs
        separator={<NavigateNext fontSize="small" />}
        aria-label="breadcrumb"
        sx={{ mb: 3 }}
      >
        <Link color="inherit" href="/">
          Inicio
        </Link>
        <Link color="inherit" href="/catalog">
          Catálogo
        </Link>
        <Link color="inherit" href={`/category/${product.category}`}>
          {product.category}
        </Link>
        <Typography color="text.primary">{product.title}</Typography>
      </Breadcrumbs>

      {/* Grid principal */}
      <Grid container spacing={4}>
        {/* Galería de imágenes */}
        <Grid item xs={12} md={6}>
          <ProductGallery product={product} />
        </Grid>

        {/* Información del producto */}
        <Grid item xs={12} md={6}>
          <ProductInfo product={product} />
        </Grid>

        {/* Especificaciones y descripción */}
        <Grid item xs={12}>
          <ProductSpecs product={product} />
        </Grid>
      </Grid>
    </Box>
  );
};
