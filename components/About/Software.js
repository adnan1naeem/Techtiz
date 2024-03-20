import React from "react";
import { Box, Card, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
function Software() {
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
        backgroundImage: `url('https://techtiz.co/wp-content/uploads/2023/10/bg-pat.svg')`, // Set the background image URL
        backgroundRepeat: 'repeat', // Set the background repeat property
        backgroundSize: '400px 800px', // Set the width of the background image
        marginTop: "5%",
        paddingTop: { xs: "28%", sm: '20%', },
        paddingBottom: { xs: '24%', sm: "20%", },
        backgroundPosition: 'center', // Center the background image
        backgroundColor: '#153A5F',
        width: '100%'

      }}
    >
      <Card sx={{
        background: '#153A5FA3',
        paddingTop: { xs: "28%", sm: '24%', md: '9%', lg: '3%', xl: '2%' },
        paddingBottom: { xs: '24%', sm: "20%", md: '9%', lg: '3%', xl: '2%' },
        ml: { xs: '5%', sm: '5%', lg: "10%", xl: '15%' },
        mr: { xs: '5%', sm: '5%', lg: "10%", xl: '15%' },
        boxShadow: 'none'
      }}>
        <Typography
          sx={{
            color: "#FFFFFF",
            fontSize: { xs: "1.3em", sm: '2em', md: "2.3em" },
            textAlign: "center",
            fontWeight: "blod",
            transition: "opacity 1s ease-in-out",
            opacity: isVisible ? 1 : 0,
            fontFamily: "'Mont-Bold', sans-serif"

          }}
        >
          We Do More Than Just Build Software
        </Typography>
        <Typography
          sx={{
            color: "#FFFFFF",
            fontSize: { xs: "1em", sm: '1em', md: "1.1em" },
            textAlign: "center",
            fontWeight: 400,
            marginTop: "2.5%",
            fontFamily: "'Mont-Regular', sans-serif"
          }}
        >
          Techtiz offers more than software development services. With our
          expertise in software design and development, we also
          offer cost-effective staffing resources, business consulting, and
          training.
        </Typography>
        <Typography
          sx={{
            color: "#FFFFFF",
            fontSize: "1.1em",
            textAlign: "center",
            fontWeight: "400",
            marginTop: "2%",
            fontFamily: "'Mont-Regular', sans-serif"
          }}
        >
          As a leading software agency, we have a proven track record of
          successfully helping diverse businesses embark on their
          transformative journey, with on-time enterprise-level
          implementation that requires minimal effort.
        </Typography>
      </Card>
    </Box>
  );
}

export default Software;
