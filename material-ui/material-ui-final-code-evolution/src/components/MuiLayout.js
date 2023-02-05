import React from "react";
import { Box, Stack, Divider, Grid, Paper } from "@mui/material";
const MuiLayout = () => {
  return (
    <Paper sx={{ padding: "32px" }} elevation={4}>
      <Stack
        sx={{ border: "1px solid" }}
        direction="row"
        spacing={2}
        divider={<Divider orientation="vertical" flexItem />}
      >
        {/* Box accepts sx props for custom theming */}
        <Box component="span">Span as props</Box>
        <Box
          sx={{
            backgroundColor: "primary.main",
            color: "white",
            heiht: "100px",
            width: "100px",
            padding: "10px",
            "&:hover": {
              backgroundColor: "primary.light",
            },
          }}
        >
          P Tag as props
        </Box>

        <Box
          display="flex"
          height="100px"
          width="100px"
          bgcolor="success.light"
          p={2}
        ></Box>
      </Stack>
      <Grid container my={4} rowSpacing={2} columnSpacing={1}>
        <Grid item xs={12} sm={6}>
          <Box bgcolor="primary.main" p={2}>
            Item 1
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box bgcolor="primary.light" p={2}>
            Item 2
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box bgcolor="secondary.main" p={2}>
            Item 3
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box bgcolor="secondary.light" p={2}>
            Item 4
          </Box>
        </Grid>
        {/* Automatic layout <Grid item xs sm={6}> or <Grid item xs='auto' sm={6}>*/}
      </Grid>
    </Paper>
  );
};

export default MuiLayout;
