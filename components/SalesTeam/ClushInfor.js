import React from "react";
import { Box, Card, CardContent, CardMedia } from "@mui/material";
import clutchImage from '../../assets/sales-clutch.jpeg';
function ClushInfor() {
  return (
    <Box>
      <Card
        sx={{
          width: { xs: "20rem", sm: "23rem", md: "28rem", lg: "30rem" },
          height: { xs: "7rem", sm: "7rem", md: "7rem", lg: "8rem" },
          marginTop: "4%",
          background: "#6373810F",
          boxShadow: "none",
        }}
      >
      <a href="https://clutch.co/profile/techtiz-0">
        <CardContent
          sx={{
            marginTop: "-3%",
          }}
        >
          <CardMedia
            image={`${clutchImage.src}`}
            sx={{ width: "100px", height: "110px" }}
          />
        </CardContent>
        </a>
      </Card>
    </Box>
  );
}

export default ClushInfor;
