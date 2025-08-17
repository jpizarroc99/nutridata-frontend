import { ShoppingCart, Menu } from "@mui/icons-material";
import MailIcon from "@mui/icons-material/Mail";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import {
  Box,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
  useTheme
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router";

import { AppRoutes } from "../lib/AppRoutes";
import { Logo } from "./Logo";
import { SearchForm } from "./SearchForm";

export function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <header>
      <Container>{isMobile ? <MobileNav /> : <DesktopNav />}</Container>
    </header>
  );
}

function MobileNav() {
  return (
    <nav>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
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

  return (
    <>
      <IconButton color="primary" onClick={() => setIsOpen(true)}>
        <Menu />
      </IconButton>
      <Drawer open={isOpen} anchor="right" onClose={() => setIsOpen(false)}>
        <Box sx={{ width: 250 }} role="presentation" onClick={() => setIsOpen(false)}>
          <List>
            {["Equipos medicos", "Box de atención", "Productos", "Favoritos"].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}

function DesktopNav() {
  return (
    <nav>
      <p>Desktop nav</p>
    </nav>
  );
}

function CartButton() {
  const navigate = useNavigate();

  return (
    <IconButton color="primary" onClick={() => navigate(AppRoutes.cartPage)}>
      <ShoppingCart />
    </IconButton>
  );
}
