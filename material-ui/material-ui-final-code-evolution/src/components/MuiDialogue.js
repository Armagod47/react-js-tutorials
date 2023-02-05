import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Button,
  DialogActions,
} from "@mui/material";
const MuiDialogue = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Dialog</Button>
      <Dialog
        aria-describedby="dia-desc"
        open={open}
        onClose={() => setOpen(false)}
      >
        <DialogTitle id="dia-title">Sumbit The Test</DialogTitle>
        <DialogContent>
          <DialogContentText id="dia-desc">
            Are Your Sure, You Want To Submit The Test???
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button autoFocus onClick={() => setOpen(false)}>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default MuiDialogue;
