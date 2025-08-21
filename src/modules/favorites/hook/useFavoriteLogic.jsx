import { useFavorite } from "./useFavorite";

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
