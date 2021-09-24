import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import ProjectStepper from "../../components/projectStepper";
const useStyles = makeStyles((theme) => ({}));
export const OurProjects = () => {
  const classes = useStyles();
  return (
    <Grid container justifyContent="center">
      <Grid item lg={10}>
        <ProjectStepper />
      </Grid>
    </Grid>
  );
};
