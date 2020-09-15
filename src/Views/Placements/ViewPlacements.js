import React, { useState, useEffect } from "react";

// CSS
import CardStyles from "../../Styles/CardStyles";
import LoadingStyles from "../../Styles/LoadingStyles";
import logo from "../../o1_logo.jpg";

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
import { Link } from "react-router-dom";

function ViewPlacements(props) {
  // CSS for styling
  const CardStyle = CardStyles();
  const LoadingStyle = LoadingStyles();

  // Get the placement data from server
  const [loading, setloading] = useState(true);
  const [placements, setplacements] = useState([]);
  const viewAllPlacements = () => {
    PlacementModels.viewAllPlacements().then((res) => {
      setplacements(res.data);
      setloading(false);
    });
  };

  useEffect(() => {
    document.title = "Placements";
    viewAllPlacements();
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
            <Grid item xs={12} sm={6} lg={3} key={placement.email}>
              <Slide bottom>
                <Card className={CardStyle.root} elevation={3}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      alt="Some Image"
                      image={logo}
                      title="Image Title"
                      className={CardStyle.media}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" noWrap>
                        {placement.title}
                      </Typography>

                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                        gutterBottom
                        noWrap
                      >
                        {placement.body}
                      </Typography>

                      <Divider />

                      <Typography
                        variant="overline"
                        color="textSecondary"
                        component="p"
                        aria-rowcount="3"
                        noWrap
                      >
                        Author: {placement.author}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Link
                        to={{
                          pathname: `singleplacement/${placement.id}`,
                          state: { idofplacement: placement.id },
                        }}
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
