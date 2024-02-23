import { Box, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Line from "../../public/bg-pat.svg";
import ButtonBusiness from "../../components/Texts/ButtonBusiness";
import styles from "../../styles/MainBanner.module.css";
import Link from "next/link";
import BannerButton from "./BannerButton";

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
        height: { xs: "140vh", sm: "100%", lg: "100%", xl: "100vh" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: { xs: "column", sm: "row", md: "row", lg: "row", xl: "row" },
        }}
      >
        <Box sx={{ height: { xs: "40rem", sm: "50rem", md: "50rem", lg: "50rem", xl: "60rem" } }}>
          <Image
            style={{ width: "300px", height: "100%" }}
            src={Line}
            alt="no image"
            className={styles.responsive_img_Line}
          />
        </Box>
        <Box sx={{ width: { xs: "22rem", sm: "25rem", md: "25rem", lg: "35rem", xl: "52rem" }, marginTop: { xs: "6%", sm: "25%", md: "20%", lg: "18%", xl: "10%" } }}>
          <img
            style={{ width: "100%" }}
            src="https://techtiz.co/wp-content/uploads/2023/09/app-dev.svg"
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
          width: { xs: "90%", sm: "70%", md: "60%", lg: "55%" },
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
          }}
        >
          WE BUILD CUSTOM SOFTWARE AND CHART-TOPPING APPS FOR DISRUPTIVE BUSINESSES
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
