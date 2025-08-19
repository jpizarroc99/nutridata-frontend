import { RegisterButton } from "../../auth/components/RegisterButton";
import { CartButton } from "../../cart/components/CartButton";
import { FavoritesButton } from "./FavoritesButton";
import { Logo } from "./Logo";
import { SearchForm } from "./SearchForm";

export function DesktopNav() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "1rem"
      }}
    >
      <Logo />
      <div style={{ flex: 1, maxWidth: "35rem" }}>
        <SearchForm />
      </div>
      <div style={{ display: "flex", gap: "1rem" }}>
        <RegisterButton iconButton />
        <CartButton />
        <FavoritesButton />
      </div>
    </nav>
  );
}
