import CalculateIcon from "@mui/icons-material/Calculate";
import GroupIcon from "@mui/icons-material/Group";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import StraightenIcon from "@mui/icons-material/Straighten";
import { Container, Grid } from "@mui/material";

import { CategoryCard } from "../../category/components/CategoryCard";
import { FeaturedProducts } from "../components/FeaturedProducts";

// const featuredProducts = [
//   {
//     id: 1,
//     name: "Caliper Harpenden",
//     price: 1290000,
//     originalPrice: 349.99,
//     image: "/Plicometro HARPENDEN.jpg",
//     rating: 4.8,
//     reviews: 124,
//     category: "Equipos de Medición",
//     badge: "Más Vendido"
//   },
//   {
//     id: 2,
//     name: "Balanza Mecánica",
//     price: 599990,
//     image: "/Balanza mecanica.png",
//     rating: 4.9,
//     reviews: 89,
//     category: "Equipos de Medición",
//     badge: "Nuevo"
//   },
//   {
//     id: 3,
//     name: "Balanza Pediátrica Mecánica",
//     price: 399990,
//     originalPrice: 229.99,
//     image: "/Balanza pediatrica.jpg",
//     rating: 4.7,
//     reviews: 67,
//     category: "Equipos de Medición",
//     badge: "Oferta"
//   },
//   {
//     id: 4,
//     name: "Cinta métrica Lufkin",
//     price: 27990,
//     image: "/Cinta metrica Lufkin.webp",
//     rating: 4.6,
//     reviews: 203,
//     category: "Equipos de Medición",
//     badge: "Oferta"
//   }
// ];

const categories = [
  {
    name: "Equipos de Medición",
    slug: "equipos-de-medicion",
    icon: StraightenIcon,
    count: 24,
    countText: "24 productos",
    image: "src/assets/equipos medicion.jpg",
    url: "/src/assets/categoria/equipos-de-medicion"
  },
  {
    name: "Comunidad Nutricional",
    slug: "comunidad-nutricional",
    icon: GroupIcon,
    count: 5000,
    countText: "5000+ Miembros",
    image: "src/assets/comunidad nutricion.png",
    url: "/src/assets/categoria/cursos-isak"
  },
  {
    name: "Recursos Digitales",
    slug: "recursos-digitales",
    icon: CalculateIcon,
    count: 45,
    countText: "45 recursos",
    image: "src/assets/recursos digitales.webp",
    url: "src/assets/categoria/recursos-digitales"
  },
  {
    name: "Box de Atención",
    slug: "box-de-atencion",
    icon: LocationCityIcon,
    count: 32,
    countText: "32 boxes",
    image: "src/assets/box nutricional.jpg",
    url: "src/assets/categoria/box-de-atencion"
  }
];

export function HomePage() {
  return (
    <div style={{display: "grid","gap":"3rem"}}>
      <Container>
        <h1>Home Page</h1>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 8, md: 16 }}>
          {categories.map((category) => (
            <Grid
              key={category.slug}
              size={{ xs: 2, sm: 4, md: 4 }}
              sx={{ maxWidth: "30rem", marginInline: "auto" }}
            >
              <CategoryCard
                key={category.slug}
                name={category.name}
                slug={category.slug}
                icon={category.icon}
                count={category.count}
                countText={category.countText}
                image={category.image}
                url={category.url}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
      <div style={{backgroundColor: "#F9FAFB"}}>
        <FeaturedProducts />
      </div>
      
    </div>
  );
}
