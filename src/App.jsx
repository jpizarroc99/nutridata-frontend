import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter, Routes, Route } from "react-router";

import AboutUsPage from "./modules/about-us/pages/AboutUsPage";
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
import { FavoritesProvider } from "./modules/favorites/contexts/FavoritesContext";
import { FavoritesPage } from "./modules/favorites/pages/FavoritesPage";
import { HomePage } from "./modules/home/pages/HomePage";
import { ProductProvider } from './modules/products/context/ProductContext';
import CatalogPage from './modules/products/pages/CatalogPage';
import ProductDetailPage from './modules/products/pages/ProductDetailPage';
import { SearchPage } from "./modules/search/pages/SearchPage";

export default function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <ThemeProvider>
        <AuthProvider>
          <FavoritesProvider>
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
                    <Route path={AppRoutes.aboutUsPage} element={<AboutUsPage />} />
                    <Route path={AppRoutes.productDetailPage} element={<ProductDetailPage />} />
                  </Route>
                </Routes>
              </ProductProvider>
            </CartProvider>
          </FavoritesProvider>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}
