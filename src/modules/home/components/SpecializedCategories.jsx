import { Grid, Container } from "@mui/material";

import { CategoryCard } from "../../category/components/CategoryCard";
import { categories } from "../utils/DataSpecializedCategories"
import { SectionTitle } from "./SectionTitle";

export function SpecializedCategories(){
    return (
        <Container>
        <SectionTitle 
            title="Categorías Especializadas"
            subtitle="Encuentra exactamente lo que necesitas para tu consulta nutricional"
        />
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
    )
}