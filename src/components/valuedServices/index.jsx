import { Box, makeStyles } from "@material-ui/core";
import React from "react";
import ServicesTabs from "../servicesTabs";
const useStyles = makeStyles((theme) => ({
  header: {
    fontSize: 45,
    fontWeight: 800,
    fontFamily: "Axiforma",
    color: "#3B3E56",
    textAlign: "center",
  },
}));
export const ValuedServices = () => {
  const classes = useStyles();
  return (
    <Box mt={8}>
      <Box className={classes.header}>Our Valued Services</Box>
      <ServicesTabs />
    </Box>
  );
};
