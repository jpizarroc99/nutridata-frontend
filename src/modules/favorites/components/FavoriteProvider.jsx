import { useState } from "react";

import { FavoriteContext } from "../contexts/FavoriteContext";

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
