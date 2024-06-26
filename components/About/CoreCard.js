import React, { useState } from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";
import Image from "next/image";

function CoreCard({ image, heading, bg, para }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Box sx={{ marginTop: { xs: '5%', sm: "2%" } }}>
      <Card
        sx={{
          width: { xs: "21rem", sm: "35rem", md: "22rem", lg: "22rem" },
          height: { xs: "17rem", sm: "auto", md: "20rem", lg: "19rem" },
          background: bg,
          borderRadius: "15px",
          cursor: "pointer",
          boxShadow: "none",
          position: "relative",
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
            marginTop: "7%",
            marginBottom: "5%",
            position: "relative",
            transition: "transform 0.5s ease",
            zIndex: 1,
          }}
        >
          <Box sx={{ width: { xs: "35%", sm: "20%", md: "35%" } }}>
            <Image
              src={image}
              alt=""
              style={{ width: "100%", filter: "invert(100%)" }}
            />
          </Box>
          <Typography
            sx={{
              color: "white",
              fontWeight: 500,
              fontSize: { xs: '22px', sm: "35px" },
              marginTop: "10%",
              fontFamily: "'Mont-Bold', sans-serif",
            }}
          >
            {heading}
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
            background: bg,
            transition: "transform 0.8s ease",
            transform: isHovered ? "translateY(0)" : "translateY(100%)",
            zIndex: 2,
          }}
        >
          <Typography
            color="white"
            sx={{
              fontSize: "27px",
              fontWeight: 400,
              fontFamily: "'Mont-Bold', sans-serif",
            }}
          >
            {heading}
          </Typography>
          <Typography
            color="white"
            sx={{
              marginTop: "6%",
              fontSize: "16px",
              fontFamily: "'Mont-Regular', sans-serif",
              fontWeight: 600
            }}
          >
            {para}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

export default CoreCard;
