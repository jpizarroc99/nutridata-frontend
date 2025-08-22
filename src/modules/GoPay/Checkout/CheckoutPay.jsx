import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Stack,
  Step,
  StepLabel,
  Stepper,
  Typography
} from "@mui/material";

import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";

import { CartContext } from "./CartContext";
import CartPaymentForm from "./CartPaymentForm";
import Review from "./Review";
import AddressForm from "./AddressForm";
import Info from "./Info";
import InfoMobile from "./InfoMobile";
import AppTheme from "./theme/AppTheme";

const steps = ["Shipping address", "Payment details", "Review your order"];

export default function Checkout(props) {
  const [activeStep, setActiveStep] = useState(0);
  const { cart, getTotal } = useContext(CartContext);

  const [addressData, setAddressData] = useState({
    name: "",
    street: "",
    city: "",
    zip: ""
  });

  const [paymentType, setPaymentType] = useState("creditCard");
  const [cardInfo, setCardInfo] = useState({
    number: "",
    name: "",
    cvv: "",
    expiry: ""
  });

  const handleNext = () => {
    if (!validateStep(activeStep)) return;
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => setActiveStep(activeStep - 1);

  const validateStep = (step) => {
    if (step === 0) {
      return Object.values(addressData).every((v) => v.trim() !== "");
    }
    if (step === 1 && paymentType === "creditCard") {
      const { number, name, cvv, expiry } = cardInfo;
      return (
        number.replace(/\s/g, "").length === 16 &&
        name.trim() !== "" &&
        cvv.length === 3 &&
        expiry.length === 5
      );
    }
    return true;
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return <AddressForm data={addressData} setData={setAddressData} />;
      case 1:
        return (
          <CartPaymentForm
            paymentType={paymentType}
            setPaymentType={setPaymentType}
            cardInfo={cardInfo}
            setCardInfo={setCardInfo}
          />
        );
      case 2:
        return <Review addressData={addressData} paymentType={paymentType} cardInfo={cardInfo} />;
      default:
        throw new Error("Unknown step");
    }
  };

  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />

      <Grid
        container
        sx={{
          height: { xs: "100%", sm: "calc(100dvh - var(--template-frame-height, 0px))" },
          mt: { xs: 4, sm: 0 }
        }}
      >
        <Grid
          item
          xs={0}
          md={5}
          lg={4}
          sx={{
            display: { xs: "none", md: "flex" },
            flexDirection: "column",
            backgroundColor: "background.paper",
            borderRight: "1px solid",
            borderColor: "divider",
            alignItems: "start",
            pt: 16,
            px: 10,
            gap: 4
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              flexGrow: 1,
              width: "100%",
              maxWidth: 500
            }}
          >
            <Info totalPrice={`$${getTotal()}`} />
          </Box>
        </Grid>

        <Grid
          item
          xs={12}
          md={7}
          lg={8}
          sx={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "100%",
            width: "100%",
            backgroundColor: { xs: "transparent", sm: "background.default" },
            alignItems: "start",
            pt: { xs: 0, sm: 16 },
            px: { xs: 2, sm: 10 },
            gap: { xs: 4, md: 8 }
          }}
        >
          <Box
            sx={{ display: { xs: "none", md: "flex" }, width: "100%", justifyContent: "flex-end" }}
          >
            <Stepper activeStep={activeStep} sx={{ width: "100%", height: 40 }}>
              {steps.map((label) => (
                <Step key={label} sx={{ ":first-child": { pl: 0 }, ":last-child": { pr: 0 } }}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </Box>

          <Card sx={{ display: { xs: "flex", md: "none" }, width: "100%" }}>
            <CardContent
              sx={{
                display: "flex",
                width: "100%",
                alignItems: "center",
                justifyContent: "space-between"
              }}
            >
              <div>
                <Typography variant="subtitle2" gutterBottom>
                  Selected products
                </Typography>
                <Typography variant="body1">${getTotal()}</Typography>
              </div>
              <InfoMobile totalPrice={`$${getTotal()}`} />
            </CardContent>
          </Card>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              flexGrow: 1,
              width: "100%",
              maxWidth: { sm: "100%", md: 600 },
              maxHeight: "720px",
              gap: { xs: 5, md: "none" }
            }}
          >
            <Stepper
              activeStep={activeStep}
              alternativeLabel
              sx={{ display: { sm: "flex", md: "none" } }}
            >
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>

            {activeStep === steps.length ? (
              <Stack spacing={2} useFlexGap>
                <Typography variant="h1">📦</Typography>
                <Typography variant="h5">Thank you for your order!</Typography>
                <Typography variant="body1" sx={{ color: "text.secondary" }}>
                  Your order number is <strong>#140396</strong>. We have emailed your order
                  confirmation.
                </Typography>
                <Button
                  variant="contained"
                  sx={{ alignSelf: "start", width: { xs: "100%", sm: "auto" } }}
                >
                  Go to my orders
                </Button>
              </Stack>
            ) : (
              <>
                {getStepContent(activeStep)}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column-reverse", sm: "row" },
                    alignItems: "end",
                    flexGrow: 1,
                    gap: 1,
                    pb: { xs: 12, sm: 0 },
                    mt: { xs: 2, sm: 0 },
                    mb: "60px",
                    justifyContent: activeStep !== 0 ? "space-between" : "flex-end"
                  }}
                >
                  {activeStep !== 0 && (
                    <Button
                      startIcon={<ChevronLeftRoundedIcon />}
                      onClick={handleBack}
                      variant="text"
                      sx={{ display: { xs: "none", sm: "flex" } }}
                    >
                      Previous
                    </Button>
                  )}
                  {activeStep !== 0 && (
                    <Button
                      startIcon={<ChevronLeftRoundedIcon />}
                      onClick={handleBack}
                      variant="outlined"
                      fullWidth
                      sx={{ display: { xs: "flex", sm: "none" } }}
                    >
                      Previous
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    endIcon={<ChevronRightRoundedIcon />}
                    onClick={handleNext}
                    sx={{ width: { xs: "100%", sm: "fit-content" } }}
                  >
                    {activeStep === steps.length - 1 ? "Place order" : "Next"}
                  </Button>
                </Box>
              </>
            )}
          </Box>
        </Grid>
      </Grid>
    </AppTheme>
  );
}
