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
    <Box ref={weeksRef} sx={{ background: "#153A5F", marginTop: "5%" }}>
      <Typography
        sx={{
          textAlign: "center",
          paddingTop: "6%",
          color: "#FFFFFF",
          fontSize: "2.7em",
          fontWeight: "600",
          transition: "opacity 1s ease-in-out",
          opacity: isVisible ? 1 : 0,
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
          fontWeight: "100",
          transition: "opacity 1s ease-in-out",
          opacity: isVisible ? 1 : 0,
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
         display:'flex',
         justifyContent:'center',
         alignItems:'center',
          paddingBottom:'10%',
          marginTop:'1%'
        }}
      >
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: "10%",justifyContent:'center' }}>
          <WebImage image="https://techtiz.co/wp-content/uploads/2023/09/js-logo.svg" />
          <WebImage image="https://techtiz.co/wp-content/uploads/2023/09/reactjs.svg" />
          <WebImage image="https://techtiz.co/wp-content/uploads/2023/09/appstore.svg" />
          <WebImage image="https://techtiz.co/wp-content/uploads/2023/09/dotnet.svg" />
          <WebImage image="https://techtiz.co/wp-content/uploads/2023/09/angular.svg" />
          <WebImage image="https://techtiz.co/wp-content/uploads/2023/09/java.svg" />
          <WebImage image="https://techtiz.co/wp-content/uploads/2023/09/ruby-white.svg" />
          <WebImage image="https://techtiz.co/wp-content/uploads/2023/09/react-white-covered.svg" />
          <WebImage image="https://techtiz.co/wp-content/uploads/2023/09/nodejs-white.svg" />
          <WebImage image="https://techtiz.co/wp-content/uploads/2023/09/jango.svg" />
          <WebImage image="https://techtiz.co/wp-content/uploads/2023/09/swift.svg" />
          <WebImage image="https://techtiz.co/wp-content/uploads/2023/09/dart.svg" />
          <WebImage image="https://techtiz.co/wp-content/uploads/2023/09/typescript.svg" />
       
          <WebImage image="https://techtiz.co/wp-content/uploads/2023/09/php.svg" />
          <WebImage image="https://techtiz.co/wp-content/uploads/2023/09/diamond.svg" />
          <WebImage image="https://techtiz.co/wp-content/uploads/2023/09/python.svg" />
          <WebImage image="https://techtiz.co/wp-content/uploads/2023/09/bindhi.svg" />
          <WebImage image="https://techtiz.co/wp-content/uploads/2023/09/android.svg" />
          <WebImage image="https://techtiz.co/wp-content/uploads/2023/09/golang.svg" />
          <WebImage image="https://techtiz.co/wp-content/uploads/2023/09/database.svg" />
        </Box>
      </Box>
    </Box>
  );
}
export default Stack;
