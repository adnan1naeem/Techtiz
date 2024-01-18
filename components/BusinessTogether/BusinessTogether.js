import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import BusinessCard from "../BusinessPlace/BusinessCard";
import ButtonBusiness from "../Texts/ButtonBusiness";

function BusinessTogether() {
  const [activeButton, setActiveButton] = useState("SMEs");

  const handleButtonClick = (buttonText) => {
    setActiveButton(buttonText);
  };

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
          gap: "12%",
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

        <Box sx={{ width: { xs: "90%", sm: "80%", md: "70%", lg: "55%" } }}>
          {activeButton === "StartUps" && <BusinessCard title="Startups" />}
          {activeButton === "SMEs" && <BusinessCard title="SMEs" />}
          {activeButton === "Enterprises" && (
            <BusinessCard title="Enterprises" />
          )}
        </Box>
      </Box>
    </Box>
  );
}

export default BusinessTogether;
