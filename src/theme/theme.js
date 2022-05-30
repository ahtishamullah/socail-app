import { createTheme } from "@mui/material/styles";
const theme = createTheme({
  palette: {
    primary: {
      main: "#F3F5F2",
      simple: "#ffff",
      icon: "#c9c8c5",
    },
    secondary: {
      main: "#c9c8c5",
    },
    button: {
      main: "#59DE11",
    },
  },
  progress: {
    main: "red",
  },
});
export default theme;
