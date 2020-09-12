import React, { useState } from "react";
// import axios from "axios";

// CSS
import AppBarStyles from "../Styling/AppBarStyles.js";

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

export default function CreateBlog() {
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
  const [createBlog, setcreateBlog] = useState({
    author: "",
    title: "",
    body: "",
    email: "",
    fullname: "",
    key: "",
  });
  const postBlog = async (e) => {
    e.preventDefault();
    // try {
    //   const postBlogData = await axios.get(
    //     "https://cors-anywhere.herokuapp.com/https://o1codingclub.herokuapp.com/blog/create/",
    //     createBlog
    //   );
    // } catch (error) {
    //   console.log(error);
    // }
    handleClose();
      setcreateBlog({
        author: "",
        title: "",
        body: "",
        email: "",
        fullname: "",
        key: "",
      });
  };
  return (
    <Typography variant="h5" className={AppBarStyle.title} display="inline">
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Create Blog
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">New Blog</DialogTitle>
        <form onSubmit={postBlog} noValidate autoComplete="off">
          <DialogContent dividers>
            <DialogContentText>
              If you have not Requested for a blog, do it first!
              <br />
              Please fill correct details in the form. You will need to verify
              your identity in order to post a blog.
            </DialogContentText>
            <TextField
              autoFocus
              required
              margin="dense"
              id="author"
              label="Author"
              type="text"
              fullWidth
              name="author"
              value={createBlog.author}
              onChange={(e) =>
                setcreateBlog({
                  ...createBlog,
                  author: e.currentTarget.value,
                })
              }
            />
            <TextField
              required
              margin="dense"
              id="title"
              label="Title"
              type="text"
              fullWidth
              name="title"
              value={createBlog.title}
              onChange={(e) =>
                setcreateBlog({
                  ...createBlog,
                  title: e.currentTarget.value,
                })
              }
            />
            <TextField
              required
              margin="dense"
              id="body"
              label="Body"
              type="text"
              fullWidth
              multiline
              name="body"
              value={createBlog.body}
              onChange={(e) =>
                setcreateBlog({
                  ...createBlog,
                  body: e.currentTarget.value,
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
              value={createBlog.email}
              onChange={(e) =>
                setcreateBlog({
                  ...createBlog,
                  email: e.currentTarget.value,
                })
              }
            />
            <TextField
              required
              margin="dense"
              id="fullname"
              label="Full Name"
              type="text"
              fullWidth
              name="fullname"
              value={createBlog.fullname}
              onChange={(e) =>
                setcreateBlog({
                  ...createBlog,
                  fullname: e.currentTarget.value,
                })
              }
            />
            <TextField
              required
              margin="dense"
              id="key"
              label="Key"
              type="text"
              fullWidth
              name="key"
              value={createBlog.key}
              onChange={(e) =>
                setcreateBlog({
                  ...createBlog,
                  key: e.currentTarget.value,
                })
              }
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button type="submit" color="primary">
              Create
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </Typography>
  );
}
