import React from "react";
import { Box, Card, CardContent, Typography, Button } from "@mui/material";
import { IoMdArrowRoundForward } from "react-icons/io";
import List from "../List";
import { useEffect, useRef, useState } from "react";
function SocialNetworking({ onPress }) {
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
      ref={weeksRef}
      sx={{ display: "flex", justifyContent: "center", alignContent: "center" }}
    >
      <Card
        sx={{
          width: { xs: "21rem", sm: "35rem", md: "30rem", lg: "33rem" },
          height: { xs: "23rem", sm: "25rem", md: "26rem", lg: "28rem" },
          borderRadius: "10px",
          background: "#F8F8F8",
          boxShadow: "none",
          mt: "1%",
        }}
      >
        <CardContent sx={{ display: "flex", flexDirection: "column" }}>
          <Typography
            sx={{
              color: "#6EC1E4",
              fontSize: "1.3em",
              fontWeight: "700",
              borderLeft: "10px solid #18B0E6",
              height: "18px",
              mt: "2%",
              ml: "1%",
              pl: "10px",
              paddingTop: "-5%",
              lineHeight: "18px",
              transition: "opacity 1s ease-in-out",
              opacity: isVisible ? 1 : 0,
              fontFamily: "'Mont-Bold', sans-serif"
            }}
          >
            What we offer
          </Typography>
          <Typography
            sx={{
              color: "#153A5F",
              fontSize: "21px",
              fontWeight: "600",
              mt: "3%",
              ml: "1%",
              transition: "opacity 1s ease-in-out",
              opacity: isVisible ? 1 : 0,
              fontFamily: "'Mont-Bold', sans-serif"
            }}
          >
            Design & development of social networking applications
          </Typography>
          <Box sx={{ marginTop: "3%", ml: "6%" }}>
            <List
              listone="Community building applications"
              textColor="#153A5F"
            />
            <List
              listone="Customized applications for instant messaging"
              textColor="#153A5F"
            />
            <List listone="Maintenance and supportt" textColor="#153A5F" />
          </Box>
          <Button
            variant="contained"
            endIcon={<IoMdArrowRoundForward />}
            onClick={onPress}
            sx={{
              marginTop: "8%",

              padding: { xs: "3%", sm: "2%", md: "1.5%", lg: "1.8%" },
              // width: { xs: "100%", sm: "80%", md: "60%", lg: "40%" },
              width: "12em",
              paddingLeft: "1%",
              paddingRight: "1%",
              borderRadius: "5px",
              textTransform: "none",
              fontSize: "16px",
              fontWeight: "400",
              background: "#18B0E6",
              boxShadow: "none",
              color: "white",
              border: "1px solid #18B0E6",
              "&:hover": {
                backgroundColor: "#153A5F",
                border: "1px solid #153A5F",
              },
            }}
          >
            Discuss now &nbsp; &nbsp;
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}
export default SocialNetworking;
