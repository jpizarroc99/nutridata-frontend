import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter, Routes, Route } from "react-router";

import { AlreadyLoggedRoute } from "./modules/auth/components/AlreadyLoggedRoute";
import { AuthProvider } from "./modules/auth/components/AuthProvider";
import { LoginPage } from "./modules/auth/pages/LoginPage";
import { RegisterPage } from "./modules/auth/pages/RegisterPage";
import { CartProvider } from "./modules/cart/components/CartProvider";
import { CartPage } from "./modules/cart/pages/CartPage";
import { CategoryPage } from "./modules/category/pages/CategoryPage";
import { Layout } from "./modules/core/layouts/Layout";
import { AppRoutes } from "./modules/core/lib/AppRoutes";
import { ThemeProvider } from "./modules/core/lib/AppTheme";
import { FavoriteProvider } from "./modules/favorites/contexts/FavoriteContext";
import { FavoritesPage } from "./modules/favorites/pages/FavoritesPage";
import { HomePage } from "./modules/home/pages/HomePage";
import { ProductProvider } from "./modules/products/context/ProductContext";
import CatalogPage from "./modules/products/pages/CatalogPage";
import { SearchPage } from "./modules/search/pages/SearchPage";

export default function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <ThemeProvider>
        <AuthProvider>
          <FavoriteProvider>
            <CartProvider>
              <ProductProvider>
                <Routes>
                  <Route element={<Layout />}>
                    <Route index path={AppRoutes.homePage} element={<HomePage />} />

                    <Route element={<AlreadyLoggedRoute />}>
                      <Route path={AppRoutes.loginPage} element={<LoginPage />} />
                      <Route path={AppRoutes.registerPage} element={<RegisterPage />} />
                    </Route>

                    <Route path={AppRoutes.searchPage} element={<SearchPage />} />
                    <Route path={AppRoutes.cartPage} element={<CartPage />} />
                    <Route path={AppRoutes.favoritesPage} element={<FavoritesPage />} />
                    <Route path={AppRoutes.categoryPage} element={<CategoryPage />} />
                    <Route path={AppRoutes.catalogPage} element={<CatalogPage />} />
                  </Route>
                </Routes>
              </ProductProvider>
            </CartProvider>
          </FavoriteProvider>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}
