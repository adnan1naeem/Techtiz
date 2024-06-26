import { Box } from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import SalesTeam from "../../components/SalesTeam/SalesTeam";
import Started from "../../components/Started/Started";

function Index() {
  const [isHovered, setIsHovered] = React.useState(false);
  return (
    <>
      <Head>
        <title>Contact Us | Techtiz</title>
        <meta name="description" content="" key="desc" />
      </Head>

      <Box
        sx={{
          marginTop: { xs: "30%", sm: "15%", md: "14%", lg: "10%" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: { md: "2%", lg: "10%" },
            flexWrap: "wrap",
            "@media screen and (min-width: 1700px)": {
              gap: "6%",
            },
            "@media screen and (min-width: 1200px) and (max-width: 1400px)": {
              gap: "2%",
            },
          }}
        >
          <Started />
          <Box
            sx={{
              width: { xs: "90%", sm: "60%", md: "38%", lg: "38%", xl: "28%" },
              transform: isHovered ? "translateY(-12px)" : "translateY(0)",
              transition: "transform 1s ease",
              marginTop: { xs: "-45%", sm: "-30%", md: "0%", lg: "0" },
              "@media screen and (min-width: 1700px)": {
                width: "28%",
              },
              "@media screen and (max-width: 380px)": {
                marginTop: "-60%",
              },
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Image
              src={require("../../assets/contact-us.webp")}
              alt=""
              style={{ width: "100%" }}
            />
          </Box>
        </Box>
        <SalesTeam />
      </Box>
    </>
  );
}

export default Index;
