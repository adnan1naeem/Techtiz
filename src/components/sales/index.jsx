import { Box, makeStyles, Paper } from "@material-ui/core";
import React from "react";
const useStyles = makeStyles((theme) => ({
  container: {
    padding: 20,
    width: "100%",
    height: "100%",
    backgroundColor: "#FFFAF3",
    position: "relative",
    zIndex: -2,
    top: 72,
    left: 78,
    boxShadow: "0px -1px 17px -5px rgba(0, 0, 0, 0.25)",
    borderRadius: 18,
    [theme.breakpoints.down("xs")]: {
      width: "unset",
      position: "relative",
      top: -59,
      left: 0,
    },
    [theme.breakpoints.only("sm")]: {
      top: -214,
      left: -5,
    },
    [theme.breakpoints.up("xls")]: {
      top: 272,
    },
  },
  heading: {
    color: "#FFC107",
    fontFamily: "Axiforma",
    fontSize: 22,
    fontWeight: 800,
  },
  headingDetail: {
    color: "#000000",
    fontFamily: "Axiforma",
    fontSize: 16,
    fontWeight: 300,
  },
}));
export const Sales = () => {
  const classes = useStyles();
  return (
    <Box>
      <Paper className={classes.container}>
        <Box>
          <Box>
            <Box className={classes.heading}>Sales</Box>
            <Box className={classes.headingDetail}>
              Let us show you what Techtiz can do for your team. Get in touch at
              <b> contact@techtiz.com</b>
            </Box>
          </Box>
          <Box mt={3}>
            <Box className={classes.heading}>Customer Support</Box>
            <Box className={classes.headingDetail}>
              For any product or technical questions, reach us at
              <b> contact@techtiz.com</b> Or, check out our Help Center.
            </Box>
          </Box>
          <Box mt={3}>
            <Box className={classes.heading}>General Inquiries</Box>
            <Box className={classes.headingDetail}>
              For anything else on your mind, including partnership ideas, say
              hello: <b> contact@techtiz.com</b>
            </Box>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};
