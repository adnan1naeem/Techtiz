import { Box, Card, CardContent, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

function UXCard({ image, heading, text, lg }) {
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
          width: { xs: "21rem", sm: "32rem", md: "34rem", lg: "34rem" },
          height: { xs: "22rem", sm: "18rem", md: "17rem", lg: "16rem" },
          borderRadius: "10px",
          background: "white",
          marginBottom: "2%",
          border: "1px solid #18B0E6",
          marginTop: "1%",
          boxShadow: "none",
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "1.5%",
            mt: '1%'
          }}
        >
          <Box
            sx={{
              width: { xs: "5rem", sm: "5rem", md: "3.5rem", lg: lg },
              "&:hover img": {
                transform: "scale(1.1)",
                transition: "transform 0.3s ease",

              },
            }}
          >
            <Image style={{ width: "100%" }} src={image} alt="" />
          </Box>
          <Box sx={{ marginTop: "3%", width: "90%" }}>
            <Typography
              sx={{
                color: "#153A5F",
                fontSize: "1.3rem",
                fontWeight: "600",
                marginBottom: "15px",
                fontFamily: "Mont-Bold, Sans-serif",
              }}
            >
              {heading}
            </Typography>
            <Typography
              sx={{
                color: "#153A5F",
                fontWeight: "300",
                fontSize: "1rem",
                lineHeight: "1.7em",
                marginBottom: "1px",
                fontWeight: 600,
                fontFamily: "Mont-Regular, Sans-serif",
                "@media screen and (min-width: 1200px) and (max-width: 1300px)": {
                  fontSize: '14.4px'
                },
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

export default UXCard;
