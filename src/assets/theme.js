import { createTheme } from "@material-ui/core";

const theme = createTheme({
  palette: {
    text: {
      primary: "#3b3939",
      secondary: "#696969",
    },
  },
  typography: {
    color: "#000000",
    fontFamily: "Lato",
    button: {
      fontSize: "20px",
      fontFamily: "Lato",
      lineHeight: "1",
    },
    body1: {
      color: "#000000",
    },
    body2: {
      color: "#ffffff",
    },
  },
  overrides: {
    MuiButton: {
      contained: {
        textTransform: "capitalize",
        boxShadow: "none",

        "&:hover": {
          backgroundColor: "#ed1849",
        },
      },
    },
  },
});

export default theme;
