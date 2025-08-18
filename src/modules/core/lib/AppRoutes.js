export class AppRoutes {
  static homePage = "/";
  static searchPage = "/buscar";
  static cartPage = "/carrito";
  static favoritesPage = "/favoritos";
  static categoryPage = "/categorias";
  static categoryDetailPage = ({ slug }) => `${this.categoryPage}/${slug}`;
}
