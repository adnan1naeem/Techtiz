import React, { useState } from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
import ButtonBusiness from "../Texts/ButtonBusiness";

function ModelsCard({ maintitle, backgroundImage, onPress, resource, titleresource }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Box>
      <Card
        sx={{
          width: { xs: "22rem", sm: "24rem", md: "24rem", lg: "24rem", xl: "24rem" },
          height: { xs: "25rem", sm: "25rem", md: "28rem", lg: "28rem", xl: "28rem" },
          borderRadius: 3,
          overflow: "hidden",
          marginTop: "6%",
          cursor: "pointer",
          perspective: "1000px",
          boxShadow: 'none',
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <CardContent
          sx={{
            position: "relative",
            width: "100%",
            height: "100%",
            marginTop: '-4.5%',
            marginLeft: !isHovered ? '-4.3%' : "-1%",
            transition: "transform 1.6s",
            transformStyle: "preserve-3d", // Preserve 3D transformations
            transform: isHovered ? "rotateY(180deg)" : "rotateY(0deg)", // Rotate on hover
          }}
        >
          <div
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              backfaceVisibility: "hidden", // Hide backface when flipping
            }}
          >
            <CardContent
              sx={{
                backgroundImage: backgroundImage,
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: '100%',
                borderRadius: 3,
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Box
                sx={{
                  background: "#18B0E691",
                  width: "100%",
                  height: "4.5rem",
                  left: 0,
                  position: "absolute",
                  bottom: 0
                }}
              >
                <Typography
                  color="white"
                  sx={{
                    textAlign: "center",
                    fontSize: "25px",
                    fontWeight: "600",
                    marginTop: "4%",
                    fontFamily: "'Mont-Bold', sans-serif",
                  }}
                >
                  {maintitle}
                </Typography>
              </Box>
            </CardContent>
          </div>
          <div
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              backfaceVisibility: "hidden", // Hide backface when flipping
              transform: "rotateY(180deg)", // Rotate to show back side
            }}
          >
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                height: '100%',
                paddingTop: "30%",
                marginLeft: "3%",
                borderRadius: 3,
                background: "#153A5F",
                color: "white",
                mr: '-9%',
                pl: '9%'

              }}
            >
              <Typography
                color="white"
                sx={{
                  fontSize: "25px",
                  fontWeight: "600",
                  fontFamily: "'Mont-Bold', sans-serif"
                }}
              >
                {resource}
              </Typography>
              <Typography color="white" sx={{ marginTop: "2%", fontFamily: "'Mont-Regular', sans-serif" }}>
                {titleresource}
              </Typography>
              <Box sx={{ marginTop: "2%" }}>
                <ButtonBusiness
                  text="GET STARTED"
                  color="white"
                  paddingLeft="30px"
                  paddingRight="30px"
                  fontSize="14px"
                  paddingTop="10px"
                  paddingBottom="10px"
                  onClick={onPress}
                />
              </Box>
            </CardContent>
          </div>
        </CardContent>
      </Card>
    </Box>
  );
}

export default ModelsCard;