import { Box, Grid, Hidden, makeStyles } from "@material-ui/core";
import React from "react";
import developmentLg from "../../assets/developmentLg.png";
import developmentmd from "../../assets/developmentmd.png";
import developmentMobile from "../../assets/developmentMobile.png";
const useStyles = makeStyles((theme) => ({
  header: {
    marginTop: 80,
    fontSize: 45,
    fontWeight: 800,
    fontFamily: "Axiforma",
    color: "#3B3E56",
    [theme.breakpoints.up("xs")]: {
      fontSize: 23,
      fontWeight: 800,
      color: "#3B3E56",
      marginTop: 60,
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: 30,
      fontWeight: 800,
      color: "#3B3E56",
      marginTop: "unset",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: 45,
      fontWeight: 800,
      color: "#3B3E56",
      marginTop: "unset",
    },
  },
  subHeading: {
    fontSize: 22,
    fontWeight: 300,
    fontFamily: "Axiforma",
    color: "#3B3E56",
    marginTop: 10,
    [theme.breakpoints.up("xs")]: {
      fontSize: 14,
      fontWeight: 300,
      color: "#3B3E56",
      marginTop: "unset",
      marginTop: 10,
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: 14,
      fontWeight: 300,
      color: "#3B3E56",
      marginTop: "unset",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: 22,
      fontWeight: 300,
      color: "#3B3E56",
      marginTop: "unset",
    },
  },
  dflex: {
    textAlign: "center",
  },
  image: {
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    [theme.breakpoints.up("xs")]: {
      height: 1000,
    },
    [theme.breakpoints.only("sm")]: {
      backgroundImage: `url(${developmentmd})`,
      height: 1000,
      width: 750,
    },
    [theme.breakpoints.up("md")]: {
      backgroundImage: `url(${developmentmd})`,

      height: 1000,
    },
    [theme.breakpoints.up("lg")]: {
      backgroundImage: `url(${developmentLg})`,

      height: 1000,
    },
  },
  imgCenter: {
    width: 300,
    marginTop: 20,
  },
}));
export const OurDevelopment = () => {
  const classes = useStyles();
  return (
    <Box className={classes.image}>
      <Grid container justifyContent="center">
        <Grid item xs={10} sm={8} md={10} lg={10}>
          <Box className={classes.dflex}>
            <Box className={classes.header}>Our development process</Box>
            <Box className={classes.subHeading}>
              We Bring the Startup Approach to innovation in Companies of all
              Sizes{" "}
            </Box>
          </Box>
          <Hidden smUp>
            <Box>
              <img
                className={classes.imgCenter}
                src={developmentMobile}
                alt=""
              />
            </Box>
          </Hidden>
        </Grid>
      </Grid>
    </Box>
  );
};
