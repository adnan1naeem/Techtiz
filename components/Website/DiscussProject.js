import React from "react";
import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";

function DiscussProject({ onPress }) {
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
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "6%",
        marginBottom: "6%",
      }}
      ref={weeksRef}
    >
      <Card
        sx={{
          height: { xs: "auto", lg: "14rem" },
          width: { xs: "90%", sm: "90%", md: "95%", lg: "70rem" },
          background: "linear-gradient(90deg, #18B0E6 0%, #153A5F 100%)",
          boxShadow: "none",
          borderRadius: "20px",
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: "2%",
            flexWrap: "wrap",
          }}
        >
          <Box sx={{ marginLeft: "3%" }}>
            <Typography
              sx={{
                color: "#FFFFFF",
                fontSize: { xs: "1.3em", sm: "1.7em", md: "2.2em" },
                fontWeight: "700",
                fontFamily: "Mont-Bold, Sans-serif",
              }}
            >
              Let's Discuss Your Project!
            </Typography>
            <Typography
              sx={{
                color: "#FFFFFF",
                fontSize: { xs: "0.8em", sm: "1em", md: "1.3em" },
                fontWeight: 600,
                marginTop: "5%",
                transition: "opacity 1s ease-in-out",
                opacity: isVisible ? 1 : 0,
                fontFamily: "Mont-Regular, Sans-serif",
                "@media screen and (min-width: 1200px) and (max-width: 1300px)": {
                  fontSize: '1em'
                },
              }}
            >
              Get a free consultation and let us know your project idea to{" "}
              <br /> turn into an amazing digital product.
            </Typography>
          </Box>
          <Box sx={{ marginTop: "3%", marginLeft: "3%", marginRight: "8%" }}>
            <Button
              variant="outlined"
              onClick={onPress}
              sx={{
                color: "white",
                fontWeight: 600,
                fontSize: { xs: "14px", sm: "15px", md: "17px" },
                border: `1px solid  white`,
                textTransform: "none",
                background: "none",
                paddingTop: { xs: "10px", md: "18px" },
                paddingBottom: { xs: "10px", md: "18px" },
                transition: "background-color 0.8s, color 0.6s",
                fontFamily: "Mont-Bold, Sans-serif",
                marginTop: "8px",
                "&:hover": {
                  backgroundColor: "white",
                  color: "#18B0E6",
                },
              }}
            >
              GET FREE CONSULTATION
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

export default DiscussProject;
