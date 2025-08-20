import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter, Routes, Route } from "react-router";

import { Layout } from "./modules/core/layouts/Layout";
import { AppRoutes } from "./modules/core/lib/AppRoutes";

import { LoginPage } from "./modules/auth/pages/LoginPage";
import { RegisterPage } from "./modules/auth/pages/RegisterPage";
import { CartPage } from "./modules/cart/pages/CartPage";
import { CategoryPage } from "./modules/category/pages/CategoryPage";
import { FavoritesPage } from "./modules/favorites/pages/FavoritesPage";
import { HomePage } from "./modules/home/pages/HomePage";
import { SearchPage } from "./modules/search/pages/SearchPage";

import { ThemeProvider } from "./modules/core/lib/AppTheme";
import { CartProvider } from "./modules/cart/components/CartProvider";
import { FavoriteProvider } from "./modules/favorites/contexts/FavoriteContext";

export default function App() {
  return (
    <FavoriteProvider>
    <ThemeProvider>
      <CssBaseline />
      <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index path={AppRoutes.homePage} element={<HomePage />} />
            <Route path={AppRoutes.loginPage} element={<LoginPage />} />
            <Route path={AppRoutes.searchPage} element={<SearchPage />} />
            <Route path={AppRoutes.cartPage} element={<CartPage />} />
            <Route path={AppRoutes.favoritesPage} element={<FavoritesPage />} />
            <Route path={AppRoutes.categoryPage} element={<CategoryPage />} />
            <Route path={AppRoutes.registerPage} element={<RegisterPage />} />
          </Route>
        </Routes>
      </BrowserRouter> 
    </CartProvider>     
    </ThemeProvider>
    </FavoriteProvider>
  );
}
