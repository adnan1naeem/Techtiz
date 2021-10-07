import { Box, makeStyles } from "@material-ui/core";
import React from "react";
const useStyles = makeStyles((theme) => ({
  inputTitle: {
    color: "#C6C6C6",
    fontWeight: 300,
    fontSize: 12,
    fontFamily: "Axiforma",
    outline: 0,
    border: "1px solid #7FC6DC",
    borderRadius: 6,
    paddingLeft: 10,
    [theme.breakpoints.up("xl")]: {
      fontSize: 15,
    },
  },
}));
export const ContactInput = ({
  name,
  width,
  height,
  image,
  marginLeft,
  outline,
  padding,
}) => {
  const classes = useStyles();
  return (
    <Box
      style={{ backgroundImage: `url${image}`, border: "1px solid #F6FDFF" }}
      width={width}
      height={height}
      marginLeft={marginLeft}
    >
      <input
        className={classes.inputTitle}
        placeholder={name}
        style={{ width, height, image, outline, padding }}
      />
    </Box>
  );
};
