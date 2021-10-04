import { Box, Button, Grid, makeStyles, Paper } from "@material-ui/core";
import rectangle1 from "../../assets/rectangle1.png";
import rectangle2 from "../../assets/rectangle2.png";
import React from "react";
import { ContactUsBtn } from "../contactusBtn";
import { ContactInput } from "../contactInput";

import { Sales } from "../sales";
const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: 150,
    [theme.breakpoints.only("xs")]: {
      position: "relative",
      top: -99,
    },
  },
  bgClr: {
    backgroundColor: "#F6FDFF",
    width: "100%",
    padding: 40,
    position: "relative",
    top: -240,
    left: 10,
    boxShadow: "-7px 7px 9px 4px rgba(24, 64, 207, 0.1);",
    borderRadius: 39,
    [theme.breakpoints.only("xs")]: {
      width: "unset",
      height: "unset",
      padding: 25,
      left: "unset",
      top: -71,
    },
    [theme.breakpoints.only("sm")]: {
      left: -39,
    },
  },
  heading: {
    fontSize: 40,
    fontWeight: 800,
    color: "#3B3E56",
    display: "flex",
    justifyContent: "center",
    fontFamily: "Axiforma",
    [theme.breakpoints.down("xs")]: {
      fontSize: 25,
    },
  },
  message: {
    fontSize: 10,
    fontWeight: 300,
    color: "#787878",
    marginLeft: 31,
    fontFamily: "Axiforma",
  },
  sendButton: {
    fontSize: 22,
    fontWeight: 300,
    color: "#3B3E56",
    "&:hover": {
      backgroundColor: "#FFC107",
    },
    backgroundColor: "#FFC107",
    width: 223,
    height: 53,
    borderRadius: 72,
    fontFamily: "Axiforma",
    [theme.breakpoints.only("xs")]: {
      width: 170,
      height: 45,
      fontSize: 16,
    },
  },
  textCenter: {
    display: "flex",
    justifyContent: "center",
    marginTop: 16,
  },
  rectangle1: {
    width: "100%",
    height: "100%",
    position: "relative",
    right: 75,
    [theme.breakpoints.only("xs")]: {
      width: 231,
      position: "relative",
      right: 18,
    },
    [theme.breakpoints.only("sm")]: {
      width: 385,
      position: "relative",
      right: 110,
      top: -57,
    },
  },
  rectangle2: {
    position: "relative",
    top: -127,
    right: 131,
    [theme.breakpoints.only("xs")]: {
      width: 231,
      position: "relative",
      right: -130,
      top: -588,
    },
    [theme.breakpoints.only("sm")]: {
      position: "relative",
      right: -3,
      top: -772,
    },
    [theme.breakpoints.only("md")]: {
      width: 385,
      position: "relative",
      right: -14,
      top: -41,
    },
  },
  position: {
    position: "relative",
    top: -12,
    zIndex: -3,
  },
  bgGreen: {
    position: "relative",
    top: -60,
    [theme.breakpoints.up("xs")]: {
      top: "unset",
    },
  },
}));
export const ContactUs = () => {
  const classes = useStyles();
  return (
    <Grid container justifyContent="center">
      <Grid className={classes.mb} xs={12} sm={10} md={11} lg={10} item>
        <Grid container className={classes.container} justifyContent="center">
          <Grid item xs={11} sm={9} md={6} lg={4}>
            <Box>
              <Box className={classes.bgGreen}>
                <img className={classes.rectangle1} src={rectangle2} alt="" />
              </Box>
              <Box>
                <Paper className={classes.bgClr}>
                  <Box className={classes.heading}>Contact Us About</Box>
                  <Box display="flex" justifyContent="center">
                    <ContactUsBtn
                      text="Front-end Development"
                      width="100%"
                      marginTop="10px"
                    />
                    <ContactUsBtn
                      text="Back-end Development"
                      width="100%"
                      marginLeft="20px"
                      marginTop="10px"
                    />
                  </Box>
                  <Box display="flex" justifyContent="center">
                    <ContactUsBtn
                      text="App Development"
                      width="100%"
                      marginTop="9px"
                    />
                    <ContactUsBtn
                      text=" Quality assurance"
                      width="100%"
                      marginLeft="20px"
                      marginTop="9px"
                    />
                  </Box>
                  <Box display="flex" justifyContent="center" mt={5}>
                    <ContactInput
                      name="First Name* :"
                      width="100%"
                      padding="8px"
                    />
                    <ContactInput
                      padding="8px"
                      name="Last Name :"
                      width="100%"
                      marginLeft="20px"
                    />
                  </Box>
                  <Box display="flex" justifyContent="center" mt={3}>
                    <ContactInput
                      padding="8px"
                      name="First Name* :"
                      width="100%"
                      outline="unset"
                    />
                    <ContactInput
                      padding="8px"
                      name="Country* :"
                      width="100%"
                      marginLeft="20px"
                    />
                  </Box>
                  <Box mt={3}>
                    <ContactInput name="Email* :" width="100%" padding="8px" />
                  </Box>
                  <Box mt={3}>
                    <ContactInput
                      name="How we can help you?*"
                      width="100%"
                      padding="8px"
                    />
                  </Box>
                  <Box className={classes.message} mt={2}>
                    By sending this form I confirm that I have read and accept
                    Intellectsoft Privacy Policy
                  </Box>
                  <Box className={classes.textCenter}>
                    <Button className={classes.sendButton}>Send</Button>
                  </Box>
                </Paper>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={11} sm={10} md={3} lg={3}>
            <Sales />
            <Box className={classes.position}>
              <img className={classes.rectangle2} src={rectangle1} alt="" />
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
