import { Box, Button, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import ServiceAccordion from "../servicrAccordion";
const useStyles = makeStyles((theme) => ({
  heading: {
    fontFamily: "Axiforma",
    fontSize: 30,
    fontWeight: 300,
    color: "#000000",
    marginTop: 56,
  },
  detail: {
    fontFamily: "Axiforma",
    fontSize: 22,
    fontWeight: 300,
    color: "#000000",
    marginTop: 18,
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
  },
}));

export const ServiceCards = ({ heading, detail, icons, image1 }) => {
  const classes = useStyles();
  return (
    <Grid container justifyContent="center">
      <Grid item sm={11} md={11} lg={12}>
        <Grid container spacing={2}>
          <Grid item sm={8} md={8} lg={7}>
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
          <Grid item sm={4} md={3} lg={5}>
            <Box textAlign="right">
              <img className={classes.mobileimg} src={image1} alt="" />
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
