import React from "react";
import { Box, Typography } from "@mui/material";

function Software() {
  return (
    <Box
      sx={{
        backgroundImage: `url('https://techtiz.co/wp-content/uploads/2023/10/bg-pat.svg')`, // Set the background image URL
        backgroundRepeat: 'repeat', // Set the background repeat property
        backgroundSize: '300px 800px', // Set the width of the background image
        marginTop: "5%",
        paddingTop: "21%",
        paddingBottom: "20%",
        backgroundPosition: 'center', // Center the background image
        backgroundColor:'#153A5F'

      }}
    >
      <Typography
        sx={{
          color: "#FFFFFF",
          fontSize: "2.3em",
          textAlign: "center",
          fontWeight: "700",
        }}
      >
        We Do More Than Just Build Software
      </Typography>
      <Typography
        sx={{
          color: "#FFFFFF",
          fontSize: "1.1em",
          textAlign: "center",
          fontWeight: "400",
          marginTop: "2.5%",
        }}
      >
        Techtiz offers more than software development services. With our
        expertise in software design and development, we also
        <br /> offer cost-effective staffing resources, business consulting, and
        training.
      </Typography>
      <Typography
        sx={{
          color: "#FFFFFF",
          fontSize: "1.1em",
          textAlign: "center",
          fontWeight: "400",
          marginTop: "2%",
        }}
      >
        As a leading software agency, we have a proven track record of
        successfully helping diverse businesses embark on their
        <br /> transformative journey, with on-time enterprise-level
        implementation that requires minimal effort.
      </Typography>
    </Box>
  );
}

export default Software;
