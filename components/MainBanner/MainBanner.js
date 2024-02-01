import { Box, Button, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import Line from "../../public/bg-pat.svg";
import ButtonBusiness from "../../components/Texts/ButtonBusiness";
import styles from "../../styles/MainBanner.module.css";
import { keyframes } from "@emotion/react";
import { useRouter } from "next/router";
import Link from "next/link";
import BannerButton from "./BannerButton";

function MainBanner({ onPress }) {
  const router = useRouter();

  const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
  const sendEmail = () => {
    router.push("/about");
  };
  return (
    <Box
      sx={{
        background: "#153A5F",
        width: '100%',
        height:{ xs:'140vh', sm:'100%',lg: "100%", xl: '110vh' }
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: { xs: "column", sm: "row", md: "row", lg: "row", xl: 'row' }


        }}

      >
        <Box sx={{height: { xs: "40rem", sm: "50rem", md: "50rem", lg: "50rem", xl: '50rem' }}}>
        <Image
          style={{ width: "300px", height: "100%" }}
          
          src={Line}
          alt="no image"
          className={styles.responsive_img_Line}
        />
        </Box>
        <Box sx={{ width: { xs: "22rem", sm: "25rem", md: "25rem", lg: "35rem", xl: '40rem' }, marginTop: { xs: "6%", sm: '25%', md: '20%', lg: "14%", xl: "10%" } }}>
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
          top: { xs: 150, sm: 200, md: 210, lg: 210,xl:260 },
          left: { xs: 15, sm: 50, md: 90, lg: 150 },
          width: { xs: "90%", sm: "70%", md: "60%", lg: "44%" },
          // backgroundColor: { xs: "red", sm: 'blue', md: 'green', lg: 'yellow' },
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
            animation: `${fadeIn} 1s ease-in-out 5s forwards`,
            lineHeight: "50px",
            fontFamily: "Mont-Bold, Sans-serif"
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
            marginTop: "4%",
            alignItems: { xs: "center", sm: "flex-start" },
          }}
        >
          <Link href="/about">
            <BannerButton />
          </Link>
          <ButtonBusiness
            text="Talk To Us"
            color="white"
            paddingLeft="40px"
            paddingRight="40px"
            onClick={onPress}

          />
        </Box>
      </Box>
    </Box>
  );
}

export default MainBanner;
