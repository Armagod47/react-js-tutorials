import React, { useState } from "react";
import {
  Box,
  FormControlLabel,
  Checkbox,
  FormControl,
  FormLabel,
  FormGroup,
} from "@mui/material";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";

function MuiCheckBox() {
  const [tnc, setTNC] = useState(false);
  const [skills, setSkills] = useState([]);
  const skillHandle = (event) => {
    const index = skills.indexOf(event.target.value);
    if (index === -1) {
      setSkills([...skills, event.target.value]);
    } else {
      setSkills(skills.filter((skill) => skill !== event.target.value));
    }
    console.log(index);
    console.log(skills);
  };
  return (
    <Box>
      <Box>
        <FormControlLabel
          label="I accept the terms and conditions"
          control={
            <Checkbox value={tnc} onChange={(e) => setTNC(e.target.checked)} />
          }
        ></FormControlLabel>
      </Box>

      <Box>
        <Checkbox
          icon={<BookmarkBorderIcon />}
          checkedIcon={<BookmarkIcon />}
          checked={tnc}
          onChange={(e) => setTNC(e.target.checked)}
        />
      </Box>

      <Box>
        <FormControl>
          <FormLabel label="Skills">
            <FormGroup row>
              <FormControlLabel
                label="CSS"
                control={
                  <Checkbox
                    value="css"
                    onChange={skillHandle}
                    checked={skills.includes("css")}
                  />
                }
              />
              <FormControlLabel
                label="Javascript"
                control={
                  <Checkbox
                    value="javascript"
                    onChange={skillHandle}
                    checked={skills.includes("javascript")}
                  />
                }
              />
              <FormControlLabel
                label="HTML"
                control={
                  <Checkbox
                    value="html"
                    onChange={skillHandle}
                    checked={skills.includes("html")}
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

export default MuiCheckBox;
