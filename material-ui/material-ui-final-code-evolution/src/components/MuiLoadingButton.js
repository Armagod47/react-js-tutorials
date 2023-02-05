import React, { useState } from "react";
import { Stack } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import SaveIcon from "@mui/icons-material/Save";
const MuiLoadingButton = () => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <Stack direction="row" spacing={2}>
      <LoadingButton variant="outlined">Submit</LoadingButton>
      <LoadingButton variant="outlined" loading>
        Submit
      </LoadingButton>
      <LoadingButton variant="outlined" loadingIndicator="Loading...">
        Fetch Data
      </LoadingButton>
      <LoadingButton variant="outlined" loading loadingIndicator="Loading...">
        Fetch Data
      </LoadingButton>
      <LoadingButton
        variant="outlined"
        loadingPosition="start"
        startIcon={<SaveIcon />}
      >
        Save
      </LoadingButton>
      <LoadingButton
        loading
        variant="outlined"
        loadingPosition="start"
        startIcon={<SaveIcon />}
      >
        Save
      </LoadingButton>
      <LoadingButton
        variant="contained"
        loadingPosition="start"
        color="secondary"
        startIcon={<SaveIcon />}
        loading={isLoading}
        onClick={() => setIsLoading(true)}
      >
        UseState Loading
      </LoadingButton>
    </Stack>
  );
};

export default MuiLoadingButton;
