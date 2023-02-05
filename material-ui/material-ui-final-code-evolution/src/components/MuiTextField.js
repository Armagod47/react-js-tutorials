import React, { useState } from "react";
import { Stack, TextField, InputAdornment } from "@mui/material";
function MuiTextField() {
  const [value, setValue] = useState("");
  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={2}>
        <TextField label="Name" variant="outlined" />
        <TextField label="Name" variant="filled" />
        <TextField label="Name" variant="standard" />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField label="Small secondary" size="small" color="secondary" />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField
          label="Form input"
          required
          error={!value}
          helperText={!value ? "Required" : "Dont Share Your ID With Others!!!"}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          helperText="Dont Share YOur PWD"
        />
        <TextField label="Read only" InputProps={{ readOnly: true }} />
      </Stack>

      <Stack direction="row" spacing={2}>
        <TextField
          label="Amount"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField
          label="Weight"
          InputProps={{
            endAdornment: <InputAdornment position="end">KG</InputAdornment>,
          }}
        />
      </Stack>
    </Stack>
  );
}

export default MuiTextField;
