import React, { useState } from "react";
import FaceIcon from "@mui/icons-material/Face";
import { Stack, Chip, Avatar } from "@mui/material";
const MuiChip = () => {
  const [chips, setChips] = useState(["Chip 1", "Chip 2", "Chip 3"]);
  const handleDelete = (chipToDelete) => {
    setChips((chip) => chip.filter((chip) => chip !== chipToDelete));
  };
  return (
    <Stack spacing={1} direction="row">
      <Chip label="Chip" color="secondary" icon={<FaceIcon />} />
      <Chip
        label="Chip"
        color="primary"
        size="small"
        variant="outlined"
        avatar={<Avatar>V</Avatar>}
      />
      <Chip
        label="Click"
        color="success"
        onClick={() => alert("chip clicked")}
      />

      <Chip
        label="Delete"
        color="error"
        onClick={() => alert("Click Called")}
        onDelete={() => alert("Delete Handler Called")}
      />

      {chips.map((chip) => (
        <Chip
          key={chip}
          label={chip}
          onDelete={() => handleDelete(chip)}
        ></Chip>
      ))}
    </Stack>
  );
};

export default MuiChip;
