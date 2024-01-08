import React from "react";
import { Box, Typography, Card, CardContent, Button } from "@mui/material";

function MobileServices() {
  const [isHovered, setIsHovered] = React.useState(false);
  return (
    <Box
      sx={{
        marginTop: "2%",
      }}
    >
      <Card
        sx={{
          width: { xs: "20rem", sm: "18rem", md: "19rem", lg: "17rem" },
          height: { xs: "22rem", sm: "22rem", md: "20rem", lg: "17rem" },
          background: "#153A5F",
          cursor: "pointer",
          boxShadow: "none",
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
              src="https://techtiz.co/wp-content/uploads/2023/10/icons8-ios-800.png"
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
              }}
            >
              React Native <br /> Development
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
            <Button sx={{marginTop:'5%', color:'white', border:''}} variant="outlined">Outlined</Button>
          </CardContent>
        )}
      </Card>
    </Box>
  );
}

export default MobileServices;
