import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Snackbar } from "@material-ui/core";
import { setSnackbar } from "./SnackBarReducer";
import MuiAlert from "@material-ui/lab/Alert";
import SnackBarStyles from "../Styles/SnackBarStyles";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function CustomizedSnackbars() {
  const SnackBarStyle = SnackBarStyles();

  // redux
  const dispatch = useDispatch();
  const snackbarOpen = useSelector((state) => state.snackbar.snackbarOpen);
  const snackbarseverity = useSelector(
    (state) => state.snackbar.snackbarseverity
  );
  const snackbarMessage = useSelector(
    (state) => state.snackbar.snackbarMessage
  );

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch(setSnackbar(false, snackbarseverity, snackbarMessage));
  };

  return (
    <div className={SnackBarStyle.root}>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={4000}
        onClose={handleClose}
        anchorOrigin={{ horizontal: "center", vertical: "top" }}
      >
        <Alert onClose={handleClose} severity={snackbarseverity}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  );
}
