import { Box, Typography } from "@mui/material";
import ModelsCard from "../ModelsCard/ModelsCard";
import { useEffect, useRef, useState } from "react";
import teamImg from "../../public/team.jpg"
import ppImg from "../../public/price-paper.jpg"
function Model({ onPress }) {

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
    <Box sx={{ marginTop: "4%", mb: "5%" }} ref={weeksRef}>
      <Typography
        sx={{
          color: "#153A5F",
          fontSize: { xs: '25px', sm: "35px", md: '43px', lg: "43px" },
          fontWeight: "600",
          textAlign: "center",
          transition: "opacity 1s ease-in-out",
          opacity: isVisible ? 1 : 0,
          fontFamily: "'Mont-Bold', sans-serif",
          marginTop: {
            xs: "15%", sm: "5%",
            md: "3%",
            lg: "0",
            xl: "0",
          },
          marginBottom: { xs: "5%", sm: "0" }
        }}
      >
        Engagement Models
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "6%",
          marginTop: "1.4%",
        }}
      >
        <ModelsCard
          maintitle="Dedicated Resources"
          backgroundImage={`url(${teamImg.src})`}

          onPress={onPress}
          resource="DEDICATED RESOURSES"
          titleresource="Our team of enthusiastic software engineers understand what's ideal for your business and create pleasant user experiences for your customers. Get Started"
        />
        <ModelsCard
          maintitle="Fixed Cost Projects"
          backgroundImage={`url(${ppImg.src})`}
          onPress={onPress}
          resource="FIXED COST PROJECTS"
          titleresource="Techtiz Custom Software Development Agency prioritizes client satisfaction and offers the ideal pricing plans to satisfy clients' requirements without disturbing their budgets."
        />
      </Box>
    </Box>
  );
}

export default Model;
