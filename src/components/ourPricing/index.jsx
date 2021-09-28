import { Box, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import dedicatedIcon from "../../assets/dedicatedIcon.png";
import { PricindCard } from "../pricingCard";
import fixedIcon from "../../assets/fixedIcon.png";
import hourlyIcon from "../../assets/hourlyIcon.png";
const useStyles = (makeStyles) => (theme) => ({});
const classes = useStyles;
export const OurPricing = () => {
  return (
    <Grid container justifyContent="center">
      <Grid item lg={10}>
        <Box>
          <Box>Our Pricing model</Box>
        </Box>
        <PricindCard
          backgroundColor="red"
          image={fixedIcon}
          title="DFixed Price
          "
          text1="Time is money. TechTiz saves your time and energy with its collaborative, easy-to-follow onboarding process. "
          text2="We provide a detailed consultation about pricing and delivery schedule when you first approach us to ensure we’re on the same page."
        />
        <PricindCard
          backgroundColor="red"
          image={dedicatedIcon}
          title="Dedicated Resource"
          text1="Our packages are flexible, depending upon the services you acquire. "
          text2="You come to us with an idea, we provide a quick consultation, "
        />
        <PricindCard
          backgroundColor="red"
          image={hourlyIcon}
          title="Hourly Basis
          "
          text1="TechTiz offers a maintenance follow-up after launching your application.
          "
          text2="This reduces the operational hassle and removes any unprecedented bug from the application.

          "
        />
      </Grid>
    </Grid>
  );
};
