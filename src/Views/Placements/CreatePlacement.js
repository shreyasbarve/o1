import React, { useState } from "react";

// API
import PlacementModels from "../../Models/Placements/PlacementModels";

// Components
import { Button, TextField, Typography } from "@material-ui/core";

// Quill
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function CreatePlacement() {
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
  // Posting the placement
  const [createPlacement, setcreatePlacement] = useState({
    author: "",
    title: "",
    body: "",
    email: "",
    fullname: "",
    key: "",
  });
  const postPlacement = async (e) => {
    e.preventDefault();
    PlacementModels.createPlacement(createPlacement).then((res) => console.log(res.data));
    setcreatePlacement({
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
      <form onSubmit={postPlacement} noValidate autoComplete="off">
        <TextField
          autoFocus
          required
          margin="dense"
          id="key"
          label="Key"
          type="text"
          fullWidth
          name="key"
          value={createPlacement.key}
          onChange={(e) =>
            setcreatePlacement({
              ...createPlacement,
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
          value={createPlacement.author}
          onChange={(e) =>
            setcreatePlacement({
              ...createPlacement,
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
          value={createPlacement.fullname}
          onChange={(e) =>
            setcreatePlacement({
              ...createPlacement,
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
          value={createPlacement.email}
          onChange={(e) =>
            setcreatePlacement({
              ...createPlacement,
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
          value={createPlacement.title}
          onChange={(e) =>
            setcreatePlacement({
              ...createPlacement,
              title: e.currentTarget.value,
            })
          }
        />
        <Typography variant="body1" color="textSecondary" style={{ marginTop: "2%" }}>
          Body
        </Typography>
        <ReactQuill
          placeholder="Enter your placement body here"
          id="body"
          theme="snow"
          modules={modules}
          formats={formats}
          onChange={(e) =>
            setcreatePlacement({
              ...createPlacement,
              body: e,
            })
          }
          value={createPlacement.body}
        />
        <Button type="submit" variant="contained" color="primary" style={{ marginTop: "2%", marginBottom: "2%" }}>
          Create
        </Button>
      </form>
    </>
  );
}

export default CreatePlacement;
