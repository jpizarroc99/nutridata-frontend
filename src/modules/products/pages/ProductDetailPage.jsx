import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Box, CircularProgress, Typography } from "@mui/material";
import { ProductDetail } from "../components/ProductDetail/ProductDetail";
import { products } from "../../home/utils/DataproductsHomePage";

const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  console.log("ID del producto:", id);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        // Simular llamada a la API
        const foundProduct = products.find((p) => p.id === parseInt(id));

        if (foundProduct) {
          setProduct(foundProduct);
        } else {
          setError("Producto no encontrado");
        }
      } catch (err) {
        setError("Error al cargar el producto");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <Container maxWidth="lg" sx={{ py: 8, display: "flex", justifyContent: "center" }}>
        <CircularProgress />
      </Container>
    );
  }

  if (error || !product) {
    return (
      <Container maxWidth="lg" sx={{ py: 8, textAlign: "center" }}>
        <Typography variant="h4" color="error" gutterBottom>
          {error || "Producto no encontrado"}
        </Typography>
        <Typography variant="body1">
          El producto que buscas no existe o ha sido removido.
        </Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <ProductDetail product={product} />
    </Container>
  );
};

export default ProductDetailPage;
