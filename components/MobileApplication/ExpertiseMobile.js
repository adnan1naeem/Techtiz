import { Box, Button, Typography } from "@mui/material";
import { IoMdArrowRoundForward } from "react-icons/io";
import { useEffect, useRef, useState } from "react";
function ExpertiseMobile({ title1, title2, title3, des, onPress }) {
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
        ml: {xs: "3%", sm: 0},
        mr: {xs: "3%", sm: 0},
        display: "flex",
        flexDirection: "column",
        width: { xs: "21em", sm: "33em", md: "35em", lg: "26em", xl: "26em" },
      }}
    >
      <Typography
        sx={{
          color: "#153A5F",
          fontSize: {xs: "1.5em",sm:"2.2em"},
          fontWeight: "600",
          transition: "opacity 1s ease-in-out",
          opacity: isVisible ? 1 : 0,
          fontFamily:"Mont-Bold, Sans-serif",
        }}
      >
        {title1}
      </Typography>
      <Typography
        sx={{
          color: "#153A5F",
          fontSize: {xs: "1.5em",sm:"2.2em"},
          fontWeight: "600",
          transition: "opacity 1s ease-in-out",
          opacity: isVisible ? 1 : 0,
          fontFamily:"Mont-Bold, Sans-serif",
        }}
      >
        {title2}
      </Typography>
      <Typography
        sx={{
          color: "#153A5F",
          fontSize: {xs: "1.5em",sm:"2.2em"},
          fontWeight: "600",
          transition: "opacity 1s ease-in-out",
          opacity: isVisible ? 1 : 0,
          fontFamily:"Mont-Bold, Sans-serif",
        }}
      >
        {title3}
      </Typography>
      <Typography
        sx={{
          color: "#153A5F",
          fontSize: "1.1em",
          fontWeight: 600,
          marginTop: "3%",
          fontFamily:"Mont-Regular, Sans-serif",
        }}
      >
        {des}
      </Typography>
      <Button
        variant="contained"
        endIcon={<IoMdArrowRoundForward />}
        onClick={onPress}s
        sx={{
          marginTop: "5%",
          padding: { xs: "3%", sm: "2%", md: "2.3%", lg: "2.3%" },
          width: { xs: "20em", sm: "18em", md: "16em", lg: "17em" },
          paddingLeft: "2%",
          paddingRight: "2%",
          borderRadius: 1,
          textTransform: "none",
          fontSize: "16px",
          fontWeight: "400",
          background: "#18B0E6",
          fontFamily:"Mont-Regular, Sans-serif",
          boxShadow:'none',
          "&:hover": {
            backgroundColor: "#153A5F",
          },
        }}
      >
        Schedule a Meeting &nbsp; &nbsp;
      </Button>
    </Box>
  );
}

export default ExpertiseMobile;
