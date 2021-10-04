import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Box } from "@material-ui/core";
import applee from "../../assets/applee.png";
import android from "../../assets/android.png";
import react from "../../assets/react.png";
import flutter from "../../assets/flutter.png";
import angular from "../../assets/angular.png";
import html from "../../assets/html.png";
import node from "../../assets/node.png";
import clutch from "../../assets/clutchfooter.png";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  bulletPoint: {
    backgroundColor: "#C4C4C4",
    width: "9.64px",
    height: "7.7px",
    borderRadius: 10,
  },
  dflex: {
    display: "flex",
    alignItems: "center",
  },
  service: {
    fontSize: 18,
    fontWeight: 300,
    color: "#4E4E4E",
    fontFamily: "Axiforma",
  },
}));

export default function FooterAccordion() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Services</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box style={{ display: "flex", flexDirection: "column" }}>
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
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Technology Stacks</Typography>
        </AccordionSummary>
        <AccordionDetails>
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
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Reviews</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box mt={5}>
            <Box textAlign="center">
              <img className={classes.clutchStyles} src={clutch} alt="" />
            </Box>
            <Box className={classes.clutchDetail}>
              They are technically excellent, have an agile process in place and
              are always looking for "win/win" opportunities. The team is
              incredibly honest, hard working and has been a source of new ideas
              and improvements.
            </Box>
          </Box>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
