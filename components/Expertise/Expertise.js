import ExpertiseCard from "../ExpertiseCard/ExpertiseCard";
import { Box, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import webImg from "../../public/web-dev.svg"
import mobileImg from "../../public/mobileAppDev.svg"
import softImg from "../../public/software-quality.svg"
import uiImg from "../../public/ux-ui_.svg"

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
    <Box ref={weeksRef} sx={{ background: "#18B0E6", paddingBottom: { xs: "18%", md: 0 }, }}>
      <Box
        sx={{ paddingTop: { xs: "8%", md: "4%" }, display: "flex", flexDirection: "column", mt: '2%' }}
      >
        <Typography
          sx={{
            textAlign: { xs: "", sm: "", md: "center", lg: "center" },
            paddingLeft: { xs: "8%", sm: "8%", md: 0, lg: 0 },
            color: "#FFFFFF",
            fontSize: { xs: "30.2px", sm: "30.2px", md: "43.2px", lg: "43.2px" },
            fontWeight: "600",
            fontFamily: "'Mont-Bold', sans-serif",
            transition: "opacity 1s ease-in-out",
            opacity: isVisible ? 1 : 0,
          }}
        >
          Our Expertise
        </Typography>
        <Typography
          sx={{
            textAlign: { xs: "", sm: "", md: "center", lg: "center" },
            paddingLeft: { xs: "8%", sm: "8%", md: "3%", lg: "3%" },
            paddingRight: { xs: "8%", sm: "8%", md: "3%", lg: "3%" },
            fontSize: "1rem",
            marginTop: { xs: "5%", md: "2%", lg: "1%" },
            marginBottom: { xs: "5%", md: 0, xl: "1%" },
            color: "#FFFFFF",
            opacity: 0.9,
            fontWeight: 300,
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
          paddingLeft: { md: 0, lg: 10.5 },
          paddingRight: { md: 0, lg: 10.5 },
          fontSize: { xs: "2.1em", sm: "2.1em", md: "2.1em", lg: "2.7em" },
          gap: "3.6%",
          marginTop: "1.5%",
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
          imageCard={webImg.src}
          description="Techtiz crafts stunning websites with cutting-edge features."
          href="/website"
          width={{ xs: "80%", sm: "70%", md: "60%", lg: "40%" }}
          ml={{ xs: '15%', sm: '0%' }}
        />
        <ExpertiseCard
          title="Mobile App Development"
          imageCard={mobileImg.src}
          description="Techtiz delivers seamless mobile experiences for diverse platforms."
          href="/mobile-application"
          width={{ xs: "90%", sm: "70%", md: "60%", lg: "40%" }}
          ml={{ xs: '5%', sm: '0%' }}
        />
        <ExpertiseCard
          title="Software Quality Assurance"
          imageCard={softImg.src}
          description="Techtiz ensures flawless performance through rigorous testing."
          href="sqa"
          width={{ xs: "40%", sm: "40%", md: "30%", lg: "40%", xl: "25%" }}
          ml={{ xs: '30%', sm: '0%' }}
        />
        <ExpertiseCard
          title="UI/UX Design"
          imageCard={uiImg.src}
          description="Techtiz creates intuitive and visually captivating user interfaces."
          href="ui-ux-design"
          width={{ xs: "80%", sm: "60%", md: "60%", lg: "40%" }}
          ml={{ xs: '15%', sm: '0%' }}
        />
      </Box>
    </Box>
  );
}

export default Expertise;
