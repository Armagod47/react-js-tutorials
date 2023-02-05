import React, { useState } from "react";
import {
  Button,
  Stack,
  IconButton,
  ButtonGroup,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
function MuiButton() {
  const [formats, setFormats] = useState([]);
  console.log(formats);
  const handleFormatChange = (event, updatedFormats) => {
    setFormats(updatedFormats);
  };
  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction="row">
        <Button variant="text" href="https://google.com">
          SUBMIT Text
        </Button>
        <Button variant="contained">SUBMIT Contained</Button>
        <Button variant="outlined">SUBMIT Outlined</Button>
      </Stack>
      <Stack spacing={2} direction="row">
        <Button variant="contained" color="primary">
          Primary Btn
        </Button>
        <Button variant="contained" color="secondary">
          Secondary Btn
        </Button>
        <Button variant="contained" color="error">
          Error Btn
        </Button>
        <Button variant="contained" color="warning">
          Warning Btn
        </Button>
        <Button variant="contained" color="info">
          Info Btn
        </Button>
        <Button variant="contained" color="success">
          Success Btn
        </Button>
      </Stack>

      <Stack display="block" spacing={2} direction="row">
        <Button variant="contained" size="small">
          Small Btn
        </Button>
        <Button variant="contained" size="medium">
          Medium Btn
        </Button>
        <Button variant="contained" size="large">
          Large Btn
        </Button>
      </Stack>

      <Stack spacing={2} direction="row">
        <Button
          variant="contained"
          startIcon={<SendIcon />}
          disableRipple
          onClick={(e) => alert(e.target.name)}
        >
          Send
        </Button>
        <Button variant="contained" endIcon={<SendIcon />} disableElevation>
          Send
        </Button>

        <IconButton aria-label="send" color="success" size="small">
          <SendIcon />
        </IconButton>
      </Stack>

      <Stack direction="row">
        <ButtonGroup
          variant="contained"
          orientation="vertical"
          size="small"
          color="secondary"
          aria-label="alignment button group"
        >
          <Button onClick={() => alert("Left Click")}>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Stack>

      <Stack direction="row">
        <ToggleButtonGroup
          aria-label="text-formatting"
          size="small"
          color="error"
          orientation="vertical"
          exclusive
          value={formats}
          onChange={handleFormatChange}
        >
          <ToggleButton value="bold">
            <FormatBoldIcon />
          </ToggleButton>
          <ToggleButton value="italic">
            <FormatItalicIcon />
          </ToggleButton>
          <ToggleButton value="underlined">
            <FormatUnderlinedIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  );
}

export default MuiButton;
