import { Box, Typography } from "@mui/material";
import React from "react";
import ServicesCard from "./ServicesCard";

function OurServices() {
  return (
    <Box sx={{ background: "#F8F8F8" }}>
      <Typography
        sx={{
          color: "#153A5F",
          fontSize: "2.8em",
          textAlign: "center",
          fontWeight: "600",
          paddingTop: "5%",
        }}
      >
        Our Services
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "2.1%",
          flexWrap: "wrap",
          marginTop: "4%",
          paddingBottom: "6%",
        }}
      >
        <ServicesCard
          image="https://techtiz.co/wp-content/uploads/2023/10/Asset-22.svg"
          heading="Frontend Development"
          text="We ensure your website delivers a seamless user experience and optimal performance."
        />
        <ServicesCard
          image="https://techtiz.co/wp-content/uploads/2023/10/Asset-21.svg"
          heading="Backend Development"
          text="Employing the latest tools and technologies to develop functional websites to meet your business goals."
        />
        <ServicesCard
          image="https://techtiz.co/wp-content/uploads/2023/10/Asset-20.svg"
          heading="Full Stack Development"
          text="Our full-stack experts use the most recent technology to create applications and integrate APIs for seamless end-to-end web development services from ideation to execution."
        />
        <ServicesCard
          image="https://techtiz.co/wp-content/uploads/2023/10/Asset-19.svg"
          heading="Support and Maintenance"
          text="From the day your software system goes live, our SQA team will support, maintain, and properly “evolve” your application as per market needs."
        />
        <ServicesCard
          image="https://techtiz.co/wp-content/uploads/2023/10/Asset-18.svg"
          heading="E-commerce Development"
          text="We specialize in creating robust e-commerce solutions, enabling your business to thrive in the digital marketplace."
        />
        <ServicesCard
          image="https://techtiz.co/wp-content/uploads/2023/10/Asset-17.svg"
          heading="Content Management Systems (CMS)"
          text="We offer tailored CMS development services, providing you with user-friendly platforms to manage and update your website's content efficiently."
        />
      </Box>
    </Box>
  );
}

export default OurServices;
