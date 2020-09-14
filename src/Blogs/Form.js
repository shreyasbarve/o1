import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  useTheme,
  useMediaQuery,
  DialogActions,
  Divider,
} from "@material-ui/core";
import FillForm from "./StepperForm";

function Form() {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("lg"));
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Button variant="outlined" color="inherit" onClick={handleClickOpen}>
        Post a Blog
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Post Blog</DialogTitle>
        <Divider />
        <FillForm />
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Form;
