export class AppRoutes {
  static homePage = "/";
  static loginPage = "/login";
  static registerPage = "/registro";
  static searchPage = "/buscar";
  static cartPage = "/carrito";
  static favoritesPage = "/favoritos";
  static categoryPage = "/categorias";
  static categoryDetailPage = ({ slug }) => `${this.categoryPage}/${slug}`;
  static termsAndConditionsPage = "/terminos";
  static privacyPolicyPage = "/politica-privacidad";
  static catalogPage = "/catalog";
  static aboutUsPage = "/nosotros";
}
