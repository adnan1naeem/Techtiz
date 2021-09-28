import { Box, Grid, makeStyles, Paper } from "@material-ui/core";
import React from "react";
import iconclutch from "../../assets/iconclutch.png";
import Rating from "@material-ui/lab/Rating";
import feedbacklg from "../../assets/feedbacklg.png";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    "& > * + *": {
      marginTop: theme.spacing(1),
    },
  },
  backgroundImage: {
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    backgroundImage: `url(${feedbacklg})`,
  },
  title: {
    fontFamily: "Axiforma",
    fontSize: 55,
    fontWeight: 800,
    color: "#3B3E56",
    marginTop: 100,
  },
  detail: {
    fontFamily: "Axiforma",
    fontSize: 30,
    fontWeight: 300,
    color: "#777777",
    marginTop: 40,
    lineHeight: "43px",
  },
  name: {
    fontFamily: "Axiforma",
    fontSize: 30,
    fontWeight: 800,
    color: "#000000",
    marginTop: 30,
  },
  rank: {
    fontFamily: "Axiforma",
    fontSize: 30,
    fontWeight: 400,
    color: "#1840CF",
    marginTop: 30,
  },
  ratingMessage: {
    fontFamily: "Axiforma",
    fontSize: 16,
    fontWeight: 400,
    color: "#000000",
    lineHeight: "20px",
    width: "325px",
  },
}));
export const FeedBack = () => {
  const classes = useStyles();
  return (
    <Box className={classes.backgroundImage} mt={10}>
      <Grid container justifyContent="center">
        <Grid item lg={10}>
          <Grid item lg={10}>
            <Box className={classes.title}>
              Valuable Feedbacks from our Satisfied Clients
            </Box>
            <Box className={classes.detail}>
              {" "}
              “Thank you again for the successful launch of the 3M and Converse
              applications. Your dedication, hard-work, flexibility, patience
              and professionalism is recognized and appreciated. I would
              recommend Social Cubix to any company wishing to create their
              application!”{" "}
            </Box>
            <Box className={classes.name}>Michail Guzman, Director</Box>
            <Box className={classes.rank}>Sapient</Box>
            <Paper style={{ width: 555, borderRadius: 25 }}>
              <Box display="flex" p={4}>
                <Box>
                  <img src={iconclutch} alt="" />
                </Box>
                <Box ml={2}>
                  <Rating name="size-small" defaultValue={2} size="small" />
                  <Box className={classes.ratingMessage}>
                    Rated 4.9/5.0 for web development, mobile development and
                    design services
                  </Box>
                </Box>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};
