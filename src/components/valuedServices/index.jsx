import { Box, Grid, Hidden, makeStyles } from "@material-ui/core";
import React from "react";
import ServicesTabs from "../servicesTabs";
import ServiceAccordion from "../servicrAccordion";
const useStyles = makeStyles((theme) => ({
  header: {
    fontSize: 45,
    fontWeight: 800,
    fontFamily: "Axiforma",
    color: "#3B3E56",
    textAlign: "center",
    [theme.breakpoints.only("xs")]: {
      fontSize: 22,
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: 70,
    },
  },
  mt: {
    marginTop: 64,
    [theme.breakpoints.up("xl")]: {
      marginTop: 210,
    },
  },
}));
export const ValuedServices = () => {
  const classes = useStyles();
  return (
    <Box className={classes.mt} id="services">
      <Box className={classes.header}>Our Valued Services</Box>
      <Hidden xsDown>
        <ServicesTabs />
      </Hidden>
      <Hidden smUp>
        <Grid container>
          <Grid item xs={12}>
            <ServiceAccordion />
          </Grid>
        </Grid>
      </Hidden>
    </Box>
  );
};
