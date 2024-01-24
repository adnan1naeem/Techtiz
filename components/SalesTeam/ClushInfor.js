import React from "react";
import { Box, Card, CardContent, CardMedia } from "@mui/material";
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
        <CardContent
          sx={{
            marginTop: "-3%",
          }}
        >
          <CardMedia
            image="https://techtiz.co/wp-content/uploads/2023/09/clutch-e1696137965599.jpg"
            sx={{ width: "100px", height: "110px" }}
          />
        </CardContent>
      </Card>
    </Box>
  );
}

export default ClushInfor;
