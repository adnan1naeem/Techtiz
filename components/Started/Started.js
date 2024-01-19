import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";

function Started() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        marginTop: "11%",
      }}
    >
      <Card
        sx={{
          width: { xs: "22rem", sm: "33rem", md: "33rem", lg: "31rem" },
          height: { xs: "32rem", sm: "32xrem", md: "32rem", lg: "28rem" },

          boxShadow: "none",
        }}
      >
        <CardContent sx={{ display: "flex", flexDirection: "column" }}>
          <Typography
            sx={{
              color: "#153A5F",
              fontSize: "2.7em",
              fontWeight: "600",
              lineHeight:'50px'
    
            
            }}
          >
            Contact our team
          </Typography>

          <Typography
            sx={{
              color: "#153A5F",
              fontSize: "1.1em",
              fontWeight: "400",
              marginTop: "10%",
            }}
          >
            Thank you for considering TechTiz. For inquiries, feedback, or
            collaboration opportunities, please use the provided contact form or
            the contact details below. We look forward to connecting with you.
          </Typography>
         
        </CardContent>
      </Card>
    </Box>
  );
}

export default Started;
