// La ruta de importación del contexto es ahora relativa a su nueva ubicación.
import { useFavorite } from "../../contexts/FavoriteContext";

const useFavoriteLogic = (product) => {
  const { isFavorite, addFavorite, removeFavorite } = useFavorite();
  const isCurrentlyFavorite = isFavorite(product.id);

  const toggleFavorite = () => {
    if (isCurrentlyFavorite) {
      removeFavorite(product.id);
    } else {
      addFavorite(product);
    }
  };

  return { isCurrentlyFavorite, toggleFavorite };
};

export default useFavoriteLogic;
