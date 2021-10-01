import { Box, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import { BlogCard } from "../../components/blogCard";
const useStyles = makeStyles({
  title: {
    fontFamily: "Axiforma",
    fontSize: 55,
    fontWeight: 800,
    color: "#3B3E56",
    textAlign: "center",
  },
});
export const LatestBlog = () => {
  const classes = useStyles();
  return (
    <Grid container justifyContent="center">
      <Grid item lg={10}>
        <Box className={classes.title}>Our Latest Blog</Box>
        <Grid container style={{ marginTop: 30 }}>
          <Grid item lg={6}>
            <BlogCard
              height="526px"
              width="561px"
              heading="Join the future of mobility with our expertise"
              detail="Whether you’re a Solo Entrepreneur getting started, or a business with a collaborating team. Whether you are a doer with no design skills or even a designer with more technical tastebuds. A high quality image has the power to ramp up your sales and turn your business around. You deserve to have the coolest online .
        "
            />
          </Grid>
          <Grid item lg={6}>
            <BlogCard
              height="526px"
              width="561px"
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
