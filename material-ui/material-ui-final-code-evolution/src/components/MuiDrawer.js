import React, { useState } from "react";
import { Drawer, Box, Typography, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
const MuiDrawer = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <>
      <IconButton
        size="large"
        color="inherit"
        onClick={() => setDrawerOpen(true)}
      >
        <MenuIcon></MenuIcon>
      </IconButton>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Box p={2} width="250px" textAlign="center" role="presentation">
          <Typography variant="h6" component="div">
            SidePanel
          </Typography>
        </Box>
      </Drawer>
    </>
  );
};

export default MuiDrawer;
