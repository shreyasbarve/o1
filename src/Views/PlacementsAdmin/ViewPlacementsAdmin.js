import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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

function ViewPlacementsAdmin(props) {
  // CSS for styling
  const CardStyle = CardStyles();
  const LoadingStyle = LoadingStyles();

  // Get the placement data from server
  const key = "gAAAAABfYyrPc24Rm_-3GlzW0nzgy2kfCHevEb3KnbDEBUwnwqIrBMVhBaTxcf1PS6FgRjSDJ6o1IBcbfhTycyQFuqR3sJn_XQ==";
  const [loading, setloading] = useState(true);
  const [placements, setplacements] = useState([]);
  const viewAllPlacements = () => {
    PlacementModels.viewAllPlacementsAdmin(key).then((res) => {
      setplacements(res.data);
      setloading(false);
    });
  };

  const deletePlacement = (placementid) => {
    PlacementModels.deletePlacement(placementid, key);
  };

  const approvePlacement = (placementid) => {
    PlacementModels.approvePlacement(placementid, key);
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
                  <Link
                    to={{
                      pathname: `singleplacementAdmin/${placement.id}`,
                      state: { idofplacement: placement.id },
                    }}
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
                      Delete
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
