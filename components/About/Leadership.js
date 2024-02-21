import React from "react";
import { Box, Typography } from "@mui/material";
import Ceo from "./Ceo";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
function Leadership() {
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
        background: "#F8F8F8",
        backgroundImage: `url('https://techtiz.co/wp-content/uploads/2023/10/Sqr-Light-Outline.svg')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "1800px",
        paddingTop: "10%",
        paddingBottom: "10%",
      }}
    >
      <Typography
        sx={{
          color: "#153A5F",
          fontWeight: "700",
          fontSize: "2.7em",
          textAlign: "center",
          transition: "opacity 1s ease-in-out",
          opacity: isVisible ? 1 : 0,
        }}
      >
        Our Leadership Team
      </Typography>
      <Box
        sx={{
          marginTop: "7%",
          display: "flex",
          justifyContent: "center",
          gap: "6%",
          flexWrap: "wrap",
        }}
      >
        <Link
          href="https://www.linkedin.com/in/mohsin-m-naeem/"
          style={{ textDecoration: "none" }}
        >
          <Ceo
            imageceo="https://techtiz.co/wp-content/uploads/2023/11/Mohsin-Naeem.webp"
            name="Mohsin Naeem"
            text="CEO"
          />
        </Link>
        <Link
          href="https://www.linkedin.com/in/adnan-naeem-442620130/"
          style={{ textDecoration: "none" }}
        >
          <Ceo
            imageceo="https://techtiz.co/wp-content/uploads/2023/11/Adnaan_Naeem.webp"
            name="Adnan Naeem"
            text="CTO"
          />
        </Link>
        
          <Ceo
            imageceo="https://techtiz.co/wp-content/uploads/2023/11/Ghazanfar-Ali.webp"
            name="Ghazanfar Ali"
            text="Business Development Executive"
          />
      
      </Box>
    </Box>
  );
}

export default Leadership;
