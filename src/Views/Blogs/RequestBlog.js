import React, { useState } from "react";

// API
import BlogModels from "../../Models/Blogs/BlogModels";

// Components
import { TextField, Button, Typography } from "@material-ui/core";
import SnackBar from "../../Components/SnackBar";

function RequestBlog(props) {
  // Server response
  const [serverReply, setserverReply] = useState("");

  // Posting the blog
  const initialState = {
    fullname: "",
    college: "",
    branch: "",
    email: "",
  };
  const [requestBlog, setrequestBlog] = useState(initialState);
  const postBlog = async (e) => {
    e.preventDefault();
    try {
      await BlogModels.requestBlog(requestBlog);
      setrequestBlog(initialState);
      setserverReply("Request sent");
      props.onAfterRequest();
    } catch (error) {
      setserverReply("Request not sent");
    }
  };

  return (
    <>
      <SnackBar message="Request checking" />
      <Typography variant="button" gutterBottom>
        Fill up the request form. Ensure that all the details are correct. You
        will be contacted from the admin
      </Typography>
      <form onSubmit={postBlog} noValidate autoComplete="off">
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
        <Button
          type="submit"
          variant="contained"
          color="primary"
          style={{ marginTop: "2%", marginBottom: "2%" }}
        >
          Request
        </Button>
      </form>
      <Typography variant="overline">{serverReply}</Typography>
    </>
  );
}

export default RequestBlog;
