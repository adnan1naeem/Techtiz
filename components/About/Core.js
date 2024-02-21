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
        marginTop: "7%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        
      }}
    >
      <Typography
        sx={{
          color: "#153A5F",
          fontSize: "2.7em",
          fontWeight: "700",
          transition: "opacity 1s ease-in-out",
          opacity: isVisible ? 1 : 0,
        }}
      >
        Our Core Values
      </Typography>
      <Typography
        sx={{
          color: "#153A5F",
          fontSize: "1.1em",
          fontWeight: "400",
          textAlign: "center",
          transition: "opacity 1s ease-in-out",
          opacity: isVisible ? 1 : 0,
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
          gap: "1.3%",
          mt: "1%",
        }}
      >
        <CoreCard
          image="https://techtiz.co/wp-content/uploads/2023/11/badge.svg"
          heading="Quality"
          bg="#18B0E6"
          para="Our work speaks for itself through the quality we deliver, within the given timescales and budgets."
        />
        <CoreCard
          image="https://techtiz.co/wp-content/uploads/2023/11/creative.svg"
          heading="Creativity"
          bg="#153A5F"
          para="Creativity is the fuel our company runs on. We have fostered a culture that appreciates out-of-the-box thinking and innovative ideas."
        />
        <CoreCard
          image="https://techtiz.co/wp-content/uploads/2023/11/privacy.svg"
          heading="Privacy"
          bg="#18B0E6"
          para="When we partner with your business, we ensure that we safeguard your confidential information and provide the maximum privacy and security."
        />
        <CoreCard
          image="https://techtiz.co/wp-content/uploads/2023/11/transparency.svg"
          heading="Transparency"
          bg="#153A5F"
          para="We believe in open and honest communication with our clients, keeping them updated every step of the product lifecycle while ensuring complete transparency."
        />
        <CoreCard
          image="https://techtiz.co/wp-content/uploads/2023/11/deal.svg"
          heading="Collaboration"
          bg="#18B0E6"
          para="Great ideas emerge through collaboration and teamwork. All our employees are team players who bring their own unique blend of creativity and inspiration to the table."
        />
      </Box>
    </Box>
  );
}

export default Core;
