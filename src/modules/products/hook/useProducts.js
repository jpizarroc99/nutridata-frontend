import { useContext, useEffect } from "react";

import { ProductContext } from "../context/ProductContext";
import { mockProducts } from "../utils/dummyData";

export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProductContext debe usarse dentro de un ProductProvider");
  }
  return context;
};

export const useProducts = () => {
  const { setLoading, setProducts, setError } = useProductContext();

  // Simular carga de productos desde API
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        // En una implementación real, esto sería una llamada a la API
        setTimeout(() => {
          setProducts(mockProducts);
        }, 500); // Simular delay de red
      } catch {
        setError("Error al cargar los productos");
      }
    };

    fetchProducts();
  }, [setLoading, setProducts, setError]);

  return useProductContext();
};
