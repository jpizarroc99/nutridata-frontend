import { CardMedia } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router";

import { AppRoutes } from "../../core/lib/AppRoutes";

export function CategoryCard({ name, slug, countText, image }) {
  return (
    <NavLink
      to={AppRoutes.categoryDetailPage({ slug })}
      style={{ textDecoration: "none", color: "unset", flex: 1 }}
    >
      <Card>
        <CardMedia
          sx={{ height: "10rem" }}
          image={image || "/default-category-image.jpg"}
          title={`${name} Category Image`}
        />
        <CardContent>
          <Typography gutterBottom sx={{ color: "text.secondary", fontSize: 14 }}>
            {name}
          </Typography>
          <Typography sx={{ color: "text.secondary", mb: 1.5 }}>{countText}</Typography>
        </CardContent>
      </Card>
    </NavLink>
  );
}
