import { Grid, ImageListItem, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import FlagCircleIcon from "@mui/icons-material/FlagCircle";
import image from "./Zeen sale 1 jun 2021.jpg";
const useStyle = makeStyles((theme) => ({
  root: {
    marginTop: "20px",
    backgroundColor: theme.palette.primary.simple,
    width: "100px",
    height: "100px",
    padding: "10px",
  },
  location: {
    color: theme.palette.button.main,
  },
  span: {
    color: theme.palette.secondary.main,
    fontSize: "10px !important",
  },
  change: {
    marginTop: "10px !important",
  },
}));
const RightSideBar = () => {
  const classes = useStyle();
  return (
    <>
      <Grid container className={classes.root}>
        <Grid container md={6}>
          <Grid item md={3}>
            <AddLocationIcon className={classes.location} />
          </Grid>
          <Grid item md={3}>
            <Typography varient="body1">Oakland</Typography>
            <Typography className={classes.span} varient="body1">
              Location
            </Typography>
          </Grid>
        </Grid>
        <Grid item md={4}></Grid>
        <Grid item md={2} className={`${classes.span} ${classes.change}`}>
          Change
        </Grid>
        <Grid container md={6}>
          <Grid item md={3}>
            <FlagCircleIcon className={classes.location} />
          </Grid>
          <Grid item md={3}>
            <Typography varient="body1">English</Typography>
            <Typography className={classes.span} varient="body1">
              language
            </Typography>
          </Grid>
        </Grid>
        <Grid item md={4}></Grid>
        <Grid item md={2} className={`${classes.span} ${classes.change}`}>
          Change
        </Grid>
      </Grid>
      <Grid container className={classes.root}>
        <Grid item md={12}>
          <ImageListItem>
            <img src={image} />
          </ImageListItem>
        </Grid>
      </Grid>
    </>
  );
};

export default RightSideBar;
