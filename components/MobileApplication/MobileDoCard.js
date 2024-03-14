import { Box, Card, CardContent, Typography } from "@mui/material";
import React from "react";
import { useEffect, useRef, useState } from "react";

function MobileDoCard({ background, title, des }) {
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
      ref={weeksRef}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: { xs: "90%", sm: "16rem", md: "16rem", lg: "17rem" },
        height: { xs: "auto", sm: "14rem", md: "14rem", lg: "13rem" },
        marginTop: {xs: "5%", sm:"5%"},
      }}
    >
      <Card sx={{
        width: '100%',
        height: '100%',
        background: background,
        borderRadius: "20px",
        boxShadow: "none",
      }}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "3%",
          }}
        >
          <Typography
            sx={{
              fontSize: {xs: "1.3em",sm:"1.5em"},
              fontWeight: "600",
              color: "#153A5F",
              lineHeight: "30px",
              transition: "opacity 1s ease-in-out",
              opacity: isVisible ? 1 : 0,
              fontFamily: "Mont-Bold, Sans-serif",
            }}
          >
            {title}
          </Typography>
          <Typography
            sx={{
              fontSize: "15px",
              fontWeight: 600,
              color: "#54595F",
              lineHeight: "20px",
              marginTop: "9%",
              fontFamily: "Mont-Regular, Sans-serif",
            }}
          >
            {des}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

export default MobileDoCard;
