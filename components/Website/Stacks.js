import { Box, Typography } from "@mui/material";
import React from "react";
import WebImage from "./WebImage";
import { useEffect, useRef, useState } from "react";
function Stack() {
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
    <Box ref={weeksRef} sx={{ background: "#153A5F", marginTop: "5%", marginBottom: '9%' }}>
      <Typography
        sx={{
          textAlign: "center",
          paddingTop: { xs: "26%", sm: "15%", md: "6%" },
          color: "#FFFFFF",
          fontSize: { xs: "1.9em", md: "2.7em" },
          fontWeight: "600",
          transition: "opacity 1s ease-in-out",
          opacity: isVisible ? 1 : 0,
          fontFamily: "Mont-Bold, Sans-serif",
        }}
      >
        Tech Stacks
      </Typography>
      <Typography
        sx={{
          textAlign: "center",
          marginTop: "1%",
          color: "#FFFFFF",
          fontSize: "0.9em",
          fontWeight: "600",
          transition: "opacity 1s ease-in-out",
          opacity: isVisible ? 1 : 0,
          fontFamily: "Mont-Regular, Sans-serif",
        }}
      >
        We invest our time and resources in state-of-the-art innovations to stay
        up to date with the latest technological trends for our projects.
        <br /> Our performance history illustrates the extensive use of advanced
        and effective integrations in our work.
      </Typography>
      <Box
        sx={{
          width: "100%",
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          paddingBottom: '10%',
          marginTop: '1%'
        }}
      >
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: "10%", justifyContent: 'center' }}>
          <WebImage image={require('../../assets/svg/website-js-logo.svg')} height="5rem" />
          <WebImage image={require('../../assets/svg/website-reactjs.svg')} height="5rem" />

          <WebImage image={require('../../assets/svg/website-blockchain-technology.png')} height="2.8rem" mt="18px" />

          <WebImage image={require('../../assets/svg/website-dotnet.svg')} height="5rem" />
          <WebImage image={require('../../assets/svg/website-angular.svg')} height="5rem" />
          <WebImage image={require('../../assets/svg/website-java.svg')} height="5rem" />
          <WebImage image={require('../../assets/svg/website-ruby-white.svg')} height="5rem" />
          <WebImage image={require('../../assets/svg/website-nodejs-white.svg')} height="5rem" />
          <WebImage image={require('../../assets/svg/website-jango.svg')} height="5rem" />
          <WebImage image={require('../../assets/svg/website-swift.svg')} height="5rem" />
          <WebImage image={require('../../assets/svg/website-dart.svg')} height="5rem" />
          <WebImage image={require('../../assets/svg/website-typescript.svg')} height="5rem" />

          <WebImage image={require('../../assets/svg/website-php.svg')} height="5rem" />
          <WebImage image={require('../../assets/svg/website-diamond.svg')} height="5rem" />
          <WebImage image={require('../../assets/svg/website-python.svg')} height="5rem" />
          <WebImage image={require('../../assets/svg/website-bindhi.svg')} height="5rem" />

          <WebImage image={require('../../assets/svg/website-golang.svg')} height="5rem" />
          <WebImage image={require('../../assets/svg/website-database.svg')} height="5rem" />
        </Box>
      </Box>
    </Box>
  );
}
export default Stack;
