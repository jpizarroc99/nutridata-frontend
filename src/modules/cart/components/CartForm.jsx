import { useState } from "react";
import {
  TextField,
  Button,
  Box
} from "@mui/material";

export function CartForm() {
const [form, setForm] = useState({
    name: "",
    address: "",
    paymentMethod: "",
});
const handleChange = e => {
    setForm({
        ...form,
        [e.taget.name]: e.target.value });
};

const handleSubmit = e => {
    e.preventDefault();
    console.log("Datos del pedido: ", form);
    alert("Compra realizada con éxito");
};

return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mx: 2, maxWidth: 400 }}>
        <TextField
            fullWidth
            label="Nombre"
            name="name"
            value={form.name}
            onChange={handleChange}
            margin="normal"
            required
        />

        <TextField
            fullWidth
            label="Dirección"
            name="address"
            value={form.address}
            onChange={handleChange}
            margin="normal"
            required
        />

        <TextField
            fullWidth
            label="Método de Pago"
            name="paymentMethod"
            value={form.paymentMethod}
            onChange={handleChange}
            margin="normal"
            required
        />
    <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
    Finalizar Compra
    </Button>
    </Box>
);
}