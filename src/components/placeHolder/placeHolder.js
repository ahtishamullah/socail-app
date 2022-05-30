import { makeStyles } from "@mui/styles";
import {
  Button,
  Grid,
  IconButton,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import LeftSideBar from "../../leftSideBar/leftSideBar";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import VideocamIcon from "@mui/icons-material/Videocam";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import RightSideBar from "../../rightSideBar/rightSideBar";
import Card from "../card/card";
import { userStore } from "../../store/store";

const useStyle = makeStyles((theme) => ({
  placeholder: {
    width: "100% ",
    backgroundColor: theme.palette.primary.main,
    borderColor: "#f3f5f2 ",
    margin: "20px 20px",
    "&:focus-visible": {
      outline: "#f3f5f2",
    },
  },
  background: {
    backgroundColor: theme.palette.primary.main,
  },
  box: {
    height: "200px",
    backgroundColor: theme.palette.primary.simple,
    borderBottom: `2px solid ${theme.palette.button.main}`,
    marginTop: "8px",
  },
  icon: {
    width: "100% ",
    display: "flex",
    justifyContent: "space-between",
    margin: "20px 20px",
    "& p": {
      marginLeft: "-35px",
    },
  },
  button: {
    backgroundColor: `${theme.palette.button.main} !important`,
    height: "32px",
  },
  card: {
    display: "flex",
    marginTop: "9px",
  },
  btn: {
    backgroundColor: "#FFFF !important",
    height: "22px",
    boxShadow: "none !important",
    "& p": {
      margin: "0px",
    },
  },
  sticky: {
    position: "fixed",
    top: "50px",
    zIndex: "2",
    alignSelf: "flex-start",
  },
}));
const PlaceHolder = () => {
  const classes = useStyle();
  const [render, setRender] = useState(false);
  const setRenderData = userStore((state) => state.setRenderData);

  // state for picture
  // const name = userStore.getState().accessToken?.data?.username;
  const [data, setData] = useState({
    img: "",
    comment: "",
    name: "",
  });

  useEffect(() => {
    const name = userStore.getState().accessToken?.data?.username;
    setData({ ...data, name: name });
    setRender(false);
  }, [data.img || data.comment]);
  console.log(data, "data from reload");
  const uploadImage = () => {
    data.uniqueKey = "_" + Math.random().toString(36).substr(2, 800);
    console.log(data);
    setRenderData(data);
    setRender(!render);
    setData({ img: "", comment: "" });
  };
  const ImageUplaod = (e) => {
    const picture = e.target.files;
    if (picture) {
      const file = picture[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const img = { img: reader.result };
        setData({ ...data, img });
      };
    }
  };

  const CommentUpload = (e) => {
    const comment = {
      ...data,
      comment: e.target.value,
    };
    setData(comment);
  };
  return (
    <>
      <Grid container columnGap={2} className={classes.background}>
        <Grid item md={1}></Grid>
        <Grid item md={2}>
          <Grid item md={2} className={classes.sticky}>
            <LeftSideBar />
          </Grid>
        </Grid>
        <Grid md={6} className={classes.box}>
          <Grid container item md={12} xs={6}>
            <TextareaAutosize
              aria-label="empty textarea"
              placeholder="Whats in your mind"
              minRows={6}
              onChange={(e) => CommentUpload(e)}
              className={classes.placeholder}
            />
          </Grid>
          <Grid md={12} container className={classes.icon}>
            <Grid item md={7} className={classes.icon}>
              <AddLocationIcon color="secondary" />
              <Typography variant="body2">Location</Typography>
              <Button
                className={classes.btn}
                variant="contained"
                component="label"
                startIcon={<AddAPhotoIcon color="secondary" />}
              >
                <input
                  type="file"
                  name="img"
                  hidden
                  onChange={(e) => ImageUplaod(e)}
                />
                <Typography variant="body2">Photo/GF</Typography>
              </Button>
              {/* <input type="file" placehole="upload file" ref={imageRef} /> */}
              <VideocamIcon color="secondary" />
              <Typography variant="body2">Videos</Typography>
              <MoreHorizIcon color="secondary" />
              <Typography variant="body2">More</Typography>
            </Grid>
            <Grid item md={3}></Grid>
            <Grid item md={2}>
              <Button
                className={classes.button}
                onClick={() => {
                  uploadImage();
                }}
              >
                Posts
              </Button>
            </Grid>
          </Grid>
          <Grid container md={12}>
            <Grid md={6} className={classes.card}>
              <Grid md={3}>
                <Typography
                  style={{ borderBottom: "2px solid #59DE11" }}
                  varient="body1"
                >
                  Top Rated
                </Typography>
              </Grid>
              <Grid md={3}>
                <Typography varient="body1" color="secondary" width={80}>
                  Following
                </Typography>
              </Grid>
              <Grid md={2}>
                <Typography varient="body1" color="secondary">
                  Latest
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid container style={{ marginTop: "20px" }}>
            <Grid md={12}>
              {" "}
              <Card render={render} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={2}>
          <Grid item md={2} className={classes.sticky}>
            <RightSideBar />
          </Grid>
        </Grid>
        <Grid item md={1}></Grid>
      </Grid>
    </>
  );
};
export default PlaceHolder;
