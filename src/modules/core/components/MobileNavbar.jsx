import { Inbox, Mail, Menu } from "@mui/icons-material";
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

import { LoginButton } from "../../auth/components/LoginButton";
import { LogoutButton } from "../../auth/components/LogoutButton";
import { RegisterButton } from "../../auth/components/RegisterButton";
import { useAuth } from "../../auth/hook/useAuth";
import { CartButton } from "../../cart/components/CartButton";
import { SearchForm } from "../components/SearchForm";
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

  return (
    <>
      <IconButton color="primary" onClick={() => setIsOpen(true)}>
        <Menu />
      </IconButton>
      <Drawer open={isOpen} anchor="right" onClose={() => setIsOpen(false)}>
        <Box sx={{ width: 250 }} role="presentation" onClick={() => setIsOpen(false)}>
          <List sx={{ display: "flex", flexDirection: "column", minHeight: "100dvh" }}>
            {["Equipos medicos", "Box de atención", "Productos", "Favoritos"].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{index % 2 === 0 ? <Inbox /> : <Mail />}</ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
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
