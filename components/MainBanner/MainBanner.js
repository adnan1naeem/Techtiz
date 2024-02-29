import { Box, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Line from "../../public/bg-pat.svg";
import ButtonBusiness from "../../components/Texts/ButtonBusiness";
import styles from "../../styles/MainBanner.module.css";
import Link from "next/link";
import BannerButton from "./BannerButton";
import banner from "../../assets/main-banner.svg"

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
              height:'140vh'
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
              xs: "35rem",
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
              xs: "22rem",
              sm: "24rem",
              md: "25rem",
              lg: "35rem",
              xl: "52rem",
            },
            marginTop: { xs: "6%", sm: "30%", md: "23%", lg: "18%", xl: "10%" },
            "@media screen and (min-width: 1500px) and (max-width: 1600px)": {
              width: "40rem",
              marginTop: "11%",
            },
            "@media screen and (min-width: 1700px)": {
              width: "48rem",
              marginTop: "16%",
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
          top: { xs: 150, sm: 200, md: 210, lg: 270, xl: 350 },
          left: { xs: 15, sm: 50, md: 90, lg: 150 },
          width: { xs: "90%", sm: "50%", md: "60%", lg: "55%" },
          "@media screen and (min-width: 1700px)": {
            top: 410,
            left: 160,
          },
          "@media screen and (min-width: 1250px) and (max-width: 1530px)": {
            width: "40%",
          },
          "@media screen and (min-width: 1530px) and (max-width: 1600px)": {
              width: "44rem",
              top:250,
            },
            "@media screen and (min-width: 900px) and (max-width: 1020px)": {
              width:'53%',
              left: 40,
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
            fontWeight: "bold",
            textTransform: "uppercase",
            lineHeight: "50px",
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
            flexDirection: { xs: "column", md: "row" },
            gap: "20px",
            marginTop: "2%",
            alignItems: { xs: "center", sm: "flex-start" },
          }}
        >
          <Link href="/about">
            <BannerButton />
          </Link>
          <ButtonBusiness
            text="Talk To Us"
            color="white"
            paddingLeft="37px"
            paddingRight="37px"
            onClick={onPress}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default MainBanner;
