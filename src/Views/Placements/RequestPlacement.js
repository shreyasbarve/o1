import React, { useState } from "react";
import { useDispatch } from "react-redux";

// API
import PlacementModels from "../../Models/Placements/PlacementModels";

// Components
import { TextField, Button, Typography } from "@material-ui/core";
import { setSnackbar } from "../../Components/SnackBarReducer";

function RequestPlacement(props) {
  // Redux
  const dispatch = useDispatch();

  // Posting the placement
  const initialState = {
    fullname: "",
    college: "",
    branch: "",
    email: "",
  };
  const [requestPlacement, setrequestPlacement] = useState(initialState);
  const postPlacement = async (e) => {
    e.preventDefault();
    try {
      await PlacementModels.requestPlacement(requestPlacement);
      setrequestPlacement(initialState);
      dispatch(setSnackbar(true, "success", "Request sent"));
      props.onAfterRequest();
    } catch (error) {
      dispatch(setSnackbar(true, "error", "Request not sent"));
    }
  };
  return (
    <>
      <Typography variant="button" gutterBottom>
        Fill up the request form. Ensure that all the details are correct. You
        will be contacted from the admin
      </Typography>
      <form onSubmit={postPlacement} noValidate autoComplete="off">
        <TextField
          autoFocus
          required
          margin="dense"
          id="fullname"
          label="Full Name"
          type="text"
          fullWidth
          name="fullname"
          value={requestPlacement.fullname}
          onChange={(e) =>
            setrequestPlacement({
              ...requestPlacement,
              fullname: e.currentTarget.value,
            })
          }
        />
        <TextField
          required
          margin="dense"
          id="college"
          label="College"
          type="text"
          fullWidth
          name="college"
          value={requestPlacement.college}
          onChange={(e) =>
            setrequestPlacement({
              ...requestPlacement,
              college: e.currentTarget.value,
            })
          }
        />
        <TextField
          required
          margin="dense"
          id="branch"
          label="Branch"
          type="text"
          fullWidth
          name="branch"
          value={requestPlacement.branch}
          onChange={(e) =>
            setrequestPlacement({
              ...requestPlacement,
              branch: e.currentTarget.value,
            })
          }
        />
        <TextField
          required
          margin="dense"
          id="email"
          label="Email"
          type="email"
          fullWidth
          name="email"
          value={requestPlacement.email}
          onChange={(e) =>
            setrequestPlacement({
              ...requestPlacement,
              email: e.currentTarget.value,
            })
          }
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          style={{ marginTop: "2%", marginBottom: "2%" }}
        >
          Request
        </Button>
      </form>
    </>
  );
}

export default RequestPlacement;
