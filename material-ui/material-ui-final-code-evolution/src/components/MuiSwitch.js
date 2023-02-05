import React, { useState } from "react";
import {
  Switch,
  Box,
  FormControlLabel,
  FormControl,
  FormGroup,
  FormLabel,
} from "@mui/material";
function MuiSwitch() {
  const [check, setCheck] = useState(false);
  const [switchGroup, setSwitchGroup] = useState(false);
  console.log(check);
  const handleChange = (e) => {
    setCheck(e.target.checked);
  };
  const handleGroupChange = (e) => {
    setSwitchGroup(e.target.checked);
  };
  return (
    <Box>
      <Box>
        <FormControlLabel
          label="Dark Mode"
          control={<Switch checked={check} onChange={handleChange} />}
        ></FormControlLabel>
      </Box>
      <Box>
        <FormControl>
          <FormLabel label="Skills">
            <FormGroup row>
              <FormControlLabel
                label="Primary Mode"
                control={
                  <Switch
                    color="primary"
                    onChange={handleGroupChange}
                    checked={switchGroup}
                  />
                }
              />
              <FormControlLabel
                label="Secondary Mode"
                control={
                  <Switch
                    color="secondary"
                    onChange={handleGroupChange}
                    checked={switchGroup}
                  />
                }
              />
              <FormControlLabel
                label="Success Mode"
                control={
                  <Switch
                    color="success"
                    onChange={handleGroupChange}
                    checked={switchGroup}
                  />
                }
              />
            </FormGroup>
          </FormLabel>
        </FormControl>
      </Box>
    </Box>
  );
}

export default MuiSwitch;
