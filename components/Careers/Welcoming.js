import { Box, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import Image from 'next/image';

function Welcoming() {
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
      sx={{ marginTop: "0%", background: "#F8F8F8", paddingBottom: "8%" }}
    >
      <Typography
        sx={{
          textAlign: "center",
          paddingTop: "7%",
          color: "#153A5F",
          fontSize: { xs: "1.2em", sm: "1.9em", md: "2.2em" },
          fontWeight: "600",
          pl: 3,
          pr: 3,
          transition: "opacity 1s ease-in-out",
          opacity: isVisible ? 1 : 0,
          fontFamily: "'Mont-Bold', sans-serif"
        }}
      >
        Welcoming Diversity and Competency with Open Arms
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "2%",
          marginTop: "3%",
        }}
      >
        <Box
          sx={{ width: { xs: "21em", sm: "28em", md: "29em", lg: "32rem" } }}
        >
          <Image
            src={require('../../assets/carear-welcoming-team.webp')}
            alt=""
            style={{ width: "100%" }}
          />
        </Box>
        <Box
          sx={{
            width: { xs: "21em", sm: "30em", md: "30em", lg: "35rem" },
            marginTop: "1.5rem"
          }}
        >
          <Typography sx={{
            color: "#000000",
            pl: 3,
            pr: 3,
            fontSize: { xs: "0.9em", sm: "1em" },
            fontWeight: "600",
            fontFamily: "'Mont-Regular', sans-serif",
          }}>
            At TechTiz, we believe our employees are our greatest asset.
          </Typography>
          <Typography
            sx={{
              color: "#153A5F",
              fontSize: { xs: "1em", sm: "1em" },
              fontWeight: 600,
              pl: 3,
              pr: 3,
              marginTop: "5%",
              fontFamily: "'Mont-Regular', sans-serif",
              color: "#153a5f"
            }}
          >
            We strive to provide opportunities to young and rising tech talent
            and enable them to grow by learning expert skills with experienced
            Software developers. Having web and mobile application developers
            from diverse backgrounds enables us to tap into a vast array of
            ideas that lead to the creation of innovative digital products for
            our clients.TechTiz appreciates highly skilled professionals
            looking to give their best for the benefit of the company and
            provides performance-based bonuses regardless of gender, color,
            religion, or age.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
export default Welcoming;
