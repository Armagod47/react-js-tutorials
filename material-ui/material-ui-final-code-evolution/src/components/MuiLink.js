import React from "react";
import { Link, Stack, Typography } from "@mui/material";
const MuiLink = () => {
  return (
    <Stack spacing={2} direction="row" m={4}>
      <Link href="#" underline="none">
        Link
      </Link>
      <Typography variant="h6">
        <Link href="#" color="secondary" underline="hover">
          Second Link
        </Link>
      </Typography>
    </Stack>
  );
};

export default MuiLink;
