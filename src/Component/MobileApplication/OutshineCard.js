import { Box, Typography } from "@mui/material";
import React from "react";
import ServicesCard from "../Website/Services/ServicesCard";

function OutshineCard() {
  return (
    <Box sx={{ background: "#F8F8F8", marginTop: "6%" }}>
      <Typography
        sx={{
          color: "#153A5F",
          fontSize: "1.6em",
          textAlign: "center",
          fontWeight: "600",
          paddingTop: "5%",
        }}
      >
        Outshine Your Competition With the Right Mobile App
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "2.1%",
          flexWrap: "wrap",
          marginTop: "2%",
          paddingBottom: "6%",
        }}
      >
        <ServicesCard
          image="https://techtiz.co/wp-content/uploads/2023/10/Asset-16.svg"
          heading="MVP Software for Startups"
          text="MVP software is the launchpad for your startup dream. MVP success helps you make the most of your users’ smartphone usage to snowball growth and success."
        />
        <ServicesCard
          image="https://techtiz.co/wp-content/uploads/2023/10/Asset-15.svg"
          heading="Data Collection & Process"
          text="An intuitively built mobile app helps your business take data-backed decisions towards success while developing scalable solutions for improved user experience."
        />
        <ServicesCard
          image="https://techtiz.co/wp-content/uploads/2023/10/Asset-14.svg"
          heading="Brand Loyalty"
          text="A user-friendly mobile app drives repeat purchases by providing a direct, personalized experience tailored to your users’ preferences."
        />
        <ServicesCard
          image="https://techtiz.co/wp-content/uploads/2023/10/Asset-13.svg"
          heading="Improved Sales"
          text="With the right app, you’ll get a better user experience, gain access to the right audience, and increase sales"
        />
        <ServicesCard
          image="https://techtiz.co/wp-content/uploads/2023/10/Asset-12.svg"
          heading="Enhanced Security Measures"
          text="We implement robust security features to protect user data and maintain trust."
        />
        <ServicesCard
          image="https://techtiz.co/wp-content/uploads/2023/10/Asset-11.svg"
          heading="App Store Optimization (ASO)"
          text="We optimize your app for higher visibility on app stores like Google Play and Apple App Store."
        />
      </Box>
    </Box>
  );
}

export default OutshineCard;
