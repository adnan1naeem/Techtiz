import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  title: {
    fontSize: 18,
    fontWeight: 300,
    fontFamily: "Axiforma",
    color: "#FFC107",
  },
  detail: {
    fontSize: 18,
    fontWeight: 400,
    fontFamily: "Axiforma",
    color: "#000000",
  },
}));

export default function IndustriesAccordion() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.title}>Food</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box className={classes.detail}>
            We Help a diverse clientele build result-driven mobile apps for
            different industries Thank you again for the successful launch of
            the 3M and Converse applications. Your dedication, hard-work,
            flexibility, patience and professionalism is recognized and
            appreciated.
          </Box>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.title}>E-Commerce</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box className={classes.detail}>
            We Help a diverse clientele build result-driven mobile apps for
            different industries Thank you again for the successful launch of
            the 3M and Converse applications. Your dedication, hard-work,
            flexibility, patience and professionalism is recognized and
            appreciated.
          </Box>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.title}>Social</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box className={classes.detail}>
            We Help a diverse clientele build result-driven mobile apps for
            different industries Thank you again for the successful launch of
            the 3M and Converse applications. Your dedication, hard-work,
            flexibility, patience and professionalism is recognized and
            appreciated.
          </Box>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.title}>Education</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box className={classes.detail}>
            We Help a diverse clientele build result-driven mobile apps for
            different industries Thank you again for the successful launch of
            the 3M and Converse applications. Your dedication, hard-work,
            flexibility, patience and professionalism is recognized and
            appreciated.
          </Box>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.title}>Marketplace</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box className={classes.detail}>
            We Help a diverse clientele build result-driven mobile apps for
            different industries Thank you again for the successful launch of
            the 3M and Converse applications. Your dedication, hard-work,
            flexibility, patience and professionalism is recognized and
            appreciated.
          </Box>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
