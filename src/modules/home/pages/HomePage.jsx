import { Container, Grid } from "@mui/material";

import { CategoryCard } from "../../category/components/CategoryCard";
import { FeaturedProducts } from "../components/FeaturedProducts";
import { SpecializedCategories } from "../components/SpecializedCategories";
import { WelcomeSection } from "../components/WelcomeSection";

export function HomePage() {
  return (
    <div style={{ display: "grid", gap: "3rem" }}>
      <WelcomeSection />
      <SpecializedCategories />
      <div style={{ backgroundColor: "#F9FAFB" }}>
        <FeaturedProducts />
      </div>
    </div>
  );
}
