import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles({
  root: {
    width: 200,
    color: "#C4C4C4",
  },
  thumb: { backgroundColor: "#81B1C1" },
  rail: { color: "#C4C4C4" },
  tracl: { color: "#C4C4C4" },
});

export default function SSlider() {
  const classes = useStyles();
  const [value, setValue] = React.useState(30);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs>
          <Slider
            value={value}
            onChange={handleChange}
            aria-labelledby="continuous-slider"
            classes={{
              thumb: classes.thumb,
              rail: classes.rail,
              track: classes.tract,
              root: classes.root,
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
}
