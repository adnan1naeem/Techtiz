import { Box, makeStyles } from "@material-ui/core";
import React from "react";
const useStyles = makeStyles((theme) => ({
  heading: {
    fontFamily: "Axiforma",
    fontSize: 18,
    fontWeight: 300,
    color: "#3B3E56",
    textAlign: "center",
    backgroundColor: "#F5F5F5;",
    padding: 20,
    marginTop: 20,
    [theme.breakpoints.only("xs")]: {
      fontSize: 9,
      marginTop: "unset",
    },
  },
}));
export const BelowFooter = () => {
  const classes = useStyles();
  return (
    <Box>
      <Box className={classes.heading}>
        © 2021 Techtiz All Rights Reserved. Terms & Conditions | Privacy policy
      </Box>
    </Box>
  );
};
