const Card = styled(MuiCard)(({ theme, selected }) => ({
  border: "1px solid",
  borderColor: (theme.vars || theme).palette.divider,
  width: "100%",
  "&:hover": {
    background:
      "linear-gradient(to bottom right, hsla(210, 100%, 97%, 0.5) 25%, hsla(210, 100%, 90%, 0.3) 100%)",
    borderColor: "primary.light",
    boxShadow: "0px 2px 8px hsla(0, 0%, 0%, 0.1)"
  },
  ...(selected && {
    borderColor: (theme.vars || theme).palette.primary.light
  })
}));

// Contenedor de formulario de pago
const PaymentContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  width: "100%",
  height: 375,
  padding: theme.spacing(3),
  borderRadius: `calc(${theme.shape.borderRadius}px + 4px)`,
  border: "1px solid",
  borderColor: (theme.vars || theme).palette.divider,
  background:
    "linear-gradient(to bottom right, hsla(220, 35%, 97%, 0.3) 25%, hsla(220, 20%, 88%, 0.3) 100%)"
}));

export default function CartPaymentForm() {
  const { cart, getTotal } = useContext(CartContext);

  const [paymentType, setPaymentType] = React.useState("creditCard");
  const [cardNumber, setCardNumber] = React.useState("");
  const [cvv, setCvv] = React.useState("");
  const [expirationDate, setExpirationDate] = React.useState("");

  const handlePaymentTypeChange = (event) => {
    setPaymentType(event.target.value);
  };

  const handleCardNumberChange = (event) => {
    const value = event.target.value.replace(/\D/g, "");
    const formatted = value.replace(/(\d{4})(?=\d)/g, "$1 ");
    if (value.length <= 16) setCardNumber(formatted);
  };

  const handleCvvChange = (event) => {
    const value = event.target.value.replace(/\D/g, "");
    if (value.length <= 3) setCvv(value);
  };

  const handleExpirationDateChange = (event) => {
    const value = event.target.value.replace(/\D/g, "");
    const formatted = value.replace(/(\d{2})(?=\d{2})/, "$1/");
    if (value.length <= 4) setExpirationDate(formatted);
  };

  return (
    <Stack spacing={3}>
      {/* Resumen del carrito */}
      <Box>
        <Typography variant="h6" sx={{ mb: 1 }}>
          <CreditCardRoundedIcon sx={{ mr: 1, verticalAlign: "middle" }} />
          Resumen del carrito
        </Typography>
        {cart.map((item) => (
          <Box key={item.id} sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
            <Typography>
              {item.name} x{item.quantity}
            </Typography>
            <Typography>${item.price * item.quantity}</Typography>
          </Box>
        ))}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mt: 2
          }}
        >
          <Typography variant="h6">Total: ${getTotal()}</Typography>
          <Button variant="contained" color="primary">
            Ir a pagar
          </Button>
        </Box>
      </Box>

      {/* Formulario de pago */}
      <FormControl component="fieldset" fullWidth>
        <RadioGroup
          aria-label="Payment options"
          name="paymentType"
          value={paymentType}
          onChange={handlePaymentTypeChange}
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            gap: 2
          }}
        >
          <Card selected={paymentType === "creditCard"}>
            <CardActionArea onClick={() => setPaymentType("creditCard")}>
              <CardContent sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <CreditCardRoundedIcon
                  fontSize="small"
                  sx={{ color: paymentType === "creditCard" ? "primary.main" : "grey.400" }}
                />
                <Typography sx={{ fontWeight: "medium" }}>Card</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card selected={paymentType === "bankTransfer"}>
            <CardActionArea onClick={() => setPaymentType("bankTransfer")}>
              <CardContent sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <AccountBalanceRoundedIcon
                  fontSize="small"
                  sx={{ color: paymentType === "bankTransfer" ? "primary.main" : "grey.400" }}
                />
                <Typography sx={{ fontWeight: "medium" }}>Bank account</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </RadioGroup>
      </FormControl>

      {paymentType === "creditCard" && (
        <PaymentContainer>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="subtitle2">Credit card</Typography>
            <CreditCardRoundedIcon sx={{ color: "text.secondary" }} />
          </Box>
          <SimCardRoundedIcon
            sx={{ fontSize: 56, transform: "rotate(90deg)", color: "text.secondary" }}
          />
          <Box sx={{ display: "flex", gap: 2 }}>
            <Box sx={{ flexGrow: 1 }}>
              <FormLabel htmlFor="card-number" required>
                Card number
              </FormLabel>
              <OutlinedInput
                id="card-number"
                placeholder="0000 0000 0000 0000"
                value={cardNumber}
                onChange={handleCardNumberChange}
                size="small"
              />
            </Box>
            <Box sx={{ width: "20%" }}>
              <FormLabel htmlFor="cvv" required>
                CVV
              </FormLabel>
              <OutlinedInput
                id="cvv"
                placeholder="123"
                value={cvv}
                onChange={handleCvvChange}
                size="small"
              />
            </Box>
          </Box>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Box sx={{ flexGrow: 1 }}>
              <FormLabel htmlFor="card-name" required>
                Name
              </FormLabel>
              <OutlinedInput id="card-name" placeholder="John Smith" size="small" />
            </Box>
            <Box sx={{ flexGrow: 1 }}>
              <FormLabel htmlFor="card-expiration" required>
                Expiration date
              </FormLabel>
              <OutlinedInput
                id="card-expiration"
                placeholder="MM/YY"
                value={expirationDate}
                onChange={handleExpirationDateChange}
                size="small"
              />
            </Box>
          </Box>
          <FormControlLabel
            control={<Checkbox name="saveCard" />}
            label="Remember credit card details for next time"
          />
        </PaymentContainer>
      )}

      {paymentType === "bankTransfer" && (
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Alert severity="warning" icon={<WarningRoundedIcon />}>
            Your order will be processed once we receive the funds.
          </Alert>
          <Typography variant="subtitle1" sx={{ fontWeight: "medium" }}>
            Bank account
          </Typography>
          <Typography variant="body1" gutterBottom>
            Please transfer the payment to the bank account details shown below.
          </Typography>
          <Box sx={{ display: "flex", gap: 1 }}>
            <Typography variant="body1" sx={{ color: "text.secondary" }}>
              Bank:
            </Typography>
            <Typography variant="body1" sx={{ fontWeight: "medium" }}>
              Mastercredit
            </Typography>
          </Box>
          <Box sx={{ display: "flex", gap: 1 }}>
            <Typography variant="body1" sx={{ color: "text.secondary" }}>
              Account number:
            </Typography>
            <Typography variant="body1" sx={{ fontWeight: "medium" }}>
              123456789
            </Typography>
          </Box>
          <Box sx={{ display: "flex", gap: 1 }}>
            <Typography variant="body1" sx={{ color: "text.secondary" }}>
              Routing number:
            </Typography>
            <Typography variant="body1" sx={{ fontWeight: "medium" }}>
              987654321
            </Typography>
          </Box>
        </Box>
      )}
    </Stack>
  );
}
