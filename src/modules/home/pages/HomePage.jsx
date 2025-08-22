import { FeaturedProducts } from "../components/FeaturedProducts";
import { SpecializedCategories } from "../components/SpecializedCategories";
import { WelcomeSection } from "../components/WelcomeSection";
import { QualitiesSection } from "../components/QualitiesSection";
import { KeepUpdatedSection } from "../components/KeepUpdatedSection";

export function HomePage() {
  return (
    <div style={{ display: "grid", gap: "3rem" }}>
      <WelcomeSection />
      <SpecializedCategories />
      <div style={{ backgroundColor: "#F9FAFB" }}>
        <FeaturedProducts />
      </div>
      <QualitiesSection />
      <KeepUpdatedSection />
    </div>
  );
}
