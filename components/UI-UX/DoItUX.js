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
  const [selectedButton, setSelectedButton] = useState("Discovery");

  const handleButtonClick = (text) => {
    setSelectedButton(text);
  };

  return (
    <Box ref={weeksRef} sx={{ marginTop: "3%" }}>
      <Typography
        sx={{
          color: "#153A5F",
          fontSize: { xs: "1.9em", md: "2.7em" },
          fontWeight: "600",
          textAlign: "center",
          transition: "opacity 1s ease-in-out",
          opacity: isVisible ? 1 : 0,
          fontFamily: "Mont-Bold, Sans-serif",
        }}
      >
        How We Do It
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: "center", width: '100%' }}>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "2%",
            background: "#F6F9FC",
            width: '33em',
            // marginLeft: { xs: 0, sm: '10%', md: '20%', lg: "30%", xl: '33%' },
            // marginRight: { xs: 0, sm: '10%', md: '20%', lg: "30%", xl: '33%' },
            padding: " 0.5%",
            borderRadius: "40px",
            marginTop: "3%",
            // "@media screen and (min-width: 1200px) and (max-width: 1300px)": {
            //   ml: '29%',
            //   mr: '29%'
            // },
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
      </Box>

      {selectedButton === "Discovery" && (
        <AnalysisCard
          title="Discovery"
          lists={[
            "Understanding your business and it’s pain points",
            "Interviews & observations",
            "Functional requirements",
          ]}
          width={{ xs: "55%", sm: "43%", md: "23%" }}
          image={require('../../assets/website-dicovery.webp')}
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
          image={require('../../assets/website-wireframe.webp')}
          width={{ xs: "53%", sm: "42%", md: "22%" }}
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
          mt='3%'
          width={{ xs: "55%", sm: "43%", md: "23%" }}
          image={require('../../assets/ui-ux-web-dev.svg')}
        />
      )}

    </Box>
  );
}

export default DoItUX;
