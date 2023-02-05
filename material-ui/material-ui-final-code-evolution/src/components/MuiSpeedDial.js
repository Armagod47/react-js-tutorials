import React from "react";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";
import EditIcon from "@mui/icons-material/Edit";
import CopyIcon from "@mui/icons-material/FileCopyOutlined";
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
const MuiSpeedDial = () => {
  return (
    <SpeedDial
      ariaLabel="Navigation Speed Dial"
      sx={{ position: "absolute", bottom: 16, right: 16 }}
      icon={<SpeedDialIcon openIcon={<EditIcon />} />}
    >
      <SpeedDialAction icon={<CopyIcon />} tooltipTitle="copy" tooltipOpen />
      <SpeedDialAction icon={<ShareIcon />} tooltipTitle="share" tooltipOpen />
      <SpeedDialAction icon={<PrintIcon />} tooltipTitle="print" tooltipOpen />
    </SpeedDial>
  );
};

export default MuiSpeedDial;
