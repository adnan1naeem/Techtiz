import React, { useState } from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";

function PortfoliosCard( {title, description,mainImage,mr,ml}) {
  const [isHovered, setIsHovered] = useState(false);

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
          width: { xs: "21rem", sm: "35rem", md: "30rem", lg: "35rem" },
          height: { xs: "33rem", sm: "19rem", md: "25rem", lg: "19rem" },

          borderRadius: "30px",
          background: "#F8F8F8",
          transition: "transform 1s ease", // Adding transition for the transform property
          transform: isHovered ? "translateY(-12px)" : "translateY(0)",
          marginTop: "4%",
          boxShadow: "none",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row", md: "row", lg: "row", xl:'row' },
            justifyContent: "center",

          
            
          }}
        >
          <Box
            sx={{
              height: { xs: "12rem", sm: "8rem", md: "9rem", lg: "11rem" },
              mt: "2%",
             mr:mr,
             ml:ml,
            }}
          >
            <img
              src={mainImage}
              alt=""
              style={{ height: "100%" }}
            />
          </Box>
          <Box sx={{ mt: "6%" }}>
            <Typography
              sx={{ fontSize: "23px", color: "#153A5F", fontWeight: "600" }}
            >
              {title}
            </Typography>
            <Typography
              sx={{
                color: "#7A7A7A",
                fontSize: "14px",
                fontWeight: "400",
                fontFamily: "mont,Sans-serif",
                marginTop: "1%",
                lineHeight:'19px'
              }}
            >
              {description}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

export default PortfoliosCard;
