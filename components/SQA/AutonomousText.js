import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
function AutonomousText() {
  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignContent: "center" }}
    >
      <Card
        sx={{
          width: { xs: "23rem", sm: "31rem", md: "26rem", lg: "31rem" },
          height: { xs: "45rem", sm: "26rem", md: "32rem", lg: "28rem" },
          background: "none",
          boxShadow: "none",
        }}
      >
        <CardContent sx={{ display: "flex", flexDirection: "column" }}>
          <Typography
            sx={{
              color: "#FFFFFF",
              fontSize: "2.7em",
              fontWeight: "600",
              lineHeight: "48px",
              fontFamily:"Mont-Bold, Sans-serif",
            }}
          >
            Autonomous QA and Testing
          </Typography>
          <Typography  sx={{
              color: "#FFFFFF",
              fontSize: "0.9em",
              fontWeight: 600,
              lineHeight: "25px",
              marginTop:'4%',
              fontFamily:"Mont-Regular, Sans-serif",
            }}>
            At TechTiz, we embrace the future of software testing with
            Autonomous QA and Testing. With AI-driven automation, we
            revolutionize your testing process, ensuring efficiency, accuracy,
            and speed. We deploy cutting-edge tools and algorithms to
            autonomously detect defects, reducing human intervention and
            minimizing errors.  <br/><br/> Our autonomous testing adapts to your evolving
            software, continuously improving quality and saving valuable time
            and resources. Trust us to elevate your testing game and deliver
            top-notch software products. Embrace the future of QA and Testing
            with TechTiz.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

export default AutonomousText;
