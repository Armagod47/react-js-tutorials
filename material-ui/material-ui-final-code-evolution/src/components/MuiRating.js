import React, { useState } from "react";
import { Stack, Rating } from "@mui/material";
import FavouriteIcon from "@mui/icons-material/Favorite";
import FavouriteBorderIcon from "@mui/icons-material/FavoriteBorder";
function MuiRating() {
  const [value, setValue] = useState(null);
  console.log({ value });
  const handleChange = (e, newValue) => {
    setValue(newValue);
  };
  return (
    <Stack spacing={2}>
      <Rating
        value={value}
        onChange={handleChange}
        precision={0.5}
        icon={<FavouriteIcon fontSize="inherit" />}
        emptyIcon={<FavouriteBorderIcon fontSize="inherit" />}
      />
      <Rating
        value={value}
        onChange={handleChange}
        precision={0.5}
        icon={<FavouriteIcon fontSize="inherit" />}
        emptyIcon={<FavouriteBorderIcon fontSize="inherit" />}
        // highlightSelectedOnly
        readOnly
      />
    </Stack>
  );
}

export default MuiRating;
