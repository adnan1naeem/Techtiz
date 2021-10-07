import { Box, Grid, Hidden, makeStyles } from "@material-ui/core";
import React from "react";
import mobileicon from "../../assets/mobileicon.png";
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
    [theme.breakpoints.up("xs")]: {
      fontSize: 22,
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
      fontSize: 18,
      textAlign: "center",
      marginTop: -15,
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: 40,
    },
  },
  detail: {
    fontSize: 22,
    fontWeight: 300,
    fontFamily: "Axiforma",
    color: "#000000",
    lineHeight: "32px",
    marginTop: 23,
    [theme.breakpoints.only("xs")]: {
      textAlign: "center",
      fontSize: 18,
      marginTop: "unset",
      textAlign: "unset",
      lineHeight: "26px",
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: 42,
      lineHeight: "60px",
    },
  },
  [theme.breakpoints.only("sm")]: {
    fontSize: 15,
    lineHeight: "25px",
  },
  icon: {
    marginTop: 15,
    width: 60,
    [theme.breakpoints.up("xl")]: {
      width: "unset",
      marginTop: 30,
    },
  },
  mobile: {
    width: "100%",
    [theme.breakpoints.only("sm")]: {
      width: "100%",
    },
    [theme.breakpoints.only("xs")]: {
      width: "100%",
    },
    [theme.breakpoints.up("xl")]: {
      width: "unset",
    },
  },
  dflex: {
    display: "flex",
    justifyContent: "center",
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
      <Grid item xs={10} sm={11} md={11} lg={10} xl={12}>
        <Box className={classes.dflex}>
          <Grid item xs={12} sm={8} md={8} lg={7} xl={7}>
            <Box className={classes.title}>{title}</Box>
            <Box className={classes.subtitle}>{subtitle}</Box>
            <Box className={classes.detail}>{detail}</Box>
            <Hidden xsDown>
              <Box>
                <img className={classes.icon} src={image1} alt="" />
              </Box>
            </Hidden>
          </Grid>
          <Grid
            item
            xs={11}
            sm={4}
            md={4}
            lg={4}
            xl={4}
            className={classes.textAlign}
          >
            <img className={classes.mobile} src={image2} alt="" />
          </Grid>
          <Hidden smUp>
            <Box display="flex" justifyContent="center">
              <img className={classes.icon} src={mobileicon} alt="" />
            </Box>
          </Hidden>
        </Box>
      </Grid>
    </Grid>
  );
};
