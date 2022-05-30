import {
  Avatar,
  Button,
  Grid,
  ImageListItem,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
import download from "./download.jpeg";
import image from "./../../rightSideBar/Zeen sale 1 jun 2021.jpg";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { userStore } from "../../store/store";
const useStyle = makeStyles((theme) => ({
  main: {
    padding: "20px",
    backgroundColor: theme.palette.primary.simple,
    "& span": {
      fontSize: "10px",
      color: theme.palette.secondary.main,
    },
    marginBottom: "20px",
  },
  img: {
    "& img": {
      width: "680px",
      height: "400px",
      padding: "18px",
    },
  },
  avatar: {
    height: "20px !important",
    width: "20px !important",
    marginLeft: "10px",
  },
}));
const Card = ({ render }) => {
  const classes = useStyle();
  const [post, setPosts] = useState([]);
  const setRenderData = userStore((state) => state.setRenderData);
  const PostData = userStore.getState().userName;
  const deleteName = userStore.getState().accessToken?.data?.username;
  console.log(deleteName, "deleteName");
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  console.log(PostData, "post dada");

  const handleClose = (data) => {
    setAnchorEl(null);

    PostData.splice(PostData.findIndex((x) => x.newData.uniqueKey === data, 1));
  };

  return (
    <>
      {PostData.map((data) => {
        return (
          <>
            <Grid container className={classes.main}>
              <Avatar src={download} />
              <Typography style={{ margin: "5px" }} variant="body1">
                {data.newData.name}
                <br />
                <span>7 Hours age pakistan</span>
              </Typography>

              {data.newData.name === deleteName && (
                <div>
                  <Button
                    className={classes.iconColor}
                    color="secondary"
                    onClick={handleClick}
                    startIcon={<MoreHorizIcon color="secondary" />}
                  />
                  <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                    getContentAnchorEl={null}
                    anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                    transformOrigin={{ horizontal: "center" }}
                  >
                    <MenuItem
                      onClick={() => handleClose(data.newData.uniqueKey)}
                    >
                      Delete Post
                    </MenuItem>
                  </Menu>
                </div>
              )}
              <Grid md={12} className={classes.img}>
                {data.newData.img.img === "" ? (
                  <img src={image} />
                ) : (
                  <img src={data?.newData?.img?.img} />
                )}
              </Grid>
              <Grid md={12} className="ad" style={{ display: "flex" }}>
                <Avatar
                  md={{ width: 10, height: 12 }}
                  className={classes.avatar}
                  src={download}
                />

                <Typography
                  style={{ margin: "0px 10px", fontSize: "14px" }}
                  variant="body1"
                >
                  {data.newData.name}
                </Typography>

                <Typography
                  style={{
                    margin: "3px -5px",
                    fontSize: "12px",
                    color: "#c9c8c5",
                  }}
                  variant="body2"
                >
                  {data.newData.comment === ""
                    ? " dynamic"
                    : data.newData.comment}
                </Typography>
              </Grid>
            </Grid>
          </>
        );
      })}
    </>
  );
};

export default React.memo(Card);
