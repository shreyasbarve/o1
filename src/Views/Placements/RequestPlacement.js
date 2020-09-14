import React, { useState } from "react";

// API
import BlogModels from "../../Models/Blogs/BlogModels";

// Components
import { TextField, Button, Typography } from "@material-ui/core";

function RequestPlacement() {
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
    setrequestBlog({
      fullname: "",
      college: "",
      branch: "",
      email: "",
    });
  };
  return (
    <>
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
        <Button type="submit" variant="contained" color="primary" style={{marginTop: "2%", marginBottom: "2%"}}>
          Request
        </Button>
      </form>
    </>
  );
}

export default RequestPlacement;
