import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  createStyles,
  Box,
} from "@material-ui/core";
import React from "react";

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar className={classes.appbar}>
      <Toolbar>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          width="100%"
          padding="0% 5%"
        >
          <Typography className={classes.logo}>Bhagwati Flutes</Typography>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            width="40%"
          >
            <Typography className={classes.headerLinks}>Home</Typography>
            <Typography className={classes.headerLinks}>Shop</Typography>
            <Typography className={classes.headerLinks}>Blog</Typography>
            <Typography className={classes.headerLinks}>Contact us</Typography>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

const useStyles = makeStyles((theme) =>
  createStyles({
    appbar: {
      backgroundColor: "#ffffff",
      boxShadow: "none",
    },
    headerLinks: {
      color: "#3B3939",
    },
    logo: {
      fontFamily: "Great Vibes",
      color: "#3B3939",
      fontSize: "35px",
      color: "#BB6464",
    },
  })
);

export default Header;
