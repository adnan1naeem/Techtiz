import { Box, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
function Hiring() {
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
        marginTop: "0%",
        pl: 3,
        pr: 3,
        background: "#F8F8F8",
        paddingBottom: "8%"
      }}
    >
      <Typography
        sx={{
          textAlign: "center",
          paddingTop: "7%",
          color: "#153A5F",
          fontSize: { xs: "1.9em", md: "2.2em" },
          fontWeight: "600",
          transition: "opacity 1s ease-in-out",
          opacity: isVisible ? 1 : 0,
          fontFamily: "'Mont-Bold', sans-serif",
          lineHeight: "30px"
        }}
      >
        Techtiz Hiring Process
      </Typography>
      <Typography
        sx={{
          textAlign: "center",
          color: "#153A5F",
          fontSize: "1em",
          fontWeight: "600",
          marginTop: "2%",
          transition: "opacity 1s ease-in-out",
          opacity: isVisible ? 1 : 0,
          fontFamily: "'Mont-Regular', sans-serif",
        }}
      >
        Techtiz hires on the basis of skills, we need people who can be
        efficient, vigilant and on top of their game.
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "3%",
          marginTop: "2%",
        }}
      >
        <Box
          sx={{
            width: { xs: "21em", sm: "35em", md: "19em", lg: "20rem" },
            marginTop: { xs: "6%", lg: "14%" }
          }}
        >
          <Typography
            sx={{
              color: "#18B0E6",
              fontSize: { xs: "1.7em", md: "2em" },
              fontWeight: "600",
              textAlign: { xs: "center", sm: "left" },
              transition: "opacity 1s ease-in-out",
              opacity: isVisible ? 1 : 0,
              fontFamily: "'Mont-Bold', sans-serif"
            }}
          >
            Hiring Funnel
          </Typography>
          <Typography
            sx={{
              color: "#153A5F",
              fontSize: { xs: "0.9em", md: "1.1em" },
              fontWeight: "600",
              marginTop: "3%",
              textAlign: { xs: "center", sm: "left" },
              fontFamily: "'Mont-Regular', sans-serif",
            }}
          >
            In order to put together a team of highly skilled software
            developers, TechTiz follows a process starting with interactive
            interviews to understand your true potential.
          </Typography>
        </Box>
        <Box
          sx={{
            width: { xs: "22em", sm: "34em", md: "34em", lg: "43rem" },
            marginTop: { xs: "10%", sm: "10%", md: "5%", lg: "1%" },
          }}
        >
          <img
            src="https://techtiz.co/wp-content/uploads/2023/10/Hiring.webp"
            alt=""
            style={{ width: "100%" }}
          />
        </Box>
      </Box>
    </Box>
  );
}
export default Hiring;
