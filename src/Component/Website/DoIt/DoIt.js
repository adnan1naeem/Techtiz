import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import DoButton from "../../Texts/DoButton";

function DoIt() {
  const [selectedButton, setSelectedButton] = useState('Design and Development');

  const handleButtonClick = (text) => {
    setSelectedButton(text);
  };

  return (
    <Box sx={{ marginTop: "5%" }}>
      <Typography
        sx={{
          color: "#153A5F",
          fontSize: "2.7em",
          fontWeight: "600",
          textAlign: "center",
        }}
      >
        How We Do It
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap:'wrap',
          justifyContent: "center",
          gap: "2%",
          background: "#F6F9FC",
          marginLeft: "10%",
          marginRight: "10%",
          padding: " 0.5% 0.5% 0.5% 0.5%",
          borderRadius: "40px",
          marginTop:'3%'
        }}
      >
        <DoButton
          text="Discovery and Analysis"
          isSelected={selectedButton === "Discovery and Analysis"}
          onClick={() => handleButtonClick("Discovery and Analysis")}
        />
        <DoButton
          text="Planning and Strategy"
          isSelected={selectedButton === "Planning and Strategy"}
          onClick={() => handleButtonClick("Planning and Strategy")}
        />
        <DoButton
          text="Design and Development"
          isSelected={selectedButton === "Design and Development"}
          onClick={() => handleButtonClick("Design and Development")}
        />
         <DoButton
          text="Testing and Deployment"
          isSelected={selectedButton === "Testing and Deployment"}
          onClick={() => handleButtonClick("Testing and Deployment")}
        />

      </Box>
    </Box>
  );
}

export default DoIt;
