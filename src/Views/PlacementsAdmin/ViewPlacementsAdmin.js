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
  const key =
    "gAAAAABfYys99vhKbNtgKJ5PB_HgqIeQ5qFW_Nz4j8m_p8p0zOKVFjs4y6VxMeCLJMmJtB2e7X7F69tYenleGxfBxeOqPyPjJll-60Ol9AJWW48JI6cCAKG0fDAGdJPlDAom8TUl_r6l";
  const [loading, setloading] = useState(true);
  const [placements, setplacements] = useState([]);
  const viewAllPlacements = async () => {
    try {
      const res = await PlacementModels.viewAllPlacementsAdmin(key);
      setplacements(res.data);
      setloading(false);
    } catch (error) {
      alert("Some Errror Occured");
    }
  };

  const deletePlacement = async (placementid) => {
    try {
      await PlacementModels.deletePlacement(placementid, key);
      () => {
        setplacements((placement) =>
          placement.filter((i) => i.id !== placementid)
        );
      };
    } catch (error) {
      alert("Some Errror Occured");
    }
  };

  const approvePlacement = async (placementid) => {
    try {
      await PlacementModels.approvePlacement(placementid, key);
      alert("Blog Approved");
    } catch (error) {
      alert("Some Error Occured");
    }
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
