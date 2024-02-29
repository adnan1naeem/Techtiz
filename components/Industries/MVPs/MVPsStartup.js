// components/MVPsStartup.js
import React from "react";
import { Box, Card, CardContent, Typography, Button } from "@mui/material";
import { IoMdArrowRoundForward } from "react-icons/io";
import List from "../List";
import { useEffect, useRef, useState } from "react";
function MVPsStartup({ onPress }) {
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
          width: { xs: "22rem", sm: "32rem", md: "23rem", lg: "33rem" },
          height: { xs: "38rem", sm: "39rem", md: "38rem", lg: "34rem" },
          background: "none",
          boxShadow: "none",
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
              fontFamily: "'Mont-Bold', sans-serif"
            }}
          >
            MVPs for Startups
          </Typography>
          <Typography
            sx={{
              color: "#6EC1E4",
              fontSize: "1.1em",
              fontWeight: "300",
              marginTop: "1%",
              transition: "opacity 1s ease-in-out",
              opacity: isVisible ? 1 : 0,
              fontFamily: "'Mont-Regular', sans-serif"
            }}
          >
            We empower startups with MVPs specifically tailored to redefine
            their digital identity and establish dominance.
          </Typography>
          <Typography
            sx={{
              color: "#6EC1E4",
              fontSize: "1.2em",
              fontWeight: "700",
              marginTop: "4%",
              borderLeft: "9px solid #18B0E6",
              height: "16px",
              paddingLeft: "10px",
              lineHeight: "16px",
              transition: "opacity 1s ease-in-out",
              opacity: isVisible ? 1 : 0,
              fontFamily: "'Mont-Bold', sans-serif"

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
              transition: "opacity 1ss ease-in-out",
              opacity: isVisible ? 1 : 0,
              fontFamily: "'Mont-Bold', sans-serif"
            }}
          >
            Development of software for management distribution
          </Typography>
          <Box sx={{ marginTop: "3%" }}>
            <List
              listone="MVP software to test the idea behind new product"
              textColor="#F8F8F8"
            />
            <List
              listone="Improved market research and competitor analysis"
              textColor="#F8F8F8"
            />
            <List
              listone="Evaluation of customer feedback through MVPs"
              textColor="#F8F8F8"
            />
          </Box>
          <Button
            variant="contained"
            endIcon={<IoMdArrowRoundForward />}
            onClick={onPress}
            sx={{
              marginTop: "8%",
              padding: { xs: "3%", sm: "2%", md: "1.5%", lg: "2%" },
              width: { xs: "100%", sm: "80%", md: "60%", lg: "40%" },
              paddingLeft: "1%",
              paddingRight: "1%",
              borderRadius: '2px',
              textTransform: "none",
              fontSize: "16px",
              fontWeight: "400",
              background: "none",
              boxShadow: "none",
              color: "F8F8F8",
             
              border: "1px solid #18B0E6",
              "&:hover": {
                backgroundColor: "#6EC1E4",
                color: "#595959",
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

export default MVPsStartup;
