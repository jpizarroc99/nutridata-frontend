import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter, Routes, Route } from "react-router";

import { LoginPage } from "./modules/auth/pages/LoginPage";
import { RegisterPage } from "./modules/auth/pages/RegisterPage";
import { CartPage } from "./modules/cart/pages/CartPage";
import { CategoryPage } from "./modules/category/pages/CategoryPage";
import { Layout } from "./modules/core/layouts/Layout";
import { AppRoutes } from "./modules/core/lib/AppRoutes";
import { ThemeProvider } from "./modules/core/lib/AppTheme";
import { FavoritesPage } from "./modules/favorites/pages/FavoritesPage";
import { HomePage } from "./modules/home/pages/HomePage";
import { SearchPage } from "./modules/search/pages/SearchPage";
import { CartProvider } from "./modules/cart/Context/CartContext";

export default function App() {
  return (
    <CartProvider>
    <ThemeProvider>
      <CssBaseline />
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
    </ThemeProvider>
    </CartProvider>
  );
}
