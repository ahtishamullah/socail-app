import React, { useState } from "react";
import { Button, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Search from "../container/search";
import PersonIcon from "@mui/icons-material/Person";
import MessageIcon from "@mui/icons-material/Message";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import LogInForm from "./logInForm";
import { useNavigate } from "react-router-dom";

import PlaceHolder from "./placeHolder/placeHolder";
import { userStore } from "../store/store";

const useStyles = makeStyles((theme) => ({
  good: {
    fontSize: "8px !important",
    marginLeft: "16px !important",
  },
  h5: {
    color: "#59de12",
  },
  bottom: {
    backgroundColor: theme.palette.primary.simple,
    top: "0",
    zIndex: " 2",
    position: " sticky",

    boxShadow: `0px 5px 5px ${theme.palette.secondary.main} !important`,
  },
  center: {
    alignItems: "center !important",
  },
}));

const Navbar = (props) => {
  const [logInDirect, setLogInDirect] = useState(false);
  const setLogOut = userStore((state) => state.setLogOut);
  const name = userStore.getState().accessToken?.data?.username;
  const navigate = useNavigate();
  const Login = () => {
    setLogInDirect(!logInDirect);
  };
  console.log(props.name, "this is namee");
  const Navigation = () => {
    if (props.signup === "Log out") {
      setLogOut();
      navigate("/");
    }
  };
  console.log(name, "this is name");

  const classes = useStyles();

  return (
    <>
      <Grid container className={classes.bottom}>
        <Grid item sm={1} md={1}></Grid>
        <Grid item sm={1} md={(1, { justifyContent: "end" })}>
          <Typography variant="h5" className={classes.h5}>
            Social
          </Typography>
          <Typography className={classes.good}>NETWORKS</Typography>
        </Grid>
        <Grid item sm={3} md={5}>
          <Search width={"fullWidth"} />
        </Grid>
        <Grid container md={2} className={classes.center}>
          <Grid item sm={2} md={3}>
            <PersonIcon color="secondary" />
          </Grid>
          <Grid item sm={2} md={3}>
            <MessageIcon color="secondary" />
          </Grid>
          <Grid item sm={2} md={3}>
            <NotificationsActiveIcon color="secondary" />
          </Grid>
          <Grid item sm={2} md={3}>
            <LocalGroceryStoreIcon color="secondary" />
          </Grid>
        </Grid>
        <Grid sm={4} md={3}>
          <Grid container>
            <Grid item sm={3} md={2}>
              {props.name !== undefined ? (
                <Typography style={{ marginTop: "8px" }} variant="body1">
                  {props.name}
                </Typography>
              ) : (
                <Button color="button" onClick={Login}>
                  {props.login}
                </Button>
              )}
            </Grid>

            <Grid item sm={3} md={3}>
              <Button color="button" onClick={Navigation}>
                {props.signup}
              </Button>
              {/* <Typography>dynamic</Typography> */}
            </Grid>
            <Grid>
              <img src="" alt="picture" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container>
        {logInDirect && (
          <LogInForm popup={logInDirect} setLogInDirect={setLogInDirect} />
        )}
      </Grid>
      {props.name && <PlaceHolder />}
    </>
  );
};

export default Navbar;
