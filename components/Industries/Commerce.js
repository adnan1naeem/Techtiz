import { Box, Typography } from "@mui/material";
import React from "react";
import CommerceRescourse from "./CommerceRescourse";
import { useEffect, useRef, useState } from "react";
function Commerce({ onPress }) {
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
    <Box sx={{ mt: "6%" }} ref={weeksRef}>
      <Typography
        sx={{
          textAlign: "center",
          color: "#153A5F",
          fontSize: { xs: "1.4em", sm: "1.9em", md: "2.2em" },
          fontWeight: "700",
          transition: "opacity 1s ease-in-out",
          opacity: isVisible ? 1 : 0,
          fontFamily: "'Mont-Bold', sans-serif",
        }}
      >
        E-Commerce
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
          lineHeight: "20px",
          fontFamily: "'Mont-Regular', sans-serif",
        }}
      >
        We implement intuitive ideas for e-commerce businesses, helping them
        <br />
        grab more sales
      </Typography>
      <Box>
        <CommerceRescourse onPress={onPress} />
      </Box>
    </Box>
  );
}
export default Commerce;
