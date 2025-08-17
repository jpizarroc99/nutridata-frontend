import { Search } from "@mui/icons-material";
import { InputAdornment, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import { AppRoutes } from "../lib/AppRoutes";

export function SearchForm() {
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  function redirectToSearch(search) {
    if (search.trim()) {
      navigate(`${AppRoutes.searchPage}?q=${encodeURIComponent(search)}`);
    }
  }

  useEffect(() => {
    const handleSearch = setTimeout(() => {
      redirectToSearch(searchTerm);
    }, 500);

    return () => clearTimeout(handleSearch);
  }, [searchTerm]);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        redirectToSearch(searchTerm);
      }}
    >
      <TextField
        placeholder="Buscar equipos, cursos, plantillas..."
        variant="standard"
        sx={{ width: "100%" }}
        onChange={(e) => setSearchTerm(e.target.value)}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            )
          }
        }}
      />
    </form>
  );
}
