import { Box, makeStyles } from "@material-ui/core";
import React from "react";
const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: 30,
    fontWeight: 800,
    fontFamily: "Axiforma",
    color: "#000000",
    [theme.breakpoints.down("sm")]: {
      fontSize: 22,
    },
  },
  detail: {
    fontSize: 22,
    fontWeight: 400,
    fontFamily: "Axiforma",
    color: "#000000",
    lineHeight: "31px",
    [theme.breakpoints.down("sm")]: {
      fontSize: 14,
      lineHeight: "23px",
    },
  },
}));
export const IndustriesCard = ({ name, detail }) => {
  const classes = useStyles();
  return (
    <Box>
      <Box className={classes.title}>{name}</Box>
      <Box className={classes.detail}>{detail}</Box>
    </Box>
  );
};
