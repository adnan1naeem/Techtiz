import React from "react";
import { Box, Grid } from "@material-ui/core";
import ProjectStepper from "../../components/projectStepper";
// const useStyles = makeStyles((theme) => ({}));
export const OurProjects = () => {
  // const classes = useStyles();
  return (
    <Box id="our-projects">
      <Grid container justifyContent="center" style={{ overflow: "hidden" }}>
        <Grid item lg={12}>
          <ProjectStepper />
        </Grid>
      </Grid>
    </Box>
  );
};
