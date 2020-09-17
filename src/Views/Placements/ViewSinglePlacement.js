import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// CSS
import AppBarStyles, { AppbarTheme } from "../../Styles/AppBarStyles";
import LoadingStyles from "../../Styles/LoadingStyles";
import image from "../../codeImage.jpg";
import { ArrowBackIos } from "@material-ui/icons";

// API
import PlacementModels from "../../Models/Placements/PlacementModels";
import parse from "html-react-parser";

// Components
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Divider,
  Tooltip,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  LinearProgress,
  ThemeProvider,
} from "@material-ui/core";

function ViewSinglePlacement(props) {
  const [loading, setloading] = useState(true);
  // Styling for elements
  const AppBarStyle = AppBarStyles();
  const LoadingStyle = LoadingStyles();

  const [singlePlacementId, setsinglePlacementId] = useState(
    JSON.stringify(props.history.location.state.idofplacement)
  );

  if (singlePlacementId === undefined) {
    setsinglePlacementId(1);
  }

  // Getting Data of the Single Placement
  const [singlePlacement, setsinglePlacement] = useState([]);

  useEffect(() => {
    PlacementModels.viewSinglePlacement(singlePlacementId).then((res) => {
      setsinglePlacement(res.data);
      setloading(false);
      document.title = `${singlePlacement.title}`;
    });
  }, [singlePlacementId, singlePlacement.title, loading]);

  return (
    <div style={{ backgroundImage: `url(${image})`, height: "100rem" }}>
      <Container fixed style={{ backgroundColor: "#ffffff", height: "100rem" }}>
        {loading ? (
          <div className={LoadingStyle.root}>
            <LinearProgress />
          </div>
        ) : (
          <>
            <ThemeProvider theme={AppbarTheme}>
              <AppBar position="sticky">
                <Toolbar>
                  <Typography className={AppBarStyle.title}>
                    <Tooltip title="Go Back">
                      <Link to="/placement" style={{ color: "inherit" }}>
                        <ArrowBackIos />
                      </Link>
                    </Tooltip>
                  </Typography>

                  <Typography variant="overline" className={AppBarStyle.title}>
                    {singlePlacement.title}
                  </Typography>
                </Toolbar>
              </AppBar>
            </ThemeProvider>

            <Grid container spacing={3} style={{ marginTop: "8%" }}>
              <Grid item xs={12} sm={9} lg={9}>
                <Typography variant="overline">
                  by {singlePlacement.author}
                </Typography>
                <br />
                <Divider />
                <br />
                <Typography gutterBottom variant="body1">
                  {parse(singlePlacement.body)}
                </Typography>
              </Grid>

              <Grid item xs={12} sm={3} lg={3}>
                <Card variant="outlined">
                  <CardActionArea>
                    <CardContent>
                      <Typography gutterBottom variant="h5">
                        About Author
                      </Typography>
                      <Divider />
                      <br />
                      <Typography gutterBottom variant="subtitle1">
                        Name: {singlePlacement.fullname}
                      </Typography>

                      <Typography gutterBottom variant="subtitle1">
                        Email: {singlePlacement.email}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            </Grid>
          </>
        )}
      </Container>
    </div>
  );
}

export default ViewSinglePlacement;
