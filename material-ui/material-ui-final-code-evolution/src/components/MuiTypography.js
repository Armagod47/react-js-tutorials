import React from "react";
import { Typography } from "@mui/material";
function MuiTypography() {
  return (
    <div>
      <Typography variant="h1">TypoGraphy Section H1</Typography>
      <Typography variant="h2">TypoGraphy Section H2</Typography>
      <Typography variant="h3">TypoGraphy Section H3</Typography>
      <Typography variant="h4" gutterBottom>
        TypoGraphy Section H4
      </Typography>
      <Typography variant="h4" component="h1">
        TypoGraphy Section H4, Component As H1
      </Typography>
      <Typography variant="h5">TypoGraphy Section H5</Typography>
      <Typography variant="h6">TypoGraphy Section H6</Typography>
      <Typography variant="subtitle1">Subtitle 1</Typography>
      <Typography variant="subtitle2">Subtitle 2</Typography>
      <Typography variant="body1">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi,
        accusantium.
      </Typography>
      <Typography variant="body2">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi,
        accusantium.
      </Typography>
    </div>
  );
}

export default MuiTypography;
