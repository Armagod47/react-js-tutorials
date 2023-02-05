//use of space optimizer, it maintains consistent width but with different heights for list of blogs
import React from "react";
import {
  Box,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
import { Masonry } from "@mui/lab";
const heights = [120, 200, 250, 100, 50, 80, 150, 180, 90, 45];
const MuiMasonry = () => {
  return (
    <Box
      sx={{
        width: 500,
        minHeight: 400,
      }}
    >
      <Masonry columns={4} spacing={1}>
        {heights.map((height, index) => (
          <Paper
            key={index}
            sx={{
              //   display: "flex",
              //   alignItems: "center",
              //   justifyContent: "center",
              //   height: { height },
              border: "1px solid rgba(0,0,0,0.25)",
            }}
          >
            {/* {index + 1} */}
            <Accordion sx={{ minHeight: height }}>
              <AccordionSummary expandIcon={<ExpandCircleDownIcon />}>
                <Typography>Accordion {index + 1}</Typography>
              </AccordionSummary>
              <AccordionDetails>Contents</AccordionDetails>
            </Accordion>
          </Paper>
        ))}
      </Masonry>
    </Box>
  );
};

export default MuiMasonry;
