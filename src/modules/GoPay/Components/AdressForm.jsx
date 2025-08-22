import React from "react";
import {
  CheckBox,
  FormControlLabel,
  FormLabel,
  Grid,
  OutlinedInput,
  styled
} from "@mui/icons-material";

const FormGrid = styled(Grid)(() => ({
  display: "flex",
  flexDirection: "column"
}));

export default function AddressForm() {
  return (
    <Grid container spaciong={3}>
      <FormGrid size={{ xs: 12, md: 6 }}>
        <FormLabel className="firstName" required>
          Nombre
        </FormLabel>
        <OutlinedInput
          id="firstName"
          name="firstName"
          type="name"
          placeholder="Tu nombre"
          autoComplete="first Name"
          required
          size="small"
        />
      </FormGrid>
      <FormGrid size={{ xs: 12, md: 6 }}>
        <FormLabel className="lastName" required>
          Apellido
        </FormLabel>
        <OutlinedInput
          id="lastName"
          name="lastName"
          type="lastName"
          placeholder="Tu apellido"
          autoComplete="last Name"
          required
          size="small"
        />
      </FormGrid>
      <FormGrid size={{ xs: 12 }}>
        <FormLabel className="address1" required>
          Dirección línea 1
        </FormLabel>
        <OutlinedInput
          id="address1"
          name="address1"
          type="address1"
          placeholder="Nombre y número de calle"
          autoComplete="línea 1 de dirección de envío "
          required
          size="small"
        />
      </FormGrid>
      <FormGrid size={{ xs: 12 }}>
        <FormLabel className="address2">Dirección línea 2</FormLabel>
        <OutlinedInput
          id="address2"
          name="address2"
          type="address2"
          placeholder="Apartamento, casa, block, etc. (opcional)"
          autoComplete="línea 2 de dirección de envío "
          required
          size="small"
        />
      </FormGrid>
      <FormGrid size={{ xs: 6 }}>
        <FormLabel className="city" required>
          Ciudad
        </FormLabel>
        <OutlinedInput
          id="city"
          name="city"
          type="city"
          placeholder="Tu ciudad"
          autoComplete="City"
          required
          size="small"
        />
      </FormGrid>
      <FormGrid size={{ xs: 6 }}>
        <FormLabel className="commune" required>
          Comuna
        </FormLabel>
        <OutlinedInput
          id="commune"
          name="commune"
          type="commune"
          placeholder="Tu comuna"
          autoComplete="commune"
          required
          size="small"
        />
      </FormGrid>
      <FormGrid size={{ xs: 6 }}>
        <FormLabel className="postalCode" required>
          Código postal
        </FormLabel>
        <OutlinedInput
          id="postalCode"
          name="postalCode"
          type="postalCode"
          placeholder="12345"
          autoComplete="envío código postal"
          required
          size="small"
        />
      </FormGrid>
      <FormGrid size={{ xs: 6 }}>
        <FormLabel className="country" required>
          País
        </FormLabel>
        <OutlinedInput
          id="country"
          name="country"
          type="country"
          placeholder="Tu País"
          autoComplete="envío País"
          required
          size="small"
        />
      </FormGrid>
      <FormGrid size={{ xs: 12 }}>
        <FormControlLabel
          control={<CheckBox name="saveAddress" value="yes" />}
          label="Usar esta dirección para detalles de pago"
        />
      </FormGrid>
    </Grid>
  );
}
