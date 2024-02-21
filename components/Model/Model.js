import { Box, Typography } from "@mui/material";
import ModelsCard from "../ModelsCard/ModelsCard";
import { useEffect, useRef, useState } from "react";
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
    <Box sx={{ marginTop: "3%" }}  ref={weeksRef}>
      <Typography
        sx={{
          color: "#153A5F",
          fontSize: "43px",
          fontWeight: "600",
          textAlign: "center",
          transition: "opacity 1s ease-in-out",
          opacity: isVisible ? 1 : 0,
        }}
      >
        Engagement Models
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "5%",
          marginTop: "1.4%",
        }}
      >
        <ModelsCard
          maintitle="Dedicated Resources"
          backgroundImage="url('https://techtiz.co/wp-content/uploads/2023/10/team.jpg')"
          onPress={onPress}
          resource="DEDICATED RESOURSES"
          titleresource="Our team of enthusiastic software engineers understand what's ideal for your business and create pleasant user experiences for your customers. Get Started"
        />
        <ModelsCard
          maintitle="Fixed Cost Projects"
          backgroundImage="url('https://techtiz.co/wp-content/uploads/2023/10/price-paper.jpg')"
          onPress={onPress}
          resource="FIXED COST PROJECTS"
          titleresource="Techtiz Custom Software Development Agency prioritizes client satisfaction and offers the ideal pricing plans to satisfy clients' requirements without disturbing their budgets."
        />
      </Box>
    </Box>
  );
}

export default Model;
