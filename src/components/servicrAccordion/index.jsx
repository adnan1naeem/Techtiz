import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import servicemobile from "../../assets/servicemobile.png";
import { Box, Grid } from "@material-ui/core";
import mobileDev from "../../assets/mobileDev.png";
import backend from "../../assets/backend.png";
import frontend from "../../assets/frontend.png";
import valued from "../../assets/valued.png";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    marginTop: 50,
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  imgStyles: {
    width: 344,
  },
  header: {
    fontFamily: "Axiforma",
    fontSize: 22,
    fontWeight: 300,
    color: "#FFC107",
  },
  title: {
    fontFamily: "Axiforma",
    fontSize: 22,
    fontWeight: 300,
    color: "#000000",
    textAlign: "center",
  },
  detail: {
    fontFamily: "Axiforma",
    fontSize: 18,
    fontWeight: 300,
    color: "#000000",
    lineHeight: "28px",
    textAlign: "center",
  },
  icon: {
    height: 25,
  },
  frontendimg: {
    width: 250,
  },
  dflex: {
    display: "flex",
    justifyContent: "center",
    marginTop: 10,
  },
}));

export default function ServiceAccordion() {
  const classes = useStyles();

  return (
    <Grid container justifyContent="center">
      <Grid item xs={10}>
        <Grid container xs={12}>
          <div className={classes.root}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.header}>
                  Mobile Development
                </Typography>
              </AccordionSummary>
              <AccordionDetails style={{ display: "unset" }}>
                <Box className={classes.title}>
                  Join the future of mobility with our expertise
                </Box>
                <Box className={classes.detail}>
                  For close to a decade, Intelivita being a top mobile app
                  development company has produced apps for various industries
                  and partners, from the start-up Social Media app Chatagram, to
                  the Art of Works Virtual Reality app for tech giant’s
                  Microsoft, we have worked with them all.
                </Box>
                <Box textAlign="center">
                  <img
                    className={classes.imgStyles}
                    src={servicemobile}
                    alt=""
                  />
                </Box>
                <Box className={classes.dflex}>
                  <img className={classes.icon} src={mobileDev} alt="" />
                </Box>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography className={classes.header}>
                  Front-end Development
                </Typography>
              </AccordionSummary>
              <AccordionDetails style={{ display: "unset" }}>
                <Box className={classes.title}>Join the future of mobility</Box>
                <Box className={classes.detail}>
                  For close to a decade, Intelivita being a top mobile app
                  development company has produced apps for various industries
                  and partners, from the start-up Social Media app Chatagram, to
                  the Art of Works Virtual Reality app for tech giant’s
                  Microsoft, we have worked with them all.
                </Box>
                <Box textAlign="center">
                  <img className={classes.frontendimg} src={backend} alt="" />
                </Box>
                <Box className={classes.dflex}>
                  <img className={classes.icon} src={mobileDev} alt="" />
                </Box>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography className={classes.header}>
                  Back-end Development
                </Typography>
              </AccordionSummary>
              <Box className={classes.title}>
                Join the future of mobility with our expertise
              </Box>
              <Box className={classes.detail}>
                For close to a decade, Intelivita being a top mobile app
                development company has produced apps for various industries and
                partners, from the start-up Social Media app Chatagram, to the
                Art of Works Virtual Reality app for tech giant’s Microsoft, we
                have worked with them all.
              </Box>
              <Box textAlign="center">
                <img className={classes.imgStyles} src={frontend} alt="" />
              </Box>
              <Box className={classes.dflex} mb={2}>
                <img className={classes.icon} src={mobileDev} alt="" />
              </Box>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography className={classes.header}>
                  Quality assurance
                </Typography>
              </AccordionSummary>
              <AccordionDetails style={{ display: "unset" }}>
                <Box className={classes.title}>
                  Join the future of mobility with our expertise
                </Box>
                <Box className={classes.detail}>
                  For close to a decade, Intelivita being a top mobile app
                  development company has produced apps for various industries
                  and partners, from the start-up Social Media app Chatagram, to
                  the Art of Works Virtual Reality app for tech giant’s
                  Microsoft, we have worked with them all.
                </Box>
                <Box textAlign="center">
                  <img className={classes.imgStyles} src={valued} alt="" />
                </Box>
                <Box className={classes.dflex}>
                  <img className={classes.icon} src={mobileDev} alt="" />
                </Box>
              </AccordionDetails>
            </Accordion>
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
}
