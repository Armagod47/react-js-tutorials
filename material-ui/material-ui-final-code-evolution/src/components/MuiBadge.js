import React from "react";
import { Stack, Badge } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
const MuiBadge = () => {
  return (
    <Stack spacing={2} direction="row">
      <Badge badgeContent={5} color="secondary">
        <MailIcon></MailIcon>
      </Badge>
      <Badge badgeContent={0} color="primary" showZero>
        <MailIcon></MailIcon>
      </Badge>
      <Badge badgeContent={100} max={999} color="secondary">
        <MailIcon></MailIcon>
      </Badge>
      <Badge variant="dot" color="secondary" invisible={true}>
        <MailIcon></MailIcon>
      </Badge>
    </Stack>
  );
};

export default MuiBadge;
