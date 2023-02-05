import React from "react";
import { Box, styled } from "@mui/material";
// import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";

const StyledBox = styled(Box)(({ theme }) => ({
  height: "250px",
  width: "250px",
  //   backgroundColor: theme.status.danger,
  backgroundColor: theme.palette.neutral,
}));

const MuiResponsiveness = () => {
  return (
    <>
      <Box
        sx={{
          width: {
            xs: 100, //above 0
            sm: 200, //above 600
            md: 300, //above 900
            lg: 400, //above 1200
            xl: 500, //above 1536
          },
          height: "300px",
          backgroundColor: "secondary.dark",
        }}
      ></Box>
      <StyledBox />
    </>
  );
};

export default MuiResponsiveness;
