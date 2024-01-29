import React from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";

function CoreCard({image,heading,bg,para}) {
  const [isHovered, setIsHovered] = React.useState(false);
  return (
    <Box
      sx={{
        marginTop: "2%",
      }}
    >
      <Card
        sx={{
          width: { xs: "21rem", sm: "20rem", md: "22rem", lg: "22rem" },
          height: { xs: "22rem", sm: "22rem", md: "20rem", lg: "20rem" },
          background: bg,
          borderRadius: "15px",
          cursor:'pointer',
          boxShadow:"none"
        }}
      >
        {!isHovered && (
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "7%",
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
              style={{ width: "35%", filter: "invert(100%)" }}
            />
            <Typography
              sx={{
                color: "white",
                fontWeight: "600",
                fontSize: "2.1em",
                marginTop: "10%",
              }}
            >
              {heading}
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
              transition: 'transform 0.5s ease',
             
            }}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Typography
              color="white"
              sx={{
                fontSize: "27px",
                fontWeight: "600",
              }}
            >
              {heading}
            </Typography>
            <Typography
              color="white"
              sx={{ marginTop: "6%", fontSize: "16px" }}
            >
             {para}
            </Typography>
          </CardContent>
        )}
      </Card>
    </Box>
  );
}

export default CoreCard;