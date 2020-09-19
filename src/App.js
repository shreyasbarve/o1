import React, { useState } from "react";
import { Link } from "react-router-dom";

// CSS styling
import AppBarStyles, { AppbarTheme } from "./Styles/AppBarStyles";

// Components
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  ThemeProvider,
  Container,
  Card,
  CardContent,
  Grid,
  CardActions,
  TextField,
} from "@material-ui/core";

// API
import AdminModels from "./Models/Admin/AdminModels";

const adminkey = "gAAAAABfYyrPc24Rm_-3GlzW0nzgy2kfCHevEb3KnbDEBUwnwqIrBMVhBaTxcf1PS6FgRjSDJ6o1IBcbfhTycyQFuqR3sJn_XQ=="

function App() {
  // Styling for elements
  const AppBarStyle = AppBarStyles();

  const [message, setmessage] = useState({
    HTML: "",
    key: adminkey,
  });

  const sendEmailToAll = () => {
    AdminModels.senMailToAll(message).then((res) => {
      setmessage({
        HTML: "",
        key: adminkey,
      });
    });
  };

  return (
    <div>
      <ThemeProvider theme={AppbarTheme}>
        <div className={AppBarStyle.root}>
          <AppBar position="sticky">
            <Toolbar>
              <Typography variant="h5" className={AppBarStyle.title}>
                Home
              </Typography>

              <Link to="/blog" style={{ textDecoration: "none" }}>
                <Button>Blogs</Button>
              </Link>

              <Link to="/blogAdmin" style={{ textDecoration: "none" }}>
                <Button>Admin Blog</Button>
              </Link>

              <Link to="/placement" style={{ textDecoration: "none" }}>
                <Button>Placements</Button>
              </Link>

              <Link to="/placementAdmin" style={{ textDecoration: "none" }}>
                <Button>Admin Placement</Button>
              </Link>
            </Toolbar>
          </AppBar>
        </div>
      </ThemeProvider>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} md={12} lg={12}>
            <Card>
              <CardContent style={{ textAlign: "center" }}>
                <form noValidate autoComplete="off">
                  <TextField
                    margin="dense"
                    id="message"
                    label="Message"
                    variant="outlined"
                    type="text"
                    helperText="Enter the messsage to send to all subscribers"
                    color="primary"
                    multiline
                    value={message.HTML}
                    onChange={(e) => {
                      setmessage({ ...message, HTML: e.target.value });
                    }}
                  />
                </form>
              </CardContent>
              <CardActions>
                <Button color="primary" style={{ flex: "1" }} onClick={sendEmailToAll}>
                  Send Mail
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
