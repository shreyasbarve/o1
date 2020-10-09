import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

// CSS
import CardStyles from "../../Styles/CardStyles";
import LoadingStyles from "../../Styles/LoadingStyles";

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
  CardActionArea,
  CardMedia,
  CardContent,
  Divider,
  CardActions,
  Chip,
  Avatar,
  LinearProgress,
} from "@material-ui/core";
import setSnackbar from "../../Components/SnackBarReducer";

function ViewPlacements(props) {
  // Redux
  const dispatch = useDispatch();

  // CSS for styling
  const CardStyle = CardStyles();
  const LoadingStyle = LoadingStyles();

  // Get the placement data from server
  const [loading, setloading] = useState(true);
  const [placements, setplacements] = useState([]);
  const viewAllPlacements = async () => {
    try {
      const res = await PlacementModels.viewAllPlacements();
      setplacements(res.data);
      setloading(false);
    } catch (error) {
      dispatch(setSnackbar(true, "error", "Some error occured"));
    }
  };

  useEffect(() => {
    document.title = "Placements";
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
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      alt="Some Image"
                      image={`https://source.unsplash.com/1600x900/?coding,programming`}
                      title="Image Title"
                      className={CardStyle.media}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" noWrap>
                        {placement.title}
                      </Typography>

                      <Divider />

                      <Typography
                        variant="overline"
                        color="textSecondary"
                        noWrap
                      >
                        Author: {placement.author}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Link
                        to={`singleplacement/${placement.id}`}
                        color="inherit"
                        style={{ textDecoration: "none" }}
                      >
                        <Chip
                          avatar={
                            <Avatar>{placement.author.substring(0, 1)}</Avatar>
                          }
                          label="Go to placement"
                          clickable
                          color="primary"
                        />
                      </Link>
                    </CardActions>
                  </CardActionArea>
                </Card>
              </Slide>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
}

export default ViewPlacements;
