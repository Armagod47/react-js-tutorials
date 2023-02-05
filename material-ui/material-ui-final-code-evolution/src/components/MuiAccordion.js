import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
const MuiAccordion = () => {
  const [expand, setExpand] = useState(false);
  const handleChange = (isExpanded, panel) => {
    setExpand(isExpanded ? panel : false);
  };
  return (
    <div>
      <Accordion
        expanded={expand === "panel1"}
        onChange={(e, isExpanded) => handleChange(isExpanded, "panel1")}
      >
        <AccordionSummary id="panel1-header" expandIcon={<ExpandMoreIcon />}>
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            numquam perferendis quos pariatur quas debitis, incidunt laboriosam
            placeat. Distinctio incidunt, laudantium neque deserunt omnis
            quibusdam!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expand === "panel2"}
        onChange={(e, isExpanded) => handleChange(isExpanded, "panel2")}
      >
        <AccordionSummary id="panel2-header" expandIcon={<ExpandMoreIcon />}>
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            numquam perferendis quos pariatur quas debitis, incidunt laboriosam
            placeat. Distinctio incidunt, laudantium neque deserunt omnis
            quibusdam!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expand === "panel3"}
        onChange={(e, isExpanded) => handleChange(isExpanded, "panel3")}
      >
        <AccordionSummary id="panel3-header" expandIcon={<ExpandMoreIcon />}>
          <Typography>Accordion 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            numquam perferendis quos pariatur quas debitis, incidunt laboriosam
            placeat. Distinctio incidunt, laudantium neque deserunt omnis
            quibusdam!
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default MuiAccordion;
