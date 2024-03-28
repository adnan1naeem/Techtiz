import { Box, Typography } from "@mui/material";
import React from "react";
import { useEffect, useRef, useState } from "react";

function QACard({ title, text, image, lg, top, ml, lgtext }) {
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
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        gap: "6%",
        marginTop: "4%",
        flexWrap: "wrap",
      }}
      ref={weeksRef}
    >
      <Box
        sx={{
          width: { xs: "21rem", sm: "32em", md: "20em", lg: lgtext },
          marginTop: "5%",
          textAlign: "left",

        }}
      >
        <Typography
          sx={{
            color: "#153A5F",
            fontSize: "1.5em",
            fontWeight: "600",
            transition: "opacity 1s ease-in-out",
            opacity: isVisible ? 1 : 0,
            fontFamily: "Mont-Bold, Sans-serif",
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            color: "#153A5F",
            fontSize: "1em",
            marginTop: "3%",
            fontWeight: 700,
            fontFamily: "Mont-Regular, Sans-serif",
          }}
        >
          {text}
        </Typography>
      </Box>
      <Box sx={{
        width: { xs: "18rem", sm: "18em", md: "16em", lg: lg }, marginTop: "3rem", marginLeft: ml
      }}>
        <img src={image} alt="" style={{ width: "100%", marginTop: top }} />
      </Box>
    </Box>
  );
}

export default QACard;
