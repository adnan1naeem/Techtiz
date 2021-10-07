import { Box, Grid, Hidden, makeStyles } from "@material-ui/core";
import React from "react";
import applee from "../../assets/applee.png";
import android from "../../assets/android.png";
import react from "../../assets/react.png";
import flutter from "../../assets/flutter.png";
import angular from "../../assets/angular.png";
import html from "../../assets/html.png";
import node from "../../assets/node.png";
import clutch from "../../assets/clutchfooter.png";
import FooterAccordion from "../footerAccordion";
const useStyles = makeStyles((theme) => ({
  bulletPoint: {
    backgroundColor: "#C4C4C4",
    width: "9.64px",
    height: "7.7px",
    borderRadius: 10,
  },
  iconStyles: {
    width: 18,
    height: 24,
  },
  icon: {
    width: 22,
    height: 24,
  },
  node: {
    width: 52,
    height: 22,
  },
  dflex: {
    display: "flex",
    alignItems: "center",
  },
  iconName: {
    fontSize: 14,
    fontWeight: 300,
    color: "#000000",
    fontFamily: "Axiforma",
    [theme.breakpoints.up("xl")]: {
      fontSize: 22,
    },
  },
  title: {
    fontSize: 30,
    fontWeight: 300,
    fontFamily: "Axiforma",
    [theme.breakpoints.up("sm")]: {
      fontSize: 20,
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: 30,
    },
  },
  service: {
    fontSize: 18,
    fontWeight: 300,
    color: "#4E4E4E",
    fontFamily: "Axiforma",
    [theme.breakpoints.up("xl")]: {
      fontSize: 22,
    },
  },
  clutchStyles: {
    width: 100,
    height: 95,
  },
  clutchDetail: {
    fontSize: 14,
    fontWeight: 300,
    color: "#000000",
    width: 219,
    fontFamily: "Axiforma",
    marginLeft: "auto",
    textAlign: "left",
    marginTop: 10,
    [theme.breakpoints.up("xl")]: {
      width: 540,
      fontSize: 22,
    },
  },
  divider: {
    width: 1510,
    height: "1.54px",
    backgroundColor: "#EDEDED",
  },
  mt: {
    marginTop: -287,
    [theme.breakpoints.only("xs")]: {
      marginTop: -212,
    },
    [theme.breakpoints.only("sm")]: {
      marginTop: -502,
    },
    [theme.breakpoints.only("md")]: {
      marginTop: -190,
    },
    [theme.breakpoints.only("lg")]: {
      marginTop: -119,
    },
    [theme.breakpoints.only("xl")]: {
      marginTop: -232,
    },
  },
}));
export const Footer = () => {
  const classes = useStyles();
  return (
    <Grid container justifyContent="center" className={classes.mt} spacing={4}>
      <Hidden xsDown>
        <Grid item xs={11} sm={11} md={11} lg={9}>
          <Grid container style={{ marginTop: 50 }} justifyContent="center">
            <Grid item sm={4} md={4} lg={4}>
              <Box className={classes.title}>Services</Box>
              <Box mt={5}>
                <Box className={classes.dflex} mt={4}>
                  <Box className={classes.bulletPoint}></Box>
                  <Box className={classes.service} ml={1}>
                    Front-end Development
                  </Box>
                </Box>
                <Box className={classes.dflex} mt={4}>
                  <Box className={classes.bulletPoint}></Box>
                  <Box className={classes.service} ml={1}>
                    Back-end Development
                  </Box>
                </Box>
                <Box className={classes.dflex} mt={4}>
                  <Box className={classes.bulletPoint}></Box>
                  <Box className={classes.service} ml={1}>
                    Appdevelopment
                  </Box>
                </Box>
                <Box className={classes.dflex} mt={4}>
                  <Box className={classes.bulletPoint}></Box>
                  <Box className={classes.service} ml={1}>
                    Quality Assurance
                  </Box>
                </Box>
              </Box>
            </Grid>

            <Grid item sm={4} md={4} lg={4} textAlign="center">
              <Box className={classes.title}>Technology Stacks</Box>
              <Box display="flex">
                <Box>
                  <Box className={classes.dflex} mt={5}>
                    <Box>
                      <img className={classes.iconStyles} src={applee} alt="" />
                    </Box>
                    <Box ml={1} className={classes.iconName}>
                      Apple
                    </Box>
                  </Box>
                  <Box className={classes.dflex} mt={4}>
                    <img className={classes.iconStyles} src={android} alt="" />
                    <Box ml={1} className={classes.iconName}>
                      Android
                    </Box>
                  </Box>
                  <Box className={classes.dflex} mt={4}>
                    <img className={classes.icon} src={react} alt="" />
                    <Box ml={1} className={classes.iconName}>
                      React native
                    </Box>
                  </Box>
                  <Box className={classes.dflex} mt={4}>
                    <img className={classes.icon} src={flutter} alt="" />
                    <Box ml={1} className={classes.iconName}>
                      Flutter
                    </Box>
                  </Box>
                </Box>
                <Box ml={2}>
                  <Box className={classes.dflex} mt={5}>
                    <img className={classes.icon} src={angular} alt="" />
                    <Box ml={1} className={classes.iconName}>
                      Angular .js
                    </Box>
                  </Box>
                  <Box className={classes.dflex} mt={4}>
                    <img className={classes.icon} src={html} alt="" />
                    <Box ml={1} className={classes.iconName}>
                      HTML 5
                    </Box>
                  </Box>
                  <Box className={classes.dflex} mt={4}>
                    <img className={classes.node} src={node} alt="" />
                    <Box ml={1} className={classes.iconName}>
                      Node .js
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>

            <Grid item sm={4} md={4} lg={3}>
              <Box className={classes.title} textAlign="center">
                Reviews
              </Box>
              <Box mt={5}>
                <Box textAlign="center">
                  <img className={classes.clutchStyles} src={clutch} alt="" />
                </Box>
                <Box className={classes.clutchDetail}>
                  They are technically excellent, have an agile process in place
                  and are always looking for "win/win" opportunities. The team
                  is incredibly honest, hard working and has been a source of
                  new ideas and improvements.
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
      <Hidden smUp>
        <Grid item xs={12}>
          <FooterAccordion />
        </Grid>
      </Hidden>
    </Grid>
  );
};
