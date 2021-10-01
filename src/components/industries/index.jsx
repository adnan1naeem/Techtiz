import { Box, Grid, Hidden, makeStyles } from "@material-ui/core";
import React from "react";
import industries from "../../assets/industriesL.png";
import IndustriesTabs from "../industriesTabs";
import IndustriesAccordion from "../../components/industriesAccordion";
const useStyles = makeStyles((theme) => ({
  header: {
    fontSize: 55,
    fontWeight: 800,
    fontFamily: "Axiforma",
    color: "#3B3E56",
  },
  subHeading: {
    fontSize: 30,
    fontWeight: 400,
    fontFamily: "Axiforma",
    color: "#000000",
    lineHeight: "36px",
  },
}));
export const Industries = () => {
  const classes = useStyles();
  return (
    <Grid container justifyContent="center">
      <Grid item lg={10}>
        <Hidden xsDown>
          <Grid container style={{ marginTop: 80 }} spacing={4}>
            <Grid item lg={5}>
              <img src={industries} alt="" />
            </Grid>
            <Grid item lg={6}>
              <Box className={classes.header}>Industries we work</Box>
              <Box className={classes.subHeading}>
                We Help a diverse clientele build result-driven mobile apps for
                different industries
              </Box>
              <Box mt={6}>
                <IndustriesTabs />
              </Box>
            </Grid>
          </Grid>
        </Hidden>
        <Hidden smUp>
          <Grid item xs={12}>
            {" "}
            <IndustriesAccordion />
          </Grid>
        </Hidden>
      </Grid>
    </Grid>
  );
};
