import { Box, Button, makeStyles, Paper } from "@material-ui/core";

import React from "react";
import Slider from "../slider";
const useStyles = makeStyles((theme) => ({
  title: {
    fontFamily: "Axiforma",
    fontSize: 28,
    fontWeight: 300,
    color: "#000000",
    padding: 20,
    textAlign: "center",
    marginTop: "-25px",
    [theme.breakpoints.only("xs")]: {
      fontSize: 20,
    },
  },
  detail1: {
    fontFamily: "Axiforma",
    fontSize: 16,
    fontWeight: 300,
    color: "#000000",
    lineHeight: "25px",
    padding: 20,
    textAlign: "center",
    [theme.breakpoints.only("xs")]: {
      fontSize: 14,
    },
  },
  detail2: {
    fontFamily: "Axiforma",
    fontSize: 16,
    fontWeight: 300,
    color: "#000000",
    lineHeight: "25px",
    padding: 20,
    textAlign: "center",
    marginTop: "-20px",
  },
  dflex: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    [theme.breakpoints.only("xs")]: {
      marginTop: 20,
    },
  },
  paper: {
    borderRadius: 35,
  },
  img: {
    marginTop: 20,
  },
  letsbeganButton: {
    fontSize: 18,
    fontFamily: "Axiforma",
    fontWeight: 500,
    color: "#FFFFFF",
    lineHeight: "25px",
    backgroundColor: "#7FC6DC",
    textTransform: "capitalize",
    borderRadius: 72,
    height: 50,
    width: 223,
    "&:hover": {
      backgroundColor: "#7FC6DC",
    },
    marginBottom: 40,
  },
  root: {
    borderRadius: 33,
  },
  mt: {
    marginTop: "-10px",
  },
}));
export const PricindCard = ({
  image,
  title,
  text1,
  text2,
  backgroundColor,
  width,
  height,
  marginLeft,
  zIndex,
}) => {
  const classes = useStyles();
  return (
    <Paper
      height={height}
      bgcolor={backgroundColor}
      marginLeft={marginLeft}
      zIndex={zIndex}
      elevation={12}
      component={Box}
      borderRadius={33}
    >
      <Box
        className={classes.dflex}
        bgcolor={backgroundColor}
        borderRadius={33}
        height="inherit"
      >
        <Box>
          <img className={classes.img} src={image} alt="" />
        </Box>
        <Box className={classes.title}>{title}</Box>
        <Slider className={classes.mt} />
        <Box className={classes.detail1}>{text1}</Box>
        <Box className={classes.detail2}>{text2}</Box>
        <Box display="flex" justifyContent="center">
          <Button className={classes.letsbeganButton}>Let’s Begin</Button>
        </Box>
      </Box>
    </Paper>
  );
};
