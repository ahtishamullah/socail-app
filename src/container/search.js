import React from "react";
import { Grid, IconButton, InputAdornment } from "@mui/material";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import { makeStyles } from "@mui/styles";
const useStyle = makeStyles({
  searchClasses: {
    "&.css-1a1fmpi-MuiInputBase-root-MuiInput-root": {
      "&:before": {
        borderBottom: "none",
      },
      "&.MuiInput-root:hover::before": {
        borderBottom: "none",
      },
      "&:after": {
        borderBottom: "none",
      },
    },
  },
});
const Search = (props) => {
  const classes = useStyle();
  const { width } = props;
  console.log(width, "width");
  return (
    <Grid container spacing={2}>
      <Grid item xs={11}>
        <TextField
          className={`${classes.searchClasses}`}
          id="filled-search"
          placeholder="Search here..."
          type="search"
          fullWidth={width}
          variant="standard"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <IconButton>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Grid>
    </Grid>
  );
};

export default Search;
