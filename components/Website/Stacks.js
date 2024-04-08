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
          <WebImage image="https://techtiz.co/wp-content/uploads/2023/09/js-logo.svg" height="5rem" />
          <WebImage image="https://techtiz.co/wp-content/uploads/2023/09/reactjs.svg" height="5rem" />

          <WebImage image="https://img.icons8.com/pastel-glyph/64/FFFFFF/blockchain-technology--v1.png" height="2.8rem" mt="18px" />

          <WebImage image="https://techtiz.co/wp-content/uploads/2023/09/dotnet.svg" height="5rem" />
          <WebImage image="https://techtiz.co/wp-content/uploads/2023/09/angular.svg" height="5rem" />
          <WebImage image="https://techtiz.co/wp-content/uploads/2023/09/java.svg" height="5rem" />
          <WebImage image="https://techtiz.co/wp-content/uploads/2023/09/ruby-white.svg" height="5rem" />
          <WebImage image="https://techtiz.co/wp-content/uploads/2023/09/nodejs-white.svg" height="5rem" />
          <WebImage image="https://techtiz.co/wp-content/uploads/2023/09/jango.svg" height="5rem" />
          <WebImage image="https://techtiz.co/wp-content/uploads/2023/09/swift.svg" height="5rem" />
          <WebImage image="https://techtiz.co/wp-content/uploads/2023/09/dart.svg" height="5rem" />
          <WebImage image="https://techtiz.co/wp-content/uploads/2023/09/typescript.svg" height="5rem" />

          <WebImage image="https://techtiz.co/wp-content/uploads/2023/09/php.svg" height="5rem" />
          <WebImage image="https://techtiz.co/wp-content/uploads/2023/09/diamond.svg" height="5rem" />
          <WebImage image="https://techtiz.co/wp-content/uploads/2023/09/python.svg" height="5rem" />
          <WebImage image="https://techtiz.co/wp-content/uploads/2023/09/bindhi.svg" height="5rem" />

          <WebImage image="https://techtiz.co/wp-content/uploads/2023/09/golang.svg" height="5rem" />
          <WebImage image="https://techtiz.co/wp-content/uploads/2023/09/database.svg" height="5rem" />
        </Box>
      </Box>
    </Box>
  );
}
export default Stack;
