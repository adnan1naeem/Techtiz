import React from "react";
import { Box, Typography } from "@mui/material";
import CoreCard from "./CoreCard";
import { useEffect, useRef, useState } from "react";
function Core() {
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

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 700);

    return () => clearTimeout(timer);
  }, []);
  return (
    <Box
      ref={weeksRef}
      sx={{
        marginTop: { xs: "23%", sm: '17%', md: '7%', lg: '7%' },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",

      }}
    >
      <Typography
        sx={{
          color: "#153A5F",
          fontSize: { xs: "27.2px", sm: '32px', md: "2.7em" },
          fontWeight: "bold",
          transition: "opacity 1s ease-in-out",
          opacity: isVisible ? 1 : 0,
          fontFamily: "'Mont-Bold', sans-serif"
        }}
      >
        Our Core Values
      </Typography>
      <Typography
        sx={{
          color: "#153A5F",
          fontSize: "1.1em",
          fontSize: { xs: "0.9em", sm: "1.1em" },
          pl: { xs: '3%', sm: '3%', md: "0%" },
          pr: { xs: '3%', sm: '3%', md: "0%" },
          fontWeight: 600,
          textAlign: "center",
          mt: '7px',
          transition: "opacity 1s ease-in-out",
          opacity: isVisible ? 1 : 0,
          fontFamily: "'Mont-Regular', sans-serif"
        }}
      >
        We are thorough professionals driven by a strong value system and a
        mission to <br /> create sustainable solutions through continuous
        learning and adaptation.
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          width: { xs: "100%", sm: "100%", md: "100%", lg: "100%", xl: "75%" },
          gap: "1.9%",
          mt: "2%",
        }}

      >
        <CoreCard
          image={require("../../assets/about-badge.svg")}
          heading="Quality"
          bg="#18B0E6"
          para="Our work speaks for itself through the quality we deliver, within the given timescales and budgets."
        />
        <CoreCard
          image={require("../../assets/about-creative.svg")}
          heading="Creativity"
          bg="#153A5F"
          para="Creativity is the fuel our company runs on. We have fostered a culture that appreciates out-of-the-box thinking and innovative ideas."
        />
        <CoreCard
          image={require("../../assets/svg/about-privacy.svg")}

          heading="Privacy"
          bg="#18B0E6"
          para="When we partner with your business, we ensure that we safeguard your confidential information and provide the maximum privacy and security."
        />
        <CoreCard
          image={require("../../assets/svg/about-transparency.svg")}
          heading="Transparency"
          bg="#153A5F"
          para="We believe in open and honest communication with our clients, keeping them updated every step of the product lifecycle while ensuring complete transparency."
        />
        <CoreCard
          image={require("../../assets/svg/about-deal.svg")}
          heading="Collaboration"
          bg="#18B0E6"
          para="Great ideas emerge through collaboration and teamwork. All our employees are team players who bring their own unique blend of creativity and inspiration to the table."
        />
      </Box>
    </Box>
  );
}

export default Core;
