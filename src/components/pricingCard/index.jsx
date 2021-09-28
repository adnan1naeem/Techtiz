import { Box, makeStyles, Paper } from "@material-ui/core";
import React from "react";
const useStyles = makeStyles({});
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
        <Box backgroundColor={backgroundColor}>
          <img src={image} alt="" />
        </Box>
        <Box>{title}</Box>
        <Box>{text1}</Box>
        <Box>{text2}</Box>
      </Paper>
    </Box>
  );
};
