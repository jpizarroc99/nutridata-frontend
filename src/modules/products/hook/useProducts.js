import { useContext, useEffect } from "react";

import { useProductContext } from '../context/ProductContext';
import { products } from '../../home/utils/DataproductsHomePage';

export const useProducts = () => {
  const { setLoading, setProducts, setError } = useProductContext();

  // Simular carga de productos desde API
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        // En una implementación real, esto sería una llamada a la API
        setTimeout(() => {
          setProducts(products);
        }, 500); // Simular delay de red
      } catch {
        setError("Error al cargar los productos");
      }
    };

    fetchProducts();
  }, [setLoading, setProducts, setError]);

  return useProductContext();
};
