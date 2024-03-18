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
          width: { xs: "90%", sm: "16rem", md: "21rem", lg: "22rem" },
          height: { xs: 'auto', sm: "24rem", md: "18rem", lg: "18rem" },
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
            marginLeft: "0%",
          }}
        >
          <Box
            sx={{
              width: { xs: "4rem", sm: "6rem", md: "4.5rem", lg: "4.8rem" },
              "&:hover img": { transform: "scale(1.1)",transition: "transform 0.3s ease" }, 
            }}
          >
            <img style={{ width: "100%" }} src={image} alt="" />
          </Box>

          <Box sx={{ marginTop: "8%" }}>
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
                fontWeight: 600,
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
