import { Box, Button, Grid, makeStyles } from "@material-ui/core";
import React from "react";
const useStyles = makeStyles((theme) => ({
  heading: {
    fontFamily: "Axiforma",
    fontSize: 30,
    fontWeight: 300,
    color: "#000000",
    [theme.breakpoints.up("sm")]: {
      fontSize: 25,
      lineHeight: "30px",
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: 50,
      lineHeight: "60px",
    },
  },
  detail: {
    fontFamily: "Axiforma",
    fontSize: 22,
    fontWeight: 300,
    color: "#000000",
    marginTop: 18,
    [theme.breakpoints.up("sm")]: {
      fontSize: 18,
      lineHeight: "30px",
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: 40,
      lineHeight: " 56px",
    },
  },
  imageStyling: {
    height: 60,
    marginTop: 30,
  },
  calculateButton: {
    fontSize: 16,
    fontFamily: "Axiforma",
    fontWeight: 300,
    color: "#FFFFFF",
    lineHeight: "25px",
    backgroundColor: "#7FC6DC",
    textTransform: "capitalize",
    borderRadius: 72,
    height: 56,
    width: 306,
    "&:hover": {
      backgroundColor: "#7FC6DC",
    },
    marginTop: 30,
  },
  mobileimg: {
    width: 350,
    [theme.breakpoints.only("sm")]: {
      width: 300,
    },
    [theme.breakpoints.up("xl")]: {
      width: 560,
    },
  },
  mt: {
    marginTop: 40,
    [theme.breakpoints.up("xl")]: {
      marginTop: 100,
    },
  },
  maxWidth: {
    [theme.breakpoints.up("xl")]: {
      maxWidth: 3000,
    },
  },
}));

export const ServiceCards = ({ heading, detail, icons, image1 }) => {
  const classes = useStyles();
  return (
    <Grid
      container
      justifyContent="center"
      spacing={4}
      className={classes.maxWidth}
    >
      <Grid item sm={11} md={11} lg={12} className={classes.mt}>
        <Grid container spacing={2}>
          <Grid item sm={7} md={8} lg={7} xl={8}>
            <Box className={classes.heading}>{heading}</Box>
            <Box className={classes.detail}>{detail}</Box>
            <Box>
              <img className={classes.imageStyling} src={icons} alt="" />
            </Box>
            <Box>
              <Button className={classes.calculateButton}>
                Calculate App development Cost
              </Button>
            </Box>
          </Grid>
          <Grid item sm={5} md={3} lg={5} xl={4}>
            <Box textAlign="right">
              <img className={classes.mobileimg} src={image1} alt="" />
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
