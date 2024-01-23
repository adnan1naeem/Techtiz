import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import BusinessCard from "../BusinessPlace/BusinessCard";
import ButtonBusiness from "../Texts/ButtonBusiness";

function BusinessTogether() {
  const [activeButton, setActiveButton] = useState("SMEs");

  const handleButtonClick = (buttonText) => {
    setActiveButton(buttonText);
  };

  const businessDetail = [
    { title: "Startups", point1: "We evaluate the technical feasibility of your digital products", point2: "Swift MVP development for relevant and time-sensitive insights", point3: "Team collaboration and resource management to boost productivity", image: "	https://techtiz.co/wp-content/uploads/2023/10/startup.png" },
    { title: "SMEs", point1: "Development of innovative digital applications to turn the idea behind your business into a reality", point2: "Team augmentation with technical training and expert assistance to boost business development and growth", point3: "Implementation of a client-centric approach with superlative technologies for web and mobile applications development", image: "https://techtiz.co/wp-content/uploads/2023/10/sme.png" },
    { title: "Enterprises", point1: "Optimizing business operations and streamlining workflows with customized and functional software", point2: "Improving the efficiency of your existing digital solutions by upgrading the right features and designs", point3: "Empowering your staff with skills to successfully achieve business goals and develop a greater digital footprint", image: "https://techtiz.co/wp-content/uploads/2023/10/enterprise.png" }
  ]

  return (
    <Box sx={{ marginTop: "4%" }}>
      <Typography
        sx={{
          fontWeight: 600,
          fontSize: "44px",
          textAlign: "center",
          color: "#153A5F",
        }}
      >
        Let's Grow Your Business Together
      </Typography>
      <Typography
        sx={{
          fontWeight: 400,
          textAlign: "center",
          color: "#153A5F",
          fontSize: "1em",
        }}
      >
        With the right tech partner, your business can go places
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          gap: "3%",
        }}
      >
        <Box>
          <ButtonBusiness
            text="StartUps"
            background={activeButton === "StartUps" ? "#153A5F" : "#f1f2f3"}
            color={activeButton === "StartUps" ? "white" : "#54595F"}
            onClick={() => handleButtonClick("StartUps")}
            paddingLeft="80px"
            paddingRight="80px"
          />
          <ButtonBusiness
            text="SMEs"
            background={activeButton === "SMEs" ? "#153A5F" : "#f1f2f3"}
            color={activeButton === "SMEs" ? "white" : "#54595F"}
            onClick={() => handleButtonClick("SMEs")}
            paddingLeft="91px"
            paddingRight="91px"
          />
          <ButtonBusiness
            text="Enterprises"
            background={activeButton === "Enterprises" ? "#153A5F" : "#f1f2f3"}
            color={activeButton === "Enterprises" ? "white" : "#54595F"}
            onClick={() => handleButtonClick("Enterprises")}
            paddingLeft="69px"
            paddingRight="69px"
          />
        </Box>

        <Box sx={{ width: { xs: "90%", sm: "80%", md: "70%", lg: "42%" } }}>
          {activeButton === "StartUps" && <BusinessCard data={businessDetail[0]} />}
          {activeButton === "SMEs" && <BusinessCard data={businessDetail[1]} />}
          {activeButton === "Enterprises" && (
            <BusinessCard data={businessDetail[2]} />
          )}
        </Box>
      </Box>
    </Box>
  );
}

export default BusinessTogether;
