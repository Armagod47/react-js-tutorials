import React from "react";
import { Stack, Alert, AlertTitle, Button } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
const MuiAlert = () => {
  return (
    <Stack spacing={2}>
      <Alert severity="error">Error Alert</Alert>
      <Alert severity="warning">Alert</Alert>
      <Alert severity="info">Alert</Alert>
      <Alert severity="success">Alert</Alert>

      <Alert variant="outlined" severity="error">
        Error Alert
      </Alert>
      <Alert variant="outlined" severity="warning">
        Alert
      </Alert>
      <Alert variant="outlined" severity="info">
        Alert
      </Alert>
      <Alert variant="outlined" severity="success">
        Alert
      </Alert>

      <Alert
        variant="filled"
        severity="error"
        onClose={() => alert("close alert")}
      >
        <AlertTitle>Errors X0X</AlertTitle>
        Error Alert
      </Alert>
      <Alert variant="filled" severity="warning">
        <AlertTitle>Errors X0X</AlertTitle>
        Alert
      </Alert>
      <Alert variant="filled" severity="info">
        <AlertTitle>Errors X0X</AlertTitle>
        Alert
      </Alert>
      <Alert
        variant="filled"
        severity="success"
        icon={<CheckIcon fontSize="inherit" />}
        action={
          <Button size="small" color="inherit">
            undo
          </Button>
        }
      >
        <AlertTitle>Errors X0X</AlertTitle>
        Alert
      </Alert>
    </Stack>
  );
};

export default MuiAlert;
