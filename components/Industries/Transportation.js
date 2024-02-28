import React from "react";
import { Box, Card, CardContent, Typography, Button } from "@mui/material";
import { IoMdArrowRoundForward } from "react-icons/io";
import List from "./List";
import { useEffect, useRef, useState } from "react";

function Transportation({ onPress }) {
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
      sx={{ display: "flex", justifyContent: "center", alignContent: "center" }}
    >
      <Card
        sx={{
          width: { xs: "22rem", sm: "23rem", md: "23rem", lg: "33rem" },
          height: { xs: "38rem", sm: "39xrem", md: "38rem", lg: "38rem" },
          background: "none",
          boxShadow: "none",
          '@media screen and (min-width: 1700px)': {
            width:'35rem'           
             }
        }}
      >
        <CardContent sx={{ display: "flex", flexDirection: "column" }}>
          <Typography
            sx={{
              color: "#F8F8F8",
              fontSize: "2.2em",
              fontWeight: "600",
              transition: "opacity 1s ease-in-out",
              opacity: isVisible ? 1 : 0,
              fontFamily:"Mont-Bold, Sans-serif",
            }}
          >
            Transportation and Logistics
          </Typography>
          <Typography
            sx={{
              color: "#6EC1E4",
              fontSize: "1.1em",
              fontWeight: "300",
              marginTop: "2%",
              fontFamily:"Mont-Regular, Sans-serif",
            }}
          >
            Convenient logistics and transportation solutions that save cost
          </Typography>
          <Typography
            sx={{
              color: "#6EC1E4",
              fontSize: "1.3em",
              fontWeight: "bold",
              marginTop: "7%",
              borderLeft: "10px solid #18B0E6",
              height: "18px",
              lineHeight: "18px",
              paddingLeft: "10px",
              paddingTop: "-10px%",
              transition: "opacity 1s ease-in-out",
              opacity: isVisible ? 1 : 0,
              fontFamily:"Mont-Bold, Sans-serif",
            }}
          >
            What we offer
          </Typography>
          <Typography
            sx={{
              color: "#F8F8F8",
              fontSize: "21px",
              fontWeight: "600",
              lineHeight: "29px",
              marginTop: "5%",
              transition: "opacity 1s ease-in-out",
              opacity: isVisible ? 1 : 0,
              fontFamily:"Mont-Bold, Sans-serif",
            }}
          >
            Development of software for management distribution
          </Typography>
          <Box sx={{ marginTop: "3%", paddingLeft: "5%" }}>
            <List listone="Inventory management systems" textColor="#F8F8F8" />
            <List listone="Delivery tracking software" textColor="#F8F8F8" />
            <List
              listone="User-friendly and efficient mobile applications"
              textColor="#F8F8F8"
            />
            <List
              listone="Validation and standardization of data"
              textColor="#F8F8F8"
            />
          </Box>
          <Button
            variant="contained"
            endIcon={<IoMdArrowRoundForward />}
            onClick={onPress}
            sx={{
              marginTop: "8%",

              padding: { xs: "3%", sm: "2%", md: "1.5%", lg: "1.8%" },
              width: { xs: "100%", sm: "80%", md: "60%", lg: "40%" },
              paddingLeft: "1%",
              paddingRight: "1%",
              borderRadius: 1,
              textTransform: "none",
              fontSize: "16px",
              fontWeight: "400",
              background: "none",
              boxShadow: "none",
              color: "#F8F8F8",
              border: "1px solid #18B0E6",
              "&:hover": {
                backgroundColor: "#6EC1E4",
                color: "#69727d",
              },
            }}
          >
            Discuss Now &nbsp; &nbsp;
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Transportation;
