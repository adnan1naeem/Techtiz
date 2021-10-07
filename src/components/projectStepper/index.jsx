import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import projectIcon from "../../assets/projectIcon.png";
import projectLg from "../../assets/projectLg.png";
import { ServicesCard } from "../serviceCard";
import mobile1 from "../../assets/mobile1.png";
import mobile2 from "../../assets/mobile2.png";
import { Grid } from "@material-ui/core";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    title: "Recent Projects Include",
    subtitle: "Packing has never been easier.",
    detail:
      "Thank you again for the successful launch of the 3M and Converse applications. Your dedication, hard-work, flexibility, patience and professionalism is recognized and appreciated. ",
    imgPath: projectLg,
    logoPath: projectIcon,
  },
  {
    title: "Recent Projects Include",
    subtitle: "Packing has never been easier.",
    detail:
      "Thank you again for the successful launch of the 3M and Converse applications. Your dedication, hard-work, flexibility, patience and professionalism is recognized and appreciated. ",
    imgPath: mobile1,
    logoPath: projectIcon,
  },
  {
    title: "Recent Projects Include",
    subtitle: "Packing has never been easier.",
    detail:
      "Thank you again for the successful launch of the 3M and Converse applications. Your dedication, hard-work, flexibility, patience and professionalism is recognized and appreciated. ",
    imgPath: mobile2,
    logoPath: projectIcon,
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  header: {
    display: "flex",
    alignItems: "center",
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  img: {
    height: 255,
    display: "block",
    maxWidth: 400,
    overflow: "hidden",
    width: "100%",
  },
  dot: {
    height: 26,
    width: 26,
    backgroundColor: "#C4C4C4",
    marginTop: 20,
  },
  dotActive: {
    backgroundColor: "#FFC560",
  },
  mt: {
    marginTop: 110,
    [theme.breakpoints.up("xs")]: {
      marginTop: 60,
    },
    [theme.breakpoints.up("xl")]: {
      marginTop: 200,
      maxWidth: 1900,
    },
  },
}));

function ProjectStepper() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Grid container justifyContent="center">
      <Grid item xs={10} sm={11} md={10} lg={10} xl={12} className={classes.mt}>
        <div className={classes.root}>
          <AutoPlaySwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
          >
            {tutorialSteps.map((step, index) => (
              <div key={step.label}>
                {Math.abs(activeStep - index) <= 2 ? (
                  <ServicesCard
                    title={step.title}
                    subtitle={step.subtitle}
                    detail={step.detail}
                    image1={step.logoPath}
                    image2={step.imgPath}
                  />
                ) : null}
              </div>
            ))}
          </AutoPlaySwipeableViews>
          <MobileStepper
            steps={maxSteps}
            position="static"
            variant="dots"
            activeStep={activeStep}
            style={{ justifyContent: "center", backgroundColor: "white" }}
            classes={{ dot: classes.dot, dotActive: classes.dotActive }}
          />
        </div>
      </Grid>
    </Grid>
  );
}

export default ProjectStepper;
