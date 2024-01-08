import React, { useState } from "react";
import { Box, Card, CardActions, CardContent, Typography } from "@mui/material";
import { FaArrowRightLong } from "react-icons/fa6";

function DevelopmentCard({background,title,Description}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Box>
      <Card
        sx={{
          width: { xs: "21rem", sm: "22rem", md: "22em" ,lg:'22rem'},
          height: "22rem",
          borderRadius: "7px",
          background: background,
          transition: "transform 1s ease", // Adding transition for the transform property
          transform: isHovered ? "translateY(-12px)" : "translateY(0)",
          marginTop:'8%'
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <CardContent style={{ marginLeft: "5%" }}>
          <Typography
            sx={{
              fontSize: 22,
              fontWeight: 600,
              marginTop: "13%",
              color: "#FFFFFF",
              fontFamily: "Sans-serif",
            }}
            gutterBottom
          >
            {title}
          </Typography>
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: 500,
              marginTop: "18%",
              color: "#FFFFFF",
              fontFamily: "Mont Regular, Sans-serif",
              height:'9rem'
            }}
          >
            {Description}
          </Typography>
          <CardActions
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: 500,
          
                color: "#FFFFFF",
                fontFamily: "Mont Regular, Sans-serif",
              }}
            >
              GET STARTED
            </Typography>
            <FaArrowRightLong
              style={{
                marginTop: "-1%",
                fontSize: "25px",
                color: "#FFFFFF",
                fontWeight: "300",
                transform: "rotate(-40deg)",
              }}
            />
          </CardActions>
        </CardContent>
      </Card>
    </Box>
  );
}

export default DevelopmentCard;
