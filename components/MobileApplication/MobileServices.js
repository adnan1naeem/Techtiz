import React from "react";
import { Box, Typography, Card, CardContent, Button } from "@mui/material";

function MobileServices({ image, title, des ,onPress }) {
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
              transition: "all 0.5s ease", // Add transition here
            }}
            onMouseEnter={() => setIsHovered(true)}
          >
            <img src={image} alt="" style={{ width: "45%" }} />
            <Typography
              sx={{
                color: "white",
                fontWeight: "600",
                fontSize: "1.1em",
                marginTop: "10%",
                lineHeight: "24px",
                textAlign: "center",
                width: "60%",
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
              {des}
            </Typography>
            <Button
              sx={{
                marginTop: "10%",
                color: "white",
                transition: "background-color 0.3s ease",
                border:'2px soild #6EC1E4',
                "&:hover": {
                  backgroundColor: "#6EC1E4",
                },
              }}
              onClick={onPress}
              variant="outlined"
            >
              GET STARTED
            </Button>
          </CardContent>
        )}
      </Card>
    </Box>
  );
}

export default MobileServices;
