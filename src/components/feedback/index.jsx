import { Box, Grid, makeStyles, Paper } from "@material-ui/core";
import React from "react";
import iconclutch from "../../assets/iconclutch.png";
import Rating from "@material-ui/lab/Rating";
import feedbacklg from "../../assets/feedbacklg.png";
import feedbacksm from "../../assets/feedbacksm.png";
const useStyles = makeStyles((theme) => ({
  backgroundImage: {
    width: "100%",
    height: "100%",
    backgroundPositionX: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    backgroundImage: `url(${feedbacklg})`,
    margin: "auto",
    [theme.breakpoints.only("sm")]: {
      backgroundImage: `url(${feedbacksm})`,
      width: "100%",
      height: "100%",
    },
    [theme.breakpoints.down("xs")]: {
      backgroundImage: `url(${feedbacksm})`,
      width: "100%",
      height: "unset",
    },
  },
  title: {
    fontFamily: "Axiforma",
    fontSize: 49,
    fontWeight: 800,
    color: "#3B3E56",
    marginTop: 110,
    lineHeight: "57px",
    textAlign: "center",
    [theme.breakpoints.only("sm")]: {
      fontSize: 34,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 22,
      lineHeight: "32px",
      marginTop: 60,
    },
  },
  detail: {
    fontFamily: "Axiforma",
    fontSize: 30,
    fontWeight: 300,
    color: "#777777",
    marginTop: 20,
    lineHeight: "43px",
    textAlign: "center",
    [theme.breakpoints.only("sm")]: {
      fontSize: 22,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 14,
      lineHeight: "28px",
    },
  },
  name: {
    fontFamily: "Axiforma",
    fontSize: 30,
    fontWeight: 800,
    color: "#000000",
    marginTop: 10,
    [theme.breakpoints.down("xs")]: {
      fontSize: 18,
    },
  },
  rank: {
    fontFamily: "Axiforma",
    fontSize: 30,
    fontWeight: 400,
    color: "#1840CF",
    marginTop: 10,
    [theme.breakpoints.down("xs")]: {
      fontSize: 18,
    },
  },
  ratingMessage: {
    fontFamily: "Axiforma",
    fontSize: 16,
    fontWeight: 400,
    color: "#000000",
    lineHeight: "20px",
    width: "325px",
    [theme.breakpoints.down("xs")]: {
      width: "unset",
      fontSize: 14,
    },
  },
  clutchContainer: {
    padding: 32,
    width: 555,
    borderRadius: 25,
    [theme.breakpoints.down("xs")]: {
      padding: 23,
      width: "unset",
      img: {
        width: 124,
      },
    },
  },
  imgStyling: {
    [theme.breakpoints.down("xs")]: {
      height: 25,
    },
  },
  dflex: {
    display: "flex",
    justifyContent: "center",
    marginTop: 15,
  },
}));
export const FeedBack = () => {
  const classes = useStyles();
  return (
    <Grid container justifyContent="center">
      <Grid item xs={10} lg={10}>
        <Grid container justifyContent="center">
          <Grid item xs={12} lg={8}>
            <Box className={classes.backgroundImage}>
              <Box className={classes.title}>
                Valuable Feedbacks from our Satisfied Clients
              </Box>
              <Box className={classes.detail}>
                {" "}
                “Thank you again for the successful launch of the 3M and
                Converse applications. Your dedication, hard-work, flexibility,
                patience and professionalism is recognized and appreciated. I
                would recommend Social Cubix to any company wishing to create
                their application!”{" "}
              </Box>
              <Box style={{ width: "100%", textAlign: "center" }}>
                <Box className={classes.name}>Michail Guzman, Director</Box>
                <Box className={classes.rank}>Sapient</Box>
              </Box>
              <Box margin="auto" className={classes.dflex}>
                <Paper className={classes.clutchContainer}>
                  <Box display="flex">
                    <Box>
                      <img
                        className={classes.imgStyling}
                        src={iconclutch}
                        alt=""
                      />
                    </Box>
                    <Box ml={2}>
                      <Rating name="size-small" defaultValue={2} size="small" />
                      <Box className={classes.ratingMessage}>
                        Rated 4.9/5.0 for web development, mobile development
                        and design services
                      </Box>
                    </Box>
                  </Box>
                </Paper>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
