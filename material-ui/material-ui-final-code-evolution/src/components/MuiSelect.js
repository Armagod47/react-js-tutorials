import React, { useState } from "react";
import { Box, TextField, MenuItem } from "@mui/material";
function MuiSelect() {
  const [country, setCountry] = useState([]);
  const handleCHange = (e) => {
    const value = e.target.value;
    setCountry([...country, value]);
    console.log(country);
  };
  return (
    <Box width="250px">
      <TextField
        label="Select Country"
        select
        value={country}
        onChange={handleCHange}
        fullWidth
        sx={{ m: 2 }}
        SelectProps={{
          multiple: true,
        }}
        size="small"
        color="secondary"
        helperText="Please Select Country"
        error
      >
        <MenuItem value="IN">India</MenuItem>
        <MenuItem value="US">USA</MenuItem>
        <MenuItem value="AU">Australia</MenuItem>
      </TextField>
    </Box>
  );
}

export default MuiSelect;
