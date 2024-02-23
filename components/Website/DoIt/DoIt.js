import { Box, Typography } from "@mui/material";
import React from "react";
import DoButton from "../../Texts/DoButton";
import AnalysisCard from "../AnalysisCard";
import { useEffect, useRef, useState } from "react";
function DoIt() {
  const [selectedButton, setSelectedButton] = useState(
    "Design and Development"
  );

  const handleButtonClick = (text) => {
    setSelectedButton(text);
  };
  const [isVisible, setIsVisible] = useState(false);
  const weeksRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(weeksRef.current);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.2, 
      }
    );

    if (weeksRef.current) {
      observer.observe(weeksRef.current);
    }

    return () => {
      if (weeksRef.current) {
        observer.unobserve(weeksRef.current);
      }
    };
  }, []);

  return (
    <Box ref={weeksRef} sx={{ marginTop: "4%" }}>
      <Typography
        sx={{
          color: "#153A5F",
          fontSize: "2.7em",
          fontWeight: "600",
          textAlign: "center",
          transition: "opacity 1s ease-in-out",
          opacity: isVisible ? 1 : 0,
          fontFamily:"Mont-Bold, Sans-serif",
        }}
      >
        How We Do It
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "2%",
          background: "#F6F9FC",
          marginLeft: {lg:"10%",xl:'17%'},
          marginRight:{lg:"10%",xl:'17%'},
          padding: " 0.5% 0.5% 0.5% 0.5%",
          borderRadius: "40px",
          marginTop: "3%",
          mb:'3%'
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
      {selectedButton === "Discovery and Analysis" && (
        <AnalysisCard
          title="Discovery and Analysis"
          lists={[
            "Assessing your project requirements and objectives",
            "Conducting market research and competitor analysis",
            "Defining user personas and user journeys",
          ]}
          lgTop='4%'
          xlTop='2%'
          image="https://techtiz.co/wp-content/uploads/2023/10/dicovery2-768x768.webp"
        />
      )}
      {selectedButton === "Planning and Strategy" && (
        <AnalysisCard
          title="Planning and Strategy"
          lists={[
            "Developing a comprehensive project plan",
            "Creating wireframes and prototypes",
            "Defining the technology stack and architecture",
          ]}
          image="https://techtiz.co/wp-content/uploads/2023/09/wireframe.webp"

          lgTop='4%'
          xlTop='2%'
        />
      )}
      {selectedButton === "Design and Development" && (
        <AnalysisCard
          title="Design and Development"
          lists={[
            "Crafting user-friendly website designs",
            "Implementing responsive web design",
            "Code cleaning",
          ]}
          lgTop='4%'
          xlTop='2%'
          image="https://techtiz.co/wp-content/uploads/2023/11/Mobile-App.svg"
        />
      )}
      {selectedButton === "Testing and Deployment" && (
        <AnalysisCard
          title="Testing and Deployment"
          lists={[

            "Conducting rigorous testing",
            "Ensuring device compatibility",
            "Deploying the website.",
            "Monitoring its performance",
            "Providing ongoing support"
          ]}
          lgTop='4%'
          xlTop="2%"
          image="https://techtiz.co/wp-content/uploads/2023/10/testing.svg"
        />
      )}
    </Box>
  );
}

export default DoIt;
