import { Box, Typography } from "@mui/material";
import React from "react";
import UXCard from "./UXCard";

function DoUX() {
  return (
    <Box sx={{ background: "#F8F8F8",marginTop:'5%' }}>
      <Typography
        sx={{
          color: "#153A5F",
          fontSize: "2.8em",
          textAlign: "center",
          fontWeight: "600",
          paddingTop: "5%",
        }}
      >
        What We Do
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "2.1%",
          flexWrap: "wrap",
          marginTop: "3%",
          paddingBottom: "6%",
        }}
      >
        <UXCard
          image="https://techtiz.co/wp-content/uploads/2023/10/Asset-4.svg"
          heading="Mobile Application UI/UX Design"
          text="We design simple user-interfaces and create a delightful user experience for your customers with easily accessible functionalities."
        />
         <UXCard
          image="https://techtiz.co/wp-content/uploads/2023/10/Asset-3.svg"
          heading="Web Application Design"
          text="We bring your digital product to life with functional and appealing designs that boost customer engagement with every click."
        />
         <UXCard
          image="https://techtiz.co/wp-content/uploads/2023/10/Asset-2.svg"
          heading="Cross-platform Experience Design"
          text="We identify the critical points to make your website/app design stand out among the rest. We take complete responsibility for successful project delivery."
        />
         <UXCard
          image="https://techtiz.co/wp-content/uploads/2023/10/Asset-1.svg"
          heading="UI and UX Consulting"
          text="We establish your internet presence with attractive designs while using maximum team productivity to help you achieve business goals."
        />
      </Box>
    </Box>
  );
}

export default DoUX;
