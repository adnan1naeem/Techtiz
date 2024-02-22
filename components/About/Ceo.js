import React from "react";
import { Box, Typography, CardContent, Card } from "@mui/material";

function Ceo({imageceo,name, text}) {
  return (
    <Box >
      <Card
        sx={{
          width: { xs: "13rem", sm: "11rem", md: "11rem", lg: "14rem" },
          height: { xs: "22rem", sm: "22rem", md: "22rem", lg: "20rem" },
          boxShadow: "none",
          background:'none'
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
          <Typography sx={{color:'#153A5F', fontWeight:'600',fontSize:'18px',fontFamily: "'Mont-Bold', sans-serif"}}>{name}</Typography>
          <Typography sx={{color:'#18B0E6',fontSize:'16px', fontFamily: "'Mont-Regular', sans-serif"}}>{text}</Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Ceo;