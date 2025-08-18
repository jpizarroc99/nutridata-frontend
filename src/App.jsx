import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter, Routes, Route } from "react-router";

import { CartPage } from "./modules/cart/pages/CartPage";
import { CategoryPage } from "./modules/category/pages/CategoryPage";
import { Layout } from "./modules/core/layouts/Layout";
import { AppRoutes } from "./modules/core/lib/AppRoutes";
import { FavoritesPage } from "./modules/favorites/pages/FavoritesPage";
import { HomePage } from "./modules/home/pages/HomePage";
import { SearchPage } from "./modules/search/pages/SearchPage";

export default function App() {
  return (
    <>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index path={AppRoutes.homePage} element={<HomePage />} />
            <Route path={AppRoutes.searchPage} element={<SearchPage />} />
            <Route path={AppRoutes.cartPage} element={<CartPage />} />
            <Route path={AppRoutes.favoritesPage} element={<FavoritesPage />} />
            <Route path={AppRoutes.categoryPage} element={<CategoryPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
