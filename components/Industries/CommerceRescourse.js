import React from "react";
import { Box, Card, CardContent, Typography, Button } from "@mui/material";
import { IoMdArrowRoundForward } from "react-icons/io";
import List from "./List";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

function CommerceRescourse({ onPress }) {
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
      sx={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        mt: "4%",
      }}
    >
      <Card
        sx={{
          width: {
            xs: "90%",
            sm: "35rem",
            md: "42rem",
            lg: "70rem",
            xl: "70rem",
          },
          height: { xs: "50rem", sm: "53rem", md: "56rem", lg: "31rem" },
          borderRadius: { xs: "20px", sm: "60px", xl: "60px" },
          background: "#153A5F",
          boxShadow: "none",
          mt: "1%",
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "12%",
            flexWrap: "wrap-reverse",
            alignItems: "center",
            justifyContent: "center",
            "@media screen and (min-width: 1200px) and (max-width: 1300px)": {
              gap: '6%'

            },
          }}
        >
          <Box
            sx={{
              width: { xs: "60%", sm: "50%", md: "46%", lg: "31%", xl: "30%" },

              mt: {
                xs: "-40%",
                sm: "-35%",
                md: "-12rem",
                lg: "-10%",
                xl: "-10%",
              },

            }}
          >
            <Image
              src={require('../../assets/industries-emcommerce.webp')}
              alt=""
              style={{ width: "100%" }}
            />
          </Box>
          <Box
            sx={{
              pt: "5%",
              display: "flex",
            }}
          >
            <Card
              sx={{
                width: { xs: "22rem", sm: "28rem", md: "33rem", lg: "32rem" },
                height: { xs: "38rem", sm: "39xrem", md: "38rem", lg: "34rem" },
                background: "none",
                boxShadow: "none",
                marginLeft: "1rem"
              }}
            >
              <CardContent sx={{ display: "flex", flexDirection: "column" }}>
                <Typography
                  sx={{
                    color: "#6EC1E4",
                    fontSize: "1.4em",
                    fontWeight: "bold",
                    borderLeft: "9px solid #18B0E6",
                    height: "18px",
                    paddingLeft: "10px",
                    lineHeight: "20px",
                    transition: "opacity 1s ease-in-out",
                    opacity: isVisible ? 1 : 0,
                    fontFamily: "'Mont-Bold', sans-serif"
                  }}

                >
                  What we offer
                </Typography>
                <Typography
                  sx={{
                    color: "#F8F8F8",
                    fontSize: "21px",
                    fontWeight: "600",
                    lineHeight: "29px",
                    marginTop: "5%",
                    transition: "opacity 1s ease-in-out",
                    opacity: isVisible ? 1 : 0,
                    fontFamily: "'Mont-Bold', sans-serif"
                  }}
                >
                  Development of secure E-commerce platforms that grow and sell
                </Typography>
                <Box sx={{ marginTop: "3%", paddingLeft: "5%" }}>
                  <List
                    listone="Custom designs and themes"
                    textColor="#F8F8F8"
                  />
                  <List
                    listone="Customer-focused website development"
                    textColor="#F8F8F8"
                  />
                  <List
                    listone="Sales-oriented e-commerce applications"
                    textColor="#F8F8F8"
                  />
                  <List
                    listone="Rejoicing sales environment on the website"
                    textColor="#F8F8F8"
                  />
                  <List listone="Maintenance and support" textColor="#F8F8F8" />
                </Box>
                <Button
                  variant="contained"
                  endIcon={<IoMdArrowRoundForward />}
                  onClick={onPress}
                  sx={{
                    marginTop: "8%",
                    padding: { xs: "3%", sm: "2%", md: "1.5%", lg: "2%" },
                    // idth: { xs: "100%", sm: "80%", md: "60%", lg: "40%" },
                    width: "12em",
                    paddingLeft: "1%",
                    paddingRight: "1%",
                    borderRadius: '2px',
                    textTransform: "none",
                    fontSize: "16px",
                    fontWeight: "400",
                    background: "none",
                    boxShadow: "none",
                    color: "F8F8F8",
                    border: "2px solid #6ec1e4",
                    "&:hover": {
                      backgroundColor: "#6EC1E4",
                      color: "#595959",
                    },
                    "@media screen and (min-width: 1200px) and (max-width: 1300px)": {
                      border: "2px solid #6ec1e4",

                    },
                  }}
                >
                  Discuss now &nbsp; &nbsp;
                </Button>
              </CardContent>
            </Card>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
export default CommerceRescourse;
