import { Box, Button, makeStyles } from "@material-ui/core";
import React from "react";
const useStyles = makeStyles((theme) => ({
  btnFonts: {
    backgroundColor: "#FFFFFF",

    borderRadius: 72,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  hover: {
    textTransform: "initial",
    "&:hover": {
      backgroundColor: "white",
    },
  },
  text: {
    color: "#000000",
    fontFamily: "Axiforma",
    fontSize: 14,
    fontWeight: 300,
  },
}));
export const ContactUsBtn = ({
  height,
  width,
  text,
  marginLeft,
  marginTop,
}) => {
  const classes = useStyles();
  return (
    <Box
      className={classes.btnFonts}
      width={width}
      height={height}
      marginLeft={marginLeft}
      marginTop={marginTop}
    >
      <Button
        className={classes.hover}
        disableRipple
        disableFocusRipple
        disableTouchRipple
      >
        <Box className={classes.text}>{text}</Box>
      </Button>
    </Box>
  );
};
