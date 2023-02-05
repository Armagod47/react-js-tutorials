import React from "react";
import { Box, Breadcrumbs, Link, Typography } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
const MuiBreadCrumbs = () => {
  return (
    <Box margin={2}>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        maxItems={2}
        // itemsAfterCollapse={2}
        itemsBeforeCollapse={2}
      >
        <Link underline="hover" href="#">
          Home
        </Link>
        <Link underline="hover" href="#">
          Catalogue
        </Link>
        <Link underline="hover" href="#">
          Accessories
        </Link>
        <Typography color="secondary">Shoes</Typography>
      </Breadcrumbs>
    </Box>
  );
};

export default MuiBreadCrumbs;
