import { useEffect } from 'react';

import { useProductContext } from '../context/ProductContext';
import { mockProducts } from '../utils/dummyData';

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
      } catch (error) {
        setError('Error al cargar los productos');
      }
    };

    fetchProducts();
  }, [setLoading, setProducts, setError]);

  return useProductContext();
};