import { Box, Typography } from "@mui/material";
import MobileDoCard from "./MobileDoCard";
import { useEffect, useRef, useState } from "react";
function DoItMobile() {
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
        justifyContent: "center",
        marginTop: { md: "2%", lg: "3%", xl: "2%" },
      }}
    >
      <Typography
        sx={{
          textAlign: "center",
          fontSize: { xs: "25px", sm: "2.2em" },
          fontWeight: "600",
          color: "#153A5F",
          transition: "opacity 1s ease-in-out",
          opacity: isVisible ? 1 : 0,
          fontFamily: "Mont-Bold, Sans-serif",
          marginBottom: { xs: "5%", lg: 0 },
          marginTop: { xs: "4%", md: "2%", lg: 0 }
        }}
      >
        How we do it
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: { xs: "2%", sm: "3%", lg: "2%" },
          marginTop: { xs: '1%', sm: '-3%', md: '-3', lg: '-2%', xl: "-2%" },
        }}
      >
        <MobileDoCard
          background="#7A7A7A0A"
          title="Initial Consultation and Idea Refinement"
          des="We begin by understanding your app idea and business goals."
        />
        <MobileDoCard
          background="#7A7A7A0A"
          title="Design and Prototyping"
          des="Our designers create wireframes and interactive prototypes."
        />
        <MobileDoCard
          background="#7A7A7A0A"
          title="Development and Testing"
          des="Our experienced developers start coding your app using the latest technologies."
        />
        <MobileDoCard
          background="#7A7A7A0A"
          title="Deployment and Ongoing Support"
          des="We help you publish your app on app stores like Google Play and Apple App Store."
        />
      </Box>
    </Box>
  );
}
export default DoItMobile;
