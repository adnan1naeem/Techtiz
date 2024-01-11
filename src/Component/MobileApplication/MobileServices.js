import React from "react";
import { Box, Typography, Card, CardContent, Button } from "@mui/material";

function MobileServices({image,title}) {
  const [isHovered, setIsHovered] = React.useState(false);
  return (
    <Box
      sx={{
        marginTop: "2%",
      }}
    >
      <Card
        sx={{
          width: { xs: "20rem", sm: "18rem", md: "19rem", lg: "16rem" },
          height: { xs: "22rem", sm: "22rem", md: "20rem", lg: "17rem" },
          background: "#153A5F",
          cursor: "pointer",
          boxShadow: "none",
          border: "1px solid white", 
        }}
      >
        {!isHovered && (
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "8%",
              marginBottom: "5%",
              animation: isHovered
                ? "slideUp 0.5s forwards"
                : "slideDown 0.5s forwards",
            }}
            onMouseEnter={() => setIsHovered(true)}
          >
            <img
              src={image}
              alt=""
              style={{ width: "45%" }}
            />
            <Typography
              sx={{
                color: "white",
                fontWeight: "600",
                fontSize: "1.1em",
                marginTop: "10%",
                lineHeight: "24px",
                textAlign:'center',
                width:'60%'
              }}
            >
              {title}
            </Typography>
          </CardContent>
        )}

        {isHovered && (
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "14%",
              marginBottom: "5%",
              textAlign: "center",
            }}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Typography
              color="white"
              sx={{ marginTop: "6%", fontSize: "15px" }}
            >
             Our solution-oriented developers use Flutter UI framework to deliver unconventional and engaging app designs that drive growth.
            </Typography>
            <Button sx={{marginTop:'10%', color:'white', }} variant="outlined">Outlined</Button>
          </CardContent>
        )}
      </Card>
    </Box>
  );
}

export default MobileServices;
