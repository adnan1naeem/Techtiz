import React from "react";
import { Box, Card, CardActions, CardContent, Typography } from "@mui/material";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useEffect, useRef, useState } from "react";

function DevelopmentCard({ background, title, Description, onClick }) {
  const [isHovered, setIsHovered] = useState(false);
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
    <Box ref={weeksRef} >
      <Card
        sx={{
          width: { xs: "23rem", sm: "25rem", md: "20rem", lg: "23rem", xl: "23rem" },
          height: { xs: "auto", sm: "22rem", md: "22rem", lg: "22rem", xl: "22rem" },
          borderRadius: "6px",
          background: background,
          transition: "transform 1s ease", // Adding transition for the transform property
          transform: isHovered ? "translateY(-12px)" : "translateY(0)",
          marginTop: { xs: "4%", sm: "4%", md: "6%", lg: "6%" },
          boxShadow: 'none',
          cursor: 'pointer'
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <CardContent sx={{ marginLeft: { xs: "1%", sm: "2%", md: "5%", lg: "5%" } }}>
          <Typography
            sx={{
              fontSize: '1.5em',
              fontWeight: 'bold',
              lineHeight: '30px',
              marginTop: { xs: "8%", sm: "8%", md: "7%", lg: "7%" },
              color: "#FFFFFF",
              fontFamily: "'Mont-Bold', sans-serif",
              transition: "opacity 1s ease-in-out",

              opacity: isVisible ? 1 : 0,
            }}
            gutterBottom
          >
            {title}
          </Typography>
          <Typography
            sx={{
              fontSize: "1em",
              fontWeight: 600,
              marginTop: { xs: "14%", sm: "14%", md: "15%", lg: "15%" },
              color: "#FFFFFF",
              fontFamily: "'Mont-Regular', sans-serif",
              lineHeight: '25px',
              height: "9rem",
              transition: "opacity 1s ease-in-out",
              opacity: isVisible ? 1 : 0,

            }}
          >
            {Description}
          </Typography>
          <CardActions
            style={{ display: "flex", justifyContent: "space-between" }}
            onClick={onClick}
          >
            <Typography
              sx={{
                fontSize: "15px",
                fontWeight: '700',
                color: "#FFFFFF",
                fontFamily: "'Mont-Regular', sans-serif",
                transition: "opacity 1s ease-in-out",
                opacity: isVisible ? 1 : 0,

              }}
            >
              GET STARTED
            </Typography>
            <IoIosArrowRoundForward
              style={{
                marginTop: "-1%",
                fontSize: "35px",
                color: "#FFFFFF",
                fontWeight: "100",
                transform: "rotate(-40deg)",
                transition: "opacity 1s ease-in-out",
                opacity: isVisible ? 1 : 0,
              }}
            />
          </CardActions>
        </CardContent>
      </Card>
    </Box>
  );
}

export default DevelopmentCard;
