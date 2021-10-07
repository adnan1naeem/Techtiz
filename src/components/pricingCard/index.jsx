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

    marginTop: "-25px",
    [theme.breakpoints.down("xs")]: {
      fontSize: 20,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 17,
      padding: "unset",
      marginTop: "unset",
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: 32,
    },
  },
  detail1: {
    fontFamily: "Axiforma",
    fontSize: 13,
    fontWeight: 300,
    color: "#000000",
    padding: 40,
    marginTop: "-26px",
    [theme.breakpoints.down("xs")]: {
      fontSize: 14,
    },
    [theme.breakpoints.down("sm")]: {
      padding: 20,
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: 32,
    },
  },
  detail2: {
    fontFamily: "Axiforma",
    fontSize: 13,
    fontWeight: 300,
    color: "#000000",
    padding: 40,
    marginTop: "-73px",
    [theme.breakpoints.down("sm")]: {
      padding: 20,
      marginTop: -30,
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: 32,
    },
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
    [theme.breakpoints.down("sm")]: {
      height: 40,
      width: 150,
      fontSize: 16,
    },
  },
  root: {
    borderRadius: 33,
  },
  mt: {
    marginTop: "-20px",
  },
  borderRadius: {
    borderRadius: 40,
  },
}));
export const PricindCard = ({
  image,
  title,
  text1,
  text2,
  backgroundColor,
  marginLeft,
  zIndex,
}) => {
  const classes = useStyles();
  return (
    <Paper
      bgcolor={backgroundColor}
      marginLeft={marginLeft}
      zIndex={zIndex}
      elevation={12}
      component={Box}
      className={classes.borderRadius}
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
