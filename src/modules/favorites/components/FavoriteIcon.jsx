import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import IconButton from "@mui/material/IconButton";

// La ruta de importación es relativa a la carpeta `hook`.
import useFavoriteLogic from "../hook/useFavoriteLogic";

const FavoriteIconButton = ({ product }) => {
  const { isCurrentlyFavorite, toggleFavorite } = useFavoriteLogic(product);

  return (
    <IconButton onClick={toggleFavorite} color="error">
      {isCurrentlyFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
    </IconButton>
  );
};

export default FavoriteIconButton;
