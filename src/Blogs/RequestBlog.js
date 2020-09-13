import React, { useState } from "react";

// CSS
import AppBarStyles from "../Styles/AppBarStyles";

// API
import BlogModels from "../Models/Blogs/BlogModels";

// Components
import {
  Button,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";

export default function RequestBlog() {
  // Styling for elements
  const AppBarStyle = AppBarStyles();

  // Dialog control
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  // Posting the blog
  const [requestBlog, setrequestBlog] = useState({
    fullname: "",
    college: "",
    branch: "",
    email: "",
  });
  const postBlog = async (e) => {
    e.preventDefault();
    BlogModels.requestBlog(requestBlog);
    handleClose();
    setrequestBlog({
      fullname: "",
      college: "",
      branch: "",
      email: "",
    });
  };
  return (
    <Typography
      variant="h5"
      className={AppBarStyle.title}
      display="inline"
      style={{ marginRight: "20%" }}
    >
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Request Key
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Request Blog</DialogTitle>
        <form onSubmit={postBlog} noValidate autoComplete="off">
          <DialogContent dividers>
            <DialogContentText>
              Please fill correct details in the form. You will need to verify
              your identity in order to post a blog.
            </DialogContentText>
            <TextField
              autoFocus
              required
              margin="dense"
              id="fullname"
              label="Full Name"
              type="text"
              fullWidth
              name="fullname"
              value={requestBlog.fullname}
              onChange={(e) =>
                setrequestBlog({
                  ...requestBlog,
                  fullname: e.currentTarget.value,
                })
              }
            />
            <TextField
              autoFocus
              required
              margin="dense"
              id="college"
              label="College"
              type="text"
              fullWidth
              name="college"
              value={requestBlog.college}
              onChange={(e) =>
                setrequestBlog({
                  ...requestBlog,
                  college: e.currentTarget.value,
                })
              }
            />
            <TextField
              autoFocus
              required
              margin="dense"
              id="branch"
              label="Branch"
              type="text"
              fullWidth
              name="branch"
              value={requestBlog.branch}
              onChange={(e) =>
                setrequestBlog({
                  ...requestBlog,
                  branch: e.currentTarget.value,
                })
              }
            />
            <TextField
              autoFocus
              required
              margin="dense"
              id="email"
              label="Email"
              type="email"
              fullWidth
              name="email"
              value={requestBlog.email}
              onChange={(e) =>
                setrequestBlog({
                  ...requestBlog,
                  email: e.currentTarget.value,
                })
              }
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button type="submit" color="primary">
              Request
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </Typography>
  );
}
