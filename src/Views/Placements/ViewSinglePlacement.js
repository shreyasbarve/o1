import React, { useState, useEffect } from "react";

// CSS styling
import AppBarStyles from "../../Styles/AppBarStyles";
import LoadingStyles from "../../Styles/LoadingStyles";

// API
import PlacementModels from "../../Models/Placements/PlacementModels"

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
  CardActions,
  LinearProgress,
} from "@material-ui/core";

import BackIcon from "@material-ui/icons/ArrowBackIos";
import { Link } from "react-router-dom";

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
    });
  }, [singlePlacementId, singlePlacement.title, loading]);

  return (
    <Container fixed>
      {loading ? (
        <div className={LoadingStyle.root}>
          <LinearProgress />
        </div>
      ) : (
        <>
          <AppBar position="sticky">
            <Toolbar>
              <Typography className={AppBarStyle.title}>
                <Tooltip title="Go Back" aria-label="Go Back">
                  <Link to="/placement" style={{ color: "inherit" }}>
                    <BackIcon />
                  </Link>
                </Tooltip>
              </Typography>

              <Typography
                variant="overline"
                component="h5"
                className={AppBarStyle.title}
              >
                {singlePlacement.title}
              </Typography>
            </Toolbar>
          </AppBar>

          <Grid container spacing={3} style={{ marginTop: "8%" }}>
            <Grid item xs={12} sm={9} lg={9}>
              <Typography variant="overline">by {singlePlacement.author}</Typography>
              <br />
              <Divider />
              <br />
              <Typography gutterBottom variant="body1">
                {singlePlacement.body}
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
                  <CardActions></CardActions>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </>
      )}
    </Container>
  );
}

export default ViewSinglePlacement;
