import React, { useState } from "react";
import { Box, ImageList, ImageListItem, Modal } from "@mui/material";

export const ProductGallery = ({ product }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [mainImage, setMainImage] = useState(product.image);

  // Simular imágenes adicionales
  const productImages = [
    product.image,
    product.image, // En un caso real, tendrías imágenes diferentes
    product.image,
    product.image
  ];

  return (
    <Box>
      {/* Imagen principal */}
      <Box
        sx={{
          width: "100%",
          height: 400,
          borderRadius: 2,
          overflow: "hidden",
          mb: 2,
          cursor: "pointer"
        }}
        onClick={() => setSelectedImage(mainImage)}
      >
        <img
          src={mainImage}
          alt={product.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover"
          }}
        />
      </Box>

      {/* Miniaturas */}
      <ImageList cols={4} gap={8} sx={{ m: 0 }}>
        {productImages.map((image, index) => (
          <ImageListItem
            key={index}
            sx={{
              cursor: "pointer",
              border: mainImage === image ? 2 : 0,
              borderColor: "primary.main",
              borderRadius: 1,
              overflow: "hidden"
            }}
            onClick={() => setMainImage(image)}
          >
            <img
              src={image}
              alt={`${product.title} ${index + 1}`}
              style={{
                width: "100%",
                height: 80,
                objectFit: "cover"
              }}
            />
          </ImageListItem>
        ))}
      </ImageList>

      {/* Modal para imagen ampliada */}
      <Modal
        open={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Box
          sx={{
            maxWidth: "90%",
            maxHeight: "90%",
            outline: "none"
          }}
        >
          <img
            src={selectedImage}
            alt={product.title}
            style={{
              width: "100%",
              height: "auto",
              borderRadius: 2
            }}
          />
        </Box>
      </Modal>
    </Box>
  );
};
