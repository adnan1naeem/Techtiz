import { Box, Grid, makeStyles } from "@material-ui/core";
import React from "react";
const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: 55,
    fontWeight: 800,
    fontFamily: "Axiforma",
    color: "#3B3E56",
    lineHeight: "63px",
    [theme.breakpoints.only("sm")]: {
      fontSize: 43,
      lineHeight: "51px",
    },
    [theme.breakpoints.only("xs")]: {
      fontSize: 25,
    },
  },
  subtitle: {
    fontSize: 30,
    fontWeight: 800,
    fontFamily: "Axiforma",
    color: "#000000",
    lineHeight: "49px",
    marginTop: 23,
    [theme.breakpoints.only("sm")]: {
      fontSize: 24,
    },
    [theme.breakpoints.only("xs")]: {
      fontSize: 20,
    },
  },
  detail: {
    fontSize: 22,
    fontWeight: 300,
    fontFamily: "Axiforma",
    color: "#000000",
    lineHeight: "32px",
    marginTop: 23,
  },
  [theme.breakpoints.only("sm")]: {
    fontSize: 15,
    lineHeight: "25px",
  },
  icon: {
    marginTop: 15,
    width: 60,
  },
  mobile: {
    width: 332,
    height: 450,
    [theme.breakpoints.only("sm")]: {
      width: 255,
      height: 450,
    },
    [theme.breakpoints.only("xs")]: {
      width: 132,
      height: 250,
    },
  },
  dflex: {
    display: "flex",
    [theme.breakpoints.only("xs")]: {
      display: "flex",
      flexDirection: "column",
    },
  },
  textAlign: {
    textAlign: "end",
    justifyContent: "center",
    display: "flex",
  },
}));
export const ServicesCard = ({ title, subtitle, detail, image1, image2 }) => {
  const classes = useStyles();
  return (
    <Grid container justifyContent="center">
      <Grid item xs={10} sm={8} md={8} lg={10}>
        <Box className={classes.dflex}>
          <Grid item xs={11} sm={8} md={8} lg={7}>
            <Box className={classes.title}>{title}</Box>
            <Box className={classes.subtitle}>{subtitle}</Box>
            <Box className={classes.detail}>{detail}</Box>
            <img className={classes.icon} src={image1} alt="" />
          </Grid>
          <Grid item xs={11} sm={4} md={4} lg={4} className={classes.textAlign}>
            <img className={classes.mobile} src={image2} alt="" />
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};
