import { createTheme, ThemeProvider as ThemeProviderMaterial } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: { main: "#734a91" }
  }
});

export function ThemeProvider({ children }) {
  return <ThemeProviderMaterial theme={theme}>{children}</ThemeProviderMaterial>;
}
