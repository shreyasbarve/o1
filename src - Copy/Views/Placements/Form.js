import React, { useState } from "react";

// CSS
import { Close } from "@material-ui/icons";

// Components
import { Button, Dialog, DialogTitle, useTheme, useMediaQuery, DialogActions, Divider, IconButton } from "@material-ui/core";
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
    <>
      <Button variant="outlined" color="inherit" onClick={handleClickOpen}>
        Post a Placement
      </Button>
      <Dialog fullScreen={fullScreen} open={open} onClose={handleClose}>
        <DialogTitle id="form-dialog-title">Post Placement</DialogTitle>
        <IconButton
          onClick={handleClose}
          style={{
            position: "absolute",
            right: theme.spacing(1),
            top: theme.spacing(1),
            color: theme.palette.grey[500],
          }}
        >
          <Close />
        </IconButton>
        <Divider />
        <FillForm />
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Exit
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default Form;
