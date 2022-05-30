import { makeStyles } from "@mui/styles";
import { Avatar, Button, Grid, Typography } from "@mui/material";
import React from "react";
import LinearProgress from "@mui/material/LinearProgress";
import DashboardIcon from "@mui/icons-material/Dashboard";
import InfoIcon from "@mui/icons-material/Info";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import CollectionsIcon from "@mui/icons-material/Collections";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import SocialDistanceIcon from "@mui/icons-material/SocialDistance";
import BookIcon from "@mui/icons-material/Book";
import InboxIcon from "@mui/icons-material/Inbox";
import AirlineStopsIcon from "@mui/icons-material/AirlineStops";
import download from "./download.jpeg";

const useStyle = makeStyles((theme) => ({
  sticky: {
    top: "0",
    zIndex: " 1",
    position: " sticky",
    height: "100%",
    // backgroundColor: "red",
  },
  main: {
    marginTop: "50px !important",
    paddingBottom: "50px",
  },

  roots: {
    paddingBottom: "50px",
    backgroundColor: theme.palette.primary.simple,
    marginTop: "20px !important",
    borderBottom: `1px ${theme.palette.secondary.main} solid `,
    paddingBottom: "10px",
  },
  margin: {
    marginBottom: "20px",
  },
  avatar: {
    height: "100px !important",
    width: "100px !important",
    alignContent: "center",
    margin: "auto",
    marginTop: "-50px",
  },
  h5: {
    textAlign: "center",
  },
  p: {
    fontSize: "12px !important",
    textAlign: "center",
    opacity: "0.5",
  },
  absolute: {
    position: "relative",
  },
  bar: {
    margin: "auto",
    width: "80%",
  },
  body1: {
    color: theme.palette.secondary.main,
  },
  hover: {
    borderBottom: `2px transparent solid`,
    boxSizing: "'border-box",
    // marginTop: "10px",
    fullwidth: "100% !important",
    "&:hover": {
      "& $body1": {
        color: "black",
      },
      borderBottom: `2px ${theme.palette.button.main} solid `,
    },
  },
  iconColor: {
    "&:hover": {
      "&.css-1p4q6qe-MuiButtonBase-root-MuiButton-root": {
        color: theme.palette.button.main,
      },
    },
  },
  second: {
    backgroundColor: theme.palette.primary.simple,
    borderBottom: `1px ${theme.palette.secondary.main} solid `,
    paddingBottom: "10px",
    // marginTop: "20px",
  },
}));
const LeftSideBar = (props) => {
  const classes = useStyle();

  return (
    <>
      {/* <Grid container className={classes.sticky}> */}
      <Grid container className={`${classes.main} `}>
        <Grid md={12} className={`${classes.second} ${classes.margin}`}>
          <Avatar className={classes.avatar} src={download} />
          <Typography className={classes.h5} variant="h5">
            Dynamic
          </Typography>
          <Typography className={classes.p} variant="h6">
            Classic under 28 yeat
            <br />
            Old Street,Oakland,CA
          </Typography>
          <LinearProgress
            className={classes.bar}
            variant="determinate"
            value="80"
            color="button"
          />
        </Grid>
        <Grid container className={` ${classes.second}`}>
          <Grid md={12} className={classes.hover}>
            <Button
              className={classes.iconColor}
              color="secondary"
              startIcon={<DashboardIcon />}
            >
              <Typography
                className={classes.body1}
                fontSize={"12px"}
                varient="body1"
              >
                Dashboard
              </Typography>
            </Button>
          </Grid>
          <Grid md={12} className={classes.hover}>
            <Button
              className={classes.iconColor}
              color="secondary"
              startIcon={<InfoIcon />}
            >
              <Typography
                className={classes.body1}
                fontSize={"12px"}
                varient="body1"
              >
                About
              </Typography>
            </Button>
          </Grid>
          <Grid md={12} className={classes.hover}>
            <Button
              className={classes.iconColor}
              color="secondary"
              startIcon={<AccountBoxIcon />}
            >
              <Typography
                className={classes.body1}
                fontSize={"12px"}
                varient="body1"
              >
                Protfolio
              </Typography>
            </Button>
          </Grid>
        </Grid>
        <Grid container className={classes.second}>
          <Grid md={12} className={classes.hover}>
            <Button
              className={classes.iconColor}
              color="secondary"
              startIcon={<CollectionsIcon />}
            >
              <Typography
                className={classes.body1}
                fontSize={"12px"}
                varient="body1"
              >
                Gallery
              </Typography>
            </Button>
          </Grid>
          <Grid md={12} className={classes.hover}>
            <Button
              className={classes.iconColor}
              color="secondary"
              startIcon={<LiveTvIcon />}
            >
              <Typography
                className={classes.body1}
                fontSize={"12px"}
                varient="body1"
              >
                Live TV
              </Typography>
            </Button>
          </Grid>
          <Grid md={12} className={classes.hover}>
            <Button
              className={classes.iconColor}
              color="secondary"
              startIcon={<SocialDistanceIcon />}
            >
              <Typography
                className={classes.body1}
                fontSize={"12px"}
                varient="body1"
              >
                Socail Room
              </Typography>
            </Button>
          </Grid>
        </Grid>
        <Grid container className={classes.second}>
          <Grid md={12} className={classes.hover}>
            <Button
              className={classes.iconColor}
              color="secondary"
              startIcon={<BookIcon />}
            >
              <Typography
                className={classes.body1}
                fontSize={"12px"}
                varient="body1"
              >
                Socail Rooms
              </Typography>
            </Button>
          </Grid>
          <Grid md={12} className={classes.hover}>
            <Button
              className={classes.iconColor}
              color="secondary"
              startIcon={<InboxIcon />}
            >
              <Typography
                className={classes.body1}
                fontSize={"12px"}
                varient="body1"
              >
                Show Box
              </Typography>
            </Button>
          </Grid>
        </Grid>
        <Grid container className={classes.second}>
          <Grid md={12} className={classes.hover}>
            <Button
              className={classes.iconColor}
              color="secondary"
              startIcon={<AirlineStopsIcon />}
            >
              <Typography
                className={classes.body1}
                fontSize={"12px"}
                varient="body1"
              >
                Socail Marketing
              </Typography>
            </Button>
          </Grid>
          <Grid md={12} className={classes.hover}>
            <Button
              className={classes.iconColor}
              color="secondary"
              startIcon={<InboxIcon />}
            >
              <Typography
                className={classes.body1}
                fontSize={"12px"}
                varient="body1"
              >
                Social Network
              </Typography>
            </Button>
          </Grid>
        </Grid>
        <Grid container className={classes.second}>
          <Grid md={12} className={classes.hover}>
            <Button
              className={classes.iconColor}
              color="secondary"
              startIcon={<BookIcon />}
            >
              <Typography
                className={classes.body1}
                fontSize={"12px"}
                varient="body1"
              >
                Social News
              </Typography>
            </Button>
          </Grid>
          <Grid md={12} className={classes.hover}>
            <Button
              className={classes.iconColor}
              color="secondary"
              startIcon={<InboxIcon />}
            >
              <Typography
                className={classes.body1}
                fontSize={"12px"}
                varient="body1"
              >
                Social Council
              </Typography>
            </Button>
          </Grid>
        </Grid>
      </Grid>

      {/* </Grid> */}
    </>
  );
};

export default LeftSideBar;
