import { LogoutButton } from "../../auth/components/LogoutButton";
import { RegisterButton } from "../../auth/components/RegisterButton";
import { useAuth } from "../../auth/hook/useAuth";
import { CartButton } from "../../cart/components/CartButton";
import { FavoritesButton } from "./FavoritesButton";
import { Logo } from "./Logo";
import { SearchForm } from "./SearchForm";

export function DesktopNav() {
  const { isAuthenticated } = useAuth();

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
        <CartButton />
        <FavoritesButton />
        {isAuthenticated ? <LogoutButton iconButton /> : <RegisterButton iconButton />}
      </div>
    </nav>
  );
}
