import { Box, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import dedicatedIcon from "../../assets/dedicatedIcon.png";
import { PricindCard } from "../pricingCard";
import fixedIcon from "../../assets/fixedIcon.png";
import hourlyIcon from "../../assets/hourlyIcon.png";

const useStyles = makeStyles((theme) => ({
  title: {
    fontFamily: "Axiforma",
    fontSize: 55,
    fontWeight: 800,
    color: "#3B3E56",
    textAlign: "center",
    marginTop: 200,
    [theme.breakpoints.down("xs")]: {
      fontSize: 22,
      marginTop: 40,
    },
    [theme.breakpoints.only("sm")]: {
      fontSize: 30,
      marginTop: 90,
    },
    [theme.breakpoints.down("md")]: {
      fontSize: 35,
    },
    [theme.breakpoints.up("xl")]: {
      marginTop: 400,
    },
  },
  mt: { marginTop: 60 },
  position1: {
    position: "relative",
    left: 45,
    [theme.breakpoints.up("xs")]: {
      left: 1,
    },
    [theme.breakpoints.up("sm")]: {
      left: 10,
    },
    [theme.breakpoints.up("md")]: {
      left: 35,
    },
  },
  position2: {
    position: "relative",
    right: 32,
    [theme.breakpoints.up("xs")]: {
      right: 1,
    },
    [theme.breakpoints.up("sm")]: {
      right: 5,
    },
    [theme.breakpoints.up("md")]: {
      right: 26,
    },
  },
  containerMargin: {
    [theme.breakpoints.up("xs")]: {
      marginTop: "unset",
    },
    [theme.breakpoints.up("sm")]: {
      marginTop: 30,
    },
    [theme.breakpoints.up("md")]: {
      marginTop: 25,
    },
  },
}));

export const OurPricing = () => {
  const classes = useStyles();
  return (
    <Grid container justifyContent="center">
      <Grid item xs={11} sm={11} md={12} lg={10} xl={8}>
        <Box>
          <Box className={classes.title}>Our Pricing model</Box>
        </Box>

        <Grid
          container
          justifyContent="center"
          alignItems="center"
          className={classes.containerMargin}
        >
          <Grid
            item
            xs={10}
            sm={4}
            md={4}
            lg={4}
            style={{ zIndex: "5" }}
            className={classes.position1}
          >
            <PricindCard
              backgroundColor="#FFFFFF"
              image={fixedIcon}
              title="Fixed Price"
              text1="Time is money. TechTiz saves your time and energy with its collaborative, easy-to-follow onboarding process. "
              text2="You come to us with an idea, we provide a quick consultation, "
            />
          </Grid>
          <Grid item xs={10} sm={4} md={4} style={{ zIndex: "5" }}>
            <PricindCard
              backgroundColor="#F0FBFF"
              image={dedicatedIcon}
              title="Dedicated Resource"
              text1="Our packages are flexible, depending upon the services you acquire. "
              text2="We provide a detailed consultation about pricing and delivery schedule when you first approach us to ensure we’re on the same page. "
            />
          </Grid>
          <Grid item xs={10} sm={4} md={4} lg={4} className={classes.position2}>
            <PricindCard
              zIndex="-1"
              backgroundColor="#FFFFFF"
              image={hourlyIcon}
              title="Hourly Basis"
              text1="TechTiz offers a maintenance follow-up after launching your application."
              text2="This reduces the operational hassle and removes any unprecedented bug from the application."
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
