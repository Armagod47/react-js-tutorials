import React, { useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
  FormHelperText,
} from "@mui/material";
function MuiRadioButton() {
  const [value, setValue] = useState("");
  console.log(value);
  return (
    <Box>
      <FormControl id="job-experience-group-label" error>
        <FormLabel>Years Of Experience</FormLabel>
        <RadioGroup
          name="job-experience-group"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          row
        >
          <FormControlLabel
            control={<Radio size="medium" color="primary" />}
            label="0-2"
            value="0-2"
          ></FormControlLabel>
          <FormControlLabel
            control={<Radio color="secondary" />}
            label="2-4"
            value="2-4"
          ></FormControlLabel>
          <FormControlLabel
            control={<Radio color="success" />}
            label="4-10"
            value="4-10"
          ></FormControlLabel>
        </RadioGroup>
        <FormHelperText>Invalid Selection</FormHelperText>
      </FormControl>
    </Box>
  );
}

export default MuiRadioButton;
