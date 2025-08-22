// La ruta de importación del contexto es ahora relativa a su nueva ubicación.
// import { useFavorite } from "../../contexts/FavoriteContext";

// const useFavoriteLogic = (product) => {
//   const { isFavorite, addFavorite, removeFavorite } = useFavorite();
//   const isCurrentlyFavorite = isFavorite(product.id);

//   const toggleFavorite = () => {
//     if (isCurrentlyFavorite) {
//       removeFavorite(product.id);
//     } else {
//       addFavorite(product);
//     }
//   };

//   return { isCurrentlyFavorite, toggleFavorite };
// };

// export default useFavoriteLogic;

import { useContext } from "react";
import { FavoritesContext } from "../contexts/FavoritesContext";

export const useFavorites = () => {
  const context = useContext(FavoritesContext);

  if (!context) {
    throw new Error("useFavorites debe ser usado dentro de un FavoritesProvider");
  }

  return context;
};
