import { Box, Button, makeStyles, Paper } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  title: {
    fontFamily: "Axiforma",
    fontSize: 55,
    fontWeight: 800,
    color: "#3B3E56",
    textAlign: "center",
  },
  cardButton: {
    fontSize: 18,
    fontFamily: "Axiforma",
    fontWeight: 500,
    color: "#FFFFFF",
    lineHeight: "25px",
    backgroundColor: "#7FC6DC",
    textTransform: "capitalize",
    borderRadius: 72,
    height: 50,
    width: 191,
    "&:hover": {
      backgroundColor: "#7FC6DC",
    },
    marginTop: 20,
    [theme.breakpoints.down("xs")]: {
      fontSize: 14,
      width: 150,
      height: 45,
    },
  },
  heading: {
    fontFamily: "Axiforma",
    fontSize: 22,
    fontWeight: 800,
    color: "#3B3E56",
    lineHeight: "30px",
    [theme.breakpoints.down("xs")]: {
      fontSize: 16,
      lineHeight: "unset",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 18,
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: 32,
      lineHeight: "42px",
    },
  },
  detail: {
    fontFamily: "Axiforma",
    fontSize: 14,
    marginTop: 10,
    fontWeight: 300,
    color: "#3B3E56",

    lineHeight: "23px",
    [theme.breakpoints.down("xs")]: {
      fontSize: 13,
      textAlign: "unset",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 13,
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: 26,
      lineHeight: "43px",
    },
  },
  dflex: {
    display: "flex",
    justifyContent: "center",
  },
  padding: {
    padding: 36,
    [theme.breakpoints.down("xs")]: {
      padding: 22,
    },
    borderRadius: 33,
    boxShadow: "2px -2px 21px 6px rgba(0, 0, 0, 0.1);",
  },
}));
export const BlogCard = ({ heading, detail, width, height }) => {
  const classes = useStyles();
  return (
    <Box>
      <Paper className={classes.padding}>
        <Box className={classes.heading}>{heading}</Box>
        <Box className={classes.detail}>{detail}</Box>
        <Box className={classes.dflex}>
          <Button className={classes.cardButton}>Read More</Button>
        </Box>
      </Paper>
    </Box>
  );
};
