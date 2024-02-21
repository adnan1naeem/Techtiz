import { Box, Typography } from "@mui/material";
import React from "react";
import ContactInfo from "./ContactInfo";
import ClushInfor from "./ClushInfor";
import Form from "./Form";
import { useEffect, useRef, useState } from "react";
function SalesTeam({ id }) {
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
    <Box id={id}  ref={weeksRef}>
      <Typography
        sx={{
          marginTop:7,
          color: "#153A5F",
          fontSize: "2.7em",
          fontWeight: "700",
          textAlign: "center",
          transition: "opacity 1s ease-in-out",
          opacity: isVisible ? 1 : 0,
          
        }}
      >
        Contact our sales team
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "5%",
          flexWrap: "wrap",
          marginTop: "3%",
        }}
      >
        <Box>
          <Form />
        </Box>
        <Box>
          <ContactInfo />
          <ClushInfor />
        </Box>
      </Box>
    </Box>
  );
}

export default SalesTeam;
