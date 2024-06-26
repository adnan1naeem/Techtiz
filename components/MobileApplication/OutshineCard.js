import { Box, Typography } from "@mui/material";
import React from "react";
import ServicesCard from "../Website/Services/ServicesCard";
import { useEffect, useRef, useState } from "react";
function OutshineCard() {
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
    <Box ref={weeksRef} sx={{ background: "#F8F8F8", marginTop: "3%", margin: "10px" }}>
      <Typography
        sx={{
          color: "#153A5F",
          fontSize: { xs: "1.5em", sm: "1.6em", xl: "1.6em" },
          marginLeft: "2%",
          marginRight: "2%",
          textAlign: "center",
          fontWeight: "600",
          paddingTop: "4%",
          transition: "opacity 1s ease-in-out",
          opacity: isVisible ? 1 : 0,
          fontFamily: "Mont-Bold, Sans-serif",
        }}
      >
        Outshine Your Competition With the Right Mobile App
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: { xs: "2%", lg: "1.5%" },
          flexWrap: "wrap",
          marginTop: "2%",
          paddingBottom: "6%",
          '@media screen and (min-width: 1400px)': {
            maxWidth: "1200px",
            margin: "0 auto",
            marginTop: "2%",
          }

        }}
      >
        <ServicesCard
          image={require('../../assets/svg/mobile-asset-16.svg')}
          heading="MVP Software for Startups"
          text="MVP software is the launchpad for your startup dream. MVP success helps you make the most of your users’ smartphone usage to snowball growth and success."
        />
        <ServicesCard
          image={require('../../assets/svg/mobile-asset-15.svg')}
          heading="Data Collection & Process"
          text="An intuitively built mobile app helps your business take data-backed decisions towards success while developing scalable solutions for improved user experience."
        />
        <ServicesCard
          image={require('../../assets/svg/mobile-asset-14.svg')}
          heading="Brand Loyalty"
          text="A user-friendly mobile app drives repeat purchases by providing a direct, personalized experience tailored to your users’ preferences."
        />
        <ServicesCard
          image={require('../../assets/svg/mobile-asset-13.svg')}
          heading="Improved Sales"
          text="With the right app, you’ll get a better user experience, gain access to the right audience, and increase sales"
        />
        <ServicesCard
          image={require('../../assets/svg/mobile-asset-12.svg')}
          heading="Enhanced Security Measures"
          text="We implement robust security features to protect user data and maintain trust."
        />
        <ServicesCard
          image={require('../../assets/svg/mobile-asset-11.svg')}
          heading="App Store Optimization (ASO)"
          text="We optimize your app for higher visibility on app stores like Google Play and Apple App Store."
        />
      </Box>
    </Box>
  );
}

export default OutshineCard;
