import { Box, Button, Grid, Hidden, makeStyles } from "@material-ui/core";
import React from "react";
import laptopLg from "../../assets/laptopLg.png";
import backgroundLg from "../../assets/backgroundLg.png";
import backgroundmd from "../../assets/backgroundmd.png";
import backgroundsm from "../../assets/backgroundsm.png";
import backgroundxs from "../../assets/backgroundxs.png";

const useStyles = makeStyles((theme) => ({
  laptopImage: {
    [theme.breakpoints.up("xs")]: {
      width: 280,
      height: 200,
    },
    [theme.breakpoints.up("sm")]: {
      width: 287,
      height: 300,
    },
    [theme.breakpoints.up("md")]: {
      width: 450,
      height: 380,
    },
    [theme.breakpoints.up("lg")]: {
      width: 465,
      height: 405,
    },
    [theme.breakpoints.up("xl")]: {
      width: 700,
      height: 700,
    },
    [theme.breakpoints.down(340)]: {
      width: 240,
      height: 200,
    },
  },

  backgroundImage: {
    backgroundRepeat: "no-repeat",
    [theme.breakpoints.only("xs")]: {
      backgroundSize: "cover",
      backgroundImage: `url(${backgroundxs})`,
      height: 800,
      backgroundSize: "contain",
    },
    [theme.breakpoints.up("sm")]: {
      backgroundImage: `url(${backgroundsm})`,
      height: 700,
      backgroundSize: "contain",
    },
    [theme.breakpoints.up("md")]: {
      backgroundImage: `url(${backgroundmd})`,
      height: 780,
      backgroundSize: "contain",
    },
    [theme.breakpoints.up("lg")]: {
      backgroundImage: `url(${backgroundLg})`,
      height: 780,
      backgroundSize: "cover",
    },
    [theme.breakpoints.up("xl")]: {
      backgroundImage: `url(${backgroundLg})`,
      height: 1678,
      backgroundSize: "contain",
      display: "flex",
      justifyContent: "center",
    },
  },
  heading: {
    fontSize: 55,
    fontFamily: "Axiforma",
    fontWeight: 800,
    color: "#3B3E56",
    [theme.breakpoints.up("xs")]: {
      fontSize: 30,
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: 30,
    },
    [theme.breakpoints.up("md")]: {
      fontSize: 50,
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: 45,
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: 70,
    },
  },
  subHeading: {
    fontSize: 45,
    fontFamily: "Axiforma",
    fontWeight: 800,
    color: "#3B3E56",
    lineHeight: "49px",

    [theme.breakpoints.up("sm")]: {
      fontSize: 26,
      lineHeight: "33px",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: 38,
      lineHeight: "48px",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: 58,
      lineHeight: "59px",
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: 70,
      lineHeight: "88px",
    },
  },
  detail: {
    fontSize: 30,
    fontFamily: "Axiforma",
    fontWeight: 300,
    color: "#1E3849",
    lineHeight: "47px",
    marginTop: 29,
    [theme.breakpoints.up("xs")]: {
      fontSize: 12,
      textAlign: "center",
      lineHeight: "20px",
      marginTop: 12,
    },

    [theme.breakpoints.up("sm")]: {
      fontSize: 15,
      lineHeight: "21px",
      textAlign: "unset",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: 23,
      lineHeight: "35px",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: 36,
      lineHeight: "50px",
      textAlign: "unset",
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: 42,
      lineHeight: "60px",
    },
  },
  connectButton: {
    fontSize: 16,
    fontFamily: "Axiforma",
    fontWeight: 300,
    color: "#FFFFFF",
    lineHeight: "25px",
    backgroundColor: "#7FC6DC",
    textTransform: "capitalize",
    borderRadius: 72,
    height: 56,
    width: 200,
    "&:hover": {
      backgroundColor: "#7FC6DC",
    },
    marginTop: 30,
    [theme.breakpoints.up("xs")]: {
      marginTop: 15,
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: 32,
      width: 435,
      height: 100,
    },
  },
  mobileHeader: {
    fontSize: 15,
    fontFamily: "Axiforma",
    fontWeight: 800,
    color: "#3B3E56",
    textAlign: "center",
  },
  dflex: {
    display: "flex",
    marginTop: 80,
    justifyContent: "center",
    [theme.breakpoints.only("xs")]: {
      display: "block",
      marginTop: 40,
    },

    [theme.breakpoints.only("xl")]: {
      marginTop: 65,
    },
  },
  buttonCenter: {
    [theme.breakpoints.up("xs")]: {
      display: "flex",
      justifyContent: "center",
    },
    [theme.breakpoints.up("sm")]: {
      justifyContent: "unset",
    },
    [theme.breakpoints.up("lg")]: {
      display: "unset",
      justifyContent: "unset",
    },
  },
  textcenter: {
    [theme.breakpoints.only("xs")]: {
      display: "flex",
      flexDirection: "column",
      textAlign: "center",
    },
  },
  maxWidth: {
    [theme.breakpoints.up("sm")]: {
      maxWidth: 1200,
    },
    [theme.breakpoints.up("lg")]: {
      maxWidth: 1900,
    },
    [theme.breakpoints.up("xl")]: {
      maxWidth: 1900,
    },
  },
}));
export const FullStack = () => {
  const classes = useStyles();
  return (
    <Box className={classes.backgroundImage}>
      <Grid container justifyContent="center" className={classes.maxWidth}>
        <Grid item xs={10} sm={11} md={10} lg={10}>
          <Box className={classes.dflex}>
            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              lg={6}
              xl={6}
              className={classes.textcenter}
            >
              <Box className={classes.heading}>Full-Stack</Box>
              <Hidden only="xs">
                <Box className={classes.subHeading}>
                  App Development Company​
                </Box>
              </Hidden>
              <Hidden smUp>
                <Box className={classes.mobileHeader}>
                  Full-Stack App Development Company​
                </Box>
                <Box>
                  <img className={classes.laptopImage} src={laptopLg} alt="" />
                </Box>
              </Hidden>
              <Box className={classes.detail}>
                At Techtiz, we build applications that click! With
                extraordinarily creative minds on board.
              </Box>
              <Box className={classes.buttonCenter}>
                <Button disableRipple className={classes.connectButton}>
                  Let’s Connect Today
                </Button>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
              <Hidden xsDown>
                <Box textAlign="center">
                  <img className={classes.laptopImage} src={laptopLg} alt="" />
                </Box>
              </Hidden>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
