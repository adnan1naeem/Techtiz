import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";

function PartnerCard({ cardImage, title, description }) {
  return (
    <Box>
      <Card
        sx={{
          width: { xs: "21rem", sm: "23rem", md: "23rem", lg: "23rem" },
          height: "35rem",
          marginTop: "8%",
          background: "none",
          boxShadow: "none",
        }}
      >
        <CardContent sx={{ display: "flex", flexDirection: "column" }}>
          <img src={cardImage} alt="this" style={{ width: "65%" }} />
          <Box sx={{ marginTop: "15%" }}>
            <Typography
              sx={{ color: "#FFFFFF", fontSize: "27px", fontWeight: "600" ,   fontFamily: "'Mont-Bold', sans-serif"}}
            >
              {title}
            </Typography>
            <Typography
              sx={{
                color: "#FFFFFF",
                fontSize: "15px",
                fontWeight: "400",
                textShadow: "0px 0px 10px rgba(0,0,0,0.3);",
                marginTop: "3%",
      
                width: "91%",
                fontFamily: "'Mont-Regular', sans-serif"
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

export default PartnerCard;
