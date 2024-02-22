import ExpertiseCard from "../ExpertiseCard/ExpertiseCard";
import { Box, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";

function Expertise() {
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
    <Box ref={weeksRef} sx={{ background: "#18B0E6", marginTop: "2%" }}>
      <Box
        sx={{ paddingTop: "4.6%", display: "flex", flexDirection: "column" }}
      >
        <Typography
          sx={{
            textAlign: "center",
            color: "#FFFFFF",
            fontSize: "43.2px",
            fontWeight: "600",
            fontFamily: "Mont-Bold, Sans-serif",
            transition: "opacity 1s ease-in-out",
            opacity: isVisible ? 1 : 0,
          }}
        >
          Our Expertise
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
            marginTop: { lg: "1%" },
            color: "#FFFFFF",
            fontFamily: "Mont-Regular, Sans-serif",
            fontWeight: "300",
          }}
        >
          Our skilled team excels in mobile app development (iOS, Android,
          React, React Native, Flutter), web <br /> applications, E-commerce
          websites, UX/UI design, software quality assurance, optimization, and
          maintenance.
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          paddingLeft: { md: 0, lg: 10 },
          paddingRight: { md: 0, lg: 10 },
          fontSize: { xs: "2.1em", sm: "2.1em", md: "2.1em", lg: "2.7em" },
          gap: "3.1%",
          marginTop: "2%",
          paddingBottom: "5%",
          "@media screen and (min-width: 1500px)": {
            justifyContent: "space-between",
            maxWidth: "1200px",
            margin: "0 auto",
            
          },
        }}
      >
        <ExpertiseCard
          title="Web Development"
          imageCard="https://techtiz.co/wp-content/uploads/2023/11/web-dev.svg"
          description="Techtiz crafts stunning websites with cutting-edge features."
          href="/website"
        />
        <ExpertiseCard
          title="Mobile App Development"
          imageCard="https://techtiz.co/wp-content/uploads/2023/11/mobileAppDev.svg"
          description="Techtiz delivers seamless mobile experiences for diverse platforms."
          href="/mobile-application"
        />
        <ExpertiseCard
          title="Software Quality Assurance"
          imageCard="https://techtiz.co/wp-content/uploads/2023/11/ux-ui_.svg"
          description="Techtiz ensures flawless performance through rigorous testing."
          href="sqa"
        />
        <ExpertiseCard
          title="UI/UX Design"
          imageCard="https://techtiz.co/wp-content/uploads/2023/11/ux-ui_.svg"
          description="Techtiz creates intuitive and visually captivating user interfaces."
          href="ui-ux-design"
        />
      </Box>
    </Box>
  );
}

export default Expertise;
