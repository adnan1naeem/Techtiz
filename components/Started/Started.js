import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";

function Started() {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 700);

    return () => clearTimeout(timer);
  }, []);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        marginTop: { xs: "-10%", sm: "3%", md: "8%", lg: "8%" },
        "@media screen and (min-width: 1700px)": {
          mt: '6%'

        },
      }}
    >
      <Card
        sx={{
          width: { xs: "100%", sm: "100%", md: "30rem", lg: "33rem" },
          height: { xs: "32rem", sm: "32xrem", md: "28rem", lg: "28rem" },
          boxShadow: "none",
        }}
      >
        <CardContent sx={{ display: "flex", flexDirection: "column" }}>
          <Typography
            sx={{
              color: "#153A5F",
              fontSize: { xs: "2.1em", md: "2.7em" },
              lineHeight: '50px',
              transition: "opacity 1s ease-in-out",
              fontFamily: "'Mont-Bold', sans-serif",
              opacity: isVisible ? 1 : 0,


            }}
          >
            Contact our team
          </Typography>

          <Typography
            sx={{
              color: "#153A5F",
              fontSize: "1.1em",
              fontWeight: 600,
              marginTop: { xs: "4%", md: "8%" },
              fontFamily: "'Mont-Regular', sans-serif"
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
