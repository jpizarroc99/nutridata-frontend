import {
    Box,
    Card,
    CardContent,
    CardMedia,
    Typography,
    Button,
    Chip,
    Stack,
    IconButton
  } from "@mui/material";

import React, { useState } from "react";
import { NavLink } from "react-router";
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from '../../core/lib/AppRoutes';
import { useCart } from "../../cart/hooks/useCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useFavorites } from "../../favorites/hook/useFavoriteLogic";

export function ProductCard({ id, title, category, price, image, tag }) {
  const { addToCart } = useCart();
  console.log("Precio recibido:", price, "Tipo:", typeof price); 

  const navigate = useNavigate();

  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites(); // Hook para manejar favoritos
  const [isHovered, setIsHovered] = useState(false);

  const handleCardClick = () => {
    // Reemplazar el parámetro :id con el ID real del producto
    const route = AppRoutes.productDetailPage.replace(':id', id);
    navigate(route);
  };

    const getChipColor = () => {
      switch (tag) {
        case "Nuevo":
          return "primary";
        case "Oferta":
          return "error";
        case "Más Vendido":
          return "warning";
        default:
          return "default";
      }
    };
    const handleAddToCart = () => {
      addToCart({ id, title, category, price: Number(price), image });
    };

    const handleToggleFavorite = (event) => {
      event.preventDefault();
      event.stopPropagation();
      
      if (isFavorite(id)) {
        removeFromFavorites(id);
      } else {
        addToFavorites({ id, title, category, price: Number(price), image, tag });
      }
    };
  
    return (
    <Box sx={{ 
      width: "100%", // Ocupa todo el ancho del grid item
      height: "100%", 
      display: "flex",
      cursor: "pointer"
      }}
      onClick={handleCardClick}
    >
      {/* <NavLink
        to={AppRoutes.loginPage}
        style={{ 
          textDecoration: "none", 
          color: "unset", 
          width: "100%", // Asegura que ocupe todo el ancho
          display: "flex" 
        }}
      > */}
        <Card 
          sx={{ 
            width: "100%", // Ancho completo del contenedor
            height: "100%",
            display: "flex",
            flexDirection: "column",
            borderRadius: 3, 
            boxShadow: 3,
            transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
            "&:hover": {
              transform: "translateY(-4px)",
              boxShadow: 6,
            },
            position: "relative",
          }}

          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          
          {/* Contenedor superior para etiqueta y favoritos */}
          <Box sx={{ 
            position: "absolute", 
            top: 8, 
            left: 8, 
            right: 8, 
            zIndex: 2,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start"
          }}>
            {/* Etiqueta (tag) */}
            {tag && (
              <Chip 
                label={tag} 
                color={getChipColor()} 
                size="small" 
                sx={{ 
                  maxWidth: "70%",
                  "& .MuiChip-label": {
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap"
                  }
                }}
              />
            )}
            
            {/* Icono de favoritos */}
            <IconButton
              onClick={handleToggleFavorite}
              sx={{
                backgroundColor: "white",
                boxShadow: 2,
                "&:hover": {
                  backgroundColor: "grey.100",
                  transform: "scale(1.1)"
                },
                transition: "all 0.2s ease-in-out",
                padding: "6px",
                ml: "auto",
                opacity: isHovered || isFavorite(id) ? 1 : 0.7,
              }}
              aria-label={isFavorite(id) ? "Quitar de favoritos" : "Agregar a favoritos"}
            >
              {isFavorite(id) ? (
                <FavoriteIcon color="error" />
              ) : (
                <FavoriteBorderIcon />
              )}
            </IconButton>
          </Box>
          
          {/* Contenedor para la imagen con altura fija */}
          <Box sx={{ width: "100%", height: 200, overflow: "hidden" }}>
            <CardMedia 
              component="img"
              image={image}
              alt={title}
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                }
              }}
            />
          </Box>
          
          <CardContent sx={{ 
            flexGrow: 1, 
            display: "flex", 
            flexDirection: "column",
            p: 2,
            width: "100%", // Asegura que el contenido ocupe todo el ancho
            boxSizing: "border-box", // Incluye padding en el ancho total
            pt: 1
          }}>
            <Typography 
              variant="body2" 
              color="text.secondary" 
              gutterBottom
              sx={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap", // Evita que el category se divida en múltiples líneas
              }}
            >
              {category}
            </Typography>
            
            {/* Título con manejo de texto largo */}
            <Typography 
              variant="h6" 
              fontWeight="bold" 
              sx={{ 
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitLineClamp: "2",
                WebkitBoxOrient: "vertical",
                mb: 1,
                minHeight: "64px",
                lineHeight: 1.2,
                width: "100%", // Fuerza el ancho completo
              }}
            >
              {title}
            </Typography>
            
            {/* Contenedor para precio y botón */}
            <Box sx={{ 
              mt: "auto", 
              width: "100%" 
            }}>
              <Typography 
                variant="h6" 
                color="primary" 
                gutterBottom
                sx={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                ${price}
              </Typography>
              
              <Button
                fullWidth
                variant="contained"
                color="primary"
                sx={{ 
                  borderRadius: 2, 
                  textTransform: "none",
                  width: "100%" 
                }}
                onClick={handleAddToCart}
              >
                Agregar al Carrito
              </Button>
            </Box>
          </CardContent>
        </Card>
      {/* </NavLink> */}
    </Box>
  );
}
