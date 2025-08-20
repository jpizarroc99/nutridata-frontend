import { Container } from "@mui/material";
import { Outlet } from "react-router";

import { Footer } from "./Footer";
import { Header } from "./Header";

export function Layout() {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Header />
      <main style={{ flex: 1 }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
