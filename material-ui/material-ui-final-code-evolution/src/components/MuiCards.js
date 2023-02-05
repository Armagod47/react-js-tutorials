import React from "react";
import {
  Card,
  Box,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardMedia,
} from "@mui/material";
const MuiCards = () => {
  return (
    <Box width="300px" m={5}>
      <Card elevation={5}>
        <CardMedia
          component="img"
          height="140"
          image="https://images.pexels.com/photos/14005688/pexels-photo-14005688.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt="unsplash image"
        />
        <CardContent>
          <Typography variant="h4" component="div" gutterBottom>
            React
          </Typography>
          <Typography varian="body2" color="text.secondary">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
            blanditiis possimus omnis quas ratione ipsa perferendis ut aperiam
            nihil saepe?
          </Typography>
          <CardActions>
            <Button size="Small" variant="contained" color="secondary">
              Share
            </Button>
            <Button size="Small" variant="contained" color="secondary">
              Learn More
            </Button>
          </CardActions>
        </CardContent>
      </Card>
    </Box>
  );
};

export default MuiCards;
