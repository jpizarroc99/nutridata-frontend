import { Outlet } from "react-router";

export function Layout() {
  return (
    <>
      <header>
        <span>Nutridata</span>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>&copy; 2023 Nutridata</p>
      </footer>
    </>
  );
}
