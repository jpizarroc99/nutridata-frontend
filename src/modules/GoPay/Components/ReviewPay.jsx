import Reacy from "react";
import {Divider, Grid, Stack, Typography} from "@mui/material";
import { CreditCardOffRoundedIcon, AccountBalanceRoundedIcon, SimCardRoundedIcon} from "@mui/icons-material";
import {useContext} from "react";

export default function Review({ paymentType, cardInfo }) {
  const { cart, getTotal } = useContext(CartContext);

  return (
    <Stack spacing={2}>
      {/* Lista de productos */}
      <Stack spacing={1}>
        {cart.map((item) => (
          <Stack
            key={item.id}
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography>{item.name} x{item.quantity}</Typography>
            <Typography>${item.price * item.quantity}</Typography>
          </Stack>
        ))}
        <Divider />
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            Total
          </Typography>
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            ${getTotal()}
          </Typography>
        </Stack>
      </Stack>

      <Divider />

      {/* Detalles de envío y pago */}
      <Stack direction="column" divider={<Divider flexItem />} spacing={2} sx={{ my: 2 }}>
        <div>
          <Typography variant="subtitle2" gutterBottom>
            Shipment details
          </Typography>
          <Typography gutterBottom>John Smith</Typography>
          <Typography gutterBottom sx={{ color: "text.secondary" }}>
            1 MUI Drive, Reactville, Anytown, 99999, USA
          </Typography>
        </div>

        <div>
          <Typography variant="subtitle2" gutterBottom>
            Payment details
          </Typography>
          <Grid container>
            <Stack direction="row" spacing={1} useFlexGap sx={{ width: "100%", mb: 1 }}>
              <CreditCardRoundedIcon
                fontSize="small"
                sx={{ color: paymentType === "creditCard" ? "primary.main" : "text.secondary" }}
              />
              <Typography variant="body1" sx={{ color: "text.secondary" }}>
                Card type:
              </Typography>
              <Typography variant="body2">{cardInfo?.type || "Visa"}</Typography>
            </Stack>

            <Stack direction="row" spacing={1} useFlexGap sx={{ width: "100%", mb: 1 }}>
              <SimCardRoundedIcon
                fontSize="small"
                sx={{ color: paymentType === "creditCard" ? "primary.main" : "text.secondary" }}
              />
              <Typography variant="body1" sx={{ color: "text.secondary" }}>
                Card number:
              </Typography>
              <Typography variant="body2">{cardInfo?.number || "xxxx-xxxx-xxxx-1234"}</Typography>
            </Stack>

            <Stack direction="row" spacing={1} useFlexGap sx={{ width: "100%", mb: 1 }}>
              <AccountBalanceRoundedIcon
                fontSize="small"
                sx={{ color: paymentType === "bankTransfer" ? "primary.main" : "text.secondary" }}
              />
              <Typography variant="body1" sx={{ color: "text.secondary" }}>
                Payment method:
              </Typography>
              <Typography variant="body2">
                {paymentType === "creditCard" ? "Credit Card" : "Bank Transfer"}
              </Typography>
            </Stack>

            {paymentType === "creditCard" && (
              <Stack direction="row" spacing={1} useFlexGap sx={{ width: "100%", mb: 1 }}>
                <Typography variant="body1" sx={{ color: "text.secondary" }}>
                  Expiry date:
                </Typography>
                <Typography variant="body2">{cardInfo?.expiry || "MM/YY"}</Typography>
              </Stack>
            )}
          </Grid>
        </div>
      </Stack>
    </Stack>
  );
}