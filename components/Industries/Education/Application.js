// pages/application.js
import React from "react";
import { Box, Card, CardContent, Typography, Button } from "@mui/material";
import { IoMdArrowRoundForward } from "react-icons/io";
import List from "../List";
import { useEffect, useRef, useState } from "react";
function Application({ onPress }) {
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
          width: { xs: "21rem", sm: "35rem", md: "30rem", lg: "35rem" },
          height: { xs: "30rem", sm: "29rem", md: "30rem", lg: "30rem" },
          borderRadius: "10px",
          background: "#F8F8F8",
          boxShadow: "none",
          mt: "1.5%",
        }}
      >
        <CardContent sx={{ display: "flex", flexDirection: "column" }}>
          <Typography
            sx={{
              color: "#6EC1E4",
              fontSize: "1.3em",
              fontWeight: "700",
              borderLeft: "8px solid #18B0E6",
              height: "18px",
              mt: "2%",
              ml: "1%",
              pl: "10px",
              paddingTop: "-5%",
              lineHeight: "18px",
              transition: "opacity 1s ease-in-out",
              opacity: isVisible ? 1 : 0,
              fontFamily:"Mont-Bold, Sans-serif",
            }}
          >
            What we offer
          </Typography>
          <Typography
            sx={{
              color: "#153A5F",
              fontSize: "21px",
              fontWeight: "600",
              mt: "3%",
              ml: "1%",
              transition: "opacity 1s ease-in-out",
              fontFamily:"Mont-Bold, Sans-serif",
              opacity: isVisible ? 1 : 0,
            }}
          >
            Design, development, and implementation of educational applications
          </Typography>
          <Box sx={{ marginTop: "3%", ml: "6%" }}>
            <List listone="Interactive applications" textColor="#153A5F" />
            <List listone="Custom-built" textColor="#153A5F" />
            <List
              listone="Applications for the distribution of educational  content"
              textColor="#153A5F"
            />
            <List listone="Learning Management Software" textColor="#153A5F" />
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
              borderRadius: "5px",
              textTransform: "none",
              fontSize: "16px",
              fontWeight: "400",
              background: "#18B0E6",
              boxShadow: "none",
              color: "white",
              border: "1px solid #18B0E6",
              fontFamily:"Mont-Regular, Sans-serif",
              "&:hover": {
                backgroundColor: "#153A5F",
                border: "1px solid #153A5F",
              },
            }}
          >
            Discuss now &nbsp; &nbsp;
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Application;
