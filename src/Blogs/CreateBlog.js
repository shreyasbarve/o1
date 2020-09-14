import React, { useState } from "react";

// API
import BlogModels from "../Models/Blogs/BlogModels";

// Components
import { Button, TextField, Typography } from "@material-ui/core";

function CreateBlog() {
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
    BlogModels.createBlog(createBlog);
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
    <>
      <Typography variant="button" gutterBottom>
        If you haven't completed the previous step, take a step back.
        <br />
        If you have done the last step, Fill up this form
      </Typography>
      <form onSubmit={postBlog} noValidate autoComplete="off">
        <TextField
          autoFocus
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
        <TextField
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

        <Button type="submit" variant="contained" color="primary">
          Create
        </Button>
      </form>
    </>
  );
}

export default CreateBlog;
