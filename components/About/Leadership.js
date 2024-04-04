import React from "react";
import { Box, Button, Typography } from "@mui/material";
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

        position: "relative",
        paddingTop: "8%",
        paddingBottom: "3%",
        "&::before": {
          content: "''",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: '#dedede',
          backgroundImage: `url('https://techtiz.co/wp-content/uploads/2023/10/Sqr-Light-Outline.svg')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          opacity: isVisible ? 0.15 : 1, // Adjust the opacity value as needed
        },
      }}
    >
      <Typography
        sx={{
          color: "#0d263f",
          fontWeight: "700",
          fontFamily: "'Mont-Bold', sans-serif",
          fontSize: { xs: "1.6em", md: "2em", lg: "2.7em" },
          textAlign: "center",
          transition: "opacity 1s ease-in-out",
          opacity: isVisible ? 1 : 0,
        }}
      >
        Our Leadership Team
      </Typography>
      <Box
        sx={{
          marginTop: "4%",
          display: "flex",
          justifyContent: "center",
          gap: { lg: "6%", xl: '4%' },
          flexWrap: "wrap",
        }}
      >
        <Button disableRipple sx={{
          textDecoration: "none", ":hover": { backgroundColor: "transparent" },
        }}>
          <Link
            href="https://www.linkedin.com/in/mohsin-m-naeem/">
            <Ceo
              imageceo="https://techtiz.co/wp-content/uploads/2023/11/Mohsin-Naeem.webp"
              name="Mohsin Naeem"
              text="CEO"
            />
          </Link>
        </Button>
        <Button disableRipple sx={{ textDecoration: "none", ":hover": { backgroundColor: "transparent" } }}>
          <Link
            href="https://www.linkedin.com/in/adnan-naeem-442620130/"
          >
            <Ceo
              mt={"-40%"}
              imageceo="https://techtiz.co/wp-content/uploads/2023/11/Adnaan_Naeem.webp"
              name="Adnan Naeem"
              text="CTO"
            />
          </Link>
        </Button>
        {/* <Ceo
            imageceo="https://techtiz.co/wp-content/uploads/2023/11/Ghazanfar-Ali.webp"
            name="Ghazanfar Ali"
            text="Business Development Executive"
          />
       */}
      </Box>
    </Box>
  );
}

export default Leadership;
