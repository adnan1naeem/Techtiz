import { Box, Card, CardContent, Typography } from "@mui/material";
import React from "react";

function MobileDoCard({ background, title, des }) {
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
          width: { xs: "19rem", sm: "16rem", md: "16rem", lg: "16rem" },
          height: { xs: "13rem", sm: "13rem", md: "13rem", lg: "13rem" },
          borderRadius: "20px",
          background: background,

          marginTop: "10%",
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
          <Typography
            sx={{
              fontSize: "1.5em",
              fontWeight: "600",
              color: "#153A5F",
              lineHeight: "30px",
            }}
          >
            {title}
          </Typography>
          <Typography
            sx={{
              fontSize: "15px",
              fontWeight: "400",
              color: "#54595F",
              lineHeight: "20px",
              marginTop: "9%",
            }}
          >
            {des}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

export default MobileDoCard;
