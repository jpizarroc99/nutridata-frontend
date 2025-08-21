import {
  Box,
  Typography,
  Chip,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Stack
} from "@mui/material";

import { useProductContext } from "../hook/useProducts";
import { categories } from "../utils/dummyData";

const CatalogFilters = () => {
  const { filters, setFilter } = useProductContext();

  const handleCategoryChange = (category) => {
    setFilter({ category, currentPage: 1 });
  };

  const handleSortChange = (event) => {
    setFilter({ sortBy: event.target.value });
  };

  const handleSearchChange = (event) => {
    setFilter({ searchQuery: event.target.value, currentPage: 1 });
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Filtros
      </Typography>

      <TextField
        fullWidth
        label="Buscar productos"
        variant="outlined"
        value={filters.searchQuery}
        onChange={handleSearchChange}
        sx={{ mb: 3 }}
      />

      <Box sx={{ mb: 2 }}>
        <Typography variant="subtitle2" gutterBottom>
          Categorías
        </Typography>
        <Stack direction="row" flexWrap="wrap" gap={1}>
          {categories.map((category) => (
            <Chip
              key={category}
              label={category}
              onClick={() => handleCategoryChange(category)}
              color={filters.category === category ? "primary" : "default"}
              variant={filters.category === category ? "filled" : "outlined"}
            />
          ))}
        </Stack>
      </Box>

      <FormControl fullWidth sx={{ mt: 2 }}>
        <InputLabel>Ordenar por</InputLabel>
        <Select value={filters.sortBy} label="Ordenar por" onChange={handleSortChange}>
          <MenuItem value="name">Nombre</MenuItem>
          <MenuItem value="price">Precio: Menor a Mayor</MenuItem>
          <MenuItem value="stock">Disponibilidad</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default CatalogFilters;
