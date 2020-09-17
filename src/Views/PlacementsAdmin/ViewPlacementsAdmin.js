import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// CSS
import CardStyles from "../../Styles/CardStyles";
import LoadingStyles from "../../Styles/LoadingStyles";
import logo from "../../o1_logo.jpg";
import { Delete } from "@material-ui/icons";

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
  Button
} from "@material-ui/core";

function ViewPlacementsAdmin(props) {
  // CSS for styling
  const CardStyle = CardStyles();
  const LoadingStyle = LoadingStyles();

  // Get the placement data from server
  const key =
    "gAAAAABfYyrPc24Rm_-3GlzW0nzgy2kfCHevEb3KnbDEBUwnwqIrBMVhBaTxcf1PS6FgRjSDJ6o1IBcbfhTycyQFuqR3sJn_XQ==";
  const [loading, setloading] = useState(true);
  const [placements, setplacements] = useState([]);
  const viewAllPlacements = () => {
    PlacementModels.viewAllPlacementsAdmin(key).then((res) => {
      setplacements(res.data);
      setloading(false);
    });
  };

  useEffect(() => {
    document.title = "Admin Placements";
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
            <Grid item xs={12} sm={6} lg={3} key={placement.id}>
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
                        to={{
                          pathname: `singleplacementAdmin/${placement.id}`,
                          state: { idofplacement: placement.id },
                        }}
                        color="inherit"
                        style={{ textDecoration: "none", flex: "1" }}
                      >
                        <Chip
                          avatar={
                            <Avatar>{placement.author.substring(0, 1)}</Avatar>
                          }
                          label="Go to Placement"
                          clickable
                          color="primary"
                        />
                      </Link>
                      <Button variant="outlined" startIcon={<Delete />} color="secondary">Delete</Button>
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

export default ViewPlacementsAdmin;
