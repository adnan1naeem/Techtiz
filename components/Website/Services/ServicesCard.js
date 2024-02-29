import { Box, Card, CardContent, Typography } from "@mui/material";
import React from "react";

function ServicesCard({ image, heading, text }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Card
        sx={{
          width: { xs: "90%", sm: "21rem", md: "21rem", lg: "21rem" },
          height: { xs: "22rem", sm: "21rem", md: "19rem", lg: "19rem" },
          borderRadius: "10px",
          background: "white",

          border: "1px solid #18B0E6",
          marginTop: "8%",
          boxShadow: "none",
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "3%",
          }}
        >
          <Box
            sx={{
              width: { xs: "6rem", sm: "6rem", md: "5rem", lg: "4rem" },
  
              "&:hover img": { transform: "scale(1.1)",transition: "transform 0.3s ease" }, 
            }}
          >
            <img style={{ width: "100%" }} src={image} alt="" />
          </Box>

          <Box sx={{ marginTop: "10%" }}>
            <Typography
              sx={{
                color: "#153A5F",
                fontSize: "1.3rem",
                fontWeight: "600",
                marginBottom: "15px",
                width: "100%",
                fontFamily:"Mont-Bold, Sans-serif",
              }}
            >
              {heading}
            </Typography>
            <Typography
              sx={{
                color: "#153A5F",
                fontWeight: "400",
                fontSize: "0.9rem",
                lineHeight: "1.5em",
                marginBottom: "5px",
                fontFamily:"Mont-Regular, Sans-serif",
              }}
            >
              {text}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

export default ServicesCard;
