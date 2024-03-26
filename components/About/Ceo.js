import React from "react";
import { Box, Typography, CardContent, Card } from "@mui/material";
import Link from "next/link";

function Ceo({ imageceo, name, text, mt }) {
  return (
    <Box>
      <Card
        sx={{
          width: { xs: "13rem", sm: "15rem", md: "15rem", lg: "14rem" },
          height: { xs: "22rem", sm: "22rem", md: "22rem", lg: "20rem" },
          "@media screen and (min-width: 100px) and (max-width: 447px)": {
            mt: mt
          },
          boxShadow: "none",
          background: "none",
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >

          <img
            src={imageceo}
            alt=""
            style={{ borderRadius: "100%", width: "80%", marginBottom: "8%" }}
          />

          <Typography
            sx={{
              color: "#153A5F",
              fontWeight: "600",
              fontSize: "18px",
              fontFamily: "'Mont-Bold', sans-serif",
            }}
          >
            {name}
          </Typography>
          <Typography
            sx={{
              color: "#18B0E6",
              fontWeight: 600,
              fontSize: "16px",
              fontFamily: "'Mont-Regular', sans-serif",
            }}
          >
            {text}
          </Typography>
        </CardContent>
      </Card>

    </Box>
  );
}

export default Ceo;
