import { Box, Button, LinearProgress, Modal, Typography } from "@mui/material";
import { useEffect, useState } from "react";

import { apiAxios } from "../../../service/api-axios";

export function ServerWarmUp() {
  const [counter, setCounter] = useState(0);
  const [response, setResponse] = useState(false);
  const [isOpenModel, setIsOpenModal] = useState(true);

  const SUCCESS_STATUS = 200;

  useEffect(() => {
    async function getProducts() {
      try {
        await new Promise((resolve) => setTimeout(() => resolve(), 1000));

        const res = await apiAxios.get("/productos");

        if (res.status === SUCCESS_STATUS) {
          setResponse(SUCCESS_STATUS);
        }
      } catch (error) {
        console.error(error);

        setResponse(500);
      }
    }

    const counterInterval = setInterval(() => setCounter((prevCounter) => prevCounter + 1), 1000);

    if (response) {
      clearInterval(counterInterval);

      return;
    }

    getProducts();

    return () => clearInterval(counterInterval);
  }, [response]);

  return (
    <Modal
      open={isOpenModel}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "background.paper",
          boxShadow: 24,
          width: "100%",
          maxWidth: "30rem",
          p: 4
        }}
      >
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {!response
            ? "Cargando el servidor..."
            : response && response === SUCCESS_STATUS
              ? "Servidor cargado exitosamente."
              : "Error al cargar el servidor."}
        </Typography>
        {!response ? <LinearProgress sx={{ mt: 2 }} /> : null}
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Tiempo de carga {counter} {counter === 1 ? "segundo." : "segundos."}
        </Typography>
        <div style={{ marginTop: "1rem", display: "flex", justifyContent: "end" }}>
          <Button variant="contained" disabled={!response} onClick={() => setIsOpenModal(false)}>
            Cerrar
          </Button>
        </div>
      </Box>
    </Modal>
  );
}
