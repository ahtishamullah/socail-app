import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar";
import { Grid, Paper, ThemeProvider, Typography } from "@mui/material";
import theme from "./theme/theme";
import { Route, Routes } from "react-router";
import PlaceHolder from "./components/placeHolder/placeHolder";
import DashBoard from "./components/navbar/dashBoard/dashBoard";
import { styled } from "@mui/styles";

function App() {
  return (
    <>
      <div className={`App`}>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route
              path="/"
              element={<Navbar login={"LogIn"} signup={"Sign Up"} />}
            />
            <Route
              path="/dash"
              element={<DashBoard name="" signup={"Sign Up"} />}
            />
          </Routes>
          {/* <Grid
            container
            rowGap={2}
            style={{ justifyContent: "space-around" }}
            columnGap={2}
          >
            <Grid
              item
              style={{
                backgroundColor: "red",
                display: "flex",
                justifyContent: "space-between",
              }}
              md={6}
            >
              <Typography variant="body1">heelo</Typography>
              <Typography variant="body1">yes</Typography>
            </Grid>
            <Grid item style={{ backgroundColor: "red" }} md={4}>
              md=4
            </Grid>
            <Grid item style={{ backgroundColor: "red" }} md={4}>
              md=4
            </Grid>
            <Grid item style={{ backgroundColor: "red" }} md={6}>
              md=8
            </Grid>
          </Grid> */}
        </ThemeProvider>
      </div>
    </>
  );
}

export default App;
