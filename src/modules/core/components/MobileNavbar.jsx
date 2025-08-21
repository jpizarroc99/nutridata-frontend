import { MedicalServices, LocalHospital, Store, Favorite, Menu } from "@mui/icons-material";
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router";

import { LoginButton } from "../../auth/components/LoginButton";
import { LogoutButton } from "../../auth/components/LogoutButton";
import { RegisterButton } from "../../auth/components/RegisterButton";
import { useAuth } from "../../auth/hook/useAuth";
import { CartButton } from "../../cart/components/CartButton";
import { SearchForm } from "../components/SearchForm";
import { AppRoutes } from "../lib/AppRoutes";
import { Logo } from "./Logo";

export function MobileNav() {
  return (
    <nav>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Logo />
        <div>
          <CartButton />
          <MobileDrawer />
        </div>
      </div>
      <SearchForm />
    </nav>
  );
}

function MobileDrawer() {
  const [isOpen, setIsOpen] = useState(false);

  const { isAuthenticated } = useAuth();

  const navigate = useNavigate();

  const links = [
    {
      icon: MedicalServices,
      text: "Equipos medicos",
      url: "equipos-medicos"
    },
    {
      icon: LocalHospital,
      text: "Box de atención",
      url: "box-de-atencion"
    },
    {
      icon: Store,
      text: "Productos",
      url: AppRoutes.catalogPage
    },
    {
      icon: Favorite,
      text: "Favoritos",
      url: AppRoutes.favoritesPage
    }
  ];

  function openDrawer() {
    setIsOpen(true);
  }

  function closeDrawer() {
    setIsOpen(false);
  }

  return (
    <>
      <IconButton color="primary" onClick={openDrawer}>
        <Menu />
      </IconButton>
      <Drawer open={isOpen} anchor="right" onClose={closeDrawer}>
        <Box sx={{ width: 250 }} role="presentation" onClick={closeDrawer}>
          <List sx={{ display: "flex", flexDirection: "column", minHeight: "100dvh" }}>
            {links.map(
              (
                {
                  text,
                  url,
                  // eslint-disable-next-line no-unused-vars
                  icon: Icon
                },
                index
              ) => (
                <ListItem key={`mobile link ${index}`} disablePadding onClick={() => navigate(url)}>
                  <ListItemButton>
                    <ListItemIcon>
                      <Icon color="primary" />
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              )
            )}
            <div style={{ display: "grid", marginTop: "auto" }}>
              {isAuthenticated ? (
                <ListItem disablePadding>
                  <ListItemButton>
                    <LogoutButton />
                  </ListItemButton>
                </ListItem>
              ) : (
                <>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <LoginButton />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <RegisterButton />
                    </ListItemButton>
                  </ListItem>
                </>
              )}
            </div>
          </List>
        </Box>
      </Drawer>
    </>
  );
}
