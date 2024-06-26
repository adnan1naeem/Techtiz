// pages/education.js
import { Box, Typography } from "@mui/material";
import React from "react";
import Application from "../Education/Application";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
function Education({ onPress }) {
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
    <Box ref={weeksRef} sx={{ mt: "5%" }}>
      <Typography
        sx={{
          textAlign: "center",
          color: "#153A5F",
          fontSize: { xs: "1.4em", sm: "1.9em", md: "2.2em" },
          fontWeight: "700",
          transition: "opacity 1s ease-in-out",
          opacity: isVisible ? 1 : 0,
          fontFamily: "Mont-Bold, Sans-serif",
        }}
      >
        Education Sector
      </Typography>
      <Typography
        sx={{
          textAlign: "center",
          color: "#153A5F",
          fontSize: { xs: "0.9em", sm: "1.1em" },
          fontWeight: 600,
          mt: "5px",
          pl: 3,
          pr: 3,
          lineHeight: { xs: "20px", sm: "30px" },
          fontFamily: "Mont-Regular, Sans-serif",
          marginBottom: "1rem"
        }}
      >
        Digital learning is the new normal. We help to create value through
        digital learning. While creating <br /> intuitive learning applications,
        we consider the needs of teachers and students
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "2%",
          paddingTop: "2%",
        }}
      >
        <Application onPress={onPress} />
        <Box
          sx={{
            width: { xs: "90%", sm: "60%", md: "40%", lg: "38%", xl: "35%" },
            mt: { xs: "4%", md: '7%', lg: '1%', xl: '1%' },
            "@media screen and (min-width: 1200px) and (max-width: 1300px)": {
              width: "42%",
              mt: '2%'

            },
          }}
        >
          {/* Use next/image for image optimization */}
          <Image
            src={require('../../../assets/industries-education.webp')}
            alt=""
            style={{ width: "90%" }}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default Education;
