import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography, Box } from "@material-ui/core";
import front from "../../assets/frontend.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  img: {
    position: "absolute",
    width: 528,
    height: 500,
    left: 800.13,
    // marginTop: 200.93,
    filter: "drop-shadow(9px 0px 14px rgba(0, 0, 0, 0.25))",
    //transform: "rotate(17.78deg)",
  },
}));

export default function FrontEnd() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <img src={front} alt="" className={classes.img} />
    </Container>
  );
}
