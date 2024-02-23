import { Box, Typography } from "@mui/material";
import React from "react";
import DoButton from "../Texts/DoButton";
import AnalysisCard from "../Website/AnalysisCard";
import { useEffect, useRef, useState } from "react";
function DoItUX() {
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
  const [selectedButton, setSelectedButton] = useState("Build and Itrate");

  const handleButtonClick = (text) => {
    setSelectedButton(text);
  };

  return (
    <Box ref={weeksRef} sx={{ marginTop: "3%" }}>
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
          marginLeft:{xs:0,sm:'10%',md:'15%',lg: "30%",xl:'33%'},
          marginRight: {xs:0,sm:'10%',md:'15%',lg: "30%",xl:'33%'},
          padding: " 0.5% 0.5% 0.5% 0.5%",
          borderRadius: "40px",
          marginTop: "3%",
        }}
      >
        <DoButton
          text="Discovery"
          isSelected={selectedButton === "Discovery"}
          onClick={() => handleButtonClick("Discovery")}
        />
        <DoButton
          text="Wireframes"
          isSelected={selectedButton === "Wireframes"}
          onClick={() => handleButtonClick("Wireframes")}
        />
        <DoButton
          text="Build and Itrate"
          isSelected={selectedButton === "Build and Itrate"}
          onClick={() => handleButtonClick("Build and Itrate")}
        />
      
      </Box>
      {selectedButton === "Discovery" && (
        <AnalysisCard
          title="Discovery"
          lists={[
            "Understanding your business and it’s pain points",
            "Interviews & observations",
            "Functional requirements",
          ]}
          lgTop='4%'
          xlTop='2%'
          image="https://techtiz.co/wp-content/uploads/2023/10/dicovery2-768x768.webp"
        />
      )}
      {selectedButton === "Wireframes" && (
        <AnalysisCard
          title="Wireframes"
          lists={[
            "Concept sketching",
            "System/Process flow",
            "Information architecture",
          ]}
          image="https://techtiz.co/wp-content/uploads/2023/09/wireframe.webp"

          lgTop='4%'
          xlTop='2%'
        />
      )}
      {selectedButton === "Build and Itrate" && (
        <AnalysisCard
          title="Build and Iterate"
          lists={[
            "Interaction design",
            "High-fidelity mockups",
            "Interactive prototypes",
            "UI Style guide/brand identity"
          ]}
          lgTop='2%'
          xlTop='2%'
          image="https://techtiz.co/wp-content/uploads/2023/11/web-dev.svg"
        />
      )}
     
    </Box>
  );
}

export default DoItUX;
