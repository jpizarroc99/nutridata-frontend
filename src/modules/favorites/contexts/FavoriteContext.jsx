import { createContext, useState, useContext } from "react";

// 1. Crea el contexto
const FavoriteContext = createContext();

// 2. Crea el Provider que proveerá el estado a la aplicación
export function FavoriteProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  // Funciones para manipular el estado
  const addFavorite = (product) => {
    setFavorites((prevFavorites) => {
      if (!prevFavorites.find((fav) => fav.id === product.id)) {
        return [...prevFavorites, product];
      }
      return prevFavorites;
    });
  };

  const removeFavorite = (productId) => {
    setFavorites((prevFavorites) => prevFavorites.filter((fav) => fav.id !== productId));
  };

  const isFavorite = (productId) => {
    return favorites.some((fav) => fav.id === productId);
  };

  return (
    <FavoriteContext.Provider value={{ favorites, addFavorite, removeFavorite, isFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
}

// 3. Crea un hook personalizado para simplificar el acceso al contexto
export const useFavorite = () => {
  const context = useContext(FavoriteContext);
  if (!context) throw new Error("useFavorite must be used within a FavoriteProvider");
  return context;
};
