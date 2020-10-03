import React, { useState } from "react";

// API
import BlogModels from "../../Models/Blogs/BlogModels";

// Components
import { Button, TextField, Typography } from "@material-ui/core";

// Quill
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function CreateBlog() {
  // Quill
  // eslint-disable-next-line
  const [modules, setmodules] = React.useState({
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }, { indent: "-1" }, { indent: "+1" }],
      ["link", "image", "video"],
      ["clean"],
    ],
  });
  // eslint-disable-next-line
  const [formats, setformats] = React.useState([
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "video",
  ]);

  // Server response
  const [serverReply, setserverReply] = useState("");

  // Posting the blog
  const initialState = {
    author: "",
    title: "",
    body: "",
    email: "",
    fullname: "",
    key: "",
  };
  const [createBlog, setcreateBlog] = useState(initialState);
  const postBlog = async (e) => {
    e.preventDefault();
    BlogModels.createBlog(createBlog)
      .then(() => {
        setcreateBlog(initialState);
        setserverReply("Post created");
      })
      .catch(() => {
        setserverReply("Post not created");
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
              key: e.target.value,
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
              author: e.target.value,
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
              fullname: e.target.value,
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
              email: e.target.value,
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
              title: e.target.value,
            })
          }
        />
        <Typography variant="body1" color="textSecondary" style={{ marginTop: "2%" }}>
          Body
        </Typography>
        <ReactQuill
          placeholder="Enter your blog body here"
          id="body"
          theme="snow"
          modules={modules}
          formats={formats}
          onChange={(e) =>
            setcreateBlog({
              ...createBlog,
              body: e,
            })
          }
          value={createBlog.body}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          style={{ marginTop: "2%", marginBottom: "2%" }}
        >
          Create
        </Button>
      </form>
      <Typography variant="overline">{serverReply}</Typography>
    </>
  );
}

export default CreateBlog;
