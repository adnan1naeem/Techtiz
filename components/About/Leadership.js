import React from "react";
import { Box, Typography } from "@mui/material";
import Ceo from "./Ceo";

function Leadership() {
  return (
    <Box
      sx={{
        background: "#F8F8F8",

        paddingTop: "10%",
        paddingBottom: "10%",
      }}
    >
      <Typography
        sx={{
          color: "#153A5F",
          fontWeight: "700",
          fontSize: "2.7em",
          textAlign: "center",
        }}
      >
        Our Leadership Team
      </Typography>
      <Box
        sx={{
          marginTop: "7%",
          display: "flex",
          justifyContent: "center",
          gap: "6%",
          flexWrap: "wrap",
        }}
      >
        <Ceo
          imageceo="https://techtiz.co/wp-content/uploads/2023/11/Mohsin-Naeem.webp"
          name="Mohsin Naeem"
          text="CEO"
        />
        <Ceo
          imageceo="https://techtiz.co/wp-content/uploads/2023/11/Adnaan_Naeem.webp"
          name="Adnan Naeem"
          text="CTO"
        />
        <Ceo
          imageceo="https://techtiz.co/wp-content/uploads/2023/11/Ghazanfar-Ali.webp"
          name="Ghazanfar Ali"
          text="Business Development Executive"
        />
      </Box>
    </Box>
  );
}

export default Leadership;
