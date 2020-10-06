import React from "react";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import SnackBarStyles from "../Styles/SnackBarStyles";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function CustomizedSnackbars({ message }) {
  const SnackBarStyle = SnackBarStyles();
  const [openSuccess, setOpenSuccess] = React.useState(false);
  const [openError, setOpenError] = React.useState(false);

  const handleClickSuccess = () => {
    setOpenSuccess(true);
  };
  const handleCloseSuccess = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSuccess(false);
  };

  const handleClickError = () => {
    setOpenError(true);
  };
  const handleCloseError = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenError(false);
  };

  return (
    <div className={SnackBarStyle.root}>
      <Button variant="outlined" onClick={handleClickSuccess}>
        Open success snackbar
      </Button>
      <Snackbar
        open={openSuccess}
        autoHideDuration={4000}
        onClose={handleCloseSuccess}
        anchorOrigin={{ horizontal: "center", vertical: "top" }}
      >
        <Alert onClose={handleCloseSuccess} severity="success">
          {message}
        </Alert>
      </Snackbar>

      <div className={SnackBarStyle.root}>
        <Button variant="outlined" onClick={handleClickError}>
          Open error snackbar
        </Button>
        <Snackbar
          open={openError}
          autoHideDuration={4000}
          onClose={handleCloseError}
          anchorOrigin={{ horizontal: "center", vertical: "top" }}
        >
          <Alert onClose={handleCloseError} severity="error">
            {message}
          </Alert>
        </Snackbar>
      </div>
    </div>
  );
}
