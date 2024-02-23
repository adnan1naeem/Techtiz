import React from "react";
import { Box, Card, CardActions, CardContent, Typography } from "@mui/material";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useEffect, useRef, useState } from "react";

function DevelopmentCard({ background, title, Description }) {
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
    <Box   ref={weeksRef} >
      <Card
        sx={{
          width: { xs: "21rem", sm: "22rem", md: "22em", lg: "23rem" },
          height: "23rem",
          borderRadius: "6px",
          background: background,
          transition: "transform 1s ease", // Adding transition for the transform property
          transform: isHovered ? "translateY(-12px)" : "translateY(0)",
          marginTop: "6%",
          boxShadow:'none'
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <CardContent style={{ marginLeft: "5%" }}>
          <Typography
            sx={{
              fontSize: '1.5em',
              fontWeight: 'bold',
              lineHeight:'50px',
              marginTop: "13%",
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
              fontSize: "1rem",
              fontWeight: 100,
              marginTop: "18%",
              color: "#FFFFFF",
              fontFamily: "'Mont-Regular', sans-serif",
              lineHeight:'25px',
              height: "9rem",
              transition: "opacity 1s ease-in-out",
          opacity: isVisible ? 1 : 0,
            }}
          >
            {Description}
          </Typography>
          <CardActions
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <Typography
              sx={{
                fontSize: "15px",
                fontWeight: '300',
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
