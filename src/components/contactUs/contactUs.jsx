import { Box, Button, Grid, makeStyles, Paper } from "@material-ui/core";
import rectangle1 from "../../assets/rectangle1.png";
import rectangle2 from "../../assets/rectangle2.png";
import React from "react";
import { ContactUsBtn } from "../contactusBtn";
import { ContactInput } from "../contactInput";

import { Sales } from "../sales";
const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: 700,
    [theme.breakpoints.down("xs")]: {
      position: "relative",
      top: 350,
    },
  },
  bgClr: {
    backgroundColor: "#F6FDFF",
    width: 572,
    height: 666,
    padding: 25,
    position: "relative",
    top: -240,
    left: 97,
    boxShadow: "-7px 7px 9px 4px rgba(24, 64, 207, 0.1);",
    borderRadius: 39,
  },
  heading: {
    fontSize: 40,
    fontWeight: 800,
    color: "#3B3E56",
    display: "flex",
    justifyContent: "center",
    fontFamily: "Axiforma",
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
  },
  textCenter: {
    display: "flex",
    justifyContent: "center",
    marginTop: 16,
  },
  rectangle1: {
    height: 166,
    width: 619,
  },
  position: {
    position: "relative",
    left: 275,
    top: 70,
    zIndex: -3,
  },
}));
export const ContactUs = () => {
  const classes = useStyles();
  return (
    <Grid container justifyContent="center" className={classes.container}>
      <Grid className={classes.mb} md={10} lg={10} item>
        <Grid container>
          <Grid item md={4} lg={3}>
            <Box>
              <Box>
                <img src={rectangle1} alt="" />
              </Box>
              <Box>
                <Paper className={classes.bgClr}>
                  <Box className={classes.heading}>Contact Us About</Box>
                  <Box display="flex" justifyContent="center">
                    <ContactUsBtn
                      text="Front-end Development"
                      width="235px"
                      height="46px"
                      marginTop="10px"
                    />
                    <ContactUsBtn
                      text="Back-end Development"
                      width="235px"
                      height="46px"
                      marginLeft="20px"
                      marginTop="10px"
                    />
                  </Box>
                  <Box display="flex" justifyContent="center">
                    <ContactUsBtn
                      text="App Development"
                      width="200px"
                      height="46px"
                      marginTop="9px"
                    />
                    <ContactUsBtn
                      text=" Quality assurance"
                      width="191px"
                      height="46px"
                      marginLeft="20px"
                      marginTop="9px"
                    />
                  </Box>
                  <Box display="flex" justifyContent="center" mt={5}>
                    <ContactInput
                      name="First Name* :"
                      width="255px"
                      height="43px"
                    />
                    <ContactInput
                      name="Last Name :"
                      width="255px"
                      height="43px"
                      marginLeft="20px"
                    />
                  </Box>
                  <Box display="flex" justifyContent="center" mt={3}>
                    <ContactInput
                      name="First Name* :"
                      width="255px"
                      height="43px"
                      outline="unset"
                    />
                    <ContactInput
                      name="Country* :"
                      width="255px"
                      height="43px"
                      marginLeft="20px"
                    />
                  </Box>
                  <Box mt={3}>
                    <ContactInput
                      name="Email* :"
                      width="531px"
                      height="43px"
                      marginLeft="21px"
                    />
                  </Box>
                  <Box mt={3}>
                    {" "}
                    <ContactInput
                      name="How we can help you?*"
                      width="531px"
                      height="119px"
                      marginLeft="21px"
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
          <Grid item md={3} lg={3}>
            <Sales />
            <Box className={classes.position}>
              <img src={rectangle2} alt="" />
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
