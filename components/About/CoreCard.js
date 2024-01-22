import React from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";

function CoreCard() {
  const [isHovered, setIsHovered] = React.useState(false);
  return (
    <Box
      sx={{
        marginTop: "2%",
      }}
    >
      <Card
        sx={{
          width: { xs: "21rem", sm: "20rem", md: "20rem", lg: "22rem" },
          height: { xs: "22rem", sm: "22rem", md: "20rem", lg: "18rem" },
          background: "#18B0E6",
          borderRadius: "15px",
          cursor:'pointer'
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
              src="https://techtiz.co/wp-content/uploads/2023/11/badge.svg"
              alt=""
              style={{ width: "35%", filter: "invert(100%)" }}
            />
            <Typography
              sx={{
                color: "white",
                fontWeight: "600",
                fontSize: "2.5em",
                marginTop: "10%",
              }}
            >
              Collebration
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
              sx={{
                fontSize: "27px",
                fontWeight: "600",
              }}
            >
              Collebration
            </Typography>
            <Typography
              color="white"
              sx={{ marginTop: "6%", fontSize: "16px" }}
            >
              Great ideas emerge through <br /> collaboration and teamwork. All
              our <br />
              employees are team players who bring <br /> their own unique blend
              of creativity and <br /> inspiration to the table.
            </Typography>
          </CardContent>
        )}
      </Card>
    </Box>
  );
}

export default CoreCard;