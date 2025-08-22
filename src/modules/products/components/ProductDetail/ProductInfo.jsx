import React, { useState } from "react";
import { Box, Typography, Button, Chip, Divider, TextField, Stack, Alert } from "@mui/material";
import { useCart } from "../../../cart/hooks/useCart";
import { useFavorites } from "../../../favorites/hook/useFavoriteLogic";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export const ProductInfo = ({ product }) => {
  const { addToCart } = useCart();
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();
  const [quantity, setQuantity] = useState(1);
  const [showAlert, setShowAlert] = useState(false);

  const handleAddToCart = () => {
    addToCart({
      ...product,
      quantity: quantity
    });
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };

  const handleBuyNow = () => {
    handleAddToCart();
    // Aquí redirigirías al carrito
    // navigate('/cart');
  };

  const handleToggleFavorite = () => {
    if (isFavorite(product.id)) {
      removeFromFavorites(product.id);
    } else {
      addToFavorites(product);
    }
  };

  return (
    <Box>
      {/* Encabezado */}
      <Box
        sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", mb: 2 }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          {product.title}
        </Typography>
        <Button onClick={handleToggleFavorite} color="primary" sx={{ minWidth: "auto" }}>
          {isFavorite(product.id) ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon />}
        </Button>
      </Box>

      {/* Categoría y etiqueta */}
      <Stack direction="row" spacing={1} sx={{ mb: 3 }}>
        <Chip label={product.category} size="small" />
        {product.tag && (
          <Chip
            label={product.tag}
            color={
              product.tag === "Nuevo" ? "primary" : product.tag === "Oferta" ? "error" : "warning"
            }
            size="small"
          />
        )}
      </Stack>

      {/* Precio */}
      <Typography variant="h3" color="primary" gutterBottom>
        ${product.price}
      </Typography>

      {/* Stock */}
      <Typography
        variant="body1"
        color={product.stock > 0 ? "success.main" : "error.main"}
        gutterBottom
      >
        {product.stock > 0 ? `${product.stock} disponibles` : "Agotado"}
      </Typography>

      <Divider sx={{ my: 3 }} />

      {/* Cantidad */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="h6" gutterBottom>
          Cantidad
        </Typography>
        <TextField
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
          inputProps={{ min: 1, max: product.stock }}
          sx={{ width: 100 }}
          size="small"
        />
      </Box>

      {/* Botones de acción */}
      <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
        <Button
          variant="contained"
          size="large"
          onClick={handleAddToCart}
          disabled={product.stock === 0}
          sx={{ flex: 1 }}
        >
          Agregar al Carrito
        </Button>
        <Button
          variant="outlined"
          size="large"
          onClick={handleBuyNow}
          disabled={product.stock === 0}
          sx={{ flex: 1 }}
        >
          Comprar Ahora
        </Button>
      </Stack>

      {/* Alerta */}
      {showAlert && (
        <Alert severity="success" sx={{ mb: 2 }}>
          Producto agregado al carrito
        </Alert>
      )}

      {/* Descripción breve */}
      <Typography variant="body1" color="text.secondary">
        {product.description}
      </Typography>
    </Box>
  );
};
