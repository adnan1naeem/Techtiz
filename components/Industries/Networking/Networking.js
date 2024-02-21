import { Box, Typography } from "@mui/material";
import React from "react";
import SocialNetworking from "./SocialNetworking";
import { useEffect, useRef, useState } from "react";
function Networking({onPress}) {
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
        <Box ref={weeksRef} sx={{ mt: "6%" }}>
            <Typography
                sx={{
                    textAlign: "center",
                    color: "#153A5F",
                    fontSize: "2.2em",
                    fontWeight: "700",
                    transition: "opacity 1s ease-in-out",
          opacity: isVisible ? 1 : 0,
                }}
            >
                Social Networking
            </Typography>
            <Typography
                sx={{
                    textAlign: "center",
                    color: "#153A5F",
                    fontSize: "1.1em",
                    fontWeight: "400",
                    mt: "5px",
                    lineHeight: "20px",
                    transition: "opacity 1s ease-in-out",
          opacity: isVisible ? 1 : 0,
                }}
            >
                We are taking “social” to the next level through interactive web and
                mobile applications.
            </Typography>
            <Box
                sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    gap: "3%",
                    paddingTop: "5%",
                    paddingBottom: "2%",
                    marginTop: "1%",
                }}
            >
                <SocialNetworking onPress={onPress} />
                <Box
                    sx={{
                        width: { xs: "100%", sm: "80%", md: "40%", lg: "35%", xl: "30%" },
                    }}
                >
                    <img
                        src="https://techtiz.co/wp-content/uploads/2023/12/social.webp"
                        alt=""
                        style={{ width: "100%" }}
                    />
                </Box>
            </Box>
        </Box>
    );
}
export default Networking;
