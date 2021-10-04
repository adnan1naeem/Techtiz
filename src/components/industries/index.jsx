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
    [theme.breakpoints.down("sm")]: {
      fontSize: 30,
    },
  },
  subHeading: {
    fontSize: 30,
    fontWeight: 400,
    fontFamily: "Axiforma",
    color: "#000000",
    lineHeight: "36px",
    [theme.breakpoints.down("sm")]: {
      fontSize: 20,
      lineHeight: "27px",
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
}));
export const Industries = () => {
  const classes = useStyles();
  const [image, setImage] = useState(industries);
  return (
    <Grid container justifyContent="center" spacing={4}>
      <Grid item xs={10} sm={11} lg={9} className={classes.mt}>
        <Hidden xsDown>
          <Grid container spacing={4} justifyContent="center">
            <Grid item sm={4} lg={5}>
              <img className={classes.imgStyling} src={image} alt="" />
            </Grid>
            <Grid item sm={8} lg={7}>
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
