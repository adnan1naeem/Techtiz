import { Box, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Line from "../../public/bg-pat.svg";
import styles from "../../styles/MainBanner.module.css";
import Link from "next/link";
import BannerButton from "./BannerButton";
import banner from "../../assets/main-banner.svg"
import HomeButtonBusiness from "../Texts/HomeButtonBusiness";

function MainBanner({ onPress }) {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true);
    }, 600); // 5 seconds delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <Box
      sx={{
        background: "#153A5F",
        width: "100%",
        height: { xs: "110vh", sm: "100%", lg: "90%", xl: "99vh" },
        "@media screen and (min-width: 350px) and (max-width: 380px)": {
              height:'120vh'
            },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: {
            xs: "column",
            sm: "row",
            md: "row",
            lg: "row",
            xl: "row",
          },
        }}
      >
        <Box
          sx={{
            height: {
              xs: "17rem",
              sm: "50rem",
              md: "50rem",
              lg: "50rem",
              xl: "60rem",
            },
            "@media screen and (min-width: 1530px) and (max-width: 1600px)": {
              height:'41rem'
            },
          }}
        >
          <Image
            style={{ width: "300px", height: "100%" }}
            src={Line}
            alt="no image"
            className={styles.responsive_img_Line}
          />
        </Box>
        <Box
          sx={{
            width: {
              xs: "25rem",
              sm: "24rem",
              md: "35rem",
              lg: "35rem",
              xl: "52rem",
            },
            marginTop: { xs: "30%", sm: "30%", md: "23%", lg: "18%", xl: "10%" },
            "@media screen and (min-width: 500px) and (max-width: 595px)": {
              width: "30rem",
            },
            "@media screen and (min-width: 300px) and (max-width: 420px)": {
              width: "21rem",
              marginTop: "30%",
            },
            
            "@media screen and (min-width: 1500px) and (max-width: 1600px)": {
              width: "39rem",
              marginTop: "16%",
            },
            "@media screen and (min-width: 1700px)": {
              width: "48rem",
              marginTop: "16%",
            },
            "@media screen and (min-width: 1900px) and (max-width: 2100px)": {
              width: "50rem",
              marginTop: "13%",
             
            },
            "@media screen and (min-width: 1600px) and (max-width: 1800px)": {
              width: "45rem",
              marginTop: "14%",
              
            },
            "@media screen and (min-width: 1200px) and (max-width: 1300px)": {
              width: "35rem",
              marginTop: "20%",
              
            },
            "@media screen and (min-width: 600px) and (max-width: 730px)": {
              marginTop: "40%",
          },
          "@media screen and (min-width: 330px) and (max-width: 450px)": {
              marginTop: "50%",
              width:'100%'
          },
          "@media screen and (min-width: 400px) and (max-width: 450px)": {
              marginTop: "50%",
              width:'80%'
          },
          }}
        >
          <Image
            style={{ width: "100%" }}
            src={banner}
            alt="no image"
            className={styles.responsive_img_Mobile}
          />
        </Box>
      </Box>

      <Box
        sx={{
          position: "absolute",
          top: { xs: 160, sm: 240, md: 240, lg: 270, xl: 350 },
          left: { xs: 15, sm: 50, md: 90, lg: 150 },
          width: { xs: "90%", sm: "50%", md: "40%", lg: "55%" },
          pl:{xs: "3%", md: 0},
          "@media screen and (min-width: 1700px)": {
            top: 410,
            left: 160,
          },
          "@media screen and (min-width: 600px) and (max-width: 750px)": {
           width:'55%'
          },
          "@media screen and (min-width: 1250px) and (max-width: 1530px)": {
            width: "40%",
          },
          "@media screen and (min-width: 1530px) and (max-width: 1650px)": {
              width: "35rem",
              top:300,
            },
            "@media screen and (min-width: 900px) and (max-width: 1020px)": {
              width:'53%',
              left: 40,
            },
            "@media screen and (min-width: 1200px) and (max-width: 1300px)": {
              top: 240,
            },
            "@media screen and (min-width: 1800px) and (max-width: 2000px)": {
              top: 420,
              width:'53%'
          },
        }}
      >
        <Typography
          sx={{
            color: "#FFFFFF",
            fontSize: {
              xs: "1.7rem",
              sm: "2.3rem",
              md: "2.8rem",
              lg: "2.8em",
            },
            textTransform: "uppercase",
            lineHeight: {xs: "42px", md:"50px"},
            fontFamily: "'Mont-Bold', sans-serif",
            opacity: showText ? 1 : 0, // Set opacity based on showText state
            transition: "opacity 1s ease-in-out", // Apply transition effect
            "@media screen and (min-width: 900px) and (max-width: 1020px)": {
              fontSize:'2.4rem'
            },
          }}
        >
          WE BUILD CUSTOM SOFTWARE AND CHART-TOPPING APPS FOR DISRUPTIVE
          BUSINESSES
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "row", md: "row" },
            gap: {xs:"5%",sm:"8%", md: "20px"},
            marginTop: "2%",
            alignItems: { xs: "center", sm: "flex-start" },
          }}
        >
          <Link href="/about">
            <BannerButton />
          </Link>
          <HomeButtonBusiness
            text="Talk To Us"
            color="white"
            onClick={onPress}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default MainBanner;
