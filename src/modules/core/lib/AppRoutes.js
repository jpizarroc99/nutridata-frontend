export class AppRoutes {
  static homePage = "/";
  static loginPage = "/login";
  static registerPage = "/registro";
  static searchPage = "/buscar";
  static cartPage = "/carrito";
  static favoritesPage = "/favoritos";
  static categoryPage = "/categorias";
  static categoryDetailPage = ({ slug }) => `${this.categoryPage}/${slug}`;
}
