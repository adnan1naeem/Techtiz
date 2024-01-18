import { Box, Card, CardContent } from "@mui/material";
import React from "react";

function TechnologiesCard() {
  return (
    <Box>
      <Card
        sx={{
          width: { xs: "8rem", sm: "11rem", md: "13rem", lg: "14rem" },
          height: { xs: "8rem", sm: "10rem", md: "10rem", lg: "11rem" },
          marginTop: "8%",
          background: "#18B0E6",
          boxShadow: "none",
          borderRadius: "6%",
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src="https://techtiz.co/wp-content/uploads/2023/10/html5-2.svg"
            alt=""
            style={{ width: "52%", marginTop: "5%" }}
          />
        </CardContent>
      </Card>
    </Box>
  );
}

export default TechnologiesCard;
