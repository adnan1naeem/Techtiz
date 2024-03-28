import { Box, Typography } from "@mui/material";
import React from "react";
import ServicesCard from "../Website/Services/ServicesCard";
import { useEffect, useRef, useState } from "react";
function DoQA() {
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
    <Box ref={weeksRef} sx={{ background: "#F8F8F8" }}>
      <Typography
        sx={{
          color: "#153A5F",
          fontSize: { xs: "1.9em", md: "2.8em" },
          textAlign: "center",
          fontWeight: "600",
          paddingTop: "2%",
          transition: "opacity 1s ease-in-out",
          opacity: isVisible ? 1 : 0,
          fontFamily: "Mont-Bold, Sans-serif",
        }}
      >
        What We Do
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "1.6%",
          flexWrap: "wrap",
          marginTop: "1%",
          paddingBottom: "6%",

          "@media screen and (min-width: 1500px)": {
            // Adjust the minimum width as per your requirement
            maxWidth: "1200px",
            margin: "0 auto",
          },
          "@media screen and (min-width: 1200px) and (max-width: 1300px)": {
            maxWidth: "1200px",
            margin: "0 auto",
          },
        }}
      >
        <ServicesCard
          image="https://techtiz.co/wp-content/uploads/2023/10/Asset-10.svg"
          heading="Unit Testing"
          text="We break down your complex digital product into separate functionalities and test each one individually to see if it works."
        />
        <ServicesCard
          image="https://techtiz.co/wp-content/uploads/2023/10/Asset-9.svg"
          heading="Behavior Testing"
          text="We test the overall functionality of your mobile or web application to ensure smooth operation"
        />
        <ServicesCard
          image="https://techtiz.co/wp-content/uploads/2023/10/Asset-8.svg"
          heading="Integration Testing"
          text="We test the compatibility of different units and functionalities with each other in your software product."
        />
        <ServicesCard
          image="https://techtiz.co/wp-content/uploads/2023/10/Asset-7.svg"
          heading="Regression Testing"
          text="We conduct regression testing to ensure that new code changes haven't adversely affected existing functionalities."
        />
        <ServicesCard
          image="https://techtiz.co/wp-content/uploads/2023/10/Asset-6.svg"
          heading="Performance Testing"
          text="Our team evaluates your application's performance under different conditions, such as heavy user loads or varying network speeds."
        />
        <ServicesCard
          image="https://techtiz.co/wp-content/uploads/2023/10/Asset-5.svg"
          heading="Security Testing"
          text="We assess your software product's security measures by simulating potential threats and vulnerabilities"
        />
      </Box>
    </Box>
  );
}

export default DoQA;
