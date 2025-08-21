import { useCallback, useReducer } from "react";

import { ProductContext } from "../context/ProductContext";

const initialState = {
  products: [],
  filteredProducts: [],
  loading: false,
  error: null,
  filters: {
    category: "Todos",
    sortBy: "name",
    currentPage: 1,
    searchQuery: ""
  }
};

// Acciones
const actionTypes = {
  SET_LOADING: "SET_LOADING",
  SET_PRODUCTS: "SET_PRODUCTS",
  SET_ERROR: "SET_ERROR",
  SET_FILTER: "SET_FILTER"
};

// Función helper para aplicar filtros
const applyFiltersToProducts = (products, filters) => {
  const { category, sortBy, searchQuery } = filters;
  let filtered = [...products];

  // Filtrar por categoría
  if (category !== "Todos") {
    filtered = filtered.filter((product) => product.category === category);
  }

  // Filtrar por búsqueda
  if (searchQuery) {
    filtered = filtered.filter(
      (product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  // Ordenar
  filtered.sort((a, b) => {
    if (sortBy === "name") return a.name.localeCompare(b.name);
    if (sortBy === "price") return a.price - b.price;
    if (sortBy === "stock") return b.stock - a.stock;
    return 0;
  });

  return filtered;
};

// Reducer
const productReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_LOADING:
      return { ...state, loading: action.payload };

    case actionTypes.SET_PRODUCTS: {
      const products = action.payload;
      // Aplicar filtros inmediatamente al establecer productos
      const filteredProducts = applyFiltersToProducts(products, state.filters);

      return {
        ...state,
        products: products,
        filteredProducts: filteredProducts,
        loading: false
      };
    }

    case actionTypes.SET_ERROR:
      return { ...state, error: action.payload, loading: false };

    case actionTypes.SET_FILTER: {
      const newFilters = { ...state.filters, ...action.payload };
      // Aplicar filtros inmediatamente al cambiar filtros
      const newlyFilteredProducts = applyFiltersToProducts(state.products, newFilters);
      return {
        ...state,
        filters: newFilters,
        filteredProducts: newlyFilteredProducts
      };
    }

    default:
      return state;
  }
};

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);

  const setLoading = useCallback((loading) => {
    dispatch({ type: actionTypes.SET_LOADING, payload: loading });
  }, []);

  const setProducts = useCallback((products) => {
    dispatch({ type: actionTypes.SET_PRODUCTS, payload: products });
  }, []);

  const setError = useCallback((error) => {
    dispatch({ type: actionTypes.SET_ERROR, payload: error });
  }, []);

  const setFilter = useCallback((filter) => {
    dispatch({ type: actionTypes.SET_FILTER, payload: filter });
  }, []);

  const value = {
    ...state,
    setLoading,
    setProducts,
    setError,
    setFilter
  };

  return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>;
};
