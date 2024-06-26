import React from "react";
import { Box, Typography, Card, CardContent, Button } from "@mui/material";
import { useState } from "react";
import Image from "next/image";

function MobileServices({ image, title, des, onPress }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Box sx={{
      marginTop: "1.5%"
    }}>
      <Card
        sx={{
          width: { xs: "22rem", sm: "22rem", md: "25rem", lg: "17rem" },
          height: { xs: "17rem", sm: "18rem", md: "18rem", lg: "17.5rem" },
          background: "#153A5F",
          paddingTop: { xs: 0, sm: '3%', md: '1%' },
          cursor: "pointer",
          boxShadow: "none",
          borderRadius: 0,
          border: "1px solid white",
          transition: "opacity 1s ease-in-out",
          position: "relative",
          marginLeft: { sm: "0.5rem" },
          marginTop: { xs: "0.5rem", sm: 0 },
          "@media screen and (min-width: 400px) and (max-width: 430px)": {
            width: "23.5rem"
          },
          "@media screen and (min-width: 430px) and (max-width: 435px)": {
            width: "24.5rem"
          },

        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            zIndex: 1,
            marginTop: { xs: "3%", sm: '8%' },
            marginBottom: "5%",
            textAlign: "center",
            transition: "transform 1s ease",
          }}
        >
          <Image src={image} alt="" style={{ width: "40%" }} />

          <Typography
            sx={{
              color: "white",
              fontWeight: "600",
              fontSize: "1.1em",
              marginTop: "13%",
              lineHeight: "24px",
              textAlign: "center",
              width: "70%",
              fontFamily: "Mont-Bold, Sans-serif",
            }}
          >
            {title}
          </Typography>
        </CardContent>

        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "5%",
            textAlign: "center",
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            background: '#153A5F',
            transition: "transform 0.8s ease",
            transform: isHovered ? "translateY(0)" : "translateY(100%)",
            zIndex: 2,
          }}>
          <Typography
            color="white"
            sx={{
              marginTop: "4%",
              fontSize: "15px",
              fontFamily: "Mont-Regular, Sans-serif",
              fontWeight: 600,
            }}>
            {des}
          </Typography>
          <Button
            sx={{
              mt: '1.3rem',
              color: "white",
              transition: "background-color 0.3s ease",
              border: "2px solid #18B0E6",
              fontFamily: "Mont-Regular, Sans-serif",
              fontWeight: 600,

              "&:hover": {
                backgroundColor: "rgba(24, 176, 230, 0.6)",
                border: "2px solid #18B0E6",
              },
            }}
            onClick={onPress}
            variant="outlined"
          >
            GET STARTED
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}

export default MobileServices;
