import { Box, Grid, Hidden, makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import industries from "../../assets/industriesL.png";
import IndustriesTabs from "../industriesTabs";
import IndustriesAccordion from "../../components/industriesAccordion";
const useStyles = makeStyles((theme) => ({
  header: {
    fontSize: 55,
    fontWeight: 800,
    fontFamily: "Axiforma",
    color: "#3B3E56",
    [theme.breakpoints.up("sm")]: {
      fontSize: 30,
    },
    [theme.breakpoints.up("sm")]: {
      lineHeight: "50px",
    },
    [theme.breakpoints.up("xl")]: {
      marginTop: 70,
    },
  },
  subHeading: {
    fontSize: 30,
    fontWeight: 400,
    fontFamily: "Axiforma",
    color: "#000000",
    lineHeight: "36px",
    marginTop: 10,
    [theme.breakpoints.down("sm")]: {
      fontSize: 20,
      lineHeight: "27px",
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: 50,
      lineHeight: "65px",
    },
  },
  imgStyling: {
    width: "100%",
    height: "100%",
    borderRadius: 40,
  },
  mt: {
    marginTop: 80,
    [theme.breakpoints.down("xs")]: {
      marginTop: 40,
    },
    [theme.breakpoints.down("md")]: {
      marginTop: 40,
    },
  },
  maxWidth: {
    [theme.breakpoints.up("xl")]: {
      maxWidth: 1900,
    },
  },
}));
export const Industries = () => {
  const classes = useStyles();
  const [image, setImage] = useState(industries);
  return (
    <Grid container justifyContent="center" spacing={4} id="industries">
      <Grid
        item
        xs={10}
        sm={11}
        md={10}
        lg={9}
        xl={12}
        className={`${classes.mt} ${classes.maxWidth}`}
      >
        <Hidden xsDown>
          <Grid container spacing={4} justifyContent="center" spacing={4}>
            <Grid item sm={4} md={5} lg={5} xl={4}>
              <img className={classes.imgStyling} src={image} alt="" />
            </Grid>
            <Grid item sm={6} md={7} lg={6} xl={7}>
              <Box className={classes.header}>Industries we work</Box>
              <Box className={classes.subHeading}>
                We Help a diverse clientele build result-driven mobile apps for
                different industries
              </Box>
              <Box mt={6}>
                <IndustriesTabs setImage={setImage} />
              </Box>
            </Grid>
          </Grid>
        </Hidden>
        <Hidden smUp>
          <IndustriesAccordion style={{ marginTop: 30 }} />
        </Hidden>
      </Grid>
    </Grid>
  );
};
