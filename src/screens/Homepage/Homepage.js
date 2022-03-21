import {
  makeStyles,
  createStyles,
  Box,
  Typography,
  Grid,
  Button,
} from "@material-ui/core";
import React from "react";
import Banner from "../../assets/banner.jpeg";
import Bansuri from "../../assets/bansuri-flutes.jpeg";

import AddCard from "../../components/AddCard/AddCard";

const Homepage = () => {
  const classes = useStyles();

  const categoriesArr = [
    {
      icon: Bansuri,
      text: "Bansuri Flutes",
    },
    {
      icon: Bansuri,
      text: "Bansuri Flute Sets",
    },
    {
      icon: Bansuri,
      text: "Beginner Flutes",
    },
    {
      icon: Bansuri,
      text: "Combo Flute Set",
    },
    {
      icon: Bansuri,
      text: "Carnatic Flutes",
    },
    {
      icon: Bansuri,
      text: "Bansuri Flute Sets",
    },
  ];
  return (
    <Box>
      <img src={Banner} width="100%" />
      <Box mt="5%" padding="2% 4%">
        <Grid container spacing={4}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
            <Grid item sm={3}>
              <AddCard />
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box
        mt="5%"
        padding="2% 4%"
        style={{
          background:
            "linear-gradient(90deg, hsla(16, 100%, 76%, 1) 0%, hsla(49, 100%, 81%, 1) 100%)",
        }}
      >
        <Typography color="textPrimary" className={classes.heading}>
          Shop by categories
        </Typography>
        <Grid container spacing={4} style={{ marginTop: "20px" }}>
          {categoriesArr.map((item, index) => (
            <Grid item sm={3} key={index}>
              <img src={item.icon} className={classes.categoryIcon} />
              <Typography
                color="textPrimary"
                className={classes.categoryHeading}
              >
                {item.text}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

const useStyles = makeStyles((theme) =>
  createStyles({
    heading: {
      fontSize: 45,
      fontWeight: 600,
    },
    categoryHeading: {
      fontSize: 18,
      fontWeight: 600,
      marginTop: "5px",
    },
    categoryIcon: {
      borderRadius: "50%",
    },
  })
);

export default Homepage;
