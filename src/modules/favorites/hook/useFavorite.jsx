import { useContext } from "react";

import { FavoriteContext } from "../contexts/FavoriteContext";

export const useFavorite = () => {
  const context = useContext(FavoriteContext);

  if (!context) {
    throw new Error("useFavorite must be used within a FavoriteProvider");
  }

  return context;
};
