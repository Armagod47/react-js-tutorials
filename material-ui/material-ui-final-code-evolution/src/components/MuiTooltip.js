import React from "react";
import { Tooltip, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import MailIcon from "@mui/icons-material/Mail";
const MuiTooltip = () => {
  return (
    <>
      <Tooltip title="Delete" placement="right" arrow>
        <IconButton>
          <DeleteIcon></DeleteIcon>
        </IconButton>
      </Tooltip>
      <Tooltip
        title="Mail"
        placement="top-end"
        arrow
        enterDelay={500}
        leaveDelay={100}
      >
        <IconButton>
          <MailIcon></MailIcon>
        </IconButton>
      </Tooltip>
    </>
  );
};

export default MuiTooltip;
