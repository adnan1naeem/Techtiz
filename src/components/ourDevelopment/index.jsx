import { Box, Grid, Hidden, makeStyles } from "@material-ui/core";
import React from "react";
import developmentLg from "../../assets/developmentLg.png";

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
    [theme.breakpoints.up("xl")]: {
      fontSize: 55,
      fontWeight: 800,
      color: "#3B3E56",
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
    [theme.breakpoints.up("xl")]: {
      fontSize: 50,
    },
  },
  dflex: {
    textAlign: "center",
  },
  image: {
    height: "100%",
    width: "100%",
    marginTop: 20,
    [theme.breakpoints.up("xs")]: {
      marginTop: 120,
    },
    [theme.breakpoints.up("xl")]: {
      marginTop: 200,
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
    <Box className={classes.image} mt={10}>
      <Grid container justifyContent="center">
        <Grid item xs={10} sm={12} md={12} lg={11}>
          <Box className={classes.dflex}>
            <Box className={classes.header}>Our development process</Box>
            <Box className={classes.subHeading}>
              We Bring the Startup Approach to innovation in Companies of all
              Sizes{" "}
            </Box>
            <Hidden xsDown>
              <Box>
                <img className={classes.image} src={developmentLg} alt="" />
              </Box>
            </Hidden>
          </Box>
          <Hidden smUp>
            <Box display="flex" justifyContent="center">
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
