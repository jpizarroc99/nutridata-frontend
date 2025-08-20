import CalculateIcon from "@mui/icons-material/Calculate";
import GroupIcon from "@mui/icons-material/Group";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import StraightenIcon from "@mui/icons-material/Straighten";

export const categories = [
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
