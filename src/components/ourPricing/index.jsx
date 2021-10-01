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
  },
  mt: { marginTop: 60 },
}));

export const OurPricing = () => {
  const classes = useStyles();
  return (
    <Grid container justifyContent="center">
      <Grid item lg={10}>
        <Box>
          <Box className={classes.title}>Our Pricing model</Box>
        </Box>
      </Grid>

      <Grid container justifyContent="center" alignItems="center" spacing={5}>
        <Grid item xs={11} sm={6} md={4} style={{ zIndex: "5" }}>
          <PricindCard
            width="410px"
            height="462px"
            backgroundColor="#FFFFFF"
            image={fixedIcon}
            title="Fixed Price"
            text1="Time is money. TechTiz saves your time and energy with its collaborative, easy-to-follow onboarding process. "
            text2="You come to us with an idea, we provide a quick consultation, "
          />
        </Grid>
        <Grid item xs={11} sm={6} md={4} style={{ zIndex: "5" }}>
          <PricindCard
            width="418px"
            height="531px"
            backgroundColor="#F0FBFF"
            image={dedicatedIcon}
            title="Dedicated Resource"
            text1="Our packages are flexible, depending upon the services you acquire. "
            text2="We provide a detailed consultation about pricing and delivery schedule when you first approach us to ensure we’re on the same page. "
          />
        </Grid>
        <Grid item xs={11} sm={6} md={4}>
          <PricindCard
            zIndex="-1"
            width="410px"
            height="462px"
            backgroundColor="#FFFFFF"
            image={hourlyIcon}
            title="Hourly Basis"
            text1="TechTiz offers a maintenance follow-up after launching your application."
            text2="This reduces the operational hassle and removes any unprecedented bug from the application."
          />
        </Grid>
      </Grid>
    </Grid>
  );
};
