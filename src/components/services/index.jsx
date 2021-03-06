import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Box } from "@material-ui/core";
import TabValue from "./tabvalue";
import ServicesTab from "./tabs";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 150,
  },
  services: {
    display: "flex",
    justifyContent: "center",
    // maxWidth: 474,
    height: 105,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 800,
    fontSize: 45,
    lineHeight: "113.6%",
    /* or 51px */

    color: "#3B3E56",
  },
}));

export default function Services() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Box className={classes.services}>Our Valued Services</Box>
      <ServicesTab />
      <TabValue />
    </Container>
  );
}
