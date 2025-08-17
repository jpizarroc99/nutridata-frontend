import { Container, useMediaQuery, useTheme } from "@mui/material";

import { DesktopNav } from "../components/DesktopNavbar";
import { MobileNav } from "../components/MobileNavbar";

export function Header() {
  const theme = useTheme();
  const isMobileView = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <header>
      <Container>{isMobileView ? <MobileNav /> : <DesktopNav />}</Container>
    </header>
  );
}
