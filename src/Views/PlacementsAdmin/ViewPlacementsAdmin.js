import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { read_cookie } from "sfcookies";

// CSS
import CardStyles from "../../Styles/CardStyles";
import LoadingStyles from "../../Styles/LoadingStyles";
import { Delete, Check } from "@material-ui/icons";

// Animation
import Slide from "react-reveal";

// API
import PlacementModels from "../../Models/Placements/PlacementModels";

// Components
import {
  Typography,
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Divider,
  CardActions,
  LinearProgress,
  Button,
} from "@material-ui/core";
import setSnackbar from "../../Components/SnackBarReducer";

function ViewPlacementsAdmin(props) {
  // Redux
  const dispatch = useDispatch();

  // CSS for styling
  const CardStyle = CardStyles();
  const LoadingStyle = LoadingStyles();

  // Get the placement data from server
  const name = read_cookie("adminName");
  const key = read_cookie("adminKey");
  const [loading, setloading] = useState(true);
  const [placements, setplacements] = useState([]);
  const viewAllPlacements = async () => {
    try {
      const res = await PlacementModels.viewAllPlacementsAdmin(name, key);
      setplacements(res.data);
      setloading(false);
    } catch (error) {
      // dispatch(setSnackbar(true, "error", "Some error occured"));
    }
  };

  const deletePlacement = async (placementid) => {
    try {
      await PlacementModels.deletePlacement(placementid, name, key);
      setplacements((placement) =>
        placement.filter((i) => i.id !== placementid)
      );
      dispatch(setSnackbar(true, "success", "Placement post deleted"));
    } catch (error) {
      dispatch(setSnackbar(true, "error", "Some error occured"));
    }
  };

  const approvePlacement = async (placementid) => {
    try {
      await PlacementModels.approvePlacement(placementid, name, key);
      dispatch(setSnackbar(true, "success", "Placement post approved"));
    } catch (error) {
      dispatch(setSnackbar(true, "error", "Some error occured"));
    }
  };

  useEffect(() => {
    document.title = "Admin Placements";
    viewAllPlacements();
    // eslint-disable-next-line
  }, []);

  return (
    <Container fixed>
      {loading ? (
        <div className={LoadingStyle.root}>
          <LinearProgress />
        </div>
      ) : (
        <Grid container spacing={3}>
          {placements.map((placement) => (
            <Grid item xs={12} sm={6} lg={3} key={placement.id}>
              <Slide bottom>
                <Card className={CardStyle.root} elevation={3}>
                  <Link
                    to={`singleplacementAdmin/${placement.id}`}
                    style={{ textDecoration: "none", flex: "1" }}
                  >
                    <CardMedia
                      component="img"
                      alt="Some Image"
                      image={`https://source.unsplash.com/1600x900/?coding,programming`}
                      title="Image Title"
                      className={CardStyle.media}
                    />
                  </Link>

                  <CardContent>
                    <Typography gutterBottom variant="h5" noWrap>
                      {placement.title}
                    </Typography>

                    <Divider />

                    <Typography variant="overline" color="textSecondary" noWrap>
                      Author: {placement.author}
                    </Typography>
                  </CardContent>

                  <CardActions>
                    <Button
                      variant="outlined"
                      startIcon={<Check />}
                      color="primary"
                      onClick={() => approvePlacement(placement.id)}
                    >
                      Approve
                    </Button>

                    <Button
                      variant="outlined"
                      startIcon={<Delete />}
                      color="secondary"
                      onClick={() => deletePlacement(placement.id)}
                    >
                      Delete
                    </Button>
                  </CardActions>
                </Card>
              </Slide>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
}

export default ViewPlacementsAdmin;
