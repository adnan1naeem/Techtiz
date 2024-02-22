import { Box, Card, CardContent } from "@mui/material";
import React from "react";

function TechnologiesCard({ image }) {
  return (
    <Box>
      <Card
        sx={{
          width: { xs: "8rem", sm: "11rem", md: "14rem", lg: "11rem", xl: "12rem" },
          height: { xs: "6rem", sm: "10rem", md: "10rem", lg: "10rem", xl: "11rem" },
          marginTop: "10%",
          background: "#18B0E6",
          boxShadow: "none",
          borderRadius: "6%",
        }}
      >
        <CardContent
          sx={{
            height: '100%',
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={image}
            alt=""
            style={{
              width: "55%"
            }}
          />
        </CardContent>
      </Card>
    </Box>
  );
}

export default TechnologiesCard;
