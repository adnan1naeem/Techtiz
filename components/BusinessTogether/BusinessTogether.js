import { Box, Typography } from "@mui/material";
import React from "react";
import BusinessCard from "../BusinessPlace/BusinessCard";
import ButtonBusiness from "../Texts/ButtonBusiness";
import { useEffect, useRef, useState } from "react";
import startupImg from "../../public/startup.png"
import sme from "../../public/sme.png"
import enterprise from "../../public/enterprise.png"

function BusinessTogether({ onClick }) {
  const [activeButton, setActiveButton] = useState("Startups");
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

  const handleButtonClick = (buttonText) => {
    setActiveButton(buttonText);
  };

  const businessDetail = [
    { title: "Startups", point1: "We evaluate the technical feasibility of your digital products", point2: "Swift MVP development for relevant and time-sensitive insights", point3: "Team collaboration and resource management to boost productivity", image: startupImg.src },
    { title: "SMEs", point1: "Development of innovative digital applications to turn the idea behind your business into a reality", point2: "Team augmentation with technical training and expert assistance to boost business development and growth", point3: "Implementation of a client-centric approach with superlative technologies for web and mobile applications development", image: sme.src },
    { title: "Enterprises", point1: "Optimizing business operations and streamlining workflows with customized and functional software", point2: "Improving the efficiency of your existing digital solutions by upgrading the right features and designs", point3: "Empowering your staff with skills to successfully achieve business goals and develop a greater digital footprint", image: enterprise.src }
  ]

  return (
    <Box ref={weeksRef} sx={{ marginTop: { xs: "10%", md: "6%", lg: "6%" } }}>
      <Typography
        sx={{
          fontWeight: 'bold',
          fontSize: { xs: "1.8em", sm: "2.1em", md: "2.1em", lg: "2.6em" },
          lineHeight: '50px',
          textAlign: "center",
          paddingLeft: { xs: "2%", sm: "1%", md: 0, lg: 0 },
          paddingRight: { xs: "2%", sm: "1%", md: 0, lg: 0 },
          color: "#153A5F",
          fontFamily: "'Mont-Bold', sans-serif",
          transition: "opacity 1s ease-in-out",
          opacity: isVisible ? 1 : 0,
        }}
      >
        Let's Grow Your Business Together
      </Typography>
      <Typography
        sx={{

          textAlign: "center",
          color: "#153A5F",
          fontSize: "1em",
          lineHeight: '25px',
          mt: { lg: '1.2rem', xl: '1.3rem' },
          paddingLeft: { xs: "6%", sm: "6%", md: 0, lg: 0 },
          paddingRight: { xs: "6%", sm: "6%", md: 0, lg: 0 },
          fontFamily: "'Mont-Regular', sans-serif",
          fontWeight: '300',
          transition: "opacity 1s ease-in-out",
          opacity: isVisible ? 1 : 0,
          fontWeight: 600,
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
          gap: "10px",
          mt: '-2%'
        }}
      >
        <Box sx={{ mt: '3%' }}>
          <ButtonBusiness
            text="Startups"
            background={activeButton === "Startups" ? "#153A5F" : "#f1f2f3"}
            color={activeButton === "Startups" ? "white" : "#54595F"}
            onClick={() => handleButtonClick("Startups")}
            paddingLeft="85px"
            paddingRight="85px"
            paddingTop="13px"
            paddingBottom="13px"
            fontSize="16px"
          />
          <ButtonBusiness
            text="SMEs"
            background={activeButton === "SMEs" ? "#153A5F" : "#f1f2f3"}
            color={activeButton === "SMEs" ? "white" : "#54595F"}
            onClick={() => handleButtonClick("SMEs")}
            paddingLeft="101px"
            paddingRight="101px"
            paddingTop="13px"
            paddingBottom="13px"
            fontSize="16px"
            prSM="99.5px"
            plSM="99.5px"
          />
          <ButtonBusiness
            text="Enterprises"
            background={activeButton === "Enterprises" ? "#153A5F" : "#f1f2f3"}
            color={activeButton === "Enterprises" ? "white" : "#54595F"}
            onClick={() => handleButtonClick("Enterprises")}
            paddingLeft="74px"
            paddingRight="74px"
            paddingTop="13px"
            paddingBottom="13px"
            fontSize="16px"
          />
        </Box>

        <Box sx={{ width: { xs: "90%", sm: "80%", md: "70%", lg: "62%", xl: '47%' } }}>
          {activeButton === "Startups" && <BusinessCard
            fontSize={"12px"} mb={{ xs: "-5%", sm: "-5%", md: "-12%", lg: "-8%" }}
            onClick={onClick}
            data={businessDetail[0]}
            activeButton={activeButton}
          />}
          {activeButton === "SMEs" && <BusinessCard
            fontSize={"20px"}
            mb={{ xs: "5%", sm: "15%", md: "2%", lg: "2%" }}
            onClick={onClick}
            data={businessDetail[1]}
            activeButton={activeButton}
          />}
          {activeButton === "Enterprises" && (<BusinessCard
            fontSize={"20px"}
            mb={{ xs: "5%", sm: "15%", md: "-3%", lg: "3%" }}
            onClick={onClick}
            data={businessDetail[2]}
            activeButton={activeButton}
          />)}
        </Box>
      </Box>
    </Box>
  );
}

export default BusinessTogether;
