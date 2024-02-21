import React from "react";
import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";

function DiscussProject({onPress}) {
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
        marginTop: "10%",
      }}
      ref={weeksRef}
    >
      <Card
        sx={{
          height: { xs: "26rem", sm: "20rem", md: "19rem", lg: "14rem" },
          width: { xs: "21rem", sm: "36rem", md: "43rem", lg: "70rem" },
          background: "linear-gradient(90deg, #18B0E6 0%, #153A5F 100%)",
          boxShadow: "none",
          borderRadius: "20px",
        }}
      >
        <CardContent sx={{ display: "flex", flexDirection: "row" ,justifyContent:'space-between',marginTop:'2%',flexWrap:'wrap'}}>
          <Box sx={{marginLeft:'3%'}}>
            <Typography sx={{color:'#FFFFFF',fontSize:'2.2em',fontWeight:'700'}}> Let's Discuss Your Project!</Typography>
            <Typography sx={{color:'#FFFFFF',fontSize:'1.3em',fontWeight:'300',marginTop:'5%',transition: "opacity 1s ease-in-out",
          opacity: isVisible ? 1 : 0,}}>
              Get a free consultation and let us know your project idea to{" "}
              <br /> turn into an amazing digital product.
            </Typography>
          </Box>
          <Box sx={{marginTop:'3%',marginRight:'8%'}}>
            <Button
              variant="outlined"
              onClick={onPress}
              sx={{
                color: "white",
                fontWeight: "600",
                fontSize: "17px",
                border: `1px solid  white`,
                textTransform: "none",
                background: "none",
                paddingTop: "20px",
                paddingBottom: "20px",

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
