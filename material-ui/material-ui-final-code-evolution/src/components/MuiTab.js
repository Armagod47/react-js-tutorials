import React, { useState } from "react";
import { Box, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import FavoriteIcon from "@mui/icons-material/Favorite";
const MuiTab = () => {
  const [value, setValue] = useState("1");
  const handleChange = (e, newValue) => {
    console.log(newValue);
    setValue(newValue);
  };
  return (
    <Box>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider", width: "300px" }}>
          <TabList
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            // centered
            variant="scrollable"
            scrollButtons="auto"
          >
            <Tab label="Tab 1" value="1" />
            <Tab
              label="Tab 2"
              value="2"
              icon={<FavoriteIcon />}
              iconPosition="start"
            />
            <Tab label="Tab 3" value="3" disabled />
            <Tab label="Tab 4" value="4" />
            <Tab label="Tab 5" value="5" />
            <Tab label="Tab 6" value="6" />
            <Tab label="Tab 7" value="7" />
            <Tab label="Tab 8" value="8" />
            <Tab label="Tab 9" value="9" />
          </TabList>
        </Box>
        <TabPanel value="1">Panel1</TabPanel>
        <TabPanel value="2">Panel2</TabPanel>
        <TabPanel value="3">Panel3</TabPanel>
        <TabPanel value="4">Panel4</TabPanel>
        <TabPanel value="5">Panel5</TabPanel>
        <TabPanel value="6">Panel6</TabPanel>
        <TabPanel value="7">Panel7</TabPanel>
        <TabPanel value="8">Panel8</TabPanel>
        <TabPanel value="9">Panel9</TabPanel>
      </TabContext>
    </Box>
  );
};

export default MuiTab;
