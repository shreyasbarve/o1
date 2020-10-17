import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useRouteMatch } from "react-router-dom";

// CSS
import AppBarStyles, { AppbarTheme } from "../../Styles/AppBarStyles";
import LoadingStyles from "../../Styles/LoadingStyles";
import image from "../../codeImage.jpg";
import { ArrowBackIos } from "@material-ui/icons";
import "../../Styles/forImage.css";

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
import setSnackbar from "../../Components/SnackBarReducer";

function ViewSinglePlacement(props) {
  // Redux
  const dispatch = useDispatch();

  const [loading, setloading] = useState(true);
  // Styling for elements
  const AppBarStyle = AppBarStyles();
  const LoadingStyle = LoadingStyles();

  const match = useRouteMatch();

  const placementid = match.params.id;
  // eslint-disable-next-line
  const [singlePlacementId, setsinglePlacementId] = useState(placementid);

  // Getting Data of the Single Placement
  const [singlePlacement, setsinglePlacement] = useState([]);

  useEffect(() => {
    async function viewSinglePlacement() {
      try {
        const res = await PlacementModels.viewSinglePlacement(
          singlePlacementId
        );
        setsinglePlacement(res.data);
        setloading(false);
        document.title = `${singlePlacement.title}`;
      } catch (error) {
        dispatch(setSnackbar(true, "error", "Some error occured"));
      }
    }
    viewSinglePlacement();
  }, [singlePlacementId, singlePlacement.title, loading, dispatch]);

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
              <Grid item xs={12} sm={8} lg={9}>
                <Typography variant="overline">
                  by {singlePlacement.author}
                </Typography>
                <br />
                <Divider />
                <br />
                <Typography
                  gutterBottom
                  variant="body1"
                  style={{ overflow: "auto" }}
                >
                  {parse(singlePlacement.body)}
                </Typography>
              </Grid>

              <Grid item xs={12} sm={4} lg={3}>
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
