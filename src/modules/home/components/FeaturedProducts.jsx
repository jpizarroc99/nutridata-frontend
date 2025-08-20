import { Grid, Container } from "@mui/material";

import { products } from "../utils/DataproductsHomePage";
import { ProductCard } from "./ProductCardHomePage";
import { SectionTitle } from "./SectionTitle";

export function FeaturedProducts() {
  return (
    <Container sx={{ py: 6 }}>
      <SectionTitle
        title="Productos Destacados"
        subtitle="Los productos más populares entre nutricionistas profesionales"
      />
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 8, md: 16 }}>
        {products.map((product) => (
          <Grid
            item
            key={product.id}
            size={{ xs: 2, sm: 4, md: 4 }}
            sx={{ maxWidth: "30rem", height: "100%" }}
          >
            <ProductCard {...product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
