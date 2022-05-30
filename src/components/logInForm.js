import {
  Box,
  Button,
  Grid,
  Modal,
  TextField,
  FormControl,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { LoginHook } from "../hooks/loginHook";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createContext } from "react";
import { userStore } from "../store/store";

const LoginHooks = createContext();
const useStyle = makeStyles({
  root: { marginTop: "80px !important" },
});

const LogInForm = (props) => {
  const classes = useStyle();
  let navigate = useNavigate();
  const { data: token, isLoading, mutate } = LoginHook();
  const [credentail, setCredential] = useState({
    username: "",
    password: "",
  });
  const DataForLogin = (e) => {
    const newPass = {
      ...credentail,
      [e.target.name]: e.target.value,
    };
    setCredential(newPass);
  };

  const { popup, setLogInDirect } = props;

  const testAuthentication = () => {
    mutate(credentail);
  };
  useEffect(() => {
    if (token?.data?.status !== undefined) {
      if (token?.data?.status !== "notFound") {
        const handleClick = () => {
          console.log("asdaldsl");
        };
        handleClick();
        userStore.setState({ accessToken: token });

        console.log(token?.data?.status, "ahtisham");
        navigate("/dash");
      }
    }
  }, [isLoading]);
  return (
    <>
      <LoginHooks.Provider value={"asdka"}>
        <Modal color="secondary" open={popup}>
          <Grid container>
            <Grid xs={12}>
              {" "}
              <Box
                sx={{
                  margin: "auto",
                  width: 500,
                  height: 300,
                  backgroundColor: "#e8ebe8",
                  "&:hover": {
                    backgroundColor: "#e8ebe8",
                    opacity: [0.9, 0.8, 0.7],
                  },
                }}
              >
                <Grid container className={classes.root}>
                  {isLoading === true ? (
                    <div>Loading...</div>
                  ) : (
                    <>
                      <Grid xs={3}></Grid>
                      <Grid xs={6} className={classes.root}>
                        <FormControl
                          color="secondary"
                          onChange={DataForLogin}
                          onSubmit={testAuthentication}
                        >
                          <TextField
                            color="secondary"
                            id="standard-basic"
                            label="Name"
                            variant="standard"
                            name="username"
                          />
                          <TextField
                            type="password"
                            color="secondary"
                            id="standard-basic"
                            label="Password"
                            variant="standard"
                            name="password"
                          />

                          <Button color="button" onClick={testAuthentication}>
                            Login
                          </Button>
                          <Button
                            color="button"
                            onClick={() => setLogInDirect(!popup)}
                          >
                            Back
                          </Button>
                        </FormControl>
                      </Grid>
                      <Grid xs={3}></Grid>
                    </>
                  )}
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Modal>
      </LoginHooks.Provider>
    </>
  );
};

export default LogInForm;
export { LoginHooks };
