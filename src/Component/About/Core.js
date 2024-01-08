import React from "react";
import { Box, Typography } from "@mui/material";
import CoreCard from "./CoreCard";

function Core() {
  return (
    <Box
      sx={{
        marginTop: "7%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography
        sx={{ color: "#153A5F", fontSize: "2.7em", fontWeight: "700" }}
      >
        Our Core Values
      </Typography>
      <Typography
        sx={{
          color: "#153A5F",
          fontSize: "1.1em",
          fontWeight: "400",
          textAlign: "center",
        }}
      >
        We are thorough professionals driven by a strong value system and a
        mission to <br /> create sustainable solutions through continuous
        learning and adaptation.
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "2%",
        }}
      >
        <CoreCard />
        <CoreCard />
        <CoreCard />
        <CoreCard />
        <CoreCard />
      </Box>
    </Box>
  );
}

export default Core;
