import React, { useState } from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
import ButtonBusiness from "../Texts/ButtonBusiness";

function ModelsCard( {maintitle,backgroundImage,onPress}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Box>
      {!isHovered && (
        <Card
          sx={{
            width: { xs: "21rem", sm: "23rem", md: "23rem", lg: "23rem" },
            height: "28rem",
            borderRadius: "8px",
            overflow: "hidden",
            marginTop: "8%",
            transition: "transform 0.5s",
            cursor: "pointer",
           
          }}
          onMouseEnter={() => setIsHovered(true)}
        >
          <CardContent
            sx={{
              backgroundImage: backgroundImage,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
          
              marginLeft: "-4.5%",
            }}
          >
            <Box
              sx={{
                background: "#18B0E691",
                width: "23rem",
                height: "4rem",
                borderRadius: "8px",
              }}
            >
              <Typography
                color="white"
                sx={{
                  textAlign: "center",
                  fontSize: "25px",
                  fontWeight: "600",
                  marginTop: "3%",
                  marginLeft: "-3%",
                }}
              >
                {maintitle}
              </Typography>
            </Box>
          </CardContent>
        </Card>
      )}

      {isHovered && (
        <Card
          sx={{
            width: { xs: "21rem", sm: "23rem", md: "23rem", lg: "23rem" },
            height: "28rem",
            borderRadius: "8px",
            overflow: "hidden",
            marginTop: "8%",
            background: "#153A5F",
            transition: "transform 5s",
            transform: "translateX(0%)", // Initial position, change as needed
          }}
          onMouseLeave={() => setIsHovered(false)}
        >
          <CardContent
            sx={{ display: "flex", flexDirection: "column", marginTop: "30%" ,marginLeft:'3%'}}
          >
            <Typography
              color="white"
              sx={{
                fontSize: "25px",
                fontWeight: "600",
              }}
            >
              DEDICATED RESOURCES
            </Typography>
            <Typography color="white" sx={{ marginTop: "2%" }}>
              Our team of enthusiastic software engineers understands what's
              ideal for your business and creates pleasant user experiences for
              your customers. Get Started
            </Typography>
            <Box sx={{ marginTop: "2%" }}>
              <ButtonBusiness
                text="Get Started"
                color="white"
                paddingLeft="40px"
                paddingRight="40px"
                onClick={onPress}
              />
            </Box>
          </CardContent>
        </Card>
      )}
    </Box>
  );
}

export default ModelsCard;
