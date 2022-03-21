import {
  makeStyles,
  createStyles,
  Box,
  Typography,
  Button,
} from "@material-ui/core";
import React, { useState } from "react";
import Flute from "../../assets/ad-img.jpeg";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

const AddCard = () => {
  const classes = useStyles();
  const [showButtons, setShowButtons] = useState(false);

  return (
    <Box
      className={classes.card}
      style={{ transform: showButtons ? "scale(1.07)" : "scale(1)" }}
      onMouseEnter={() => setShowButtons(true)}
      onMouseLeave={() => setShowButtons(false)}
    >
      <Box width="100%" position="relative">
        <img src={Flute} width="100%" />
        <Box className={classes.wishlistBox}>
          <FavoriteBorderIcon className={classes.wishlistIcon} />
          <Typography color="textPrimary" style={{ fontSize: "14px" }}>
            Wishlist
          </Typography>
        </Box>
      </Box>
      <Box
        padding="5%"
        display="flex"
        flexDirection="column"
        alignItems="baseline"
      >
        <Typography className={classes.cardTitle} color="textPrimary">
          Beginners Combo Set G Base C Medium Right Hand Flutes
        </Typography>
        <Box display="flex" mt="6%" alignItems="baseline">
          <Typography className={classes.discountPrice} color="textPrimary">
            ₹ 1899
          </Typography>
          <Typography className={classes.actualPrice} color="textSecondary">
            ₹ 2350
          </Typography>
        </Box>
      </Box>
      {/* {showButtons && ( */}
      <Box className={classes.buttonBox}>
        <Button variant="contained" className={classes.cartButton}>
          Add to cart
        </Button>
        <Button variant="contained" className={classes.buyButton}>
          Buy now
        </Button>
      </Box>
      {/* )} */}
    </Box>
  );
};

const useStyles = makeStyles((theme) =>
  createStyles({
    card: {
      cursor: "pointer",
      boxShadow:
        "rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px",
      transition: "all 0.1s ease-in-out",
    },
    cardTitle: {
      fontFamily: "Lato",
      textAlign: "left",
      fontSize: "16px",
    },
    discountPrice: {
      fontWeight: 600,
      fontSize: 18,
    },
    actualPrice: {
      fontWeight: 400,
      fontSize: 12,
      marginLeft: 10,
      textDecoration: "line-through",
    },
    wishlistBox: {
      display: "flex",
      alignItems: "center",
      padding: 6,
      position: "absolute",
      top: 4,
      right: 4,
    },
    wishlistIcon: {
      fontSize: "16px",
      color: "#3b3939",
      marginRight: "4px",
    },
    cartButton: {
      backgroundColor: "#ECB365",
      color: "#ffffff",
      fontSize: 15,
      boxShadow: "none",
      "&:hover": {
        backgroundColor: "#ECB365",
      },
    },
    buyButton: {
      backgroundColor: "#85C88A",
      color: "#ffffff",
      fontSize: 15,
      boxShadow: "none",
      "&:hover": {
        backgroundColor: "#85C88A",
      },
    },
    buttonBox: {
      display: "flex",
      justifyContent: "space-between",
      padding: "0% 5% 5% 5%",
    },
    scale: {
      transform: "scale(0.2)",
    },
  })
);

export default AddCard;
