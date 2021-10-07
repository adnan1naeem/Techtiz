import { Box, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import { BlogCard } from "../../components/blogCard";
const useStyles = makeStyles((theme) => ({
  title: {
    fontFamily: "Axiforma",
    fontSize: 55,
    fontWeight: 800,
    color: "#3B3E56",
    textAlign: "center",
    marginTop: 100,
    [theme.breakpoints.down("xs")]: {
      fontSize: 26,
    },
    [theme.breakpoints.up("xl")]: {
      marginTop: 200,
    },
  },
  maxWidth: {
    maxWidth: 1900,
  },
}));
export const LatestBlog = () => {
  const classes = useStyles();
  return (
    <Grid container justifyContent="center">
      <Grid item xs={10} lg={10} xl={10} className={classes.maxWidth}>
        <Box className={classes.title}>Our Latest Blog</Box>
        <Grid
          container
          style={{ marginTop: 30 }}
          spacing={4}
          justifyContent="center"
        >
          <Grid item xs={11} sm={6} lg={4}>
            <BlogCard
              height="526px"
              heading="Join the future of mobility with our expertise"
              detail="Whether you’re a Solo Entrepreneur getting started, or a business with a collaborating team. Whether you are a doer with no design skills or even a designer with more technical tastebuds. A high quality image has the power to ramp up your sales and turn your business around. You deserve to have the coolest online .
        "
            />
          </Grid>
          <Grid item xs={11} sm={6} lg={4}>
            <BlogCard
              height="526px"
              heading="Join the future of mobility with our expertise"
              detail="Whether you’re a Solo Entrepreneur getting started, or a business with a collaborating team. Whether you are a doer with no design skills or even a designer with more technical tastebuds. A high quality image has the power to ramp up your sales and turn your business around. You deserve to have the coolest online .
        "
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
