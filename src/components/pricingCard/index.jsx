import { Box, makeStyles, Paper } from "@material-ui/core";
import React from "react";
const useStyles = makeStyles({
  title: {
    fontFamily: "Axiforma",
    fontSize: 30,
    fontWeight: 300,
    color: "#000000",
  },
  detail: {
    fontFamily: "Axiforma",
    fontSize: 18,
    fontWeight: 300,
    color: "#000000",
    lineHeight: "25px",
  },
});
export const PricindCard = ({
  image,
  title,
  text1,
  text2,
  backgroundColor,
  width,
  height,
}) => {
  const classes = useStyles();
  return (
    <Box>
      <Paper>
        <Box>
          <Box backgroundColor={backgroundColor}>
            <img src={image} alt="" />
          </Box>
          <Box className={classes.title}>{title}</Box>
          <Box className={classes.detail}>{text1}</Box>
          <Box className={classes.detail}>{text2}</Box>
        </Box>
      </Paper>
    </Box>
  );
};
