import { Box, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";

function CrossLine({title,des}) {
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
        width: { xs: "21em", sm: "33em", md: "35em", lg: "35em", xl: "40em" },
        borderBottom: "1px solid #18B0E6",
        paddingBottom: "7px",
        
      }}
    >
      <Typography
        sx={{ fontSize: "1.5em", color: "#153A5F", fontWeight: "600" ,marginTop:'4%',transition: "opacity 1s ease-in-out",
          opacity: isVisible ? 1 : 0,fontFamily:"Mont-Bold, Sans-serif",}}
      >
        {title}
      </Typography>
      <Typography
        sx={{
          fontSize: "16px",
          color: "#153A5F",
          fontWeight: 800,
          marginTop: "1%",
          fontFamily:"Mont-Regular, Sans-serif",
        }}
      >
       {des}
      </Typography>
    </Box>
  );
}

export default CrossLine;
